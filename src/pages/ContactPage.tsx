import { useState } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profileLinks } from '../data/profileLinks'
import { siteConfig } from '../data/siteConfig'
import type { ContactFormData } from '../types'

const inputClasses = 'w-full border-0 border-b border-sand-dark bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink-muted/70 transition-colors focus:border-leaf focus:outline-none'
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error' | 'missing-endpoint'

const contactActionDetails: Record<string, string> = {
  Resume: 'A concise PDF for hiring loops and project context.',
  LinkedIn: 'Roles, referrals, collaborations, and warm intros.',
  GitHub: 'Public code, experiments, and product engineering work.',
  Email: 'A direct note for anything that needs a human reply.',
}

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
      <section className="min-h-screen px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedSection>
            <SectionHeading
              title="Reach out about roles, contract opportunities, or nonprofit volunteer work."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {profileLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className="group flex min-h-36 flex-col justify-between border border-sand-dark bg-parchment p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-deep-water hover:bg-deep-water hover:text-warm-white focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
                  aria-label={link.label}
                >
                  <span className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted transition-colors group-hover:text-sand">
                    {String(index + 1).padStart(2, '0')}
                    <ProfileIcon icon={link.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold text-ink transition-colors group-hover:text-warm-white">
                      {link.label}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-ink-muted transition-colors group-hover:text-sand">
                      {contactActionDetails[link.name]}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="border border-sand-dark/70 bg-parchment p-7 md:p-10">
              {submissionStatus === 'success' ? (
                <div className="mt-10">
                  <p className="font-display text-4xl leading-none text-ink">Message sent.</p>
                  <p className="mt-5 text-ink-muted leading-relaxed">
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
                  className="space-y-7"
                >
                  <h3 className="font-display text-4xl leading-none text-ink">Send a note</h3>
                  <input type="hidden" name="_subject" value={`Portfolio inquiry from ${siteConfig.name}`} />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink-muted">
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
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ink-muted">
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
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ink-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="Share the role, team, or opportunity..."
                    />
                  </div>
                  {submissionStatus === 'missing-endpoint' && (
                    <p className="text-sm leading-relaxed text-clay" role="status">
                      This form needs a Formspree endpoint before it can send. Email me directly at{' '}
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold underline underline-offset-4">
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  )}
                  {submissionStatus === 'error' && (
                    <p className="text-sm leading-relaxed text-clay" role="alert">
                      The message did not go through. Please try again or email me directly at{' '}
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold underline underline-offset-4">
                        {siteConfig.email}
                      </a>
                      .
                    </p>
                  )}
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.18} className="mx-auto mt-16 max-w-7xl text-center md:mt-20">
          <div className="mx-auto flex max-w-xl items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink-muted">
            <span className="h-px flex-1 bg-sand-dark" />
            <span>or</span>
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
