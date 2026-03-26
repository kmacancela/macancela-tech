import { motion } from 'motion/react'
import { services, caseStudies } from '../data/services'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

function ServiceIcon({ icon }: { icon: string }) {
  const cls = "h-7 w-7"
  switch (icon) {
    case 'palette':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
        </svg>
      )
    case 'store':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      )
    case 'layers':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75l-5.571-3m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5l-9.75-5.25 4.179-2.25" />
        </svg>
      )
    case 'gauge':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    case 'refresh':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    default:
      return null
  }
}

export function ServicesPage() {
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
              accent="What We Do"
              title="Services"
              subtitle="End-to-end web solutions for clothing brands, from first sketch to ongoing growth."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-0">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <div className={`grid gap-6 border-b border-sand-dark/40 py-12 last:border-b-0 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}>
                  {/* Content */}
                  <div className={i % 2 === 1 ? 'md:order-2 md:text-left' : ''}>
                    <div className="mb-4 text-leaf">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    <h3 className="mb-3 font-display text-2xl text-ink md:text-3xl">{service.title}</h3>
                    <p className="text-ink-muted leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-ink-light leading-relaxed">
                          <span className="mt-2 h-px w-4 shrink-0 bg-leaf/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-sand-dark/40 bg-sand/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Case Studies"
              title="Work that speaks for itself"
              subtitle="A selection of projects that showcase our approach."
            />
          </AnimatedSection>

          <div className="mt-4 space-y-16 md:space-y-20">
            {caseStudies.map((study, i) => (
              <AnimatedSection key={study.id} delay={i * 0.1}>
                <div className={`grid items-center gap-8 md:grid-cols-5 md:gap-12 ${
                  i % 2 === 1 ? '' : ''
                }`}>
                  {/* Image placeholder */}
                  <div className={`md:col-span-2 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-lg text-ink-muted/40">{study.client}</span>
                      </div>
                      <div className={`absolute bottom-0 h-32 w-32 rounded-full blur-[50px] ${
                        i % 3 === 0 ? 'right-0 bg-leaf/10' : i % 3 === 1 ? 'left-0 bg-clay/10' : 'right-0 bg-moss/10'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-3 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-leaf">{study.client}</p>
                    <h3 className="mb-4 font-display text-2xl text-ink">{study.title}</h3>
                    <p className="mb-5 text-ink-muted leading-relaxed">{study.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.services.map((s) => (
                        <Badge key={s} variant="tidal">{s}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="mb-4 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Ready to elevate your brand online?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-ink-muted leading-relaxed">
                Tell us about your clothing brand and we'll craft a digital experience that matches the quality of your garments.
              </p>
              <Button to="/contact">Start a Project</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
