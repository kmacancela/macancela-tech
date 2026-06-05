import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks, profileLinks } from '../../data/profileLinks'
import { siteConfig } from '../../data/siteConfig'
import { ProfileIcon } from '../ui/ProfileIcon'

const resumeLink = profileLinks.find((link) => link.name === 'Resume')

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  function isActive(href: string) {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b border-sand-dark/70 bg-warm-white/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-[0_12px_30px_rgba(23,26,21,0.08)]' : ''}`}>
      <div className="relative mx-auto grid h-[4.75rem] max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        <div aria-hidden="true" />

        <div className="hidden items-center gap-1 rounded-full border border-sand-dark/70 bg-parchment/70 p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? 'bg-ink text-warm-white' : 'text-ink-muted hover:bg-warm-white hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-2 md:flex">
          {resumeLink && (
            <a
              href={resumeLink.href}
              download={resumeLink.download}
              className="inline-flex min-h-10 items-center gap-2 border border-sand-dark/70 bg-warm-white px-4 text-sm font-semibold text-ink transition-colors hover:border-deep-water hover:text-deep-water"
            >
              <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
              Resume
            </a>
          )}
        </div>

        <div className="absolute right-4 top-1/2 flex shrink-0 -translate-y-1/2 items-center gap-1 md:hidden">
          {resumeLink && (
            <a
              href={resumeLink.href}
              download={resumeLink.download}
              className="inline-flex h-11 items-center gap-2 border border-sand-dark/70 bg-parchment px-3 text-sm font-semibold text-ink"
            >
              <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
              Resume
            </a>
          )}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="relative z-50 flex h-11 w-11 items-center justify-center border border-sand-dark/70 bg-parchment"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-ink transition-transform duration-300 ${mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-ink transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-5 bg-ink transition-transform duration-300 ${mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 top-[4.75rem] z-40 bg-warm-white transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="flex min-h-[calc(100vh-4.75rem)] flex-col justify-between px-6 py-10">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-baseline justify-between border-b border-sand-dark/70 py-5 font-display text-3xl text-ink"
              >
                {link.label}
                <span className="text-sm font-medium text-ink-muted">Open</span>
              </Link>
            ))}
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">{siteConfig.subtitle}</p>
        </div>
      </div>
    </nav>
  )
}
