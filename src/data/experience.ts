import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Macancela Tech',
    role: 'Founder & Lead Developer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Founded a creative web consulting practice specializing in fashion and clothing brands',
      'Designed and developed custom e-commerce sites generating over $2M in combined client revenue',
      'Built brand identity systems and design systems for 10+ fashion clients',
      'Achieved sub-2-second load times across all client projects through performance optimization',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Shopify', 'Tailwind CSS', 'Figma'],
    current: true,
  },
  {
    id: 'exp-2',
    company: 'Atelier Digital',
    role: 'Senior Frontend Engineer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Led frontend development for luxury fashion e-commerce clients including two major department stores',
      'Built a reusable component library adopted across 8 client projects, cutting development time by 40%',
      'Reduced page load times by 60% through code splitting, image optimization, and caching strategies',
      'Mentored a team of 3 junior developers on modern React patterns and accessibility best practices',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Storybook', 'AWS'],
    current: false,
  },
  {
    id: 'exp-3',
    company: 'Woven Studio',
    role: 'Web Developer',
    startDate: 'Aug 2019',
    endDate: 'May 2021',
    description: [
      'Developed responsive websites and online stores for 15+ independent fashion brands',
      'Implemented custom Shopify themes with unique visual identities for each client',
      'Improved average Lighthouse scores by 30 points across the client portfolio',
    ],
    tech: ['JavaScript', 'Shopify Liquid', 'Sass', 'WordPress', 'PHP', 'Figma'],
    current: false,
  },
]
