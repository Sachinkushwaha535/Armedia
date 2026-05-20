import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServicesPage from '../../components/ServicesPage'

export const metadata: Metadata = {
  title: 'Services | Web Design Auckland, React Developers NZ, SEO & Ecommerce',
  description:
    'Explore Armedia services including Web Design Auckland, React Developers NZ, SEO Agency Auckland, Ecommerce Website Auckland, AI agents, data, cybersecurity, and integrations.',
  keywords: [
    'Armedia services',
    'Web Design Auckland',
    'React Developers NZ',
    'SEO Agency Auckland',
    'Ecommerce Website Auckland',
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
    title: 'Armedia Services | Web Design, React, SEO, Ecommerce & AI',
    description:
      'Dedicated service pages for web design, React development, SEO, ecommerce, AI automation, integrations, and digital growth systems.',
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
