import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactPage from '../../components/ContactPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'

export const metadata: Metadata = {
  title: 'Contact | Start a Marketing Media Project',
  description:
    'Contact Armedia to discuss strategy, advertising, AI workflows, business intelligence, digital media, or campaign reporting in Auckland and across New Zealand.',
  keywords: [
    'contact Armedia',
    'marketing media agency contact',
    'advertising agency Auckland',
    'AI marketing project',
    'business intelligence project',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Armedia | Start a Marketing Media Project',
    description:
      'Share your campaign goal and get practical next steps for strategy, media, advertising, AI, and BI.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Armedia | Start a Marketing Media Project',
    description: 'Contact Armedia for strategy, advertising, AI workflows, BI, and growth planning.',
  },
}

function ContactPageFallback() {
  return <div className="armedia-section-dark min-h-[50vh]" aria-hidden="true" />
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <Suspense fallback={<ContactPageFallback />}>
        <ContactPage />
      </Suspense>
      <TWGFooter />
    </main>
  )
}
