import type { Metadata } from 'next'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/blog/ai-workflows-service-teams'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA (Next.js App Router Standard)
 */
export const metadata: Metadata = {
  title: 'Where AI Workflows Help Small Service Teams First | Armedia',
  description:
    'Discover practical AI workflows built for small service teams. Streamline lead qualification, internal admin, client follow-up, and reporting.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'Where AI Workflows Help Small Service Teams First | Armedia',
    description: 'A practical guide to implementing zero-waste AI workflows for lead intake, administrative tasks, and reporting.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00.000Z',
    authors: ['Armedia'],
    images: [
      {
        url: `${siteUrl}/images/blog/ai-workflows-service-teams-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'AI Workflows for Small Service Teams Graphic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where AI Workflows Help Small Service Teams First | Armedia',
    description: 'Practical guide to AI workflows for small teams: lead qualification, internal admin, and clear reporting setup.',
    images: [`${siteUrl}/images/blog/ai-workflows-service-teams-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. RICH SNIPPET ENGINE (JSON-LD SCHEMA)
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Where AI workflows help small service teams first',
    'description': 'A practical guide to AI workflows for service teams, including lead qualification, intake summaries, follow-up, and reporting.',
    'image': [`${siteUrl}/images/blog/ai-workflows-service-teams-og.jpg`],
    'datePublished': '2026-05-25T00:00:00.000Z',
    'dateModified': '2026-05-25T00:00:00.000Z',
    'author': { 
      '@type': 'Organization', 
      'name': 'Armedia',
      'url': siteUrl
    },
    'publisher': { 
      '@type': 'Organization', 
      'name': 'Armedia',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/images/logo.jpg`
      }
    },
    'mainEntityOfPage': fullUrl,
  }

  return (
    <div className="site-shell">
      <Header />
      <main>
        <article className="page-shell section legal-content max-w-2xl mx-auto px-4 py-8">
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} 
          />
          
          <header className="article-header mb-6">
            <p className="eyebrow uppercase tracking-wider text-xs font-semibold text-gray-500">Article</p>
            <h1 className="page-title text-3xl font-bold mt-1 mb-3">Where AI Workflows Help Small Service Teams First</h1>
            <p className="text-lg text-gray-600 font-medium">
              Implementing automation does not require enterprise budgets. For small agencies and service businesses, deploying targeted <strong>AI workflows</strong> optimizes operational efficiency by eliminating repetitive task friction.
            </p>
          </header>

          <div className="article-body space-y-6">
            {/* Section 1: Optimized for short, direct copy */}
            <section>
              <h2 className="text-xl font-bold mb-2">1. Lead Qualification and Intake</h2>
              <p className="text-gray-700">
                Messy website form submissions hide valuable client context. Integrating <strong>automated lead qualification</strong> systems parses unstructured inquiries instantly—mapping project goals, budgets, timelines, and operational risks into structured CRM entries before your sales team takes action.
              </p>
            </section>
            
            {/* Section 2: Clean scannable layout using clean subheadings instead of icons */}
            <section>
              <h2 className="text-xl font-bold mb-2">2. Internal Administrative Automation</h2>
              <p className="text-gray-700 mb-3">
                Administrative overhead drains focus. High-impact internal automation steps target daily operational bottlenecks:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Communication Summaries</p>
                  <p className="text-gray-600">Extract critical decisions from lengthy email threads and project channels automatically.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Meeting Intelligence</p>
                  <p className="text-gray-600">Generate structured action items and follow-up alerts straight from client consultations.</p>
                </div>
              </div>
            </section>
            
            {/* Section 3: Final punchy SEO point */}
            <section>
              <h2 className="text-xl font-bold mb-2">3. Data Accuracy and Reporting</h2>
              <p className="text-gray-700">
                A predictive workflow relies entirely on clean underlying datasets. <strong>AI data mapping</strong> works best when paired with verified analytics events. Maintaining a strict human-in-the-loop validation process keeps your customer-facing communication accurate and protected against system hallucination.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
