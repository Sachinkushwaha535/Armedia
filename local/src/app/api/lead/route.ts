import { contactEmail } from '../../../components/siteConfig'
import { getMailConfig, sendWebsiteEmail } from '../../../lib/mail'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const sourceLabels: Record<string, string> = {
  'guide-request': 'Campaign growth guide request',
  'checklist': 'Campaign planning checklist',
  newsletter: 'Newsletter / resource signup',
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const source = String(body.source ?? 'newsletter').trim()

    if (!name || !email) {
      return Response.json({ message: 'Name and email are required.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 })
    }

    const { emailUser, emailPass } = getMailConfig()

    if (!emailUser || !emailPass) {
      console.error('Lead capture SMTP credentials are missing.')
      return Response.json(
        {
          message: `Thanks — access the checklist anytime at /resources/campaign-checklist. For help, email ${contactEmail}.`,
          checklistUrl: '/resources/campaign-checklist',
        },
        { status: 200 },
      )
    }

    const label = sourceLabels[source] ?? 'Website lead'

    await sendWebsiteEmail({
      replyTo: email,
      subject: `${label} from ${name}`,
      text: [label, '', `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, `Source: ${source}`].join('\n'),
      html: `
        <h2>${escapeHtml(label)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      `,
    })

    return Response.json({
      message: 'Thanks — your resource is ready. Open the checklist below.',
      checklistUrl: '/resources/campaign-checklist',
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return Response.json(
      {
        message: `Something went wrong. You can still access the checklist at /resources/campaign-checklist or email ${contactEmail}.`,
        checklistUrl: '/resources/campaign-checklist',
      },
      { status: 500 },
    )
  }
}
