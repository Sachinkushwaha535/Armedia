import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Performance Advertising Without Wasting Budget',
  description:
    'How to reduce wasted ad spend with clearer offers, better creative testing, retargeting, conversion tracking, and campaign reviews.',
  alternates: { canonical: '/blog/performance-advertising-budget' },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <article className="page-shell section legal-content">
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
