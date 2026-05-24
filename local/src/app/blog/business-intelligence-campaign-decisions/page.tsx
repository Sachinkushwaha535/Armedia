import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Business Intelligence for Campaign Decisions',
  description:
    'How BI dashboards, customer data, campaign analytics, and competitor signals help marketing teams decide what to improve next.',
  alternates: { canonical: '/blog/business-intelligence-campaign-decisions' },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <article className="page-shell section legal-content">
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
