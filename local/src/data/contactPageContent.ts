export const officeAddress = {
  name: 'Armedia New Zealand',
  lines: ['7 Nordon Place, Remuera, Auckland 1050, New Zealand'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=7+Nordon+Place,+Remuera,+Auckland+1050,+New+Zealand',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=7+Nordon+Place,+Remuera,+Auckland+1050,+New+Zealand&output=embed',
}

/** Display phone — matches footer when env var is unset */
export const displayPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+64 022 304 0716'

export const displayPhoneHref = `tel:${displayPhone.replace(/[^\d+]/g, '')}`

export const contactServicesList = [
  'Web Development',
  'Media and advertising',
  'SEO and visibility',
  'Sales Systems & CRM',
  'Operations & Workflow',
  'AI & Automation',
  'Business intelligence and dashboards',
  'End-to-end business support',
] as const
