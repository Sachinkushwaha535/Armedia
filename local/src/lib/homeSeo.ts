import { siteUrl } from '../components/siteConfig'

export const homeMetaDescription =
  'Armedia is an Auckland marketing media agency helping New Zealand brands with strategy, advertising, AI workflows, BI reporting, digital media, and campaign measurement.'

export const homeKeywords = [
  'Armedia',
  'marketing media agency New Zealand',
  'marketing agency Auckland',
  'advertising agency Auckland',
  'AI marketing agency New Zealand',
  'business intelligence agency Auckland',
  'Google Ads agency Auckland',
  'SEO agency Auckland',
  'media planning agency Auckland',
  'OOH advertising New Zealand',
  'growth strategy agency',
  'digital media agency NZ',
]

export const homeSearchTopics = [
  { label: 'Strategy & growth', href: '/services#brand-growth-strategy' },
  { label: 'Google & Meta ads', href: '/services#advertising' },
  { label: 'SEO services', href: '/seo-agency-auckland' },
  { label: 'AI marketing workflows', href: '/services#ai-marketing-studio' },
  { label: 'BI & reporting', href: '/services#business-intelligence' },
  { label: 'Digital media', href: '/services#digital-media' },
  { label: 'OOH & offline media', href: '/services#ooh-offline-media' },
  { label: 'Web design', href: '/web-design-auckland' },
  { label: 'E-commerce', href: '/ecommerce-website-auckland' },
  { label: 'Campaign checklist', href: '/resources/campaign-checklist' },
  { label: 'Book a consultation', href: '/contact' },
]

export function buildHomeStructuredData(faqSchemaItems: Array<{ question: string; answer: string }>) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Armedia | Marketing Media Agency Auckland & New Zealand',
      description: homeMetaDescription,
      inLanguage: 'en-NZ',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#localbusiness` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqSchemaItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ]
}
