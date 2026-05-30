import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StartProjectPage from '../../components/StartProjectPage'

export const metadata: Metadata = {
  title: 'Start a Project | Marketing Media, AI, BI & Advertising Brief',
  description:
    'Start a project with Armedia and get a tailored brief for AI, BI, advertising, media planning, and growth strategy.',
  alternates: {
    canonical: '/start-project',
  },
  openGraph: {
    title: 'Start a Project | Marketing Media, AI, BI & Advertising Brief',
    description:
      'Prepare a focused project brief for marketing media, AI, BI, advertising, OOH, offline marketing, content, web, app, or growth strategy work.',
    url: '/start-project',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project | Marketing Media, AI, BI & Advertising Brief',
    description:
      'Start a focused Armedia project brief for AI, BI, advertising, media, content, web, app, SEO, or growth strategy work.',
  },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <StartProjectPage />
      </main>
      <Footer />
    </div>
  )
}
