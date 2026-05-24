import nodemailer from 'nodemailer'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    // ✅ Basic validation
    if (!name || !email || !phone || !message) {
      return Response.json(
        { message: 'All fields are required.' },
        { status: 400 }
      )
    }

    // ✅ Debug ENV (IMPORTANT)
    console.log('ENV CHECK:')
    console.log('EMAIL_USER:', process.env.EMAIL_USER)
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'EXISTS' : 'MISSING')
    console.log('CONTACT_TO_EMAIL:', process.env.CONTACT_TO_EMAIL)

    const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.EMAIL_USER

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !toEmail) {
      console.error('❌ ENV NOT CONFIGURED PROPERLY')
      return Response.json(
        {
          message:
            'The contact form is not configured yet. Please email contact.armedianz@gmail.com.',
        },
        { status: 500 }
      )
    }

    // ✅ Use stable SMTP config (better than service: gmail)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ Verify connection BEFORE sending
    try {
      await transporter.verify()
      console.log('✅ SMTP CONNECTION SUCCESS')
    } catch (verifyError) {
      console.error('❌ SMTP VERIFY FAILED:', verifyError)
      return Response.json(
        { message: 'Email server connection failed.' },
        { status: 500 }
      )
    }

    // ✅ Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: toEmail,
      subject: `New website inquiry from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>

        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    console.log('✅ EMAIL SENT SUCCESS:', info.response)

    return Response.json({
      message: 'Inquiry submitted successfully. We will be in touch soon.',
    })

  } catch (error) {
    console.error('❌ EMAIL ERROR FULL:', error)

    return Response.json(
      { message: 'Email failed to send. Please email contact.armedianz@gmail.com.' },
      { status: 500 }
    )
  }
}
