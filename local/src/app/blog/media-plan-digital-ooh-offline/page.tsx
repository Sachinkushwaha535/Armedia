import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/blog/media-plan-digital-ooh-offline'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'How to Build a Media Plan Across Digital & OOH Channels | Armedia',
  description:
    'A practical media planning framework for cross-channel budget allocation, OOH media buying, and digital campaign measurement.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'How to Build a Media Plan Across Digital & OOH Channels | Armedia',
    description: 'Learn how to structure an omnichannel media buying framework that balances digital performance ads with offline visibility.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00.000Z',
    authors: ['Armedia'],
    images: [
      {
        url: `${siteUrl}/images/blog/media-planning-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Omnichannel Media Planning Framework Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build a Media Plan Across Digital & OOH Channels | Armedia',
    images: [`${siteUrl}/images/blog/media-planning-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. RICH SNIPPET ENGINE (JSON-LD ARTICLE SCHEMA)
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    'description': 'A practical media planning framework for digital campaigns, OOH media, offline marketing, budget allocation, and campaign measurement.',
    'image': [`${siteUrl}/images/blog/media-planning-og.jpg`],
    'datePublished': '2026-05-25T00:00:00.000Z',
    'dateModified': '2026-05-25T00:00:00.000Z',
    'author': { '@type': 'Organization', name: 'Armedia', url: siteUrl },
    'publisher': { 
      '@type': 'Organization', 
      'name': 'Armedia',
      'logo': { '@type': 'ImageObject', url: `${siteUrl}/images/logo.jpg` }
    },
    'mainEntityOfPage': fullUrl,
  }

  return (
    <div className="site-shell">
      <Header />
      <main>
        <article className="page-shell section legal-content max-w-2xl mx-auto px-4 py-8">
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} 
          />
          
          <header className="article-header mb-6">
            <p className="eyebrow uppercase tracking-wider text-xs font-semibold text-gray-500">Media Planning</p>
            <h1 className="page-title text-3xl font-bold mt-1 mb-3">How to Build a Media Plan Across Digital, OOH, and Offline Channels</h1>
            <p className="text-lg text-gray-600 font-medium">
              A high-performing <strong>omnichannel media strategy</strong> starts with your specific business goals, not the distribution channels. Before launching digital platform ads or booking real-world placements, lock in your audience parameters, core offers, budgets, and clear attribution systems.
            </p>
          </header>

          <div className="article-body space-y-6">
            {/* Clear definition section targeting semantic keywords */}
            <section>
              <h2 className="text-xl font-bold mb-2">Define the Role of Each Marketing Channel</h2>
              <p className="text-gray-700">
                Instead of forcing channels to do everything, assign every placement a specific objective inside your funnel:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li><strong>Digital Media:</strong> Ideal for precision targeting, intent-driven traffic, real-time testing, and direct retargeting loops.</li>
                <li><strong>OOH Media:</strong> Drives broad brand visibility, localized market trust, and high mental recall.</li>
                <li><strong>Offline Marketing:</strong> Anchors physical presence through localized activations, direct events, and community-level awareness.</li>
              </ul>
            </section>

            {/* Practical decision framework structured using clean borders instead of icons */}
            <section>
              <h2 className="text-xl font-bold mb-2">Build Your Campaign Measurement Blueprint Early</h2>
              <p className="text-gray-700 mb-3">
                Do not wait for a campaign to finish to evaluate its effectiveness. Integrate cross-channel <strong>conversion tracking</strong> mechanisms directly into your operational stack:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">Digital Attribution</p>
                  <p>Deploy clean landing pages, custom UTM campaign URLs, and precise CRM tags to track exact digital entry points.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Offline Mapping</p>
                  <p>Utilize dynamic QR codes, dedicated phone call tracking lines, and geo-targeted brand lift surveys to attribute offline awareness.</p>
                </div>
              </div>
            </section>
          </div>

          <footer className="article-footer mt-8 pt-4 border-t border-gray-100">
            <Link className="text-link text-blue-600 hover:underline inline-flex items-center text-sm font-medium" href="/blog">
              ← Back to insights
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  )
}
