import { useState } from 'react'
import { motion } from 'motion/react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'
import { socialLinks } from '../data/socialLinks'
import { services } from '../data/services'
import type { ContactFormData } from '../types'

function SocialIcon({ icon }: { icon: string }) {
  const cls = "h-5 w-5"
  switch (icon) {
    case 'github':
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className={cls} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'email':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    default:
      return null
  }
}

const inputClasses = 'w-full bg-parchment border border-sand-dark/60 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/50 transition-colors focus:border-tidal focus:outline-none focus:ring-1 focus:ring-tidal'

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Inquiry${form.company ? ` — ${form.company}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}${form.company ? `\nCompany: ${form.company}` : ''}${form.service ? `\nService: ${form.service}` : ''}\n\n${form.message}`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background washes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-1/4 h-[400px] w-[400px] rounded-full bg-tidal/[0.05] blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-clay/[0.04] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Contact"
              title="Let's talk about your project"
              subtitle="Tell us about your brand and vision. We'll get back to you within 24 hours."
            />
          </AnimatedSection>

          <div className="mt-4 grid gap-12 md:grid-cols-5 md:gap-16">
            {/* Form */}
            <AnimatedSection className="md:col-span-3" delay={0.1}>
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="mb-2 font-display text-2xl text-ink">Email client opened</p>
                  <p className="text-ink-muted">
                    If it didn't open automatically, send your inquiry to{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-tidal underline underline-offset-4 hover:text-deep-water">
                      {siteConfig.email}
                    </a>
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

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Your brand name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
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
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button type="submit" variant="primary">
                      Send Message
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </Button>
                    <p className="text-xs text-ink-muted">Opens your email client</p>
                  </div>
                </form>
              )}
            </AnimatedSection>

            {/* Sidebar info */}
            <AnimatedSection className="md:col-span-2" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-ink transition-colors hover:text-deep-water"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Location</h3>
                  <p className="text-ink">{siteConfig.location}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Connect</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-muted transition-colors duration-300 hover:text-deep-water"
                        aria-label={link.name}
                      >
                        <SocialIcon icon={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-sand-dark/40 pt-8">
                  <p className="text-sm leading-relaxed text-ink-muted">
                    Prefer a quick chat? Send us an email and we'll schedule a 30-minute discovery call to discuss your project.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
