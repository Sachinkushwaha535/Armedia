import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import BlogArticleShell, { ArticleSection } from '../../../components/motion/BlogArticleShell'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

export const metadata: Metadata = {
  title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
  description:
    'A practical media planning framework for digital campaigns, OOH media, offline marketing, budget allocation, and campaign measurement.',
  alternates: { canonical: '/blog/media-plan-digital-ooh-offline' },
  openGraph: {
    title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    description:
      'A practical media planning framework for digital campaigns, OOH media, offline marketing, budget allocation, and campaign measurement.',
    url: '/blog/media-plan-digital-ooh-offline',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    description:
      'A practical framework for choosing channel mix, message, budget, geography, and campaign measurement.',
  },
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: { '@type': 'Organization', name: 'Armedia', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/media-plan-digital-ooh-offline`,
    image: `${siteUrl}/logo.png`,
  }

  return (
    <div className="site-shell armedia-site">
      <Header />
      <main id="main-content">
        <BlogArticleShell
          kicker="Media Planning"
          title="How to Build a Media Plan Across Digital, OOH, and Offline Channels"
          intro="A strong media plan starts with the business goal, not the channel. Before choosing Meta Ads, Google Ads, billboards, print, events, or offline activations, define the audience, offer, budget, geography, timeline, and measurement plan."
          showBackLink
          schemaScript={
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          }
        >
          <ArticleSection index={0}>
            <h2>Start with the role of each channel</h2>
            <p>
              Digital media is strong for targeting, traffic, retargeting, and fast testing. OOH
              media supports visibility and recall. Offline marketing helps local awareness, trust,
              and physical presence. The best plan gives every channel a clear job.
            </p>
          </ArticleSection>
          <ArticleSection index={1}>
            <h2>Plan measurement early</h2>
            <p>
              Use landing pages, QR codes, campaign URLs, call tracking, CRM tags, and weekly reports
              so campaign performance is easier to review.
            </p>
          </ArticleSection>
        </BlogArticleShell>
      </main>
      <Footer />
    </div>
  )
}
