import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import StartProjectPage from '../../components/StartProjectPage'
import TWGFooter from '../../components/twg/TWGFooter'
import { startProjectKeywords } from '../../data/siteKeywords'

export const metadata: Metadata = {
  title: {
    absolute: 'Start a Project | Web, Media & Business Systems — Armedia',
  },
  description:
    'Start a project with Armedia for website development, media, CRM, workflow automation, reporting, or end-to-end business support.',
  keywords: [...startProjectKeywords],
  alternates: {
    canonical: '/start-project',
  },
  openGraph: {
    title: 'Start a Project | Web, Media & Business Systems — Armedia',
    description:
      'Tell us what your business needs — website, media, sales systems, operations, automation, reporting, or full end-to-end support.',
    url: '/start-project',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project | Web, Media & Business Systems — Armedia',
    description:
      'Project intake for website development, media, CRM, automation, reporting, and end-to-end business support.',
  },
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <StartProjectPage />
      <TWGFooter />
    </main>
  )
}
