import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactPage from '../../components/ContactPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'
import { contactKeywords } from '../../data/siteKeywords'
import { buildSocialMetadata, pageDescriptions } from '../../data/siteMetadata'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Armedia | Web Development, Media, Sales & Operations — Auckland, NZ',
  },
  description: pageDescriptions.contact,
  keywords: [...contactKeywords],
  alternates: {
    canonical: '/contact',
  },
  ...buildSocialMetadata({
    description: pageDescriptions.contact,
    path: '/contact',
    openGraphTitle: 'Contact Armedia | Web Development, Media, Sales & Operations — Auckland, NZ',
    twitterTitle: 'Contact Armedia | Web Development & Media Agency Auckland',
    twitterDescription: pageDescriptions.contact,
  }),
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
      <TWGFooter hideIntro />
    </main>
  )
}
