import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import BlogPage from '../../components/BlogPage'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

const posts = [
  {
    title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    href: '/blog/media-plan-digital-ooh-offline',
    category: 'Media Planning',
    description:
      'A practical framework for choosing the right channel mix, message, budget, and measurement plan before campaign launch.',
  },
  {
    title: 'Where AI Helps Marketing Teams First',
    href: '/blog/ai-workflows-service-teams',
    category: 'AI Workflows',
    description:
      'Use AI for content planning, campaign summaries, lead qualification, reporting, and faster marketing operations.',
  },
  {
    title: 'Business Intelligence for Campaign Decisions',
    href: '/blog/business-intelligence-campaign-decisions',
    category: 'Business Intelligence',
    description:
      'How dashboards, customer data, competitor signals, and campaign analytics help teams decide what to scale next.',
  },
  {
    title: 'Why Brand Recall Needs Offline and OOH Media',
    href: '/blog/offline-ooh-brand-recall',
    category: 'OOH + Offline',
    description:
      'Outdoor media, print, retail visibility, and local activations can strengthen digital campaigns when planned together.',
  },
  {
    title: 'Performance Advertising Without Wasting Budget',
    href: '/blog/performance-advertising-budget',
    category: 'Advertising',
    description:
      'A simple way to think about creative testing, targeting, retargeting, conversion tracking, and weekly campaign reviews.',
  },
  {
    title: 'Campaign Landing Pages That Convert Better',
    href: '/blog/website-trust-auckland-2026',
    category: 'Conversion',
    description:
      'Clear offer structure, trust proof, fast loading, and focused calls to action make paid traffic easier to convert.',
  },
]

export const metadata: Metadata = {
  title: 'Blog | Strategy, Media, AI & Campaign Insights',
  description:
    'Armedia shares practical insights on media planning, AI workflows, business intelligence, advertising, OOH, offline campaigns, and conversion strategy.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Strategy, Media, AI & Campaign Insights',
    description:
      'Practical insights on media planning, AI workflows, BI dashboards, advertising, OOH, offline campaigns, and conversion strategy.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Strategy, Media, AI & Campaign Insights',
    description:
      'Practical campaign insights across strategy, media planning, AI workflows, BI, advertising, OOH, offline, and conversion.',
  },
}

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Armedia Insights',
    url: `${siteUrl}/blog`,
    description:
      'Practical insights on strategy, media planning, AI workflows, business intelligence, advertising, OOH, offline campaigns, and conversion.',
    publisher: {
      '@type': 'Organization',
      name: 'Armedia',
      url: siteUrl,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${siteUrl}${post.href}`,
      author: { '@type': 'Organization', name: 'Armedia' },
      publisher: { '@type': 'Organization', name: 'Armedia' },
    })),
  }

  return (
    <div className="site-shell page-blog armedia-site">
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <BlogPage />
      </main>
      <Footer />
    </div>
  )
}
