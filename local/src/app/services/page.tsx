import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServicesPage from '../../components/ServicesPage'

export const metadata: Metadata = {
  title: 'Services | AI, BI, Advertising & Marketing Media',
  description:
    'Armedia is a New Zealand marketing agency offering AI tools, BI dashboards, advertising, SEO, digital media, OOH, and growth strategy for ambitious brands.',
  keywords: [
    'Armedia services',
    'marketing media services',
    'AI marketing tools',
    'AI advertising tools',
    'business intelligence dashboards',
    'advertising agency services',
    'Meta Ads management',
    'Google Ads management',
    'digital media planning',
    'OOH media planning',
    'offline marketing campaigns',
    'media buying',
    'content production',
    'influencer marketing',
    'brand activation',
    'PR campaign planning',
    'event marketing',
    'retail marketing',
    'CRM marketing',
    'web development',
    'Android iOS development',
    'SEO landing pages',
    'ecommerce growth',
    'software engineering',
    'API integration',
    'brand strategy',
    'growth strategy',
    'campaign analytics',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Armedia Services | AI, BI, Advertising & Marketing Media',
    description:
      'Outcome-focused services for AI marketing, BI dashboards, advertising, digital media, OOH, offline marketing, media buying, creative content, PR, events, CRM, web development, apps, SEO, e-commerce, software, and automation.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armedia Services | AI, BI, Advertising & Marketing Media',
    description:
      'Explore AI marketing, BI dashboards, advertising, digital media, OOH, offline media, SEO, web, apps, e-commerce, and automation services.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-services">
      <Header />
      <main id="main-content">
        <ServicesPage />
      </main>
      <Footer />
    </div>
  )
}
