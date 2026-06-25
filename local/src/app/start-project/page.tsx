import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import StartProjectPage from '../../components/StartProjectPage'
import TWGFooter from '../../components/twg/TWGFooter'
import { buildSocialMetadata, pageDescriptions } from '../../data/siteMetadata'
import { startProjectKeywords } from '../../data/siteKeywords'

export const metadata: Metadata = {
  title: {
    absolute: 'Start a Project | Web Development, Sales Systems, Media & Operations — Armedia',
  },
  description: pageDescriptions.startProject,
  keywords: [...startProjectKeywords],
  alternates: {
    canonical: '/start-project',
  },
  ...buildSocialMetadata({
    description: pageDescriptions.startProject,
    path: '/start-project',
    openGraphTitle: 'Start a Project | Web Development, Sales Systems, Media & Operations — Armedia',
    twitterTitle: 'Start a Project | Armedia Auckland',
    twitterDescription: pageDescriptions.startProject,
  }),
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
