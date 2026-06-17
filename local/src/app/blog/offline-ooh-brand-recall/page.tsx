import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import BlogArticleShell, { ArticleSection } from '../../../components/motion/BlogArticleShell'

import { siteUrl } from '../../../components/siteConfig'

export const metadata: Metadata = {
  title: 'Why Brand Recall Needs Offline and OOH Media',
  description:
    'Why outdoor advertising, print media, local activations, and retail visibility can strengthen digital campaigns and brand recall.',
  alternates: { canonical: '/blog/offline-ooh-brand-recall' },
  openGraph: {
    title: 'Why Brand Recall Needs Offline and OOH Media',
    description:
      'Why outdoor advertising, print media, local activations, and retail visibility can strengthen digital campaigns and brand recall.',
    url: '/blog/offline-ooh-brand-recall',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Brand Recall Needs Offline and OOH Media',
    description:
      'How outdoor media, print, retail visibility, and local activations strengthen digital campaigns and brand recall.',
  },
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
    <div className="site-shell armedia-site">
      <Header />
      <main id="main-content">
        <BlogArticleShell
          kicker="OOH + Offline"
          title="Why Brand Recall Needs Offline and OOH Media"
          intro="Digital campaigns can drive clicks, but brand memory often grows when people see the same message in the real world. OOH and offline media help make a brand feel more present, local, and trustworthy."
          showBackLink
          schemaScript={
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          }
        >
          <ArticleSection index={0}>
            <h2>Use offline media for presence</h2>
            <p>
              Billboards, print, retail displays, events, and local activations can support launches,
              promotions, and awareness campaigns when the message is simple and repeated clearly.
            </p>
          </ArticleSection>
          <ArticleSection index={1}>
            <h2>Connect offline to digital</h2>
            <p>
              QR codes, short URLs, local landing pages, and retargeting can connect offline attention
              to measurable digital journeys.
            </p>
          </ArticleSection>
        </BlogArticleShell>
      </main>
      <Footer />
    </div>
  )
}
