import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/blog/performance-advertising-budget'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'Performance Advertising Without Wasting Budget | Armedia',
  description:
    'Learn how to eliminate wasted ad spend through rigorous creative testing, advanced conversion tracking, and structured data reviews.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'Performance Advertising Without Wasting Budget | Armedia',
    description: 'Stop burning budget on empty clicks. Build a profitable performance marketing framework designed for real business growth.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00.000Z',
    authors: ['Armedia'],
    images: [
      {
        url: `${siteUrl}/images/blog/performance-advertising-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Performance Advertising ROI Optimization Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Advertising Without Wasting Budget | Armedia',
    images: [`${siteUrl}/images/blog/performance-advertising-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. RICH SNIPPET ENGINE (JSON-LD ARTICLE SCHEMA)
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Performance Advertising Without Wasting Budget',
    'description': 'How to reduce wasted ad spend with clearer offers, better creative testing, retargeting, conversion tracking, and campaign reviews.',
    'image': [`${siteUrl}/images/blog/performance-advertising-og.jpg`],
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
            <p className="eyebrow uppercase tracking-wider text-xs font-semibold text-gray-500">Advertising</p>
            <h1 className="page-title text-3xl font-bold mt-1 mb-3">Performance Advertising Without Wasting Budget</h1>
            <p className="text-lg text-gray-600 font-medium">
              Ad budgets dry up quickly when campaigns launch without structural guardrails. Scalable <strong>performance marketing</strong> thrives when the entire data, tracking, and attribution architecture is locked in before your initial ad spend begins.
            </p>
          </header>

          <div className="article-body space-y-6">
            {/* Section 1: Dynamic focus on creative testing terminology */}
            <section>
              <h2 className="text-xl font-bold mb-2">Test Ad Creative with Strategic Purpose</h2>
              <p className="text-gray-700">
                True creative iteration goes deeper than changing layout colors or button placements. Test unique psychological angles: compare specific consumer pain points, core brand proofs, value propositions, and direct calls to action so the incoming hard data teaches you exactly what your audience responds to.
              </p>
            </section>

            {/* Section 2: Structured metric review with a clean, icon-free layout */}
            <section>
              <h2 className="text-xl font-bold mb-2">Establish a Strict Data Review Rhythm</h2>
              <p className="text-gray-700 mb-3">
                Do not obsess over surface-level impressions. Run systemic performance audits to keep your <strong>conversion rate optimization (CRO)</strong> on track by isolating deeper business metrics:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">Efficiency Metrics</p>
                  <p>Track your actual cost per lead (CPL) and overall cost per acquisition (CPA) across specific channels rather than relying on standard vanity clicks.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Downstream Pipeline</p>
                  <p>Audit layout interaction habits, pipeline lead quality, and the real-world operational response times of your sales follow-up systems.</p>
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
