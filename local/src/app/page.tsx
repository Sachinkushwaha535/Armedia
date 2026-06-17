import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import { faqItems } from '../data/homeData'
import {
  buildHomeStructuredData,
  homeKeywords,
  homeMetaDescription,
} from '../lib/homeSeo'

export const metadata: Metadata = {
  title: 'Marketing Media Agency Auckland | Strategy, Advertising, AI, SEO & BI',
  description: homeMetaDescription,
  keywords: homeKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Armedia | Marketing Media Agency Auckland & New Zealand',
    description: homeMetaDescription,
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia | Marketing Media Agency Auckland & NZ',
    description: homeMetaDescription,
  },
}

export default function Page() {
  const structuredData = buildHomeStructuredData(faqItems)

  return (
    <div className="site-shell page-home armedia-site">
      <Header />
      <main id="main-content">
        {structuredData.map((schema, index) => (
          <script
            key={('@id' in schema && typeof schema['@id'] === 'string' ? schema['@id'] : null) ?? `home-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
