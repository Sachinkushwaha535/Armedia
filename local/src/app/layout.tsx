import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import ChatWidget from '../components/ChatWidget'
import '../index.css'
import '../App.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
    template: '%s | Armedia',
  },
  description:
    'Armedia is a marketing media agency for AI tools, business intelligence, advertising, digital media, OOH media, offline marketing, and growth strategy.',
  applicationName: 'Armedia',
  authors: [{ name: 'Armedia' }],
  creator: 'Armedia',
  publisher: 'Armedia',
  category: 'Advertising',
  keywords: [
    'Armedia',
    'marketing media agency',
    'AI marketing tools',
    'business intelligence agency',
    'advertising agency',
    'digital media agency',
    'OOH media agency',
    'offline marketing',
    'performance marketing',
    'Meta Ads management',
    'Google Ads management',
    'campaign analytics',
    'brand strategy',
    'growth strategy',
    'media planning',
    'lead generation services',
    'campaign reporting',
  ],
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
      'Marketing media agency for AI tools, business intelligence, advertising, digital media, OOH media, offline marketing, and growth strategy.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | AI, BI, Advertising & Marketing Media Agency',
    description:
      'AI tools, BI dashboards, advertising, digital media, OOH media, offline marketing, and growth strategy for growing brands.',
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
      { url: '/logo-icon.png', type: 'image/png' },
    ],
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Armedia',
    url: siteUrl,
    email: 'contact.armedianz@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    areaServed: ['Auckland', 'New Zealand', 'Australia'],
    description:
      'Armedia provides AI marketing tools, business intelligence, advertising, digital media, OOH media, offline marketing, campaign analytics, and growth strategy.',
    serviceType: [
      'AI Marketing Tools',
      'Business Intelligence',
      'Advertising',
      'Digital Media',
      'OOH Media',
      'Offline Marketing',
      'Performance Marketing',
      'Media Planning',
      'Campaign Analytics',
      'Brand Strategy',
      'Growth Strategy',
    ],
  }

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
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
