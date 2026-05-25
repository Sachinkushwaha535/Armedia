import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/blog/business-intelligence-campaign-decisions'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'Business Intelligence for Marketing Campaign Decisions | Armedia',
  description:
    'Learn how marketing analytics dashboards and customer data help performance teams optimize ad spend and scale what works.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'Business Intelligence for Marketing Campaign Decisions | Armedia',
    description: 'Turn scattered data points into actionable insights for cross-channel marketing growth.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00.000Z',
    authors: ['Armedia'],
    images: [
      {
        url: `${siteUrl}/images/blog/bi-campaign-decisions-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Business Intelligence Marketing Dashboards Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Intelligence for Marketing Campaign Decisions | Armedia',
    images: [`${siteUrl}/images/blog/bi-campaign-decisions-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. RICH SNIPPET ENGINE (JSON-LD ARTICLE SCHEMA)
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Business Intelligence for Campaign Decisions',
    'description': 'How BI dashboards, customer data, campaign analytics, and competitor signals help marketing teams decide what to improve next.',
    'image': [`${siteUrl}/images/blog/bi-campaign-decisions-og.jpg`],
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
            <p className="eyebrow uppercase tracking-wider text-xs font-semibold text-gray-500">Business Intelligence</p>
            <h1 className="page-title text-3xl font-bold mt-1 mb-3">Business Intelligence for Campaign Decisions</h1>
            <p className="text-lg text-gray-600 font-medium">
              Campaign reporting should do more than just display static numbers. True <strong>business intelligence (BI)</strong> turns scattered marketing metrics into clear action—helping performance teams confidently decide what to stop, what to improve, and what to scale.
            </p>
          </header>

          <div className="article-body space-y-6">
            {/* Cross-channel tracking breakdown */}
            <section>
              <h2 className="text-xl font-bold mb-2">What to Track: Unified Marketing Analytics</h2>
              <p className="mb-2">
                Isolated data silos hide true performance. To get an accurate view of your funnel, <strong>marketing analytics dashboards</strong> should centralize cross-channel metrics:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Paid Media:</strong> Total ad spend, reach, and real-time click rates across channels.</li>
                <li><strong>Conversion Funnel:</strong> Total leads, actual lead quality, and CRM conversion rates.</li>
                <li><strong>Attribution:</strong> Pinpointing customer segments and exact campaign sources.</li>
              </ul>
            </section>

            {/* Practical decision-making framework using clean typography instead of icons */}
            <section>
              <h2 className="text-xl font-bold mb-2">What to Decide: Optimizing Your ROI</h2>
              <p className="mb-3">
                Good BI cuts through the noise to answer critical, practical marketing questions instantly:
              </p>
              <div className="space-y-4 pl-4 border-l-2 border-gray-200">
                <div>
                  <p className="font-semibold text-gray-900">Which creative is underperforming?</p>
                  <p className="text-gray-600 text-sm">Spot creative fatigue early before your cost-per-acquisition (CPA) spikes.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Which channel drives better leads?</p>
                  <p className="text-gray-600 text-sm">Trace conversions past surface-level clicks back to actual customer revenue.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Where should budget go?</p>
                  <p className="text-gray-600 text-sm">Shift funds fluidly away from flat campaigns to maximize your return on ad spend (ROAS).</p>
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
