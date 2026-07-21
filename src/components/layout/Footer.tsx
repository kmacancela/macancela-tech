import { Link } from 'react-router'
import { navLinks, profileLinks } from '../../data/profileLinks'
import { siteConfig } from '../../data/siteConfig'
import { ProfileIcon } from '../ui/ProfileIcon'

const quickLinks = navLinks
const quickLinkColumns = [quickLinks.slice(0, 3), quickLinks.slice(3)]
const focusRing = 'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal'

export function Footer() {
  return (
    <footer className="border-t border-paper-line bg-parchment text-ink">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex max-w-lg items-start gap-4">
              <Link
                to="/"
                aria-label="Macancela Technologies home"
                className={`mt-1 shrink-0 transition-transform duration-200 ease-out hover:-translate-y-0.5 ${focusRing}`}
              >
                <img
                  src="/favicon.png"
                  alt=""
                  width="40"
                  height="40"
                  className="h-10 w-10"
                />
              </Link>
              <p className="text-base leading-relaxed text-ink-muted">
                {siteConfig.role} in New York City, building scalable, reliable products across web, mobile, and backend systems.
              </p>
            </div>
          </div>

          <div>
            <nav aria-label="Footer navigation" className="grid w-fit grid-cols-2 gap-x-10 sm:gap-x-12">
              {quickLinkColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-3">
                  {column.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} className={`text-sm font-semibold text-ink-muted transition-colors hover:text-tidal ${focusRing}`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>

          <div>
            <div className="flex gap-4">
              {profileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className={`text-ink-muted transition-colors hover:text-tidal ${focusRing}`}
                  aria-label={link.name}
                >
                  <ProfileIcon icon={link.icon} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs text-ink-muted">
              &copy; {new Date().getFullYear()} Macancela Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
