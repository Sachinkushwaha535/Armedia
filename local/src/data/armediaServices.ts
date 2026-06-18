export type ArmediaServiceIconKey =
  | 'ai'
  | 'data'
  | 'leads'
  | 'web'
  | 'design'
  | 'strategy'
  | 'framework'
  | 'workflow'
  | 'code'
  | 'aiapi'
  | 'docai'

export type ArmediaServiceCard = {
  id: string
  title: string
  desc: string
  items: string[]
  icon: ArmediaServiceIconKey
  href: string
}

export const coreServiceCards: ArmediaServiceCard[] = [
  {
    id: 'ai-marketing-studio',
    title: 'AI Marketing Studio',
    desc: 'Use AI to speed up content workflows, campaign summaries, lead qualification, customer support, and reporting.',
    items: [
      'AI content workflows',
      'Campaign summary generation',
      'Lead qualification support',
      'Marketing assistants',
      'Automated weekly reporting',
    ],
    icon: 'ai',
    href: '/contact',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Strategy',
    desc: 'Turn marketing, sales, and customer data into dashboards and decisions your team can act on with confidence.',
    items: [
      'BI dashboards',
      'Campaign reporting',
      'Lead and customer insights',
      'Performance review systems',
      'Growth strategy planning',
    ],
    icon: 'data',
    href: '/contact',
  },
  {
    id: 'advertising',
    title: 'Advertising & Performance Marketing',
    desc: 'Plan, launch, and optimise paid campaigns across search, social, retargeting, and lead generation funnels.',
    items: [
      'Google Ads',
      'Meta Ads',
      'Retargeting funnels',
      'Creative testing',
      'Conversion tracking',
    ],
    icon: 'leads',
    href: '/contact',
  },
  {
    id: 'digital-media',
    title: 'Digital Media',
    desc: 'Build visibility with landing pages, SEO structure, content systems, and campaign-ready digital journeys.',
    items: [
      'Landing pages',
      'SEO structure',
      'Social campaign planning',
      'Content direction',
      'Digital customer journeys',
    ],
    icon: 'web',
    href: '/contact',
  },
  {
    id: 'ooh-offline-media',
    title: 'OOH & Offline Media',
    desc: 'Connect outdoor visibility and offline brand activation with digital campaign goals, tracking, and recall.',
    items: [
      'Billboard planning',
      'Print campaigns',
      'Local activations',
      'Offline promotional strategy',
      'Digital-to-offline flow',
    ],
    icon: 'design',
    href: '/contact',
  },
  {
    id: 'brand-growth-strategy',
    title: 'Brand, Media & Growth Strategy',
    desc: 'Shape the message, offer, audience, media mix, and execution plan before budget is spent.',
    items: [
      'Brand positioning',
      'Go-to-market planning',
      'Media mix strategy',
      'Funnel planning',
      'Monthly performance review',
    ],
    icon: 'strategy',
    href: '/contact',
  },
  {
    id: 'media-buying-planning',
    title: 'Media Planning & Buying',
    desc: 'Plan where your brand should appear, how budget should be split, and which placements create the strongest reach.',
    items: [
      'Media mix planning',
      'Budget allocation',
      'Placement strategy',
      'Vendor coordination',
      'Reach and frequency planning',
    ],
    icon: 'framework',
    href: '/contact',
  },
  {
    id: 'content-creative-production',
    title: 'Content & Creative Production',
    desc: 'Create campaign-ready ideas, ad creatives, social content, landing page copy, and supporting brand assets.',
    items: [
      'Ad creative direction',
      'Social media content',
      'Landing page copy',
      'Short-form video concepts',
      'Campaign asset planning',
    ],
    icon: 'design',
    href: '/contact',
  },
  {
    id: 'crm-retention-marketing',
    title: 'CRM & Retention Marketing',
    desc: 'Improve repeat business with email campaigns, retention offers, customer segmentation, and CRM reporting.',
    items: [
      'Email campaigns',
      'Customer segmentation',
      'Retention offers',
      'CRM planning',
      'Reporting structure',
    ],
    icon: 'workflow',
    href: '/contact',
  },
]

export const supportingServiceCards: ArmediaServiceCard[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'Build websites and landing pages that support campaigns, create trust, and convert traffic into enquiries.',
    items: [
      'Business websites',
      'Campaign landing pages',
      'Responsive development',
      'Performance optimisation',
      'Lead capture forms',
    ],
    icon: 'web',
    href: '/web-design-auckland',
  },
  {
    id: 'seo-landing-pages',
    title: 'SEO & Landing Pages',
    desc: 'Improve search visibility with focused landing pages, metadata, schema, and stronger content structure.',
    items: [
      'SEO content structure',
      'Keyword landing pages',
      'Metadata and schema',
      'Conversion copy',
      'Page speed basics',
    ],
    icon: 'web',
    href: '/seo-agency-auckland',
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    desc: 'Build custom dashboards, portals, and internal tools that support reporting and business operations.',
    items: [
      'Custom dashboards',
      'Internal portals',
      'Full-stack development',
      'Scalable systems',
      'QA and deployment',
    ],
    icon: 'code',
    href: '/react-development-nz',
  },
  {
    id: 'api-automation',
    title: 'API Integration & Automation',
    desc: 'Connect CRM, forms, analytics, email, dashboards, and reporting systems into smoother workflows.',
    items: [
      'CRM integrations',
      'Analytics connections',
      'Webhook workflows',
      'Email automation',
      'Reporting pipelines',
    ],
    icon: 'aiapi',
    href: '/contact',
  },
  {
    id: 'ai-api',
    title: 'AI API Integration',
    desc: 'Add AI features into products and workflows with scalable architecture, cost control, and reliable integrations.',
    items: [
      'OpenAI / Claude / Gemini APIs',
      'Custom AI middleware',
      'Streaming responses',
      'Rate limiting',
      'Cost control',
    ],
    icon: 'aiapi',
    href: '/contact',
  },
  {
    id: 'doc-ai',
    title: 'AI Document Processing',
    desc: 'Extract, classify, summarise, and structure documents for faster internal operations and reporting.',
    items: [
      'OCR and extraction',
      'Document classification',
      'Invoice and contract analysis',
      'Summaries',
      'Multi-format parsing',
    ],
    icon: 'docai',
    href: '/contact',
  },
]
