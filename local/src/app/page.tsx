import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const fullUrl = `${siteUrl}/`

/**
 * 2. MAIN HOMEPAGE SEO METADATA
 * - Brand identity appends cleanly via dynamic layouts.
 * - Eliminated the heavy keyword bloat to favor algorithmic priority.
 * - Formatted structural social cards with explicit rendering bounds.
 */
export const metadata: Metadata = {
  title: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
  description:
    'Armedia helps brands scale using data-driven performance advertising, custom AI workflows, business intelligence systems, and out-of-home (OOH) media.',
  alternates: {
    canonical: fullUrl,
  },
  openGraph: {
    title: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
    description:
      'We combine AI tools, custom data dashboards, and multi-channel media planning built explicitly for modern brand growth.',
    url: fullUrl,
    type: 'website',
    siteName: 'Armedia',
    locale: 'en_NZ',
    images: [
      {
        url: `${siteUrl}/images/global-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Armedia AI, BI, and Media Advertising Agency New Zealand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
    description:
      'Armedia plans and executes smarter marketing media campaigns across AI, BI, ads, digital media, OOH, and offline channels.',
    images: [`${siteUrl}/images/global-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. CORPORATE BRAND IDENTITY ENGINE (JSON-LD SCHEMA)
   * Connects your home route specifically to your official operational profile.
   */
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Armedia',
    'url': siteUrl,
    'logo': `${siteUrl}/logo-icon.png`,
    'image': `${siteUrl}/images/global-og.jpg`,
    'description': 'An integrated marketing media agency specialized in deployment of AI tools, business intelligence data systems, performance advertising, and OOH media planning.',
    'sameAs': [
      'https://linkedin.com', // Update with your actual social links when live
    ]
  }

  return (
    <div className="site-shell page-home">
      {/* Structural graph script to declare brand identity to search bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
