import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

// 1. Centralized absolute domain setup
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://armedia.co.nz'
const pagePath = '/ecommerce-website-auckland'
const fullUrl = `${siteUrl}${pagePath}`

/**
 * 2. FULLY OPTIMIZED META DATA & COMMERCIAL SOCIAL CARDS
 */
export const metadata: Metadata = {
  title: 'Ecommerce Website Auckland | Online Store Design & Development',
  description:
    'Custom ecommerce website design and development in Auckland. Optimize your product pages, checkout journeys, and Shopify integrations for higher sales.',
  alternates: { 
    canonical: fullUrl 
  },
  openGraph: {
    title: 'Ecommerce Website Auckland | Online Store Design & Development',
    description:
      'Scale your online storefront. We build high-converting e-commerce web design architectures for Auckland brands looking to reduce cart abandonment.',
    url: fullUrl,
    siteName: 'Armedia',
    type: 'website',
    locale: 'en_NZ',
    images: [
      {
        url: `${siteUrl}/images/services/ecommerce-auckland-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ecommerce Website Auckland Design and Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Website Auckland | Online Store Design & Development',
    images: [`${siteUrl}/images/services/ecommerce-auckland-og.jpg`],
  },
}

export default function Page() {
  /**
   * 3. COMMERCIAL RICH SNIPPET ENGINE (COMBINED SERVICE & FAQ SCHEMA)
   * Injects precise local currency pricing, service descriptions, and rich FAQ snippets.
   */
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Ecommerce Website Design and Development Auckland',
        'description': 'Custom e-commerce web design, storefront UX planning, and performance conversion setup for Auckland retail and B2B brands.',
        'provider': {
          '@type': 'Organization',
          'name': 'Armedia',
          'url': siteUrl,
          'logo': `${siteUrl}/images/logo.jpg`
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Auckland',
          'containedInPlace': {
            '@type': 'Country',
            'name': 'New Zealand'
          }
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'NZD',
          'price': '5500.00',
          'description': 'Base rate for custom e-commerce web planning and storefront optimization projects.'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Can you work with Shopify?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Armedia can design and plan high-converting Shopify storefront UX, optimize product page structures, and deploy custom landing pages or payment gateway integrations.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you include analytics tracking?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Advanced conversion tracking requirements are hardcoded into our core project execution maps to ensure your product discovery and checkout funnels are fully measurable.'
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
        {/* Schema injection safely housed inside the main shell wrapper */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} 
        />

        <ServiceLandingPage
          kicker="Ecommerce Website Auckland"
          title="Ecommerce websites built around product clarity and conversion."
          description="Armedia helps Auckland businesses plan high-converting online storefronts, optimize complex checkout journeys, and deploy advanced analytics foundations."
          points={[
            'Storefront UX planning and optimization',
            'Product and category page SEO architecture',
            'Payment and third-party tool integrations',
            'Conversion tracking and analytics setup',
            'Email automation, CRM platforms, and fulfilment workflow planning',
          ]}
          outcomes={[
            'Clearer, frictionless shopping journeys',
            'Highly scalable product discovery models',
            'Reduced checkout and cart abandonment rates',
            'Data-ready conversion engineering decisions',
          ]}
          benefits={[
            'Product pages engineered to answer buyer friction questions faster',
            'Frictionless checkout paths built with zero conversion distractions',
            'Tracking foundations optimized for precise performance marketing decisions',
            'Clean semantic content layouts prepared for product catalog scale',
          ]}
          pricing="Ecommerce Website Auckland projects usually start from NZD 5,500. Enterprise inventories, recurring subscriptions, custom checkout logics, and custom API integrations are tailored following discovery sessions."
          timeline={[
            'Storefront audit and commercial technical requirements: 3-5 days',
            'User experience mapping and product layout strategy: 1-2 weeks',
            'Production build, system integrations, and tracking setup: 2-5 weeks',
            'Data validation, quality assurance testing, launch, and training: 3-7 days',
          ]}
          technologies={[
            'Next.js headless frameworks',
            'Shopify planning and architecture',
            'Stripe and local payment gateway integration',
            'Google Analytics 4 and advanced server-side tracking',
            'CRM system and automated lifecycle email integrations',
          ]}
          portfolio={[
            'Conversion-first retail storefronts',
            'Optimized landing configurations for targeted paid ad traffic',
            'Streamlined inquiry and custom digital checkout structures',
            'Validated merchant project references available upon request',
          ]}
          faq={[
            {
              question: 'Can you work with Shopify?',
              answer:
                'Yes. Armedia can design and plan high-converting Shopify storefront UX, optimize product page structures, and deploy custom landing pages or payment gateway integrations.',
            },
            {
              question: 'Do you include analytics tracking?',
              answer:
                'Yes. Advanced conversion tracking requirements are hardcoded into our core project execution maps to ensure your product discovery and checkout funnels are fully measurable.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
