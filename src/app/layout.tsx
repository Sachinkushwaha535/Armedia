import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../index.css'
import '../App.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Armedia | Web Design Auckland, React Development NZ & AI Solutions',
    template: '%s | Armedia',
  },
  description:
    'Armedia is an Auckland digital studio for premium web design, React development, Next.js websites, SEO, e-commerce, API integrations, and AI solutions.',
  applicationName: 'Armedia',
  authors: [{ name: 'Armedia' }],
  creator: 'Armedia',
  publisher: 'Armedia',
  category: 'Technology',
  keywords: [
    'Armedia',
    'Armedia Auckland',
    'Web Design Auckland',
    'React Development NZ',
    'Next.js Agency NZ',
    'web development Auckland',
    'website design Auckland',
    'premium web design Auckland',
    'AI solutions New Zealand',
    'API integration Auckland',
    'ecommerce website Auckland',
    'technical SEO Auckland',
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
    title: 'Armedia | Web Design Auckland, React Development NZ & AI Solutions',
    description:
      'Auckland digital studio for premium web design, React development, Next.js websites, SEO, e-commerce, API integrations, and AI solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | Web Design Auckland, React Development NZ & AI Solutions',
    description:
      'Premium web design, React development, Next.js websites, SEO, e-commerce, API integrations, and AI solutions for growing businesses.',
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
    email: 'hello@armedia.co.nz',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    areaServed: ['Auckland', 'New Zealand', 'Australia'],
    description:
      'Armedia provides premium web design, React development, Next.js websites, SEO, e-commerce, API integration, AI solutions, workflow automation, and IT consulting.',
    serviceType: [
      'Web Design Auckland',
      'React Development NZ',
      'Next.js Agency NZ',
      'Web Development',
      'SEO',
      'E-commerce',
      'API Integration',
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
