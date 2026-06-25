import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import ServiceLandingPage from '../../components/ServiceLandingPage'
import TWGFooter from '../../components/twg/TWGFooter'
import { buildSocialMetadata } from '../../data/siteMetadata'
import { seoAgencyKeywords } from '../../data/siteKeywords'

const seoDescription =
  'Auckland SEO agency helping businesses improve rankings with technical SEO, schema, Core Web Vitals and content optimisation.'

export const metadata: Metadata = {
  title: 'SEO Agency Auckland | Technical SEO & Search Strategy',
  description: seoDescription,
  keywords: [...seoAgencyKeywords],
  alternates: { canonical: '/seo-agency-auckland' },
  ...buildSocialMetadata({
    description:
      'Technical SEO, content structure, schema, and search-ready website improvements for Auckland and New Zealand businesses.',
    path: '/seo-agency-auckland',
    openGraphTitle: 'SEO Agency Auckland | Technical SEO & Search Strategy — Armedia',
    twitterTitle: 'SEO Agency Auckland | Armedia',
    twitterDescription: seoDescription,
  }),
}

export default function Page() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <ServiceLandingPage
        kicker="SEO agency Auckland"
        breadcrumb="SEO"
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
          'E-commerce website Auckland landing page structure',
          'Search Console and analytics review roadmap',
        ]}
        faq={[
          {
            question: 'Is SEO included with web design?',
            answer:
              'Basic SEO structure is included in web design projects. Dedicated SEO work goes deeper into audits, schema, landing pages, and search strategy.',
          },
          {
            question: 'How long does SEO take to show results?',
            answer:
              'Technical fixes can improve foundations quickly, but ranking movement usually depends on competition, content quality, authority, and time.',
          },
        ]}
      />
      <TWGFooter />
    </main>
  )
}
