import { motion } from 'motion/react'
import { services } from '../data/services'
import { Button } from '../components/ui/Button'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionHeading } from '../components/ui/SectionHeading'

function ServiceIcon({ icon }: { icon: string }) {
  const cls = "h-6 w-6"
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
    default:
      return null
  }
}

const highlighted = services.filter(s => s.highlighted)
const accentColors = ['bg-tidal/10 text-tidal', 'bg-leaf/10 text-leaf', 'bg-clay/10 text-clay']
const hoverAccents = ['group-hover:bg-tidal/20', 'group-hover:bg-leaf/20', 'group-hover:bg-clay/20']
const lineColors = ['group-hover:bg-tidal', 'group-hover:bg-leaf', 'group-hover:bg-clay']

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle nature background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-leaf/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-tidal/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionHeading
            accent="What We Do"
            title="Crafted for fashion, rooted in purpose"
            subtitle="From brand websites to full e-commerce platforms, we help clothing brands own their digital presence — sustainably."
          />
        </AnimatedSection>

        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {highlighted.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.12}>
              <motion.div
                className="group relative overflow-hidden py-8 pr-6 pl-6 md:py-10"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Left accent line */}
                <div className={`absolute top-8 bottom-8 left-0 w-px bg-sand-dark/60 transition-all duration-500 ${lineColors[i]}`} />

                {/* Icon with colored background */}
                <div className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${accentColors[i]} ${hoverAccents[i]}`}>
                  <ServiceIcon icon={service.icon} />
                </div>

                <h3 className="mb-3 font-display text-xl text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-14">
            <Button to="/services" variant="outline">
              View All Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
