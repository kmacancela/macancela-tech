import { motion } from 'motion/react'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'

function WaterShape({ className, delay, d }: { className: string; delay: number; d: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={`absolute fill-current ${className}`}
      animate={{
        y: [0, -18, 0],
        scale: [1, 1.06, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path d={d} />
    </motion.svg>
  )
}

function FloatingLeaf({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={`absolute ${className}`}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 12, -8, 0],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-24 pt-32 md:items-center md:pb-0 md:pt-0">
      {/* Vivid background washes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-24 h-[700px] w-[700px] rounded-full bg-tidal/[0.12] blur-[100px]"
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -left-20 h-[600px] w-[600px] rounded-full bg-leaf/[0.1] blur-[100px]"
          animate={{ scale: [1, 1.05, 1], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-sun/[0.06] blur-[120px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-clay/[0.08] blur-[100px]"
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Fluid organic shapes — more visible */}
      <WaterShape
        className="top-[12%] right-[6%] h-40 w-40 text-tidal/[0.14] md:h-56 md:w-56"
        delay={0}
        d="M44.5,-51.3C56.3,-41.8,64.1,-26.8,67.1,-10.6C70.1,5.6,68.3,23,59.2,35.5C50.1,48,33.7,55.6,17.2,59.1C0.7,62.6,-15.9,62,-31.2,55.5C-46.5,49,-60.5,36.6,-66.3,21.1C-72.1,5.6,-69.7,-13,-61.2,-27.2C-52.7,-41.4,-38.1,-51.2,-23.5,-59.2C-8.9,-67.2,5.7,-73.4,19.3,-70.3C32.9,-67.2,45.5,-54.8,44.5,-51.3Z"
      />
      <WaterShape
        className="bottom-[18%] left-[3%] h-32 w-32 text-leaf/[0.1] md:h-44 md:w-44"
        delay={3}
        d="M39.3,-48.4C49.6,-39.8,56.2,-26.6,58.1,-13C60,-0.6,57.2,13.2,50.2,24.3C43.2,35.4,32,43.8,19.3,49.4C6.6,55,-7.6,57.8,-20.4,54.2C-33.2,50.6,-44.6,40.6,-52.2,28C-59.8,15.4,-63.6,0.2,-61.1,-13.6C-58.6,-27.4,-49.8,-39.8,-38.5,-48.2C-27.2,-56.6,-13.6,-61,-0.1,-60.9C13.4,-60.8,26.8,-56.2,39.3,-48.4Z"
      />
      <WaterShape
        className="top-[45%] left-[55%] hidden h-28 w-28 text-moss/[0.1] md:block"
        delay={5}
        d="M43.2,-50C54.7,-40.7,62,-26.3,63.6,-11.4C65.2,3.5,61.1,18.9,53,31.2C44.9,43.5,32.8,52.7,18.9,57.4C5,62.1,-10.7,62.3,-24.5,56.8C-38.3,51.3,-50.2,40.1,-57.1,26.5C-64,12.9,-65.9,-3.1,-61.3,-16.7C-56.7,-30.3,-45.6,-41.5,-33.4,-50.6C-21.2,-59.7,-7.9,-66.7,4,-71.5C15.9,-76.3,31.7,-59.3,43.2,-50Z"
      />

      {/* Floating leaves — nature is alive */}
      <FloatingLeaf className="top-[20%] right-[18%] h-8 w-8 text-moss/30 md:h-10 md:w-10" delay={1} />
      <FloatingLeaf className="bottom-[30%] left-[12%] h-6 w-6 text-leaf/25 md:h-8 md:w-8" delay={4} />
      <FloatingLeaf className="top-[55%] right-[35%] hidden h-7 w-7 text-moss/20 md:block" delay={6} />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Eco badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-leaf/10 px-4 py-1.5 text-leaf"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.592L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" />
          </svg>
          <span className="text-xs font-medium tracking-wide">Tech that helps the planet</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {siteConfig.tagline.split('your clothes').map((part, i) =>
            i === 0 ? (
              <span key={i}>{part}<span className="text-leaf">your clothes</span></span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
        >
          {siteConfig.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button to="/services">{siteConfig.ctaText}</Button>
          <Button to="/contact" variant="outline">Get In Touch</Button>
        </motion.div>
      </div>

      {/* Scroll indicator — a growing sprout */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <div className="h-7 w-px bg-leaf/30" />
          <div className="h-2 w-2 rounded-full bg-leaf/60" />
        </div>
      </motion.div>
    </section>
  )
}
