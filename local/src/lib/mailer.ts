import nodemailer from 'nodemailer'
import { contactEmail } from '../components/siteConfig'

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function getMailTransporter() {
  const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
  const smtpPort = Number(process.env.SMTP_PORT ?? 465)
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : smtpPort === 465

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export async function sendStudioEmail(options: {
  subject: string
  replyTo: string
  text: string
  html: string
}) {
  const transporter = getMailTransporter()
  if (!transporter) {
    return { ok: false as const, reason: 'missing_smtp' as const }
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.EMAIL_USER ?? contactEmail

  try {
    await transporter.verify()
  } catch (error) {
    console.error('SMTP verify failed:', error)
    return { ok: false as const, reason: 'smtp_verify_failed' as const }
  }

  const info = await transporter.sendMail({
    from: `"Armedia website" <${process.env.EMAIL_USER}>`,
    replyTo: options.replyTo,
    to: toEmail,
    subject: options.subject,
    text: options.text,
    html: options.html,
  })

  return { ok: true as const, messageId: info.messageId ?? info.response }
}
