import type { Metadata } from 'next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

export const metadata: Metadata = {
  title: 'AI, BI, Advertising & Marketing Media Agency',
  description:
    'Armedia helps brands grow with AI marketing tools, business intelligence, advertising, digital media, OOH media, offline marketing, and growth strategy.',
  keywords: [
    'marketing media agency',
    'AI marketing tools',
    'business intelligence',
    'advertising agency',
    'digital media',
    'OOH media',
    'offline marketing',
    'growth strategy',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI, BI, Advertising & Marketing Media Agency',
    description:
      'AI tools, BI dashboards, advertising, digital media, OOH media, offline marketing, and growth strategy for measurable brand growth.',
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI, BI, Advertising & Marketing Media Agency',
    description:
      'Armedia plans and executes smarter marketing media campaigns across AI, BI, ads, digital media, OOH, and offline channels.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-home">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
