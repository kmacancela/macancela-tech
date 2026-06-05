import type { NavLink, ProfileLink } from '../types'
import { siteConfig } from './siteConfig'

export const profileLinks: ProfileLink[] = [
  {
    name: 'Resume',
    label: 'Download Resume',
    href: siteConfig.resumeHref,
    icon: 'resume',
    download: true,
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kmacancela',
    icon: 'linkedin',
    external: true,
  },
  {
    name: 'GitHub',
    label: 'GitHub',
    href: 'https://github.com/kmacancela',
    icon: 'github',
    external: true,
  },
  {
    name: 'Email',
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: 'email',
  },
]

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'Experience', href: '/experience', isRoute: true },
  { label: 'Projects', href: '/projects', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
]
