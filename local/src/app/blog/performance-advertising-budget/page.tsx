import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import BlogArticleShell, { ArticleSection } from '../../../components/motion/BlogArticleShell'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

export const metadata: Metadata = {
  title: 'Performance Advertising Without Wasting Budget',
  description:
    'How to reduce wasted ad spend with clearer offers, better creative testing, retargeting, conversion tracking, and campaign reviews.',
  alternates: { canonical: '/blog/performance-advertising-budget' },
  openGraph: {
    title: 'Performance Advertising Without Wasting Budget',
    description:
      'How to reduce wasted ad spend with clearer offers, better creative testing, retargeting, conversion tracking, and campaign reviews.',
    url: '/blog/performance-advertising-budget',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Advertising Without Wasting Budget',
    description:
      'A practical way to reduce wasted ad spend through offer clarity, testing, retargeting, conversion tracking, and reviews.',
  },
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
    <div className="site-shell armedia-site">
      <Header />
      <main id="main-content">
        <BlogArticleShell
          kicker="Advertising"
          title="Performance Advertising Without Wasting Budget"
          intro="Ad budget gets wasted when campaigns launch without a clear offer, audience, landing page, conversion event, and review rhythm. Performance marketing works better when the campaign system is planned before spend begins."
          showBackLink
          schemaScript={
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          }
        >
          <ArticleSection index={0}>
            <h2>Test creative with purpose</h2>
            <p>
              Test different angles, not just different colours. Compare pain points, benefits,
              proof, offers, and calls to action so the data teaches you what the audience values.
            </p>
          </ArticleSection>
          <ArticleSection index={1}>
            <h2>Review weekly</h2>
            <p>
              Look at cost per lead, quality of lead, conversion rate, follow-up speed, and landing
              page behaviour. The goal is not only cheaper clicks. The goal is better business results.
            </p>
          </ArticleSection>
        </BlogArticleShell>
      </main>
      <Footer />
    </div>
  )
}
