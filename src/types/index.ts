export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface Project {
  id: string
  title: string
  status: 'Active' | 'Shipped' | 'Exploring' | 'Paused'
  kind: string
  summary: string
  problem: string
  role: string
  highlights: string[]
  tech: string[]
  links: ProjectLink[]
  featured: boolean
  image?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | 'Present'
  context: string
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

export interface ProfileLink {
  name: string
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email' | 'resume'
  external?: boolean
  download?: boolean
}

export interface NavLink {
  label: string
  href: string
  isRoute?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface HobbyGroup {
  title: string
  note: string
  items: string[]
}
