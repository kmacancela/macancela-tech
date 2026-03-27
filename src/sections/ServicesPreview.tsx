import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { services } from '../data/services'
import { Button } from '../components/ui/Button'

const highlighted = services.filter(s => s.highlighted)

function StaggeredWord({ word, delay, className = '' }: { word: string; delay: number; className?: string }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 40, rotateX: 40 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {word}
    </motion.span>
  )
}

function ServiceCard({ service, index }: { service: typeof highlighted[0]; index: number }) {
  const colors = ['bg-leaf/8 hover:bg-leaf/14', 'bg-deep-water/8 hover:bg-deep-water/14', 'bg-clay/8 hover:bg-clay/14']
  const iconColors = ['text-leaf', 'text-deep-water', 'text-clay']
  const borderColors = ['hover:border-leaf/30', 'hover:border-deep-water/30', 'hover:border-clay/30']

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`group relative overflow-hidden border border-transparent p-8 transition-all duration-500 ${colors[index]} ${borderColors[index]}`}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {/* Floating number */}
        <span className="absolute top-5 right-6 font-mono text-xs text-ink-muted/30 transition-colors group-hover:text-ink-muted/50">
          0{index + 1}
        </span>

        {/* Animated accent dot */}
        <motion.div
          className={`mb-6 h-2 w-2 rounded-full ${iconColors[index].replace('text-', 'bg-')}`}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.8 }}
        />

        <h3 className={`mb-3 font-display text-2xl ${iconColors[index]}`}>{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>

        {/* Reveal arrow on hover */}
        <motion.div
          className={`mt-5 flex items-center gap-2 text-xs font-medium tracking-wide ${iconColors[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          <span>Learn more</span>
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function ServicesPreview() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 md:py-40">
      {/* Living background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 right-[10%] h-[600px] w-[600px] rounded-full bg-leaf/[0.06] blur-[130px]"
          animate={isInView ? { scale: [1, 1.15, 1], x: [0, 30, 0] } : {}}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 left-[5%] h-[500px] w-[500px] rounded-full bg-deep-water/[0.05] blur-[120px]"
          animate={isInView ? { scale: [1, 1.1, 1], y: [0, -20, 0] } : {}}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/[0.04] blur-[100px]"
          animate={isInView ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />
      </div>

      {/* Scrolling marquee */}
      <div className="relative mb-16 md:mb-24 overflow-hidden">
        <div className="flex items-center opacity-40">
          {[0, 1].map((copy) => (
            <motion.div
              key={copy}
              className="flex shrink-0 items-center gap-8 pr-8"
              animate={{ x: '-50%' }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {['Design', 'Fashion', 'E-Commerce', 'Branding', 'Identity', 'Shopify', 'Strategy', 'Typography'].map((word) => (
                <span key={word} className="flex shrink-0 items-center gap-8">
                  <span className="whitespace-nowrap font-display text-2xl italic text-ink-muted md:text-3xl">{word}</span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-leaf/50" />
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Typographic statement + photo — two column on desktop */}
        <div className="grid items-end gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: text */}
          <div className="pb-24">
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[3.25rem] lg:text-6xl">
              <StaggeredWord word="Let" delay={0.05} />{' '}
              <StaggeredWord word="us" delay={0.1} />{' '}
              <StaggeredWord word="stylize" delay={0.15} className="text-leaf italic" />{' '}
              <StaggeredWord word="your" delay={0.2} />
              <br />{' '}
              <StaggeredWord word="digital" delay={0.25} />{' '}
              <StaggeredWord word="presence" delay={0.3} />
              <br />{' '}
              <StaggeredWord word="while" delay={0.35} className="text-ink-muted" />{' '}
              <StaggeredWord word="you" delay={0.4} className="text-ink-muted" />{' '}
              <StaggeredWord word="work" delay={0.45} className="text-ink-muted" />{' '}
              <StaggeredWord word="on" delay={0.5} className="text-ink-muted" />{' '}
              <StaggeredWord word="what" delay={0.55} className="text-ink-muted" />
              <br />{' '}
              <StaggeredWord word="you" delay={0.6} className="text-ink-muted" />{' '}
              <StaggeredWord word="love." delay={0.65} className="text-leaf" />
            </h2>

          </div>

          {/* Right: photo with wavy creative background */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Wavy organic blob behind the photo */}
            <motion.svg
              viewBox="0 0 500 500"
              className="absolute -inset-6 h-[calc(100%+48px)] w-[calc(100%+48px)]"
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            >
              <defs>
                <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-leaf)" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="var(--color-deep-water)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--color-moss)" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <path
                d="M250,50 C330,30 420,80 440,160 C460,240 430,310 400,370 C370,430 300,470 230,460 C160,450 90,410 60,340 C30,270 40,190 70,130 C100,70 170,70 250,50Z"
                fill="url(#wave-grad)"
              />
            </motion.svg>

            {/* Secondary smaller blob — offset for depth */}
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute -top-4 -right-8 h-[80%] w-[80%]"
              animate={{ rotate: [0, -6, 6, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <path
                d="M200,30 C280,20 350,70 360,150 C370,230 330,300 280,340 C230,380 160,370 110,330 C60,290 30,230 40,160 C50,90 120,40 200,30Z"
                fill="var(--color-clay)"
                fillOpacity="0.08"
              />
            </motion.svg>

            {/* Photo with organic clip shape */}
            <div className="relative z-10 w-full max-w-sm overflow-hidden" style={{
              clipPath: 'polygon(8% 0%, 100% 0%, 100% 4%, 96% 8%, 100% 12%, 100% 88%, 96% 92%, 100% 96%, 100% 100%, 0% 100%, 0% 96%, 4% 92%, 0% 88%, 0% 12%, 4% 8%, 0% 4%)',
            }}>
              <motion.img
                src="/model-reading.png"
                alt="Fashion designers at work"
                className="h-full w-full object-cover"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Floating accent dots around the photo */}
            <motion.div
              className="absolute -top-2 right-8 h-3 w-3 rounded-full bg-leaf/40"
              animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-1 left-12 h-2 w-2 rounded-full bg-clay/40"
              animate={{ y: [0, 6, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/3 -left-3 h-2.5 w-2.5 rounded-full bg-deep-water/30"
              animate={{ x: [0, -5, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />
          </motion.div>
        </div>

        {/* Full-width underline + keyword pills — aligned to bottom of photo */}
        <motion.div
          className="h-px bg-leaf/40"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />
        <div className="mb-20 md:mb-28" />

        {/* Service cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {highlighted.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex items-center gap-6"
        >
          <Button to="/services" variant="outline">
            View All Services
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
          <motion.span
            className="hidden text-sm text-ink-muted md:block"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            5 services tailored for fashion brands
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
