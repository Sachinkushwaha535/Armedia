import type { Metadata } from 'next'

export const OG_IMAGE_PATH = '/og-image.jpg'

export const ogImage = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: 'Armedia — Web Development & Media Agency Auckland',
}

export const defaultOgTitle =
  'Web Development & Media Agency Auckland | End-to-End Business Growth — Armedia'

export const defaultOgDescription =
  'Auckland web and media agency. Websites, sales systems, advertising, AI, BI, and operations for NZ businesses.'

export const defaultTwitterTitle = 'Armedia | Web Development & Media Agency Auckland'

export const defaultTwitterDescription =
  'End-to-end web, sales, marketing, operations, and reporting for NZ businesses.'

export const pageDescriptions = {
  home: 'Auckland web development and media agency. Websites, sales systems, advertising, AI, BI, and operations for NZ businesses. 1-day reply.',
  contact:
    'Contact Armedia in Auckland. Web development, sales systems, advertising, operations, AI, BI, SEO, and media. Phone +64 22 040 716.',
  startProject:
    "Tell Armedia what your business needs — website, sales systems, operations, media, or full end-to-end support. We'll scope the right system for your NZ business.",
} as const

type SocialMetadataInput = {
  description: string
  path: string
  openGraphTitle?: string
  twitterTitle?: string
  twitterDescription?: string
  type?: 'website' | 'article'
}

export function buildSocialMetadata({
  description,
  path,
  openGraphTitle = defaultOgTitle,
  twitterTitle = defaultTwitterTitle,
  twitterDescription = defaultTwitterDescription,
  type = 'website',
}: SocialMetadataInput): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      type,
      locale: 'en_NZ',
      url: path,
      siteName: 'Armedia',
      title: openGraphTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: [OG_IMAGE_PATH],
    },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Armedia',
  url: 'https://www.armedia.co.nz',
  description:
    'Auckland web development and media agency covering websites, sales systems, advertising, AI workflows, BI dashboards, and business operations for NZ businesses.',
  telephone: '+6422040716',
  email: 'contact@armedia.co.nz',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Nordon Place',
    addressLocality: 'Remuera',
    addressRegion: 'Auckland',
    postalCode: '1050',
    addressCountry: 'NZ',
  },
  areaServed: ['Auckland', 'Wellington', 'Christchurch', 'Queenstown', 'New Zealand'],
} as const
