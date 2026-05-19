import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StartProjectPage from '../../components/StartProjectPage'

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    'Start a project with Armedia and prepare a focused brief for web development, AI, data, cybersecurity, UX/UI, or consulting work.',
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
