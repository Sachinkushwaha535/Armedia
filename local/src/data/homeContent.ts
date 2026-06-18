export const preloaderWords = ['We Listen', 'We Research', 'We Design', 'We Build', 'We Deliver']

export const heroContent = {
  headline:
    'We deliver marketing media, strategy, and performance campaigns in Auckland that generate measurable results for our clients.',
  subheadline:
    'Looking for a partner that connects strategy, advertising, AI workflows, BI dashboards, and media planning? Armedia helps New Zealand brands grow with clearer campaigns and stronger reporting.',
  primaryCta: { label: 'Request Free Audit', href: '/contact' },
  secondaryCta: { label: 'Download Our Guide', href: '/start-project' },
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
    href: '/contact',
  },
  {
    title: 'Media Planning Lab',
    tags: ['Strategy', 'Media mix', 'Planning'],
    image: labImages.mediaPlanning,
    href: '/contact',
  },
  {
    title: 'Enterprise Software Lab',
    tags: ['Software', 'Integrations', 'Systems'],
    image: labImages.software,
    href: '/contact',
  },
  {
    title: 'SEO & Visibility Lab',
    tags: ['SEO', 'Search', 'Analytics'],
    image: labImages.seo,
    href: '/contact',
  },
  {
    title: 'Brand & Media Lab',
    tags: ['Brand', 'Media', 'Strategy'],
    image: labImages.brandMedia,
    href: '/contact',
  },
  {
    title: 'AI & API Lab',
    tags: ['AI', 'API', 'Automation'],
    image: labImages.aiApi,
    href: '/contact',
  },
  {
    title: 'Web Development Lab',
    tags: ['Next.js', 'React', 'UX'],
    image: labImages.webDevelopment,
    href: '/contact',
  },
  {
    title: 'OOH & Outdoor Lab',
    tags: ['OOH', 'Billboards', 'Offline'],
    image: labImages.ooh,
    href: '/contact',
  },
  {
    title: 'Paid Marketing Lab',
    tags: ['Paid ads', 'Performance', 'CRO'],
    image: labImages.paidMarketing,
    href: '/contact',
  },
  {
    title: 'Business Intelligence Lab',
    tags: ['BI', 'Dashboards', 'Reporting'],
    image: labImages.businessIntelligence,
    href: '/contact',
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
  subline: "Let's get together and throw some ideas around.",
  cta: { label: 'Contact us', href: '/contact' },
  image: labImages.creativeContent,
}

export const statistics = {
  heading: 'Why Choose Armedia?',
  items: [
    { value: '6+', label: 'Integrated growth pillars across strategy, media, and reporting' },
    { value: '5', label: 'Step campaign process from diagnosis to improvement' },
    { value: '24h', label: 'Business-day reply target for new enquiries' },
  ],
}

export const serviceAreas = [
  {
    title: 'Strategy',
    image: labImages.brandMedia,
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
    image: labImages.creativeContent,
    items: ['Art Direction', 'Photography', 'Videography', 'Campaign creative'],
  },
  {
    title: 'Web Development',
    image: labImages.webDevelopment,
    items: [
      'Bespoke Website Development',
      'Ecommerce Website Development',
      'React / Next.js builds',
      'Responsive Web Development',
    ],
  },
  {
    title: 'Design Services',
    image: labImages.webDevelopment,
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
    image: labImages.paidMarketing,
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
    image: labImages.businessIntelligence,
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
  kicker: 'What our clients are saying',
  title: 'Testimonials',
  subtitle: 'We design & build connected campaigns that are easier to measure and improve.',
  quote:
    'Armedia helped us connect strategy, media, and reporting into one clearer plan. The team communicates practically and keeps the next step obvious.',
  author: 'Campaign lead',
  role: 'Growth-focused NZ brand',
  cta: { label: 'View all testimonials', href: '/contact' },
  image: labImages.brandMedia,
}

export const downloadGuide = {
  kicker: 'Download guide',
  title: 'Download a transparent, practical guide on how to get results with connected marketing.',
  highlight: 'practical guide',
  button: 'Download',
}

export type PortfolioItem = (typeof portfolioItems)[number]
