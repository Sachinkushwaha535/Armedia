import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { blogWebTrustKeywords } from '../../../data/siteKeywords'
import { buildSocialMetadata } from '../../../data/siteMetadata'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

const articleDescription =
  'A practical guide for Auckland service businesses improving website trust, speed, contact clarity, proof, and conversion paths in 2026.'

export const metadata: Metadata = {
  title: 'How Auckland Businesses Can Improve Website Trust in 2026',
  description: articleDescription,
  keywords: [...blogWebTrustKeywords],
  alternates: { canonical: '/blog/website-trust-auckland-2026' },
  ...buildSocialMetadata({
    description: articleDescription,
    path: '/blog/website-trust-auckland-2026',
    openGraphTitle: 'How Auckland Businesses Can Improve Website Trust in 2026',
    twitterTitle: 'Website Trust Auckland 2026 | Armedia',
    twitterDescription: articleDescription,
    type: 'article',
  }),
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
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="page-shell section legal-content">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <p className="eyebrow">Article</p>
          <h1 className="page-title">How Auckland businesses can improve website trust in 2026</h1>
          <section>
            <h2>Start with clarity</h2>
            <p>Visitors should understand who you help, what you offer, where you operate, and what to do next within the first screen.</p>
          </section>
          <section>
            <h2>Add proof carefully</h2>
            <p>Use real client names, case studies, screenshots, project links, and metrics only when they are approved and accurate.</p>
          </section>
          <section>
            <h2>Make contact feel safe</h2>
            <p>Email, location, business hours, response expectations, and a clear project process reduce uncertainty before a visitor sends an enquiry.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
