import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeProvider'
import {
  businessAddress,
  contactEmail,
  contactPhone,
  getSameAsLinks,
  marketFocus,
  siteUrl,
} from '../components/siteConfig'
import '../index.css'
import '../App.css'
import '../styles/armedia-system.css'

const fontDisplay = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Armedia | Marketing Media Agency for Strategy, AI, BI & Advertising',
    template: '%s | Armedia',
  },
  description:
    'Armedia is a New Zealand marketing media agency helping brands with strategy, advertising, AI workflows, business intelligence, digital media, and campaign reporting.',
  applicationName: 'Armedia',
  authors: [{ name: 'Armedia' }],
  creator: 'Armedia',
  publisher: 'Armedia',
  category: 'Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    'Armedia',
    'marketing media agency New Zealand',
    'marketing agency Auckland',
    'advertising agency Auckland',
    'AI marketing agency New Zealand',
    'business intelligence agency Auckland',
    'digital media agency NZ',
    'media planning agency Auckland',
    'OOH advertising New Zealand',
    'campaign reporting agency',
    'growth strategy agency',
    'SEO agency Auckland',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: '/',
    siteName: 'Armedia',
    title: 'Armedia | Marketing Media Agency for Strategy, AI, BI & Advertising',
    description:
      'New Zealand marketing media agency for strategy, advertising, AI workflows, business intelligence, digital media, and campaign reporting.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | Strategy, AI, BI & Advertising',
    description:
      'Marketing media agency for strategy, advertising, AI workflows, BI dashboards, digital media, and growth planning.',
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
    icon: [{ url: '/logo-icon.png', type: 'image/png' }],
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const sameAs = getSameAsLinks()

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Armedia',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        email: contactEmail,
        telephone: contactPhone,
        sameAs,
        description:
          'Armedia is a New Zealand marketing media agency focused on strategy, advertising, AI workflows, business intelligence, digital media, and campaign reporting.',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: 'Armedia',
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        logo: `${siteUrl}/logo.png`,
        email: contactEmail,
        telephone: contactPhone,
        parentOrganization: { '@id': `${siteUrl}/#organization` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${businessAddress.streetAddress}, ${businessAddress.addressLocality}`,
          addressLocality: 'Auckland',
          addressRegion: businessAddress.addressRegion,
          addressCountry: businessAddress.addressCountry,
        },
        priceRange: '$$',
        areaServed: marketFocus,
        description:
          'Armedia helps brands plan and improve campaigns through strategy, advertising, AI systems, BI dashboards, digital media, and reporting.',
        serviceType: [
          'Marketing Strategy',
          'Advertising',
          'Digital Media',
          'Business Intelligence',
          'AI Workflows',
          'Media Planning',
          'Campaign Reporting',
          'OOH Media',
          'Growth Strategy',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Armedia',
        url: siteUrl,
        inLanguage: 'en-NZ',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }

  return (
    <html lang="en-NZ" data-scroll-behavior="smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('armedia-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
