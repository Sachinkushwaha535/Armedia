import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { blogAdvertisingKeywords } from '../../../data/siteKeywords'
import { buildSocialMetadata } from '../../../data/siteMetadata'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

const articleDescription =
  'How to reduce wasted ad spend with clearer offers, better creative testing, retargeting, conversion tracking, and campaign reviews.'

export const metadata: Metadata = {
  title: 'Performance Advertising Without Wasting Budget',
  description: articleDescription,
  keywords: [...blogAdvertisingKeywords],
  alternates: { canonical: '/blog/performance-advertising-budget' },
  ...buildSocialMetadata({
    description: articleDescription,
    path: '/blog/performance-advertising-budget',
    openGraphTitle: 'Performance Advertising Without Wasting Budget',
    twitterTitle: 'Performance Advertising | Armedia',
    twitterDescription: articleDescription,
    type: 'article',
  }),
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Performance Advertising Without Wasting Budget',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: { '@type': 'Organization', name: 'Armedia', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/performance-advertising-budget`,
    image: `${siteUrl}/logo.png`,
  }

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="page-shell section legal-content">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <p className="eyebrow">Advertising</p>
          <h1 className="page-title">Performance Advertising Without Wasting Budget</h1>
          <p>
            Ad budget gets wasted when campaigns launch without a clear offer, audience, landing
            page, conversion event, and review rhythm. Performance marketing works better when the
            campaign system is planned before spend begins.
          </p>
          <h2>Test creative with purpose</h2>
          <p>
            Test different angles, not just different colours. Compare pain points, benefits,
            proof, offers, and calls to action so the data teaches you what the audience values.
          </p>
          <h2>Review weekly</h2>
          <p>
            Look at cost per lead, quality of lead, conversion rate, follow-up speed, and landing
            page behaviour. The goal is not only cheaper clicks. The goal is better business results.
          </p>
          <Link className="text-link" href="/blog">Back to insights</Link>
        </article>
      </main>
      <Footer />
    </div>
  )
}
