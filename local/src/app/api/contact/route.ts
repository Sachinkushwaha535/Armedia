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

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (!name || !email || !phone || !message) {
      return Response.json(
        { message: 'All fields are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.EMAIL_USER ?? contactEmail
    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
    const smtpPort = Number(process.env.SMTP_PORT ?? 465)
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Contact form SMTP credentials are missing.')
      return Response.json(
        {
          message: `The contact form is not configured yet. Please email ${contactEmail} directly.`,
        },
        { status: 503 }
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

    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP verify failed:', verifyError)
      return Response.json(
        { message: `Email server connection failed. Please email ${contactEmail} directly.` },
        { status: 503 }
      )
    }

    const info = await transporter.sendMail({
      from: `"Armedia website" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: toEmail,
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
    console.error('Contact form error:', error)

    return Response.json(
      { message: `Email failed to send. Please email ${contactEmail} directly.` },
      { status: 500 }
    )
  }
}
