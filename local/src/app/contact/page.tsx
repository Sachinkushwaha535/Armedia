import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactPage from '../../components/ContactPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'

export const metadata: Metadata = {
  title: 'Contact | Start a Marketing Media Project',
  description:
    'Contact Armedia to discuss strategy, advertising, AI workflows, business intelligence, digital media, or campaign reporting in Auckland and NZ.',
  keywords: [
    'contact Armedia',
    'marketing media agency contact',
    'advertising agency Auckland',
    'AI marketing project',
    'business intelligence project',
    'get a quote marketing agency Auckland',
    'request marketing audit Auckland',
    'start marketing project NZ',
    'campaign enquiry Auckland',
    'media planning consultation',
    'digital marketing contact Auckland',
    'marketing agency phone Auckland',
    'hire marketing agency New Zealand',
    'free campaign audit Auckland',
    'marketing strategy consultation NZ',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Start a Marketing Media Project',
    description:
      'Share your campaign goal and get practical next steps for strategy, media, advertising, AI, and BI.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Start a Marketing Media Project',
    description: 'Contact Armedia for strategy, advertising, AI workflows, BI, and growth planning.',
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
