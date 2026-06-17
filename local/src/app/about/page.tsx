import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'About Armedia | Strategy, Media & Growth Agency Auckland',
  description:
    'Learn about Armedia, a New Zealand marketing media agency combining strategy, advertising, media planning, AI workflows, business intelligence, and campaign reporting.',
  keywords: [
    'about Armedia',
    'marketing media agency Auckland',
    'strategy and media agency NZ',
    'advertising and growth agency',
    'AI and business intelligence agency',
    'campaign planning agency',
    'brand growth strategy',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Armedia | Strategy, Media & Growth Agency Auckland',
    description:
      'A New Zealand agency combining strategy, advertising, media planning, AI workflows, BI dashboards, and reporting for smarter growth.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Armedia | Strategy, Media & Growth Agency Auckland',
    description:
      'Strategy, advertising, media planning, AI workflows, business intelligence, and campaign reporting for growth-focused brands.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-about armedia-site">
      <Header />
      <main id="main-content">
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
