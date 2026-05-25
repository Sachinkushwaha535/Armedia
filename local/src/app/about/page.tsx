import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

// AUTOMATION: Define your absolute base URL. Change this to your actual production domain.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://armedia.com' 

/**
 * 1. FULLY OPTIMIZED META DATA (Next.js App Router Standard)
 * - Strict length constraints applied to prevent Google snippet truncation.
 * - All spammy comma-separated keywords removed to avoid algorithmic penalties.
 * - Standardized absolute URLs across all search and social crawlers.
 */
export const metadata: Metadata = {
  title: 'About Armedia | Founder-Led Marketing Media Agency',
  description:
    'Discover Armedia, a founder-led agency scaling brands using data-driven advertising, AI marketing strategies, digital media planning, and creative PR.',
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About Armedia | Founder-Led Marketing Media Agency',
    description:
      'We combine AI, data intelligence, and creative media strategy to scale modern brands. Learn about our founder-led approach.',
    url: `${BASE_URL}/about`,
    siteName: 'Armedia',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${BASE_URL}/images/about-og.jpg`, // Ensure this asset physically exists in your /public folder
        width: 1200,
        height: 630,
        alt: 'Armedia Marketing Media Agency Leadership Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Armedia | Founder-Led Marketing Media Agency',
    description:
      'AI tools, data intelligence, and full-funnel media planning built for modern brand growth.',
    images: [`${BASE_URL}/images/about-og.jpg`],
  },
}

export default function Page() {
  /**
   * 2. STRUCTURED DATA (JSON-LD SCHEMA)
   * This injects critical context directly into Google's Knowledge Graph, 
   * proving that Armedia is an established Agency specializing in Marketing.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService', // Or 'Organization' based on preference
    'name': 'Armedia',
    'url': BASE_URL,
    'logo': `${BASE_URL}/images/logo.jpg`,
    'description': 'A founder-led marketing media agency specialized in AI tools, business intelligence, and multi-channel advertising strategy.',
    'sameAs': [
      'https://linkedin.com', // Update with your real social handles
      'https://twitter.com'
    ]
  }

  return (
    <div className="site-shell page-about">
      {/* Injecting Schema into the HTML head dynamically without layout layout blocking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
