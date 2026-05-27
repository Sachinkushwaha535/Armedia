export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.armedia.co.nz'

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'contact@armedia.co.nz'

export const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? ''

export const contactPhoneHref = contactPhone
  ? `tel:${contactPhone.replace(/[^\d+]/g, '')}`
  : ''

export const marketFocus = ['Auckland', 'New Zealand', 'Australia']

export const contactFallbackText = `Please email ${contactEmail} directly.`
