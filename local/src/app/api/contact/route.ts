import { escapeHtml, isValidEmail, sendStudioEmail } from '../../../lib/mailer'
import { contactEmail } from '../../../components/siteConfig'

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

    const result = await sendStudioEmail({
      subject: `New website inquiry from ${name}`,
      replyTo: email,
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

    if (!result.ok) {
      if (result.reason === 'missing_smtp') {
        return Response.json(
          { message: `The contact form is not configured yet. Please email ${contactEmail} directly.` },
          { status: 503 },
        )
      }
      return Response.json(
        { message: `Email server connection failed. Please email ${contactEmail} directly.` },
        { status: 503 },
      )
    }

    return Response.json({
      message: 'Inquiry submitted successfully. We will be in touch soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { message: `Email failed to send. Please email ${contactEmail} directly.` },
      { status: 500 },
    )
  }
}
