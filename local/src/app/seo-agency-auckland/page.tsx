import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ServiceLandingPage from '../../components/ServiceLandingPage'

export const metadata: Metadata = {
  title: 'SEO Agency Auckland | Technical SEO & Search Strategy',
  description:
    'SEO Agency Auckland service for technical SEO, metadata, content structure, schema, Core Web Vitals, pricing, timeline, technologies, portfolio fit, and FAQ.',
  alternates: { canonical: '/seo-agency-auckland' },
  openGraph: {
    title: 'SEO Agency Auckland | Technical SEO & Search Strategy',
    description:
      'Technical SEO, content structure, schema, and search-ready website improvements for Auckland and New Zealand businesses.',
    url: '/seo-agency-auckland',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency Auckland | Technical SEO & Search Strategy',
    description:
      'Technical SEO, metadata, content structure, schema, Core Web Vitals, and search-ready website improvements.',
  },
}

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <ServiceLandingPage
          kicker="SEO agency Auckland"
          path="/seo-agency-auckland"
          title="SEO services for cleaner search visibility and stronger pages."
          description="Armedia improves technical SEO, page structure, metadata, schema, performance basics, and keyword-focused content foundations for Auckland businesses."
          points={[
            'Technical SEO audit',
            'Metadata and heading structure',
            'Schema and local business markup',
            'Core Web Vitals and performance review',
            'Keyword-focused landing page planning',
          ]}
          outcomes={[
            'Clearer search snippets',
            'Better crawl and index foundations',
            'Stronger local keyword targeting',
            'More useful content structure for visitors and search engines',
          ]}
          benefits={[
            'Search pages built around buyer intent',
            'Cleaner technical foundations before scaling content',
            'Better internal linking and landing page hierarchy',
            'Improved trust signals through structured data and proof sections',
          ]}
          // pricing="SEO Agency Auckland work usually starts from NZD 900 for audits and priority fixes. Ongoing SEO retainers and landing page programs are scoped around content volume and competition."
          timeline={[
            'SEO audit and keyword review: 3-5 days',
            'Priority fixes and metadata updates: 3-7 days',
            'Landing page structure and schema: 1-2 weeks',
            'Reporting and next-step roadmap: 2-3 days',
          ]}
          technologies={[
            'Next.js metadata',
            'JSON-LD schema',
            'Sitemap and robots checks',
            'Core Web Vitals review',
            'Search Console planning',
            'Analytics event planning',
          ]}
          portfolio={[
            'Web Design Auckland landing page structure',
            'React Developers NZ landing page structure',
            'Ecommerce Website Auckland landing page structure',
            'Search Console and analytics review roadmap',
          ]}
          // faq={[
          //   {
          //     question: 'Is SEO included with web design?',
          //     answer:
          //       'Basic SEO structure is included in web design projects. Dedicated SEO work goes deeper into audits, schema, landing pages, and search strategy.',
          //   },
          //   {
          //     question: 'How long does SEO take to show results?',
          //     answer:
          //       'Technical fixes can improve foundations quickly, but ranking movement usually depends on competition, content quality, authority, and time.',
          //   },
          // ]}
        />
      </main>
      <Footer />
    </div>
  )
}