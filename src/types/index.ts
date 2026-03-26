export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  highlighted: boolean
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  description: string
  services: string[]
  image?: string
  link?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  tech: string[]
  current: boolean
}

export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  slug: string
}

export interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'email'
}

export interface NavLink {
  label: string
  href: string
  isRoute?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}
