import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'
import { aboutKeywords } from '../../data/siteKeywords'
import { buildSocialMetadata, pageDescriptions } from '../../data/siteMetadata'

export const metadata: Metadata = {
  title: {
    absolute: 'About Armedia | Web Development, Media & Business Systems Partner',
  },
  description: pageDescriptions.about,
  keywords: [...aboutKeywords],
  alternates: {
    canonical: '/about',
  },
  ...buildSocialMetadata({
    description: pageDescriptions.about,
    path: '/about',
    openGraphTitle: 'About Armedia | Web Development, Media & Business Systems Partner',
    twitterTitle: 'About Armedia | Web Development & Media Agency Auckland',
    twitterDescription: pageDescriptions.about,
  }),
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
