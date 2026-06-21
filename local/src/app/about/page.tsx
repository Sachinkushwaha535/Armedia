import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Navbar from '../../components/Navbar'
import TWGFooter from '../../components/twg/TWGFooter'
import { siteUrl } from '../../components/siteConfig'
import { aboutKeywords } from '../../data/siteKeywords'

export const metadata: Metadata = {
  title: {
    absolute: 'About Armedia | Web Development, Media & Business Systems Partner',
  },
  description:
    'Learn about Armedia — an Auckland web development and media agency supporting businesses end to end across web, media, systems, and operations.',
  keywords: [...aboutKeywords],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Armedia | Web Development, Media & Business Systems Partner',
    description:
      'An Auckland agency built to support your business end to end across web, media, sales systems, workflow, automation, and reporting.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Armedia | Web Development, Media & Business Systems Partner',
    description:
      'A practical partner for web, media, systems, and business growth — not just a marketing agency.',
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
