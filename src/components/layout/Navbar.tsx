import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks, profileLinks } from '../../data/profileLinks'
import { siteConfig } from '../../data/siteConfig'
import { ProfileIcon } from '../ui/ProfileIcon'

const resumeLink = profileLinks.find((link) => link.name === 'Resume')
const homeSectionTabs = [
  { href: '/projects', id: 'selected-work' },
  { href: '/experience', id: 'experience' },
]

function getActiveRoute(pathname: string) {
  const match = navLinks.find((link) => {
    if (link.href === '/') return pathname === '/'
    return pathname === link.href || pathname.startsWith(`${link.href}/`)
  })

  return match?.href ?? '/'
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(() => (
    typeof window === 'undefined' ? '/' : getActiveRoute(window.location.pathname)
  ))
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHref(getActiveRoute(location.pathname))
      return
    }

    const updateHomeTab = () => {
      const markerY = window.innerHeight * 0.42
      const currentSection = homeSectionTabs.find(({ id }) => {
        const element = document.getElementById(id)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= markerY && rect.bottom >= markerY
      })

      setActiveHref(currentSection?.href ?? '/')
    }

    window.addEventListener('scroll', updateHomeTab, { passive: true })
    window.addEventListener('resize', updateHomeTab)
    updateHomeTab()

    return () => {
      window.removeEventListener('scroll', updateHomeTab)
      window.removeEventListener('resize', updateHomeTab)
    }
  }, [location.pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search, location.hash])

  function isActive(href: string) {
    return activeHref === href
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b border-paper-line bg-warm-white/88 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-[0_16px_34px_rgba(18,59,57,0.08)]' : ''}`}>
      <div className="relative mx-auto grid h-20 max-w-[94rem] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
        <Link
          to="/"
          aria-label={siteConfig.domain}
          className="inline-flex ![font-family:var(--font-editorial)] text-xl leading-none !font-normal !tracking-normal text-deep-water transition-colors hover:text-tidal sm:text-2xl"
        >
          macancela.tech
        </Link>

        <div className="hidden justify-self-center rounded-full border border-paper-line bg-parchment/70 p-1 md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? 'bg-warm-white text-deep-water shadow-[0_4px_14px_rgba(18,59,57,0.08)]' : 'text-ink-muted hover:bg-warm-white hover:text-deep-water'
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
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-paper-line bg-warm-white px-5 text-sm font-bold text-deep-water transition-colors hover:border-tidal hover:text-tidal"
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
              className="inline-flex h-11 items-center gap-2 rounded-full border border-paper-line bg-parchment px-3 text-sm font-bold text-deep-water"
            >
              <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
              Resume
            </a>
          )}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-paper-line bg-parchment"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-deep-water transition-transform duration-300 ${mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-deep-water transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-5 bg-deep-water transition-transform duration-300 ${mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 top-20 z-40 bg-warm-white transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-between px-6 py-10">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex items-baseline justify-between border-b border-paper-line py-5 text-3xl font-bold transition-colors ${
                  isActive(link.href) ? 'text-tidal' : 'text-deep-water'
                }`}
              >
                {link.label}
                <span className="text-sm font-medium text-ink-muted">{isActive(link.href) ? 'Current' : 'Open'}</span>
              </Link>
            ))}
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">{siteConfig.subtitle}</p>
        </div>
      </div>
    </nav>
  )
}
