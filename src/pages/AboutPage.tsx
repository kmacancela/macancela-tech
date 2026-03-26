import { motion } from 'motion/react'
import { siteConfig } from '../data/siteConfig'
import { experience } from '../data/experience'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'

const capabilities = [
  { label: 'Brand Strategy', variant: 'tidal' as const },
  { label: 'Custom Web Design', variant: 'tidal' as const },
  { label: 'E-Commerce Platforms', variant: 'moss' as const },
  { label: 'Shopify Development', variant: 'moss' as const },
  { label: 'React & Next.js', variant: 'clay' as const },
  { label: 'Responsive Design', variant: 'clay' as const },
  { label: 'Performance Optimization', variant: 'water' as const },
  { label: 'Design Systems', variant: 'water' as const },
  { label: 'SEO & Analytics', variant: 'tidal' as const },
  { label: 'Figma & Prototyping', variant: 'moss' as const },
]

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="About"
              title="The story behind the studio"
              subtitle="We're a small team with big opinions about what fashion brands deserve from the web."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Bio section */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16">
            {/* Photo placeholder */}
            <AnimatedSection className="md:col-span-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-leaf/10 flex items-center justify-center">
                      <span className="font-display text-2xl text-leaf">
                        {siteConfig.firstName[0]}{siteConfig.lastName[0]}
                      </span>
                    </div>
                    <p className="text-sm text-ink-muted">{siteConfig.firstName} {siteConfig.lastName}</p>
                    <p className="text-xs text-ink-muted/60">{siteConfig.location}</p>
                  </div>
                </div>
                {/* Subtle corner accent */}
                <div className="absolute bottom-0 left-0 h-24 w-24 bg-leaf/[0.06] blur-[40px]" />
              </div>
            </AnimatedSection>

            {/* Bio + capabilities */}
            <AnimatedSection className="md:col-span-3" delay={0.15}>
              <div className="space-y-5">
                {siteConfig.bio.map((paragraph, i) => (
                  <p key={i} className="text-ink-light leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Capabilities</h3>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map(({ label, variant }) => (
                    <Badge key={label} variant={variant}>{label}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="border-t border-sand-dark/40 bg-sand/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Experience"
              title="Where we've been"
              subtitle="Years of building for fashion, design, and e-commerce."
            />
          </AnimatedSection>

          <div className="mt-4 space-y-0">
            {experience.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.1}>
                <div className="grid gap-4 border-b border-sand-dark/40 py-10 last:border-b-0 md:grid-cols-4 md:gap-8">
                  {/* Left: dates + company */}
                  <div className="md:col-span-1">
                    <p className="text-sm text-ink-muted">
                      {exp.startDate} &mdash; {exp.endDate}
                    </p>
                    <p className="mt-1 font-medium text-ink">{exp.company}</p>
                    {exp.current && (
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-leaf">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
                        </span>
                        Current
                      </span>
                    )}
                  </div>

                  {/* Right: role + details */}
                  <div className="md:col-span-3">
                    <h3 className="mb-3 font-display text-xl text-ink">{exp.role}</h3>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                          <span className="mt-2 h-px w-3 shrink-0 bg-leaf/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
