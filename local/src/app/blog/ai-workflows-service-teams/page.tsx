import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import BlogArticleShell, { ArticleSection } from '../../../components/motion/BlogArticleShell'

import { siteUrl } from '../../../components/siteConfig'

export const metadata: Metadata = {
  title: 'Where AI Workflows Help Small Service Teams First',
  description:
    'A practical guide to AI workflows for service teams, including lead qualification, intake summaries, follow-up, and reporting.',
  alternates: { canonical: '/blog/ai-workflows-service-teams' },
  openGraph: {
    title: 'Where AI Workflows Help Small Service Teams First',
    description:
      'A practical guide to AI workflows for service teams, including lead qualification, intake summaries, follow-up, and reporting.',
    url: '/blog/ai-workflows-service-teams',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where AI Workflows Help Small Service Teams First',
    description:
      'Where service teams can use AI first: lead qualification, intake summaries, follow-up, admin, and reporting.',
  },
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
    <div className="site-shell armedia-site">
      <Header />
      <main id="main-content">
        <BlogArticleShell
          title="Where AI workflows help small service teams first"
          schemaScript={
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          }
        >
          <ArticleSection index={0}>
            <h2>Lead qualification</h2>
            <p>AI can turn messy inquiry details into a structured summary covering goals, budget, timeline, risks, and next steps.</p>
          </ArticleSection>
          <ArticleSection index={1}>
            <h2>Internal admin</h2>
            <p>Useful early workflows include email summaries, CRM updates, meeting notes, document drafting, and follow-up reminders.</p>
          </ArticleSection>
          <ArticleSection index={2}>
            <h2>Reporting</h2>
            <p>AI is most useful when paired with clean data fields, analytics events, and clear human review before anything reaches customers.</p>
          </ArticleSection>
        </BlogArticleShell>
      </main>
      <Footer />
    </div>
  )
}
