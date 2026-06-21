export const preloaderWords = ['We Listen', 'We Research', 'We Design', 'We Build', 'We Deliver']

export const heroContent = {
  headline: 'Web development and media agency in Auckland — built for end-to-end business growth.',
  subheadline:
    'Armedia helps businesses build and connect the systems they run on — from websites and media to sales flow, CRM, reporting, workflow automation, and business operations.',
  primaryCta: { label: 'Book a strategy call', href: '/contact' },
  secondaryCta: { label: 'Get the marketing guide', href: '/#download-guide' },
}

export const labImages = {
  creativeContent: '/images/labs/creative-content.png',
  mediaPlanning: '/images/labs/media-planning.png',
  software: '/images/labs/software.png',
  seo: '/images/labs/seo.png',
  brandMedia: '/images/labs/brand-media.png',
  aiApi: '/images/labs/ai-api.png',
  webDevelopment: '/images/labs/web-development.png',
  ooh: '/images/labs/ooh.png',
  paidMarketing: '/images/labs/paid-marketing.png',
  businessIntelligence: '/images/labs/business-intelligence.png',
} as const

export const helpSlides = [
  {
    title: 'Connected campaign strategy',
    body: 'We clarify your audience, offer, channel mix, and measurement plan before budget goes live — so every activity has a defined commercial role.',
    cta: 'Explore strategy',
    tags: ['Strategy', 'Positioning', 'GTM planning'],
    image: labImages.mediaPlanning,
  },
  {
    title: 'AI & business intelligence',
    body: 'AI-assisted workflows, dashboards, and campaign summaries reduce manual reporting and make the next best marketing action easier to identify.',
    cta: 'Explore AI + BI',
    tags: ['AI workflows', 'BI dashboards', 'Reporting'],
    image: labImages.businessIntelligence,
  },
  {
    title: 'Advertising & digital media',
    body: 'Paid search, paid social, SEO, landing pages, and retargeting built as one connected system focused on lead quality and conversion clarity.',
    cta: 'Explore advertising',
    tags: ['Google Ads', 'Meta Ads', 'SEO'],
    image: labImages.paidMarketing,
  },
  {
    title: 'OOH & offline media',
    body: 'Outdoor, print, activations, and local media planned with digital follow-through so offline visibility supports recall and enquiries.',
    cta: 'Explore media',
    tags: ['OOH', 'Print', 'Activations'],
    image: labImages.ooh,
  },
  {
    title: 'Measured improvement',
    body: 'We review performance, identify friction, refine the strongest ideas, and help your team decide what to scale after launch.',
    cta: 'Start a project',
    tags: ['Analytics', 'Optimisation', 'Reviews'],
    image: labImages.seo,
  },
]

export const portfolioItems = [
  {
    title: 'Creative Content Lab',
    tags: ['Content', 'Video', 'Social'],
    image: labImages.creativeContent,
    href: '/services#content-creative-production',
  },
  {
    title: 'Media Planning Lab',
    tags: ['Strategy', 'Media mix', 'Planning'],
    image: labImages.mediaPlanning,
    href: '/services#media-buying-planning',
  },
  {
    title: 'Enterprise Software Lab',
    tags: ['Software', 'Integrations', 'Systems'],
    image: labImages.software,
    href: '/services#software-engineering',
  },
  {
    title: 'SEO & Visibility Lab',
    tags: ['SEO', 'Search', 'Analytics'],
    image: labImages.seo,
    href: '/seo-agency-auckland',
  },
  {
    title: 'Brand & Media Lab',
    tags: ['Brand', 'Media', 'Strategy'],
    image: labImages.brandMedia,
    href: '/services#brand-growth-strategy',
  },
  {
    title: 'AI & API Lab',
    tags: ['AI', 'API', 'Automation'],
    image: labImages.aiApi,
    href: '/services#ai-api',
  },
  {
    title: 'Web Development Lab',
    tags: ['Next.js', 'React', 'UX'],
    image: labImages.webDevelopment,
    href: '/web-design-auckland',
  },
  {
    title: 'OOH & Outdoor Lab',
    tags: ['OOH', 'Billboards', 'Offline'],
    image: labImages.ooh,
    href: '/services#ooh-offline-media',
  },
  {
    title: 'Paid Marketing Lab',
    tags: ['Paid ads', 'Performance', 'CRO'],
    image: labImages.paidMarketing,
    href: '/services#advertising',
  },
  {
    title: 'Business Intelligence Lab',
    tags: ['BI', 'Dashboards', 'Reporting'],
    image: labImages.businessIntelligence,
    href: '/services#business-intelligence',
  },
]

export const processSteps = [
  {
    title: 'Discovery',
    body: 'We clarify your offer, audience, competition, current channels, and the commercial result the campaign must support.',
  },
  {
    title: 'Design',
    body: 'We sharpen the message, channel roles, funnel path, campaign structure, and measurement plan before execution begins.',
  },
  {
    title: 'Development',
    body: 'We create campaign assets, landing pages, media plans, AI workflows, dashboards, and tracking foundations.',
  },
  {
    title: 'Quality Testing',
    body: 'We test journeys, tracking, creative placements, and handover flows so launch day is clean and predictable.',
  },
  {
    title: 'Site Launch',
    body: 'We activate campaigns across selected channels with live checks, practical communication, and clean reporting setup.',
  },
  {
    title: 'Maintenance & Support',
    body: 'We review performance, refine the strongest ideas, and help your team decide what to scale next.',
  },
]

export const whatWeDo = {
  kicker: 'What we do',
  headline: 'ideas / around',
  subline:
    'Work with one team across delivery, optimisation, and execution — not five disconnected vendors.',
  cta: { label: 'Contact us', href: '/contact' },
  image: labImages.creativeContent,
}

export const statistics = {
  heading: 'Why Choose Armedia?',
  items: [
    { value: '6+', label: 'Connected capability across web, media, systems, and business operations' },
    { value: '5', label: 'Step campaign process from diagnosis to improvement' },
    { value: '1 day', label: 'Business-day reply target for new enquiries' },
  ],
}

export type ServiceAreaIconKey =
  | 'strategy'
  | 'creative'
  | 'web'
  | 'design'
  | 'marketing'
  | 'insights'

export const serviceAreas: Array<{
  title: string
  icon: ServiceAreaIconKey
  items: string[]
}> = [
  {
    title: 'Strategy',
    icon: 'strategy',
    items: [
      'Brand Strategy',
      'Marketing Campaign Strategy',
      'Content Marketing Services',
      'Digital Strategy',
      'Marketing Strategy',
      'Social Media Strategy',
    ],
  },
  {
    title: 'Creative Content',
    icon: 'creative',
    items: ['Art Direction', 'Photography', 'Videography', 'Campaign creative'],
  },
  {
    title: 'Web Development',
    icon: 'web',
    items: [
      'Bespoke Website Development',
      'E-commerce Website Development',
      'React / Next.js builds',
      'Responsive Web Development',
    ],
  },
  {
    title: 'Design Services',
    icon: 'design',
    items: [
      'Application Design',
      'Content Creation',
      'Logo Design and Branding',
      'UX/UI Design',
      'Visual Identity',
      'Website Design',
    ],
  },
  {
    title: 'Digital Marketing',
    icon: 'marketing',
    items: [
      'Email Marketing',
      'Google Ads Management',
      'Search Engine Marketing',
      'Search Engine Optimisation',
      'Social Media Marketing',
    ],
  },
  {
    title: 'Insights',
    icon: 'insights',
    items: [
      'Analytics and Metrics',
      'Campaign Optimisation',
      'Conversion Rate Optimisation',
      'Persona Development',
      'Digital Marketing Reporting',
      'User Testing',
    ],
  },
]

export const testimonials = {
  kicker: 'Client feedback',
  title: 'Verified reviews',
  subtitle: 'We share client feedback only when it is accurate and approved.',
  quote:
    'Verified client reviews and testimonials are published only after client approval or when connected to a public review source.',
  author: 'Review policy',
  role: 'Armedia',
  cta: { label: 'Contact us', href: '/contact' },
  image: labImages.brandMedia,
}

export const downloadGuide = {
  kicker: 'Download guide',
  title: 'Download a transparent, practical guide on how to get results with connected marketing.',
  highlight: 'practical guide',
  button: 'Download',
}

export type PortfolioItem = (typeof portfolioItems)[number]
