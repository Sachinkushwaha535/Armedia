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
    gradient: 'from-emerald-600/40 via-teal-800/30 to-void',
    href: '/contact',
  },
  {
    title: 'Retail product growth system',
    description: 'A premium product story pattern built around colour exploration, motion, and clarity.',
    tags: ['E-commerce', 'Art Direction', 'Performance'],
    date: 'Mar 2026',
    client: 'Anonymised example',
    service: 'E-commerce',
    gradient: 'from-violet-600/40 via-purple-900/30 to-void',
    href: '/ecommerce-website-auckland',
  },
  {
    title: 'Public information journey',
    description: 'A public-facing digital experience pattern designed to reduce friction and improve reach.',
    tags: ['Accessibility', 'Content Design', 'Integration'],
    date: 'Apr 2026',
    client: 'Anonymised example',
    service: 'Digital Platform',
    gradient: 'from-blue-600/40 via-indigo-900/30 to-void',
    href: '/contact',
  },
  {
    title: 'Resource hub architecture',
    description: 'An interactive resource site pattern structured for fast discovery and easy navigation.',
    tags: ['Information Architecture', 'Frontend', 'Testing'],
    date: 'May 2026',
    client: 'Anonymised example',
    service: 'Resource Hub',
    gradient: 'from-amber-600/40 via-orange-900/30 to-void',
    href: '/react-development-nz',
  },
]

export const agencyStats = [
  { value: 6, suffix: '', label: 'Integrated growth pillars across strategy, media, and intelligence' },
  { value: 5, suffix: '', label: 'Step campaign process from diagnosis to improvement' },
  { value: 24, suffix: 'h', label: 'Business-day reply target for new enquiries' },
]

export const serviceShowcaseSlides = [
  {
    title: 'AI Marketing Studio',
    subtitle: 'Intelligence',
    description:
      'AI-assisted workflows for content planning, campaign summaries, lead qualification, customer support, and faster marketing operations — built to reduce manual work and sharpen weekly decisions.',
    tags: ['AI workflows', 'Campaign summaries', 'Lead qualification', 'Marketing automation'],
  },
  {
    title: 'Business Intelligence',
    subtitle: 'Analytics',
    description:
      'Dashboards, campaign analytics, market insight, and reporting systems that turn scattered data into confident decisions your team can act on every week.',
    tags: ['BI dashboards', 'Campaign analytics', 'Market insight', 'Performance reviews'],
  },
  {
    title: 'Advertising & Performance',
    subtitle: 'Media',
    description:
      'Paid search, paid social, retargeting, creative testing, media buying, and conversion tracking built around lead quality and measurable commercial outcomes.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting', 'Conversion tracking'],
  },
  {
    title: 'Digital Media & SEO',
    subtitle: 'Visibility',
    description:
      'SEO, landing pages, social campaigns, content systems, and digital journeys that make your brand easier to find, trust, and choose across every touchpoint.',
    tags: ['SEO', 'Landing pages', 'Social media', 'Content systems'],
  },
  {
    title: 'OOH & Offline Media',
    subtitle: 'Reach',
    description:
      'Outdoor advertising, print, activations, retail visibility, and local media planned with digital follow-through, recall strategy, and connected campaign measurement.',
    tags: ['Billboards', 'Print media', 'Activations', 'Brand recall'],
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
  },
  {
    quote:
      'Google reviews can be connected here once the live Business Profile review feed is available.',
    name: 'Google reviews',
    role: 'Ready for verified reviews',
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
