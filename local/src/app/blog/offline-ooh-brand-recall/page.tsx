import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/blog/offline-ooh-brand-recall'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'Why Brand Recall Needs Offline and OOH Media | Armedia',
  description:
    'Discover how outdoor advertising, retail visibility, and local activations strengthen digital campaigns and maximize brand recall.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'Why Brand Recall Needs Offline and OOH Media | Armedia',
    description: 'Learn how combining real-world out-of-home (OOH) media with digital ads builds long-term consumer trust.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00.000Z',
    authors: ['Armedia'],
    images: [
      {
        url: `${siteUrl}/images/blog/offline-ooh-brand-recall-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'OOH and Offline Media Brand Recall Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Brand Recall Needs Offline and OOH Media | Armedia',
    images: [`${siteUrl}/images/blog/offline-ooh-brand-recall-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. RICH SNIPPET ENGINE (JSON-LD ARTICLE SCHEMA)
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Why Brand Recall Needs Offline and OOH Media',
    'description': 'Why outdoor advertising, print media, local activations, and retail visibility can strengthen digital campaigns and brand recall.',
    'image': [`${siteUrl}/images/blog/offline-ooh-brand-recall-og.jpg`],
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
            <p className="eyebrow uppercase tracking-wider text-xs font-semibold text-gray-500">OOH + Offline</p>
            <h1 className="page-title text-3xl font-bold mt-1 mb-3">Why Brand Recall Needs Offline and OOH Media</h1>
            <p className="text-lg text-gray-600 font-medium">
              While digital campaigns are excellent for driving immediate clicks, long-term consumer memory scales when people interact with your message in the physical world. Strong <strong>brand recall strategies</strong> bridge the gap between digital and physical spaces.
            </p>
          </header>

          <div className="article-body space-y-6">
            {/* Real-world footprint targeting premium OOH keywords */}
            <section>
              <h2 className="text-xl font-bold mb-2">Build Authority with Out-of-Home Advertising</h2>
              <p className="text-gray-700">
                Deploying traditional print media, strategic retail displays, corporate events, and physical <strong>out-of-home (OOH) advertising</strong> anchors your company presence. Seeing a clean, uncluttered campaign message repeated across premium physical environments naturally builds localized credibility and mental availability.
              </p>
            </section>

            {/* Cross-channel strategy section with structured typography borders */}
            <section>
              <h2 className="text-xl font-bold mb-2">Connect Real-World Attention to Digital Funnels</h2>
              <p className="text-gray-700 mb-3">
                Do not let real-world engagement happen in a vacuum. Merge offline impressions into measurable online customer actions using frictionless physical entry points:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">Direct Actions</p>
                  <p>Incorporate scannable QR codes, brief branded vanity URLs, and dedicated SMS keywords to turn physical glances into digital traffic.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Digital Retargeting</p>
                  <p>Utilize location-based mobile geofencing around your OOH placements to serve secondary, high-intent digital ads to users who passed your physical locations.</p>
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
