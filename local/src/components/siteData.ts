export type PageKey = 'home' | 'services' | 'contact'

export type NavItem = {
  key: PageKey
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'services', label: 'Services', path: '/services' },
  // { key: 'about', label: 'About', path: '/about' },
  // { key: 'blog', label: 'Blog', path: '/blog' },
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

export const processSteps = [
  {
    step: '01',
    title: 'We listen',
    description: 'We start by understanding your business, audience, constraints, and commercial goals.',
  },
  {
    step: '02',
    title: 'We research',
    description: 'We map the opportunity, review competitors, and find the clearest path forward.',
  },
  {
    step: '03',
    title: 'We design',
    description: 'We shape an interface that feels premium, credible, and easy to use.',
  },
  {
    step: '04',
    title: 'We build',
    description: 'We turn the design into a fast, responsive site with clean code and careful details.',
  },
  {
    step: '05',
    title: 'We deliver',
    description: 'We launch, test, refine, and support the website so it keeps performing.',
  },
]

export const testimonials = [
  {
    quote:
      'Verified client reviews are shown only after client approval or after connecting a public review source.',
    name: 'Armedia review policy',
    role: 'Verified-review policy',
    company: 'Armedia',
  },
  {
    quote:
      'Google reviews can be connected here once the live Business Profile review feed is available.',
    name: 'Google reviews',
    role: 'Ready for verified reviews',
    company: 'Armedia',
  },
]

export const clients = [
  'Growth-focused brands',
  'Local businesses',
  'Retail and service companies',
  'Startup teams',
  'Campaign-led operators',
  'Brands needing media visibility',
]
