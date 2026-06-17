import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import BlogArticleShell, { ArticleSection } from '../../../components/motion/BlogArticleShell'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

export const metadata: Metadata = {
  title: 'How Auckland Businesses Can Improve Website Trust in 2026',
  description:
    'A practical guide for Auckland service businesses improving website trust, speed, contact clarity, proof, and conversion paths in 2026.',
  alternates: { canonical: '/blog/website-trust-auckland-2026' },
  openGraph: {
    title: 'How Auckland Businesses Can Improve Website Trust in 2026',
    description:
      'A practical guide for Auckland service businesses improving website trust, speed, contact clarity, proof, and conversion paths in 2026.',
    url: '/blog/website-trust-auckland-2026',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Auckland Businesses Can Improve Website Trust in 2026',
    description:
      'Improve website trust with clearer offers, proof, speed, contact clarity, and conversion paths.',
  },
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Auckland businesses can improve website trust in 2026',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: { '@type': 'Organization', name: 'Armedia', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/website-trust-auckland-2026`,
    image: `${siteUrl}/logo.png`,
  }

  return (
    <div className="site-shell armedia-site">
      <Header />
      <main id="main-content">
        <BlogArticleShell
          title="How Auckland businesses can improve website trust in 2026"
          schemaScript={
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          }
        >
          <ArticleSection index={0}>
            <h2>Start with clarity</h2>
            <p>Visitors should understand who you help, what you offer, where you operate, and what to do next within the first screen.</p>
          </ArticleSection>
          <ArticleSection index={1}>
            <h2>Add proof carefully</h2>
            <p>Use real client names, case studies, screenshots, project links, and metrics only when they are approved and accurate.</p>
          </ArticleSection>
          <ArticleSection index={2}>
            <h2>Make contact feel safe</h2>
            <p>Email, location, business hours, response expectations, and a clear project process reduce uncertainty before a visitor sends an inquiry.</p>
          </ArticleSection>
        </BlogArticleShell>
      </main>
      <Footer />
    </div>
  )
}
