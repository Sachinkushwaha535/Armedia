import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

function isGmailAddress(value: string) {
  return value.toLowerCase().endsWith('@gmail.com')
}

export function getMailConfig() {
  const emailUser = process.env.EMAIL_USER?.trim()
  const emailPass = process.env.EMAIL_PASS?.trim()
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? emailUser

  return { emailUser, emailPass, toEmail }
}

export function createMailTransporter() {
  const { emailUser, emailPass } = getMailConfig()

  if (!emailUser || !emailPass) {
    return null
  }

  const smtpService = process.env.SMTP_SERVICE?.trim()
  const smtpHost = process.env.SMTP_HOST?.trim()
  const smtpPort = Number(process.env.SMTP_PORT ?? 587)
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465

  let transportOptions: SMTPTransport.Options

  if (smtpService) {
    transportOptions = {
      service: smtpService,
      auth: { user: emailUser, pass: emailPass },
    }
  } else if (smtpHost) {
    transportOptions = {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: emailUser, pass: emailPass },
      ...(smtpPort === 587 && !smtpSecure
        ? { requireTLS: true, tls: { minVersion: 'TLSv1.2' } }
        : {}),
    }
  } else if (isGmailAddress(emailUser)) {
    transportOptions = {
      service: 'gmail',
      auth: { user: emailUser, pass: emailPass },
    }
  } else {
    transportOptions = {
      host: 'mail.armedia.co.nz',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user: emailUser, pass: emailPass },
      tls: { minVersion: 'TLSv1.2' },
    }
  }

  return nodemailer.createTransport({
    ...transportOptions,
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  })
}

export async function sendWebsiteEmail(options: {
  replyTo: string
  subject: string
  text: string
  html: string
}) {
  const { emailUser, toEmail } = getMailConfig()
  const transporter = createMailTransporter()

  if (!transporter || !emailUser || !toEmail) {
    throw new Error('SMTP_NOT_CONFIGURED')
  }

  return transporter.sendMail({
    from: `"Armedia website" <${emailUser}>`,
    replyTo: options.replyTo,
    to: toEmail,
    subject: options.subject,
    text: options.text,
    html: options.html,
  })
}
