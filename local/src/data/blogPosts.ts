export type BlogPost = {
  slug: string
  href: string
  title: string
  headline: string
  category: string
  description: string
  published: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'media-plan-digital-ooh-offline',
    href: '/blog/media-plan-digital-ooh-offline',
    title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    headline: 'How to build a media plan across digital, OOH, and offline channels',
    category: 'Media Planning',
    description:
      'A practical framework for choosing the right channel mix, message, budget, and measurement plan before campaign launch.',
    published: '2026-02-10',
  },
  {
    slug: 'ai-workflows-service-teams',
    href: '/blog/ai-workflows-service-teams',
    title: 'Where AI Workflows Help Small Service Teams First',
    headline: 'Where AI workflows help small service teams first',
    category: 'AI Workflows',
    description:
      'A practical guide to AI workflows for service teams, including lead qualification, intake summaries, follow-up, and reporting.',
    published: '2026-02-18',
  },
  {
    slug: 'business-intelligence-campaign-decisions',
    href: '/blog/business-intelligence-campaign-decisions',
    title: 'Business Intelligence for Campaign Decisions',
    headline: 'Business intelligence for campaign decisions',
    category: 'Business Intelligence',
    description:
      'How dashboards, customer data, competitor signals, and campaign analytics help teams decide what to scale next.',
    published: '2026-03-01',
  },
  {
    slug: 'offline-ooh-brand-recall',
    href: '/blog/offline-ooh-brand-recall',
    title: 'Why Brand Recall Needs Offline and OOH Media',
    headline: 'Why brand recall needs offline and OOH media',
    category: 'OOH + Offline',
    description:
      'Outdoor media, print, retail visibility, and local activations can strengthen digital campaigns when planned together.',
    published: '2026-03-12',
  },
  {
    slug: 'performance-advertising-budget',
    href: '/blog/performance-advertising-budget',
    title: 'Performance Advertising Without Wasting Budget',
    headline: 'Performance advertising without wasting budget',
    category: 'Advertising',
    description:
      'A simple way to think about creative testing, targeting, retargeting, conversion tracking, and weekly campaign reviews.',
    published: '2026-03-22',
  },
  {
    slug: 'website-trust-auckland-2026',
    href: '/blog/website-trust-auckland-2026',
    title: 'How Auckland Businesses Can Improve Website Trust in 2026',
    headline: 'How Auckland businesses can improve website trust in 2026',
    category: 'Conversion',
    description:
      'A practical guide for Auckland service businesses improving website trust, speed, contact clarity, proof, and conversion paths.',
    published: '2026-04-02',
  },
]

export const blogCategories = [
  'Media Planning',
  'AI Workflows',
  'Business Intelligence',
  'Advertising',
  'OOH + Offline',
  'Conversion',
] as const

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
