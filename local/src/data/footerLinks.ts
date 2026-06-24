export type FooterServiceLink = {
  label: string
  href: string
}

/** Footer service links — Web Design & SEO have dedicated pages; others go to /services */
export const footerServiceLinks: FooterServiceLink[] = [
  { label: 'All services', href: '/services' },
  { label: 'Web Development', href: '/web-design-auckland' },
  { label: 'Media & Advertising', href: '/services#advertising' },
  { label: 'SEO', href: '/seo-agency-auckland' },
  { label: 'Sales Systems & CRM', href: '/services#business-intelligence' },
  { label: 'Operations & Workflow', href: '/services#ai-api' },
  { label: 'AI & Automation', href: '/services#ai-api' },
  { label: 'Business Intelligence', href: '/services#business-intelligence' },
]

export const footerLocations = ['Auckland', 'Wellington', 'Christchurch', 'Queenstown']

export const footerIndustries = ['Construction', 'E-commerce', 'Healthcare', 'Tourism']

export const footerSocialLinks = [
  { label: 'Facebook', href: '/contact' },
  { label: 'Instagram', href: '/contact' },
  { label: 'LinkedIn', href: '/contact' },
  { label: 'YouTube', href: '/contact' },
]
