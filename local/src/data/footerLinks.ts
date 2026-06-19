export type FooterServiceLink = {
  label: string
  href: string
}

/** Footer service links — Web Design & SEO have dedicated pages; others go to /services */
export const footerServiceLinks: FooterServiceLink[] = [
  { label: 'All services', href: '/services' },
  { label: 'Strategy', href: '/services#brand-growth-strategy' },
  { label: 'Advertising', href: '/services#advertising' },
  { label: 'Web Design', href: '/web-design-auckland' },
  { label: 'SEO', href: '/seo-agency-auckland' },
  { label: 'Business Intelligence', href: '/services#business-intelligence' },
  { label: 'Digital Media', href: '/services#digital-media' },
]

export const footerLocations = ['Auckland', 'Wellington', 'Christchurch', 'Queenstown']

export const footerIndustries = ['Construction', 'E-commerce', 'Healthcare', 'Tourism']

export const footerSocialLinks = [
  { label: 'Facebook', href: '/contact' },
  { label: 'Instagram', href: '/contact' },
  { label: 'LinkedIn', href: '/contact' },
  { label: 'YouTube', href: '/contact' },
]
