import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks, profileLinks } from '../../data/profileLinks'
import { siteConfig } from '../../data/siteConfig'
import { ProfileIcon } from '../ui/ProfileIcon'

const resumeLink = profileLinks.find((link) => link.name === 'Resume')
const focusRing = 'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal'

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
  const location = useLocation()
  const activeHref = getActiveRoute(location.pathname)
  const mobileMenuId = 'mobile-navigation'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    if (!mobileOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  function isActive(href: string) {
    return activeHref === href
  }

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 border-b border-paper-line bg-warm-white/88 backdrop-blur-xl transition-shadow duration-300 ${scrolled || mobileOpen ? 'shadow-[0_16px_34px_rgba(18,59,57,0.08)]' : ''}`}>
      <div className="relative mx-auto grid h-20 max-w-[94rem] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
        <Link
          to="/"
          aria-label={siteConfig.domain}
          className={`inline-flex ![font-family:var(--font-editorial)] text-xl leading-none !font-normal !tracking-normal text-deep-water max-[360px]:text-lg sm:text-2xl ${focusRing}`}
        >
          macancela.tech
        </Link>

        <div className="hidden justify-self-center rounded-full border border-paper-line bg-parchment/70 p-1 md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${focusRing} ${
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
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-paper-line bg-warm-white px-5 text-sm font-bold text-deep-water transition-colors hover:border-tidal hover:text-tidal ${focusRing}`}
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
              aria-label="Download resume"
              className={`inline-flex h-11 items-center justify-center gap-2 rounded-full border border-paper-line bg-parchment px-3 text-sm font-bold text-deep-water max-[360px]:w-11 max-[360px]:px-0 ${focusRing}`}
            >
              <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
              <span className="max-[360px]:sr-only">Resume</span>
            </a>
          )}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-paper-line bg-parchment ${focusRing}`}
            aria-controls={mobileMenuId}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span aria-hidden="true" className="relative block h-5 w-5">
              <span className={`absolute left-0 h-px w-5 bg-deep-water transition-[top,transform] duration-300 ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[4px]'}`} />
              <span className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-deep-water transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-px w-5 bg-deep-water transition-[top,transform] duration-300 ${mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-[16px]'}`} />
            </span>
          </button>
        </div>
      </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-x-0 top-20 bottom-0 z-30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id={mobileMenuId}
            className="fixed inset-x-0 top-20 z-40 max-h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain bg-warm-white/98 text-deep-water shadow-[0_24px_48px_rgba(18,59,57,0.12)] backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-xl px-5 py-5 sm:px-6">
              <div className="grid gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href)

                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-12 items-center py-2 text-2xl font-bold leading-none transition-colors sm:text-3xl ${focusRing} ${
                        active ? 'text-tidal' : 'text-deep-water hover:text-tidal'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
