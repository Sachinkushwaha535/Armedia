import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'

export const metadata: Metadata = {
  title: 'Who We Are | Strategy, Media & Growth Agency',
  description:
    'Learn about Armedia, a New Zealand agency combining strategy, advertising, media planning, AI workflows, business intelligence, and campaign reporting.',
  keywords: [
    'about Armedia',
    'marketing media agency Auckland',
    'strategy and media agency NZ',
    'advertising and growth agency',
    'AI and business intelligence agency',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Who We Are | Strategy, Media & Growth Agency',
    description:
      'Strategy, advertising, media planning, AI workflows, BI dashboards, and reporting for growth-focused brands.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who We Are | Strategy, Media & Growth Agency',
    description:
      'Strategy, advertising, media planning, AI workflows, business intelligence, and campaign reporting.',
  },
}

export default function Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Who we are', item: `${siteUrl}/about` },
    ],
  }

  return (
    <main id="main-content" className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <AboutPage />
      <TWGFooter />
    </main>
  )
}
