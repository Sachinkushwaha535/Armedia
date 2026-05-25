import type { Metadata } from 'next'
import AboutPage from '../../components/AboutPage'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'About Armedia | Founder-Led Marketing Media Agency',
  description:
    'Learn about Armedia, a marketing media agency for AI tools, business intelligence, advertising, media planning, digital media, OOH, offline marketing, creative, PR, events, CRM, and campaign-supporting technology.',
  keywords: [
    'about Armedia',
    'founder led marketing media agency',
    'AI marketing agency',
    'business intelligence agency',
    'advertising strategy',
    'digital media planning',
    'OOH media planning',
    'offline marketing strategy',
    'media buying agency',
    'content production agency',
    'campaign analytics',
    'marketing technology',
    'brand growth strategy',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Armedia | Founder-Led Marketing Media Agency',
    description:
      'Strategy, creative, AI, BI, advertising, media planning, offline marketing, and technology support for brand growth.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Armedia | Founder-Led Marketing Media Agency',
    description:
      'AI tools, BI dashboards, advertising, digital media, OOH media, offline marketing, creative, PR, CRM, and technology support.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-about">
      <Header />
      <main id="main-content">
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
