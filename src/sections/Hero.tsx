import { motion } from 'motion/react'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden md:items-center">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/ladybug-nature.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay — heavier on left for text, transparent on right to show subject */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a12]/85 via-[#0a1a12]/50 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a1a12]/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-28 pt-36 md:pb-0 md:pt-0">
        <div className="max-w-2xl">
          {/* Eco badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-leaf-light backdrop-blur-sm"
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
            className="mb-6 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-white/70 md:text-xl"
          >
            {siteConfig.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button to="/services" className="!bg-leaf !text-white hover:!bg-leaf-light">{siteConfig.ctaText}</Button>
            <Button to="/contact" variant="outline" className="!border-white/30 !text-white hover:!border-white/60 hover:!text-white">Get In Touch</Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <div className="h-7 w-px bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  )
}
