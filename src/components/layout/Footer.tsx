import { Link } from 'react-router'
import { navLinks, profileLinks } from '../../data/profileLinks'
import { siteConfig } from '../../data/siteConfig'
import { ProfileIcon } from '../ui/ProfileIcon'

const quickLinks = navLinks.filter((link) => link.href !== '/')

export function Footer() {
  return (
    <footer className="bg-sand/50 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-lg text-ink transition-colors hover:text-deep-water">
            {siteConfig.name}<span className="text-leaf">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {siteConfig.role} in {siteConfig.location}, building SaaS products, analytics platforms, and polished web systems.
          </p>
          <p className="mt-4 text-xs font-medium tracking-wide text-leaf">{siteConfig.domain}</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Navigate</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-ink-light transition-colors hover:text-deep-water"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Connect</h4>
          <div className="flex gap-4">
            {profileLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                download={link.download}
                className="text-ink-muted transition-colors duration-300 hover:text-leaf"
                aria-label={link.name}
              >
                <ProfileIcon icon={link.icon} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs tracking-wide text-ink-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
