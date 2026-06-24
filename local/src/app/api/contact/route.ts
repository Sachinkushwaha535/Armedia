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

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (!name || !email || !phone || !message) {
      return Response.json({ message: 'All fields are required.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 })
    }

    const { emailUser, emailPass } = getMailConfig()

    if (!emailUser || !emailPass) {
      console.error('Contact form SMTP credentials are missing. Add EMAIL_USER and EMAIL_PASS to .env in the project root.')
      return Response.json(
        {
          message: `The contact form is not configured yet. Please email ${contactEmail} directly.`,
        },
        { status: 503 },
      )
    }

    const info = await sendWebsiteEmail({
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        'New Contact Inquiry',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    console.log('Contact email sent:', info.messageId ?? info.response)

    return Response.json({
      message: 'Inquiry submitted successfully. We will be in touch soon.',
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'SMTP_NOT_CONFIGURED') {
      return Response.json(
        {
          message: `The contact form is not configured yet. Please email ${contactEmail} directly.`,
        },
        { status: 503 },
      )
    }

    console.error('Contact form error:', error)

    return Response.json(
      {
        message: `Email failed to send. Please email ${contactEmail} directly.`,
      },
      { status: 500 },
    )
  }
}
