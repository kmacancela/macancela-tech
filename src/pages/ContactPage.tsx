import { useState } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profileLinks } from '../data/profileLinks'
import { siteConfig } from '../data/siteConfig'
import type { ContactFormData } from '../types'

const inputClasses = 'w-full bg-parchment border border-sand-dark/60 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-colors focus:border-leaf focus:outline-none focus:ring-1 focus:ring-leaf'

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Contact"
              title="Reach out about software engineering roles"
              subtitle="I am targeting full-stack and frontend-leaning SWE opportunities. Email is the fastest way to reach me."
            />
          </AnimatedSection>

          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <AnimatedSection delay={0.1}>
              {submitted ? (
                <div className="border border-sand-dark/50 bg-sand/30 p-8">
                  <p className="font-display text-2xl text-ink">Email client opened</p>
                  <p className="mt-3 text-ink-muted leading-relaxed">
                    If it did not open automatically, email me directly at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-leaf underline underline-offset-4 hover:text-deep-water">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-ink-muted underline underline-offset-4 hover:text-ink"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                        Name *
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
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                        Email *
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
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                      Message *
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

                  <div className="flex flex-wrap items-center gap-4">
                    <Button type="submit" variant="primary">Open email draft</Button>
                    <p className="text-xs text-ink-muted">Uses your email client</p>
                  </div>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8 border border-sand-dark/50 bg-sand/30 p-8">
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-ink transition-colors hover:text-deep-water">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Location</h3>
                  <p className="text-ink">{siteConfig.location}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Links</h3>
                  <div className="grid gap-3">
                    {profileLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        download={link.download}
                        className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-deep-water"
                      >
                        <ProfileIcon icon={link.icon} className="h-4 w-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
