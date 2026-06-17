import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'Web Design Auckland | Premium Website Design by Armedia',
  description:
    'Premium Web Design Auckland service for mobile-first websites with clear messaging, conversion-focused UX, and SEO foundations.',
  alternates: { canonical: '/web-design-auckland' },
  openGraph: {
    title: 'Web Design Auckland | Premium Website Design by Armedia',
    description:
      'Auckland website design for stronger trust, clearer service pages, better inquiry paths, and launch-ready frontend systems.',
    url: '/web-design-auckland',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Auckland | Premium Website Design by Armedia',
    description:
      'Mobile-first Auckland website design for trust, clarity, inquiry paths, SEO foundations, and launch-ready frontend systems.',
  },
}

export default function Page() {
  return (
    <div className="site-shell armedia-site">
      <Header />
      <main id="main-content">
        <ServiceLandingPage
          kicker="Web design Auckland"
          path="/web-design-auckland"
          title="Premium web design for Auckland businesses."
          description="Armedia designs clear, credible, mobile-first websites that help visitors understand your offer and take the next step."
          points={[
            'UX planning and content hierarchy',
            'Responsive homepage and service page design',
            'Conversion-focused calls to action',
            'Launch-ready design system',
            'SEO title, description, and page structure guidance',
          ]}
          outcomes={[
            'Stronger first impression',
            'Clearer service pages',
            'Better inquiry flow',
            'A design foundation ready for development',
          ]}
          benefits={[
            'Built around real customer questions and buying intent',
            'Mobile-first layouts that make services easier to scan',
            'Trust-building sections for proof, process, pricing, and contact',
            'Design direction your team can reuse across future pages',
          ]}
          pricing="Most Web Design Auckland projects start from NZD 2,500. Multi-page websites, copy support, and advanced interaction design are scoped after a short discovery call."
          timeline={[
            'Discovery and page plan: 2-3 days',
            'Homepage and visual direction: 4-7 days',
            'Inner page design system: 5-10 days',
            'Review, polish, and development handoff: 2-4 days',
          ]}
          technologies={[
            'Figma',
            'Next.js-ready component planning',
            'Responsive design systems',
            'SEO metadata planning',
            'Accessibility review',
          ]}
          portfolio={[
            'Service business website structures',
            'Landing pages for Auckland search keywords',
            'Lead-generation page flows',
            'Portfolio links are added only when client-approved',
          ]}
          faq={[
            {
              question: 'Do you only design websites for Auckland businesses?',
              answer:
                'No. Auckland is the primary local focus, but Armedia can work with teams across New Zealand and Australia.',
            },
            {
              question: 'Can you also build the website after design?',
              answer:
                'Yes. The design can move directly into a Next.js or React build with the same structure and conversion goals.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}
