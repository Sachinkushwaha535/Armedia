import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'Ecommerce Website Auckland | Online Store Design & Development',
  description:
    'Ecommerce Website Auckland service for product pages, checkout journeys, integrations, tracking, pricing, timeline, technologies, portfolio fit, and FAQ.',
  alternates: { canonical: '/ecommerce-website-auckland' },
  openGraph: {
    title: 'Ecommerce Website Auckland | Online Store Design & Development',
    description:
      'E-commerce website planning and development for Auckland brands that need clearer product pages, better checkout journeys, and tracking foundations.',
    url: '/ecommerce-website-auckland',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Website Auckland | Online Store Design & Development',
    description:
      'E-commerce website planning and development for clearer product pages, smoother checkout journeys, and tracking foundations.',
  },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <ServiceLandingPage
          kicker="Ecommerce website Auckland"
          path="/ecommerce-website-auckland"
          title="Ecommerce websites built around product clarity and conversion."
          description="Armedia helps Auckland businesses plan storefronts, product pages, checkout journeys, and tracking foundations."
          points={[
            'Storefront UX planning',
            'Product and category page structure',
            'Payment and tool integrations',
            'Conversion and analytics setup',
            'Email, CRM, and fulfilment workflow planning',
          ]}
          outcomes={[
            'Clearer shopping journeys',
            'Better product discovery',
            'Reduced checkout friction',
            'Data-ready ecommerce decisions',
          ]}
          benefits={[
            'Product pages that answer buying questions faster',
            'Checkout paths with fewer distractions',
            'Tracking foundations for smarter marketing decisions',
            'Cleaner content structure for product and category growth',
          ]}
          // pricing="Ecommerce Website Auckland projects usually start from NZD 5,500. Larger catalogues, subscriptions, custom checkout logic, and integrations are quoted after discovery."
          timeline={[
            'Store audit and requirements: 3-5 days',
            'Storefront and product UX: 1-2 weeks',
            'Build, integrations, and tracking: 2-5 weeks',
            'Testing, launch, and training: 3-7 days',
          ]}
          technologies={[
            'Next.js',
            'Shopify planning',
            'Stripe or payment gateway integration',
            'Analytics and conversion tracking',
            'CRM and email integrations',
          ]}
          portfolio={[
            'Product-led storefronts',
            'Landing pages for product campaigns',
            'Checkout and enquiry flows',
            'Analytics-ready store launch checklists',
          ]}
          // faq={[
          //   {
          //     question: 'Can you work with Shopify?',
          //     answer:
          //       'Yes. Armedia can plan Shopify storefront UX, product page structure, and supporting landing pages or integrations.',
          //   },
          //   {
          //     question: 'Do you include analytics tracking?',
          //     answer:
          //       'Yes. Tracking requirements are included in the project plan so product, checkout, and campaign activity can be measured.',
          //   },
          // ]}
        />
      </main>
      <Footer />
    </div>
  )
}