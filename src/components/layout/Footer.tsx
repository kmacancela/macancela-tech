import { Link } from 'react-router'
import { navLinks, profileLinks } from '../../data/profileLinks'
import { siteConfig } from '../../data/siteConfig'
import { ProfileIcon } from '../ui/ProfileIcon'

const quickLinks = navLinks.filter((link) => link.href !== '/')

export function Footer() {
  return (
    <footer className="border-t border-night-border bg-night text-night-text">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Link
              to="/"
              aria-label="macancela.tech"
              className="inline-flex items-baseline ![font-family:var(--font-editorial)] text-5xl leading-none !font-normal !tracking-normal text-night-text transition-colors hover:text-leaf-light"
            >
              <span aria-hidden="true">macancela</span>
              <span className="relative mx-[0.04em] inline-flex h-[0.16em] w-[0.16em] shrink-0 -translate-y-[0.05em]" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf-light opacity-60" />
                <span className="relative inline-flex h-full w-full rounded-full bg-leaf-light" />
              </span>
              <span aria-hidden="true">tech</span>
            </Link>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-night-muted">
              {siteConfig.role} in {siteConfig.location}. Full-stack credibility, frontend taste, and product systems that hold up under real use.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-night-muted">Navigate</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-night-muted transition-colors hover:text-leaf-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-night-muted">Connect</h4>
            <div className="flex gap-4">
              {profileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className="text-night-muted transition-colors hover:text-leaf-light"
                  aria-label={link.name}
                >
                  <ProfileIcon icon={link.icon} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs text-night-muted/70">
              &copy; {new Date().getFullYear()} {siteConfig.domain}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
