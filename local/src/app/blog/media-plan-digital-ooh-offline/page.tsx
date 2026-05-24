import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'How to Build a Media Plan Across Digital, OOH, and Offline Channels',
  description:
    'A practical media planning framework for digital campaigns, OOH media, offline marketing, budget allocation, and campaign measurement.',
  alternates: { canonical: '/blog/media-plan-digital-ooh-offline' },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <article className="page-shell section legal-content">
          <p className="eyebrow">Media Planning</p>
          <h1 className="page-title">How to Build a Media Plan Across Digital, OOH, and Offline Channels</h1>
          <p>
            A strong media plan starts with the business goal, not the channel. Before choosing
            Meta Ads, Google Ads, billboards, print, events, or offline activations, define the
            audience, offer, budget, geography, timeline, and measurement plan.
          </p>
          <h2>Start with the role of each channel</h2>
          <p>
            Digital media is strong for targeting, traffic, retargeting, and fast testing. OOH
            media supports visibility and recall. Offline marketing helps local awareness, trust,
            and physical presence. The best plan gives every channel a clear job.
          </p>
          <h2>Plan measurement early</h2>
          <p>
            Use landing pages, QR codes, campaign URLs, call tracking, CRM tags, and weekly reports
            so campaign performance is easier to review.
          </p>
          <Link className="text-link" href="/blog">Back to insights</Link>
        </article>
      </main>
      <Footer />
    </div>
  )
}
