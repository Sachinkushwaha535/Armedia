import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import WhoWeArePage from '../../components/WhoWeArePage'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'
import { buildSocialMetadata, pageDescriptions } from '../../data/siteMetadata'
import { aboutKeywords } from '../../data/siteKeywords'

export const metadata: Metadata = {
  title: {
    absolute: 'Who We Are | Auckland Web Development & Media Agency — Armedia',
  },
  description: pageDescriptions.about,
  keywords: [...aboutKeywords],
  alternates: {
    canonical: '/about',
  },
  ...buildSocialMetadata({
    description: pageDescriptions.about,
    path: '/about',
    openGraphTitle: 'Who We Are | Auckland Web Development & Media Agency — Armedia',
    twitterTitle: 'Who We Are | Armedia Auckland',
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
      <WhoWeArePage />
      <TWGFooter hideIntro />
    </main>
  )
}
