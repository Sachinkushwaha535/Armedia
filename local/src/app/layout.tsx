import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Montserrat, Open_Sans, Playfair_Display } from 'next/font/google'
import { contactEmail, contactPhone, siteUrl } from '../components/siteConfig'
import {
  defaultOgDescription,
  defaultOgTitle,
  defaultTwitterDescription,
  defaultTwitterTitle,
  ogImage,
  organizationSchema,
  pageDescriptions,
} from '../data/siteMetadata'
import { siteKeywords } from '../data/siteKeywords'
import '../index.css'
import '../App.css'
import '../styles/armedia-pro.css'
import '../styles/armedia-services.css'
import '../styles/armedia-contact.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultOgTitle,
    template: '%s | Armedia',
  },
  description: pageDescriptions.home,
  applicationName: 'Armedia',
  authors: [{ name: 'Armedia' }],
  creator: 'Armedia',
  publisher: 'Armedia',
  category: 'Web Development',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [...siteKeywords],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: '/',
    siteName: 'Armedia',
    title: defaultOgTitle,
    description: defaultOgDescription,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTwitterTitle,
    description: defaultTwitterDescription,
    images: [ogImage.url],
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...organizationSchema,
        '@id': `${siteUrl}/#organization`,
        logo: `${siteUrl}${ogImage.url}`,
        ...(contactPhone ? { telephone: contactPhone } : {}),
        email: contactEmail,
        url: siteUrl,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Armedia',
        url: siteUrl,
        inLanguage: 'en-NZ',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }

  return (
    <html lang="en-NZ" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${openSans.variable} ${playfair.variable} font-body`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
