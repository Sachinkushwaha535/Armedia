import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import ChatWidget from '../components/ChatWidget'
import '../index.css'
import '../App.css'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

/**
 * 2. GLOBAL SEO METADATA CONFIGURATION
 * - Utilizing Next.js metadataBase to automatically convert relative paths to absolute URLs.
 * - Removed obsolete keywords metadata array to strictly prevent stuffing penalties.
 * - Enriched OpenGraph profiles and ensured clean multi-device web crawler rules.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
    template: '%s | Armedia',
  },
  description:
    'Armedia is an omnichannel marketing media agency scaling brands using data-driven advertising, AI workflows, business intelligence, and out-of-home (OOH) media.',
  applicationName: 'Armedia',
  authors: [{ name: 'Armedia', url: siteUrl }],
  creator: 'Armedia',
  publisher: 'Armedia',
  category: 'Advertising',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: '/',
    siteName: 'Armedia',
    title: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
    description:
      'Partner with Armedia to scale your brand. We integrate performance marketing advertising, custom BI dashboards, OOH media buying, and AI operations.',
    images: [
      {
        url: '/images/global-og.jpg', // Ensure a high-quality brand card image exists here
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
      'We combine AI tools, custom data dashboards, and multi-channel media planning built explicitly for modern brand growth.',
    images: ['/images/global-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }, // Highly recommended for clean scale
    ],
    shortcut: '/logo-icon.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }, // Best practice for iOS home screens
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  /**
   * 3. CORPORATE ENTITY STRUCTURED DATA (JSON-LD)
   * Fixed missing 'image', 'priceRange', and 'logo' properties to prevent 
   * critical warning diagnostics inside Google Search Console.
   */
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Armedia',
    'url': siteUrl,
    'logo': `${siteUrl}/logo-icon.png`,
    'image': `${siteUrl}/images/global-og.jpg`,
    'email': 'contact.armedianz@gmail.com',
    'priceRange': '$$$', // Required for LocalBusiness schema to completely validate
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Auckland',
      'addressCountry': 'NZ',
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Auckland' },
      { '@type': 'Country', 'name': 'New Zealand' },
      { '@type': 'Country', 'name': 'Australia' }
    ],
    'description':
      'Armedia is an integrated marketing media agency specialized in deployment of AI tools, business intelligence data systems, performance advertising, and OOH media planning.',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Marketing and Engineering Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'AI Marketing Workflows and Automation'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Business Intelligence Dashboards'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Omnichannel Media Planning and Advertising'
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <ChatWidget /> 
      </body>
    </html>
  )
}
