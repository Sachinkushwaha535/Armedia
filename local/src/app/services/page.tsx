import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import ServicesPage from '../../components/ServicesPage'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'
import { servicesKeywords } from '../../data/siteKeywords'
import { buildSocialMetadata } from '../../data/siteMetadata'

const servicesDescription =
  'Web development, media, sales systems, SEO, BI dashboards, AI automation, and operations support for NZ businesses — from Armedia Auckland.'

export const metadata: Metadata = {
  title: 'Services | Web Development, Media & Business Systems',
  description: servicesDescription,
  keywords: [...servicesKeywords],
  alternates: {
    canonical: '/services',
  },
  ...buildSocialMetadata({
    description: servicesDescription,
    path: '/services',
    openGraphTitle: 'Services | Web Development, Media & Business Systems — Armedia',
    twitterTitle: 'Armedia Services | Web, Media & Systems Auckland',
    twitterDescription: servicesDescription,
  }),
}

export default function Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
    ],
  }

  return (
    <main id="main-content" className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <ServicesPage />
      <TWGFooter />
    </main>
  )
}
