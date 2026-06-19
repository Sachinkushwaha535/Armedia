import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import ServiceLandingPage from '../../components/ServiceLandingPage'
import TWGFooter from '../../components/twg/TWGFooter'

export const metadata: Metadata = {
  title: 'React Developers NZ | React Development',
  description:
    'React Developers NZ service for fast websites, web apps, integrations, maintainable components, pricing, timeline, technologies, portfolio fit, and FAQ.',
  alternates: { canonical: '/react-development-nz' },
  openGraph: {
    title: 'React Developers NZ | React Development',
    description:
      'React and TypeScript development for New Zealand teams that need fast, maintainable websites, web apps, and integrations.',
    url: '/react-development-nz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Developers NZ | React Development',
    description:
      'React and TypeScript development for fast, maintainable websites, web apps, components, and integrations.',
  },
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <ServiceLandingPage
        kicker="React development NZ"
        path="/react-development-nz"
        title="React development for fast, maintainable digital products."
        description="Armedia builds React interfaces and web apps with clean component structure, responsive behaviour, and practical integrations."
        points={[
          'React component development',
          'TypeScript implementation',
          'API and CRM integrations',
          'Performance and accessibility checks',
          'Reusable UI patterns and code structure',
        ]}
        outcomes={[
          'Cleaner maintainability',
          'Fast interactive experiences',
          'Reliable frontend delivery',
          'Systems your team can extend',
        ]}
        benefits={[
          'Less fragile frontend code as the product grows',
          'Reusable components for faster future feature work',
          'Cleaner API integration patterns',
          'Production-ready structure for ongoing maintenance',
        ]}
        timeline={[
          'Technical review and scope: 2-4 days',
          'Component architecture: 3-6 days',
          'Feature build and integration: 1-4 weeks',
          'QA, performance checks, and handover: 2-5 days',
        ]}
        technologies={[
          'React',
          'TypeScript',
          'Next.js',
          'REST APIs',
          'Forms and validation',
          'Analytics events',
        ]}
        portfolio={[
          'Interactive website sections',
          'Customer portals and dashboards',
          'CRM-connected lead forms',
          'Approved live links can be attached after client permission',
        ]}
      />
      <TWGFooter />
    </main>
  )
}
