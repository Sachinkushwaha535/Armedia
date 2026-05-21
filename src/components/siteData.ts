export type PageKey = 'home' | 'services' | 'about' | 'contact'

export type NavItem = {
  key: PageKey
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'services', label: 'Services', path: '/services' },
  // { key: 'about', label: 'About', path: '/about' },
  { key: 'contact', label: 'Contact', path: '/contact' },
]

export const featuredWork = [
  {
    title: 'Allevia Health',
    description: 'A calm, conversion-focused platform for a healthcare brand with complex journeys.',
    tags: ['Strategy', 'UX', 'Web Build'],
    date: 'Jan 2026',
    client: 'Allevia Health',
    service: 'Website Design',
  },
  {
    title: 'Aalto Paint',
    description: 'A premium product story built around colour exploration, motion, and clarity.',
    tags: ['E-commerce', 'Art Direction', 'Performance'],
    date: 'Mar 2026',
    client: 'Aalto Paint',
    service: 'E-commerce',
  },
  {
    title: 'Breast Cancer Foundation NZ',
    description: 'A public-facing digital experience designed to reduce friction and improve reach.',
    tags: ['Accessibility', 'Content Design', 'Integration'],
    date: 'Apr 2026',
    client: 'BCFNZ',
    service: 'Digital Platform',
  },
  {
    title: 'Sport NZ Hub',
    description: 'An interactive resource site structured for fast discovery and easy navigation.',
    tags: ['Information Architecture', 'Frontend', 'Testing'],
    date: 'May 2026',
    client: 'Sport NZ',
    service: 'Resource Hub',
  },
]

export const serviceGroups = [
  {
    title: 'Strategy',
    items: ['Digital strategy', 'Brand positioning', 'Site architecture', 'Campaign planning'],
  },
  {
    title: 'Design',
    items: ['UX/UI design', 'Design systems', 'Editorial layouts', 'Content direction'],
  },
  {
    title: 'Development',
    items: ['Responsive web builds', 'E-commerce platforms', 'Web apps', 'API integration'],
  },
  {
    title: 'Growth',
    items: ['Performance optimisation', 'SEO', 'Analytics', 'QA and iteration'],
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
    role: 'No placeholder testimonials',
  },
  {
    quote:
      'Google reviews can be connected here once the live Business Profile review feed is available.',
    name: 'Google reviews',
    role: 'Ready for verified reviews',
  },
]

export const clients = [
  'Auckland service businesses',
  'NZ e-commerce teams',
  'Healthcare and wellness brands',
  'Professional service firms',
  'Startup product teams',
  'Growth-focused operators',
]
