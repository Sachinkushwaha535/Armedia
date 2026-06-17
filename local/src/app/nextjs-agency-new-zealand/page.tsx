import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'Next.js Agency New Zealand | Fast Web Apps & Marketing Sites | Armedia',
  description:
    'Next.js agency in New Zealand building fast marketing sites, web apps, SEO pages, and conversion-focused digital systems.',
  alternates: { canonical: '/nextjs-agency-new-zealand' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Next.js Agency New Zealand',
    description:
      'Fast Next.js websites, web apps, SEO pages, schema, metadata, and conversion-focused digital systems for New Zealand teams.',
    url: '/nextjs-agency-new-zealand',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Agency New Zealand',
    description:
      'Next.js websites and web apps with fast performance, SEO foundations, metadata, schema, and scalable routing.',
  },
}

export default function Page() {
  return (
    <div className="site-shell page-service-landing armedia-site">
      <Header />
      <main id="main-content">
        <ServiceLandingPage
          kicker="Next.js agency New Zealand"
          path="/nextjs-agency-new-zealand"
          title="Next.js websites and web apps for New Zealand teams."
          description="Armedia uses Next.js for fast page loads, strong SEO foundations, scalable routing, and modern delivery workflows."
          points={[
            'Next.js app architecture',
            'SEO metadata and schema',
            'Server routes and integrations',
            'Production build and launch QA',
          ]}
          outcomes={[
            'Better technical SEO',
            'Faster page experience',
            'Cleaner routing and content growth',
            'A stronger foundation for 2026 digital work',
          ]}
          benefits={[
            'Modern routing for content and service page growth',
            'SEO-friendly rendering and metadata control',
            'Strong foundations for forms, APIs, and integrations',
            'Cleaner long-term maintenance than one-off page builds',
          ]}
          timeline={[
            'Architecture and route plan: 2-4 days',
            'Component system and page build: 1-3 weeks',
            'Integrations, metadata, and schema: 3-7 days',
            'Build QA, launch, and handover: 2-5 days',
          ]}
          technologies={[
            'Next.js',
            'React',
            'TypeScript',
            'Metadata API',
            'JSON-LD schema',
            'API routes',
          ]}
          portfolio={[
            'SEO landing page systems',
            'Marketing websites with service routes',
            'Web apps with forms and integrations',
            'Production-ready launch and QA workflows',
          ]}
          faq={[
            {
              question: 'Why use Next.js instead of a basic website builder?',
              answer:
                'Next.js gives stronger control over performance, routing, metadata, integrations, and custom frontend behaviour.',
            },
            {
              question: 'Can Next.js support SEO pages?',
              answer:
                'Yes. It is a strong fit for structured service pages, metadata, schema, sitemaps, and content growth.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}