import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/nextjs-agency-new-zealand'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & COMMERCIAL SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'Next.js Agency New Zealand | Custom Web Development | Armedia',
  description:
    'Custom Next.js development agency in New Zealand. We build fast marketing websites, scalable web apps, and SEO-optimized headless architectures.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'Next.js Agency New Zealand | Custom Web Development | Armedia',
    description:
      'Deploy ultra-fast digital experiences. We build scalable React and Next.js applications optimized for technical SEO and core web vitals.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'website',
    locale: 'en_NZ',
    images: [
      {
        url: `${siteUrl}/images/services/nextjs-nz-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Next.js Web Development Agency New Zealand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Agency New Zealand | Custom Web Development | Armedia',
    images: [`${siteUrl}/images/services/nextjs-nz-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. TECHNICAL SERVICE & FAQ SCHEMA GRAPH
   * Connects local New Zealand pricing and area parameters directly to Google Search.
   */
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Next.js Web Development Services New Zealand',
        'description': 'Headless engineering, custom React development, technical SEO optimization, and API architecture using the Next.js framework.',
        'provider': {
          '@type': 'Organization',
          'name': 'Armedia',
          'url': siteUrl,
          'logo': `${siteUrl}/images/logo.jpg`
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'New Zealand'
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'NZD',
          'price': '4500.00',
          'description': 'Starting rate for custom headless Next.js web build and architecture planning.'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Why use Next.js instead of a basic website builder?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Next.js offers complete engineering control over server-side rendering (SSR), strict page performance optimization, programmatic metadata management, custom API integration pathways, and advanced web infrastructure security.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can Next.js support SEO pages?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Next.js is explicitly engineered for organic search success, natively supplying structured routing systems, automated server-side component streaming, deep Metadata API handling, and scalable indexing control.'
            }
          }
        ]
      }
    ]
  }

  return (
    <div className="site-shell">
      <Header />
      <main>
        {/* Inline structural microdata payload */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} 
        />

        <ServiceLandingPage
          kicker="Next.js Agency New Zealand"
          title="Next.js websites and web apps for New Zealand teams."
          description="Armedia leverages headless Next.js environments to achieve rapid page delivery speeds, bulletproof structural security, adaptive routing layout controls, and high-performance marketing deployments."
          points={[
            'Next.js modular application architecture',
            'Technical SEO metadata injection and automated schema mapping',
            'Serverless functions, API routes, and database integrations',
            'Strict production compiler optimization and launch QA workflows',
          ]}
          outcomes={[
            'Maximized technical SEO configurations and data rendering profiles',
            'Optimized Core Web Vitals and rapid page load speeds',
            'Clean programmatically controlled routing for scalable multi-page content growth',
            'A secure, production-grade technical framework ready for modern product iterations',
          ]}
          benefits={[
            'Advanced routing models tailored specifically for enterprise content scale and service page paths',
            'SEO-optimized server rendering mechanisms and dynamic metadata processing rules',
            'Extensible foundations built to house secure data intake forms, webhook handlers, and third-party APIs',
            'Sustainable long-term codebase maintenance cycles compared to legacy plugin-heavy content platforms',
          ]}
          pricing="Next.js development projects across New Zealand typically launch from NZD 4,500. Large-scale web applications, enterprise headless content management systems, and intensive database integrations are scoped uniquely following a brief technical review."
          timeline={[
            'Database architecture design, component framework design, and routing plan: 2-4 days',
            'Production system code assembly, responsive frontend design, and page build cycles: 1-3 weeks',
            'API engine integrations, meta-tag population, and structured schema validations: 3-7 days',
            'Build compiling checks, multi-device QA protocols, live domain launch, and engineering handover: 2-5 days',
          ]}
          technologies={[
            'Next.js App Router architectures',
            'React server component engineering',
            'TypeScript absolute type validation layers',
            'Next.js Metadata API control arrays',
            'JSON-LD rich schema generation modules',
            'Serverless API routes and edge computing paths',
          ]}
          portfolio={[
            'Technical SEO performance landing page setups',
            'Corporate marketing platforms featuring dynamic service sub-routes',
            'Interactive web software engines hosting secure form validation layers',
            'Live, verified client deployment URLs supplied throughout discovery',
          ]}
          faq={[
            {
              question: 'Why use Next.js instead of a basic website builder?',
              answer:
                'Next.js offers complete engineering control over server-side rendering (SSR), strict page performance optimization, programmatic metadata management, custom API integration pathways, and advanced web infrastructure security.',
            },
            {
              question: 'Can Next.js support SEO pages?',
              answer:
                'Yes. Next.js is explicitly engineered for organic search success, natively supplying structured routing systems, automated server-side component streaming, deep Metadata API handling, and scalable indexing control.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
