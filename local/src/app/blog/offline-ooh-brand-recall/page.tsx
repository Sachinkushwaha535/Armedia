import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export const metadata: Metadata = {
  title: 'Why Brand Recall Needs Offline and OOH Media',
  description:
    'Why outdoor advertising, print media, local activations, and retail visibility can strengthen digital campaigns and brand recall.',
  alternates: { canonical: '/blog/offline-ooh-brand-recall' },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <article className="page-shell section legal-content">
          <p className="eyebrow">OOH + Offline</p>
          <h1 className="page-title">Why Brand Recall Needs Offline and OOH Media</h1>
          <p>
            Digital campaigns can drive clicks, but brand memory often grows when people see the
            same message in the real world. OOH and offline media help make a brand feel more
            present, local, and trustworthy.
          </p>
          <h2>Use offline media for presence</h2>
          <p>
            Billboards, print, retail displays, events, and local activations can support launches,
            promotions, and awareness campaigns when the message is simple and repeated clearly.
          </p>
          <h2>Connect offline to digital</h2>
          <p>
            QR codes, short URLs, local landing pages, and retargeting can connect offline attention
            to measurable digital journeys.
          </p>
          <Link className="text-link" href="/blog">Back to insights</Link>
        </article>
      </main>
      <Footer />
    </div>
  )
}
