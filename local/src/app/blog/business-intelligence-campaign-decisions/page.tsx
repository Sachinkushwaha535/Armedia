import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { blogBiKeywords } from '../../../data/siteKeywords'
import { buildSocialMetadata } from '../../../data/siteMetadata'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

const articleDescription =
  'How BI dashboards, customer data, campaign analytics, and competitor signals help marketing teams decide what to improve next.'

export const metadata: Metadata = {
  title: 'Business Intelligence for Campaign Decisions',
  description: articleDescription,
  keywords: [...blogBiKeywords],
  alternates: { canonical: '/blog/business-intelligence-campaign-decisions' },
  ...buildSocialMetadata({
    description: articleDescription,
    path: '/blog/business-intelligence-campaign-decisions',
    openGraphTitle: 'Business Intelligence for Campaign Decisions',
    twitterTitle: 'Business Intelligence for Decisions | Armedia',
    twitterDescription: articleDescription,
    type: 'article',
  }),
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Business Intelligence for Campaign Decisions',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: { '@type': 'Organization', name: 'Armedia', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/business-intelligence-campaign-decisions`,
    image: `${siteUrl}/logo.png`,
  }

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="page-shell section legal-content">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <p className="eyebrow">Business Intelligence</p>
          <h1 className="page-title">Business Intelligence for Campaign Decisions</h1>
          <p>
            Campaign reporting should not only show numbers. It should help teams decide what to
            stop, what to improve, and what to scale. Business intelligence turns scattered data
            into clearer action.
          </p>
          <h2>What to track</h2>
          <p>
            Useful dashboards combine ad spend, reach, leads, lead quality, conversion rate,
            customer segments, sales follow-up, and campaign source. This creates a fuller picture
            than ad platform reports alone.
          </p>
          <h2>What to decide</h2>
          <p>
            Good BI helps answer practical questions: which audience responds, which creative is
            weak, which channel creates better leads, and which campaign deserves more budget.
          </p>
          <Link className="text-link" href="/blog">Back to insights</Link>
        </article>
      </main>
      <Footer />
    </div>
  )
}
