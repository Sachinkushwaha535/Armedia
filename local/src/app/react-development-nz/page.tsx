import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'React Developers NZ | React Development by Armedia',
  description:
    'React Developers NZ service for fast websites, web apps, integrations, maintainable components, pricing, timeline, technologies, portfolio fit, and FAQ.',
  alternates: { canonical: '/react-development-nz' },
  openGraph: {
    title: 'React Developers NZ | React Development by Armedia',
    description:
      'React and TypeScript development for New Zealand teams that need fast, maintainable websites, web apps, and integrations.',
    url: '/react-development-nz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Developers NZ | React Development by Armedia',
    description:
      'React and TypeScript development for fast, maintainable websites, web apps, components, and integrations.',
  },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
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
          pricing="React development projects usually start from NZD 4,000. Smaller component builds and integration fixes can be scoped separately."
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
          faq={[
            {
              question: 'Do you work on existing React projects?',
              answer:
                'Yes. Armedia can improve existing React codebases, add features, clean up components, or connect APIs.',
            },
            {
              question: 'Is React right for a marketing website?',
              answer:
                'React is useful when the site needs reusable sections, interactive flows, integrations, or a scalable Next.js foundation.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
