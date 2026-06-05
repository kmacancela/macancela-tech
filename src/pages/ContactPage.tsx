import { useState } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profileLinks } from '../data/profileLinks'
import { siteConfig } from '../data/siteConfig'
import type { ContactFormData } from '../types'

const inputClasses = 'w-full border-0 border-b border-sand-dark bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink-muted/70 transition-colors focus:border-leaf focus:outline-none'

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
      <section className="min-h-screen px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <SectionHeading
              accent="Contact"
              title="Reach out about full-stack or frontend-leaning SWE roles"
              subtitle="Email is the fastest route. LinkedIn, GitHub, and resume are right here too."
            />
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 block max-w-fit font-display text-4xl leading-none text-deep-water underline decoration-sand-dark underline-offset-8 transition-colors hover:text-leaf md:text-6xl"
            >
              {siteConfig.email}
            </a>

            <div className="mt-12 grid gap-px border border-sand-dark/70 bg-sand-dark/70 sm:grid-cols-2">
              {profileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className="flex items-center justify-between bg-warm-white px-5 py-5 text-sm font-semibold text-ink-muted transition-colors hover:bg-ink hover:text-warm-white"
                >
                  {link.label}
                  <ProfileIcon icon={link.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="border border-sand-dark/70 bg-parchment p-7 md:p-10">
                <p className="text-sm font-semibold text-deep-water">Optional email draft</p>
              {submitted ? (
                <div className="mt-10">
                  <p className="font-display text-4xl leading-none text-ink">Email client opened.</p>
                  <p className="mt-5 text-ink-muted leading-relaxed">
                    If it did not open, email me directly at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-leaf underline underline-offset-4">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold text-ink-muted underline underline-offset-4 hover:text-ink"
                  >
                    Compose another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-7">
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
                  <Button type="submit">Open email draft</Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
