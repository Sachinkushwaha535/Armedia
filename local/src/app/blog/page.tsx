import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

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
    category: 'AI Marketing',
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

const categories = [
  'AI Marketing',
  'Business Intelligence',
  'Advertising',
  'Digital Media',
  'OOH Media',
  'Offline Marketing',
  'Creative',
  'Technology',
]

export const metadata: Metadata = {
  title: 'Blog | Marketing Media, AI, BI & Advertising Insights',
  description:
    'Armedia insights on marketing media strategy, AI marketing tools, business intelligence, advertising, digital media, OOH media, offline marketing, creative, and campaign technology.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Marketing Media, AI, BI & Advertising Insights',
    description:
      'Marketing media insights on AI workflows, BI dashboards, advertising, digital media, OOH, offline marketing, and campaign technology.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Marketing Media, AI, BI & Advertising Insights',
    description:
      'Practical insights for smarter campaigns across AI, BI, advertising, digital media, OOH, offline, creative, and technology.',
  },
}

export default function Page() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Armedia Marketing Media Insights',
    url: `${siteUrl}/blog`,
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
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <section className="page-shell section">
          <div className="section-heading">
            <p className="eyebrow">Insights</p>
            <h1 className="page-title">Marketing media thinking for smarter campaigns.</h1>
            <p>
              Practical notes on AI, business intelligence, advertising, digital media, OOH,
              offline marketing, creative strategy, and campaign-supporting technology.
            </p>
          </div>

          <div className="about-tech-grid" aria-label="Blog categories">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

          <div className="studio-grid">
            {posts.map((post) => (
              <article className="studio-card" key={post.title}>
                <p className="eyebrow">{post.category}</p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link className="text-link" href={post.href}>Read insight</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
