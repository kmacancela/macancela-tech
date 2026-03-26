import type { SocialLink, NavLink } from '../types'

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/macancela',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/macancela',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:hello@macancela.tech',
    icon: 'email',
  },
]

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Services', href: '/services', isRoute: true },
  { label: 'Blog', href: '/blog', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
]
