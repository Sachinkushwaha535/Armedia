import nodemailer from 'nodemailer'
import { contactEmail } from '../../../components/siteConfig'

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

    const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.EMAIL_USER ?? contactEmail
    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT ?? 465)
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Lead capture SMTP credentials are missing.')
      return Response.json(
        {
          message: `Thanks — access the checklist anytime at /resources/campaign-checklist. For help, email ${contactEmail}.`,
          checklistUrl: '/resources/campaign-checklist',
        },
        { status: 200 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const label = sourceLabels[source] ?? 'Website lead'

    await transporter.sendMail({
      from: `"Armedia website" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: toEmail,
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
      { status: 500 }
    )
  }
}
