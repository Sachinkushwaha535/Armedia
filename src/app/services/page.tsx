import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServicesPage from '../../components/ServicesPage'

export const metadata: Metadata = {
  title: 'Services | Web Development, AI, Data, Cybersecurity & Apps',
  description:
    'Explore Armedia services including web development, AI agents, data engineering, cybersecurity, mobile app development, UX/UI design, IT consulting, lead generation, and workflow automation.',
  keywords: [
    'Armedia services',
    'web development services',
    'AI agents development',
    'custom AI solutions',
    'data engineering',
    'business intelligence dashboards',
    'cybersecurity compliance',
    'Android iOS development',
    'UX UI design services',
    'software engineering',
    'IT consulting Auckland',
    'lead generation',
    'workflow automation',
    'procurement services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Armedia Services | Web Development, AI, Data, Cybersecurity & Apps',
    description:
      'Professional IT and creative digital services for business growth, from web apps and AI automation to cybersecurity and analytics.',
    url: '/services',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-services">
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </div>
  )
}
