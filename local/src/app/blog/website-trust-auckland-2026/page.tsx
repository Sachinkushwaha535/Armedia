import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/blog/website-trust-auckland-2026'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & LOCALIZED SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'How Auckland Businesses Can Improve Website Trust in 2026 | Armedia',
  description:
    'A practical guide for Auckland service businesses to optimize website trust factors, brand credibility, and localized conversion paths.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'How Auckland Businesses Can Improve Website Trust in 2026 | Armedia',
    description: 'Learn how New Zealand service providers can turn local web traffic into validated leads using modern credibility frameworks.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00.000Z',
    authors: ['Armedia'],
    images: [
      {
        url: `${siteUrl}/images/blog/website-trust-auckland-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Auckland Local Business Website Optimization and Trust Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Auckland Businesses Can Improve Website Trust in 2026 | Armedia',
    images: [`${siteUrl}/images/blog/website-trust-auckland-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. RICH SNIPPET ENGINE (JSON-LD ARTICLE SCHEMA)
   * Fixed critical missing arrays to comply fully with Google Search Console rules.
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Auckland businesses can improve website trust in 2026',
    'description': 'A practical guide for Auckland service businesses improving website trust, speed, contact clarity, proof, and conversion paths in 2026.',
    'image': [`${siteUrl}/images/blog/website-trust-auckland-og.jpg`],
    'datePublished': '2026-05-25T00:00:00.000Z',
    'dateModified': '2026-05-25T00:00:00.000Z',
    'author': { 
      '@type': 'Organization', 
      'name': 'Armedia', 
      'url': siteUrl 
    },
    'publisher': { 
      '@type': 'Organization', 
      'name': 'Armedia',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/images/logo.jpg`
      }
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
            <p className="eyebrow uppercase tracking-wider text-xs font-semibold text-gray-500">Local Insights</p>
            <h1 className="page-title text-3xl font-bold mt-1 mb-3">How Auckland Businesses Can Improve Website Trust</h1>
            <p className="text-lg text-gray-600 font-medium">
              In competitive local markets, digital credibility determines your customer acquisition costs. For New Zealand service providers, executing targeted <strong>conversion rate optimization (CRO)</strong> changes turns passive traffic into valuable leads.
            </p>
          </header>

          <div className="article-body space-y-6">
            {/* Section 1: Optimized for quick scanning and local context */}
            <section>
              <h2 className="text-xl font-bold mb-2">1. Prioritize Immediate UI Clarity</h2>
              <p className="text-gray-700">
                Auckland B2B and B2C visitors shouldn't have to guess your capabilities. Ensure that your precise target audience, core service offers, geographic coverage area, and primary call to action are explicitly readable within the first screen view to reduce immediate landing page abandonment.
              </p>
            </section>
            
            {/* Section 2: Clean semantic layout using side borders */}
            <section>
              <h2 className="text-xl font-bold mb-2">2. Integrate Verified Trust Proof Carefully</h2>
              <p className="text-gray-700 mb-3">
                Generic statements fail to build commercial trust. Anchor your local brand authority by displaying authenticated customer feedback structures:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">Quantifiable Metrics</p>
                  <p>Display real, approved project outcomes, specific client industries, and verified local case studies instead of vague claims.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dynamic Links</p>
                  <p>Incorporate external reference markers, portfolio links, and native platform reviews to reinforce authenticity.</p>
                </div>
              </div>
            </section>
            
            {/* Section 3: Final punchy local SEO trust point */}
            <section>
              <h2 className="text-xl font-bold mb-2">3. Remove Friction from Local Contact Paths</h2>
              <p className="text-gray-700">
                Uncertainty kills conversions. Elevate your <strong>local SEO strategy</strong> by cleanly publishing explicit office locations, active business hours, direct contact channels, and transparent response time expectations. Outlining your project intake process clearly eliminates friction before a visitor ever submits a form.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
