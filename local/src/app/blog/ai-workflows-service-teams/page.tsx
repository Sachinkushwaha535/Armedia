import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { blogAiWorkflowsKeywords } from '../../../data/siteKeywords'
import { buildSocialMetadata } from '../../../data/siteMetadata'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'

const articleDescription =
  'A practical guide to AI workflows for service teams, including lead qualification, intake summaries, follow-up, and reporting.'

export const metadata: Metadata = {
  title: 'Where AI Workflows Help Small Service Teams First',
  description: articleDescription,
  keywords: [...blogAiWorkflowsKeywords],
  alternates: { canonical: '/blog/ai-workflows-service-teams' },
  ...buildSocialMetadata({
    description: articleDescription,
    path: '/blog/ai-workflows-service-teams',
    openGraphTitle: 'Where AI Workflows Help Small Service Teams First',
    twitterTitle: 'AI Workflows for Service Teams | Armedia',
    twitterDescription: articleDescription,
    type: 'article',
  }),
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Where AI workflows help small service teams first',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Armedia' },
    publisher: { '@type': 'Organization', name: 'Armedia', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/ai-workflows-service-teams`,
    image: `${siteUrl}/logo.png`,
  }

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="page-shell section legal-content">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <p className="eyebrow">Article</p>
          <h1 className="page-title">Where AI workflows help small service teams first</h1>
          <section>
            <h2>Lead qualification</h2>
            <p>AI can turn messy enquiry details into a structured summary covering goals, budget, timeline, risks, and next steps.</p>
          </section>
          <section>
            <h2>Internal admin</h2>
            <p>Useful early workflows include email summaries, CRM updates, meeting notes, document drafting, and follow-up reminders.</p>
          </section>
          <section>
            <h2>Reporting</h2>
            <p>AI is most useful when paired with clean data fields, analytics events, and clear human review before anything reaches customers.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
