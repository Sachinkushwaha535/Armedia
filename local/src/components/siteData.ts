export type PageKey = 'home' | 'services' | 'contact'

export type NavItem = {
  key: PageKey
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'services', label: 'Services', path: '/services' },
  { key: 'contact', label: 'Contact', path: '/contact' },
]

export const featuredWork = [
  {
    title: 'Healthcare service campaign system',
    description: 'A calm, conversion-focused platform pattern for a service brand with complex customer journeys.',
    tags: ['Strategy', 'UX', 'Web Build'],
    date: 'Jan 2026',
    client: 'Anonymised example',
    service: 'Website Design',
  },
  {
    title: 'Retail product growth system',
    description: 'A premium product story pattern built around colour exploration, motion, and clarity.',
    tags: ['E-commerce', 'Art Direction', 'Performance'],
    date: 'Mar 2026',
    client: 'Anonymised example',
    service: 'E-commerce',
  },
  {
    title: 'Public information journey',
    description: 'A public-facing digital experience pattern designed to reduce friction and improve reach.',
    tags: ['Accessibility', 'Content Design', 'Integration'],
    date: 'Apr 2026',
    client: 'Anonymised example',
    service: 'Digital Platform',
  },
  {
    title: 'Resource hub architecture',
    description: 'An interactive resource site pattern structured for fast discovery and easy navigation.',
    tags: ['Information Architecture', 'Frontend', 'Testing'],
    date: 'May 2026',
    client: 'Anonymised example',
    service: 'Resource Hub',
  },
]

export const serviceGroups = [
  {
    title: 'Strategy',
    items: ['Growth strategy', 'Brand positioning', 'Go-to-market planning', 'Media mix planning'],
  },
  {
    title: 'Advertising',
    items: ['Meta Ads', 'Google Ads', 'Creative testing', 'Retargeting campaigns'],
  },
  {
    title: 'Media',
    items: ['Digital media', 'OOH media', 'Print media', 'Offline marketing'],
  },
  {
    title: 'Intelligence',
    items: ['AI tools', 'BI dashboards', 'Campaign analytics', 'Market insights'],
  },
]

export const industries = [
  'Professional services',
  'Retail & e-commerce',
  'Healthcare & wellness',
  'Construction & trades',
  'SaaS & technology',
  'Local & regional brands',
]
