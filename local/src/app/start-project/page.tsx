import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StartProjectPage from '../../components/StartProjectPage'

export const metadata: Metadata = {
  title: 'Start a Project | Marketing Media, AI, BI & Advertising Brief',
  description:
    'Start a project with Armedia and prepare a focused brief for marketing media, AI, BI, advertising, OOH, offline marketing, content, web, app, or growth strategy work.',
  alternates: {
    canonical: '/start-project',
  },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <StartProjectPage />
      </main>
      <Footer />
    </div>
  )
}
