import { useState } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { profileLinks } from '../data/profileLinks'
import { siteConfig } from '../data/siteConfig'
import type { ContactFormData } from '../types'

const fieldShellClasses = 'border border-sand-dark bg-warm-white px-5 py-4 transition-colors focus-within:border-deep-water focus-within:bg-parchment'
const labelClasses = 'mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink-muted'
const inputClasses = 'w-full border-0 bg-transparent p-0 text-base text-ink placeholder:text-ink-muted/60 focus:outline-none'
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error' | 'missing-endpoint'

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (submissionStatus === 'error' || submissionStatus === 'missing-endpoint') {
      setSubmissionStatus('idle')
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!formspreeEndpoint) {
      setSubmissionStatus('missing-endpoint')
      return
    }

    setSubmissionStatus('submitting')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      setForm({ name: '', email: '', message: '' })
      setSubmissionStatus('success')
    } catch {
      setSubmissionStatus('error')
    }
  }

  const isSubmitting = submissionStatus === 'submitting'

  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_28rem]">
          <AnimatedSection>
            <div className="mb-12 md:mb-16">
              <h2 className="contact-heading-wrap w-full max-w-none font-display text-4xl leading-[1.02] tracking-[-0.02em] text-ink md:text-5xl">
                Reach out about roles, contract opportunities, or nonprofit volunteer work.
              </h2>
            </div>

            <div className="grid w-full grid-cols-2 gap-x-10 gap-y-8">
              {profileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className="group flex min-h-24 flex-col items-center justify-center gap-3 px-2 py-3 text-center text-sm font-bold text-deep-water transition-colors duration-300 hover:text-leaf focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-4 focus-visible:ring-offset-warm-white"
                  aria-label={link.label}
                >
                  <ProfileIcon icon={link.icon} className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-1" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="border border-sand-dark/70 bg-parchment p-4 md:p-5">
              {submissionStatus === 'success' ? (
                <div className="border border-sand-dark bg-warm-white p-6 md:p-8">
                  <span className="mb-8 block h-2 w-16 bg-leaf" />
                  <p className="font-display text-4xl leading-none text-ink">Message sent.</p>
                  <p className="mt-5 leading-relaxed text-ink-muted">
                    Thanks for reaching out. I will read it soon and reply from {siteConfig.email}.
                  </p>
                  <button
                    onClick={() => setSubmissionStatus('idle')}
                    className="mt-8 text-sm font-semibold text-ink-muted underline underline-offset-4 hover:text-ink"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  action={formspreeEndpoint}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-label="Contact form"
                >
                  <input type="hidden" name="_subject" value={`Portfolio inquiry from ${siteConfig.name}`} />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className={fieldShellClasses}>
                      <label htmlFor="name" className={labelClasses}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div className={fieldShellClasses}>
                      <label htmlFor="email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className={`${fieldShellClasses} md:col-span-2`}>
                      <label htmlFor="message" className={labelClasses}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={7}
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClasses} min-h-44 resize-none`}
                        placeholder="Share the role, team, or opportunity..."
                      />
                    </div>
                  </div>
                  {submissionStatus === 'missing-endpoint' && (
                    <p className="border border-clay bg-warm-white p-4 text-sm leading-relaxed text-clay" role="status">
                      This form needs a Formspree endpoint before it can send. Email me directly at{' '}
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold underline underline-offset-4">
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  )}
                  {submissionStatus === 'error' && (
                    <p className="border border-clay bg-warm-white p-4 text-sm leading-relaxed text-clay" role="alert">
                      The message did not go through. Please try again or email me directly at{' '}
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold underline underline-offset-4">
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  )}
                  <div className="flex justify-end border-t border-sand-dark pt-5">
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto sm:min-w-40">
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.18} className="mx-auto mt-16 max-w-7xl text-center md:mt-20">
          <div className="mx-auto flex max-w-xl items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink-muted">
            <span className="h-px flex-1 bg-sand-dark" />
            <span>or email</span>
            <span className="h-px flex-1 bg-sand-dark" />
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mx-auto mt-6 block max-w-full wrap-anywhere font-display text-2xl leading-none text-deep-water underline decoration-sand-dark underline-offset-8 transition-colors hover:text-leaf sm:text-4xl xl:text-5xl"
          >
            {siteConfig.email}
          </a>
        </AnimatedSection>
      </section>
    </div>
  )
}
