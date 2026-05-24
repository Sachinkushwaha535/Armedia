import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServicesPage from '../../components/ServicesPage'

export const metadata: Metadata = {
  title: 'Services | Web Design, AI, Automation & Digital Growth',
  description:
    'Explore Armedia services for websites, React and Next.js development, SEO, e-commerce, AI agents, automation, cybersecurity, mobile apps, UX/UI, integrations, and digital growth.',
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
    title: 'Armedia Services | Web Design, AI, Automation & Digital Growth',
    description:
      'Outcome-focused digital services for websites, React development, SEO, ecommerce, AI automation, integrations, cybersecurity, and business growth systems.',
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
