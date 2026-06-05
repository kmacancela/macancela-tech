import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Designing Dashboards People Can Trust',
    date: '2026-08-01',
    excerpt: 'Notes on building analytics surfaces where the interface, data boundaries, and permissions model all have to earn user confidence.',
    tags: ['Analytics', 'Frontend', 'Product'],
    readingTime: 'Coming soon',
    slug: 'dashboards-people-can-trust',
  },
  {
    id: 'post-2',
    title: 'What I Learned Turning Internal Tools Into SaaS',
    date: '2026-09-01',
    excerpt: 'How product polish, extensibility, and multi-tenant architecture change when software grows beyond an internal workflow.',
    tags: ['SaaS', 'Architecture', 'Vue.js'],
    readingTime: 'Coming soon',
    slug: 'internal-tools-to-saas',
  },
  {
    id: 'post-3',
    title: 'Building Mobile Workflows For Real-World Operations',
    date: '2026-10-01',
    excerpt: 'A project note on turning manufacturing communication, booking, and file access into a mobile workflow.',
    tags: ['React Native', 'Full Stack', 'Projects'],
    readingTime: 'Coming soon',
    slug: 'mobile-workflows-operations',
  },
]
