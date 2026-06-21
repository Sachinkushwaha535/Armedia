import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactPage from '../../components/ContactPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'
import { contactKeywords } from '../../data/siteKeywords'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Armedia | Start a Web, Media or Business Systems Project',
  },
  description:
    'Contact Armedia about web development, media, sales systems, CRM, workflow automation, reporting, or end-to-end business support in Auckland and NZ.',
  keywords: [...contactKeywords],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Armedia | Start a Web, Media or Business Systems Project',
    description:
      'Talk to Armedia about web, media, systems, and business growth — from websites and CRM to automation and reporting.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Armedia | Start a Web, Media or Business Systems Project',
    description:
      'Contact Armedia for web, media, sales systems, workflow automation, reporting, or full end-to-end support.',
  },
}

function ContactPageFallback() {
  return <div className="armedia-section-dark min-h-[50vh]" aria-hidden="true" />
}

export default function Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
    ],
  }

  return (
    <main id="main-content" className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <Suspense fallback={<ContactPageFallback />}>
        <ContactPage />
      </Suspense>
      <TWGFooter />
    </main>
  )
}
