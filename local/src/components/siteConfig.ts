export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.armedia.co.nz'

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'contact@armedia.co.nz'

export const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+64 022 304 0716'

export const contactPhoneHref = contactPhone
  ? `tel:${contactPhone.replace(/[^\d+]/g, '')}`
  : ''

export const marketFocus = ['Auckland', 'New Zealand', 'Australia']

export const businessAddress = {
  streetAddress: '7 Nordon Place',
  addressLocality: 'Remuera',
  addressRegion: 'Auckland',
  addressCountry: 'NZ',
} as const

export const businessAddressFormatted =
  `${businessAddress.streetAddress}, ${businessAddress.addressLocality}, ${businessAddress.addressRegion}, New Zealand`

export const socialProfiles = {
  linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? '',
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? '',
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? '',
}

export function getSameAsLinks(): string[] {
  return [
    siteUrl,
    socialProfiles.linkedin,
    socialProfiles.instagram,
    socialProfiles.facebook,
  ].filter(Boolean)
}

export const contactFallbackText = `Please email ${contactEmail} directly.`
