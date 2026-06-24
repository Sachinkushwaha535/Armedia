import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { blogOohKeywords } from '../../../data/siteKeywords'
import { buildSocialMetadata } from '../../../data/siteMetadata'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

const articleDescription =
  'Why outdoor advertising, print media, local activations, and retail visibility can strengthen digital campaigns and brand recall.'

export const metadata: Metadata = {
  title: 'Why Brand Recall Needs Offline and OOH Media',
  description: articleDescription,
  keywords: [...blogOohKeywords],
  alternates: { canonical: '/blog/offline-ooh-brand-recall' },
  ...buildSocialMetadata({
    description: articleDescription,
    path: '/blog/offline-ooh-brand-recall',
    openGraphTitle: 'Why Brand Recall Needs Offline and OOH Media',
    twitterTitle: 'Offline & OOH Brand Recall | Armedia',
    twitterDescription: articleDescription,
    type: 'article',
  }),
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why Brand Recall Needs Offline and OOH Media',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: { '@type': 'Organization', name: 'Armedia', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/offline-ooh-brand-recall`,
    image: `${siteUrl}/logo.png`,
  }

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="page-shell section legal-content">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <p className="eyebrow">OOH + Offline</p>
          <h1 className="page-title">Why Brand Recall Needs Offline and OOH Media</h1>
          <p>
            Digital campaigns can drive clicks, but brand memory often grows when people see the
            same message in the real world. OOH and offline media help make a brand feel more
            present, local, and trustworthy.
          </p>
          <h2>Use offline media for presence</h2>
          <p>
            Billboards, print, retail displays, events, and local activations can support launches,
            promotions, and awareness campaigns when the message is simple and repeated clearly.
          </p>
          <h2>Connect offline to digital</h2>
          <p>
            QR codes, short URLs, local landing pages, and retargeting can connect offline attention
            to measurable digital journeys.
          </p>
          <Link className="text-link" href="/blog">Back to insights</Link>
        </article>
      </main>
      <Footer />
    </div>
  )
}
