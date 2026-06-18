import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import ServicesPage from '../../components/ServicesPage'
import TWGFooter from '../../components/twg/TWGFooter'

export const metadata: Metadata = {
  title: 'Services | AI, BI, Advertising & Marketing Media',
  description:
    'Armedia is a New Zealand marketing agency offering strategy, advertising, AI workflows, BI dashboards, digital media, web development, and campaign reporting.',
  keywords: [
    'Armedia services',
    'marketing media services',
    'advertising agency Auckland',
    'business intelligence dashboards',
    'digital media planning',
    'SEO agency Auckland',
    'web development Auckland',
    'campaign strategy',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Armedia Services | Strategy, Advertising, AI & BI',
    description:
      'Explore strategy, creative, web development, digital marketing, insights, and connected campaign services from Armedia.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia Services | Strategy, Advertising, AI & BI',
    description:
      'Full-service marketing media agency services for New Zealand brands.',
  },
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <ServicesPage />
      <TWGFooter />
    </main>
  )
}
