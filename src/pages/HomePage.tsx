import { motion } from 'motion/react'
import { Hero } from '../sections/Hero'
import { ServicesPreview } from '../sections/ServicesPreview'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />

      {/* Bottom CTA — with living background */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-leaf/[0.08] blur-[120px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-tidal/[0.07] blur-[100px]"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun/[0.05] blur-[100px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-leaf/10">
                <svg className="h-6 w-6 text-leaf" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
                </svg>
              </div>
              <h2 className="mb-6 font-display text-3xl tracking-tight text-ink md:text-4xl lg:text-5xl">
                {siteConfig.ctaSubtext}
              </h2>
              <p className="mb-10 text-ink-muted leading-relaxed">
                Every great brand deserves a website that does it justice — and a digital partner that cares about the planet as much as the pixels.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button to="/contact">Start a Project</Button>
                <Button to="/about" variant="outline">Learn About Us</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
