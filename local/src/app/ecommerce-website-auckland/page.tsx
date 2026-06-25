import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import ServiceLandingPage from '../../components/ServiceLandingPage'
import TWGFooter from '../../components/twg/TWGFooter'
import { buildSocialMetadata } from '../../data/siteMetadata'
import { ecommerceKeywords } from '../../data/siteKeywords'

const ecommerceDescription =
  'E-commerce website Auckland service for product pages, checkout journeys, integrations, tracking, pricing, timeline, technologies, portfolio fit, and FAQ.'

export const metadata: Metadata = {
  title: 'E-commerce Website Auckland | Online Store Design & Development',
  description: ecommerceDescription,
  keywords: [...ecommerceKeywords],
  alternates: { canonical: '/ecommerce-website-auckland' },
  ...buildSocialMetadata({
    description:
      'E-commerce website planning and development for Auckland brands that need clearer product pages, better checkout journeys, and tracking foundations.',
    path: '/ecommerce-website-auckland',
    openGraphTitle: 'E-commerce Website Auckland | Online Store Design & Development — Armedia',
    twitterTitle: 'E-commerce Website Auckland | Armedia',
    twitterDescription: ecommerceDescription,
  }),
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <ServiceLandingPage
        kicker="E-commerce website Auckland"
        path="/ecommerce-website-auckland"
        title="E-commerce websites built around product clarity and conversion."
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
          'Data-ready e-commerce decisions',
        ]}
        benefits={[
          'Product pages that answer buying questions faster',
          'Checkout paths with fewer distractions',
          'Tracking foundations for smarter marketing decisions',
          'Cleaner content structure for product and category growth',
        ]}
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
      />
      <TWGFooter />
    </main>
  )
}
