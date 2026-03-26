import type { Service, CaseStudy } from '../types'

export const services: Service[] = [
  {
    id: 'svc-1',
    title: 'Brand Website Design',
    description: 'Custom-designed websites that translate your brand\u2019s tactile identity into a compelling digital presence. Every interaction, every transition, every detail — intentional.',
    features: [
      'Custom visual design rooted in your brand identity',
      'Responsive layouts that feel native on every device',
      'Art-directed photography and typography guidance',
      'Seamless content management integration',
    ],
    icon: 'palette',
    highlighted: true,
  },
  {
    id: 'svc-2',
    title: 'E-Commerce Development',
    description: 'Online stores that move product without compromising aesthetics. Fast load times, intuitive checkout flows, and inventory systems that scale with your growth.',
    features: [
      'Shopify, WooCommerce, or custom storefront builds',
      'Optimized checkout flows that reduce cart abandonment',
      'Product catalog design with filtering and search',
      'Payment gateway and shipping integration',
    ],
    icon: 'store',
    highlighted: true,
  },
  {
    id: 'svc-3',
    title: 'Visual Identity & Digital Branding',
    description: 'Defining the visual language of your brand online — from color systems and typography to motion and interaction patterns that feel unmistakably you.',
    features: [
      'Digital color palette and typography systems',
      'Component-based design system creation',
      'Brand guidelines for digital touchpoints',
      'Social media template design',
    ],
    icon: 'layers',
    highlighted: true,
  },
  {
    id: 'svc-4',
    title: 'Performance & SEO',
    description: 'Speed sells. We optimize your site to load in under two seconds and rank where your customers are searching.',
    features: [
      'Core Web Vitals optimization',
      'Technical SEO audit and implementation',
      'Image optimization and lazy loading',
      'CDN configuration and caching strategy',
    ],
    icon: 'gauge',
    highlighted: false,
  },
  {
    id: 'svc-5',
    title: 'Ongoing Support',
    description: 'Websites aren\u2019t set-and-forget. We provide ongoing maintenance, updates, and strategic guidance to keep your digital presence evolving with your brand.',
    features: [
      'Monthly maintenance and security updates',
      'Performance monitoring and reporting',
      'Content updates and seasonal refreshes',
      'Strategic consultation on digital growth',
    ],
    icon: 'refresh',
    highlighted: false,
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'A Complete Digital Transformation',
    client: 'Terracotta Threads',
    description: 'Redesigned and rebuilt the entire web presence for this sustainable linen brand. The new site increased online sales by 140% in the first quarter after launch, with a 60% improvement in mobile conversion rates.',
    services: ['Brand Website Design', 'E-Commerce Development', 'Performance & SEO'],
  },
  {
    id: 'case-2',
    title: 'From Local Boutique to Online Destination',
    client: 'Maison Noir Atelier',
    description: 'Built a luxury e-commerce experience for this Parisian-inspired boutique expanding beyond their flagship store. The site captures the in-store feeling of curated discovery through editorial product storytelling.',
    services: ['E-Commerce Development', 'Visual Identity & Digital Branding'],
  },
  {
    id: 'case-3',
    title: 'Brand Identity for the Digital Age',
    client: 'Swell & Stone',
    description: 'Created a complete digital identity system for this coastal streetwear label, from web design to social templates. Their Instagram-to-site conversion doubled within three months.',
    services: ['Visual Identity & Digital Branding', 'Brand Website Design'],
  },
]
