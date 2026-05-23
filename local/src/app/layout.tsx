import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../index.css'
import '../App.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Armedia | IT Services, Web Development & AI Solutions in Auckland',
    template: '%s | Armedia',
  },
  description:
    'Armedia is an Auckland digital studio offering web development, AI solutions, data analytics, cybersecurity, mobile apps, UX/UI design, lead generation, and IT consulting.',
  applicationName: 'Armedia',
  authors: [{ name: 'Armedia' }],
  creator: 'Armedia',
  publisher: 'Armedia',
  category: 'Technology',
  keywords: [
    'Armedia',
    'Armedia Auckland',
    'IT services Auckland',
    'web development Auckland',
    'website design Auckland',
    'AI solutions New Zealand',
    'data analytics services',
    'cybersecurity services',
    'mobile app development',
    'UX UI design',
    'software engineering',
    'lead generation services',
    'digital transformation consulting',
    'business automation',
    'ecommerce website development',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: '/',
    siteName: 'Armedia',
    title: 'Armedia | IT Services, Web Development & AI Solutions in Auckland',
    description:
      'Auckland digital studio for web development, AI solutions, data analytics, cybersecurity, mobile apps, UX/UI design, and business growth systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | IT Services, Web Development & AI Solutions in Auckland',
    description:
      'Web development, AI, data, cybersecurity, mobile apps, UX/UI design, and IT consulting for growing businesses.',
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
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
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
    email: 'hello@armedia.co.nz',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    areaServed: ['Auckland', 'New Zealand', 'Australia'],
    description:
      'Armedia provides web development, AI solutions, data analytics, cybersecurity, mobile app development, UX/UI design, lead generation, workflow automation, and IT consulting.',
    serviceType: [
      'Web Development',
      'AI Solutions',
      'Data Solutions',
      'Cybersecurity',
      'Mobile App Development',
      'UX/UI Design',
      'Software Engineering',
      'IT Consulting',
      'Lead Generation',
      'Workflow Automation',
      'Procurement Services',
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
      </body>
    </html>
  )
}
