import { escapeHtml, isValidEmail, sendStudioEmail } from '../../../lib/mailer'
import { contactEmail, siteUrl } from '../../../components/siteConfig'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = String(body.name ?? '').trim()
    const email = String(body.email ?? '').trim()
    const phone = String(body.phone ?? '').trim()

    if (!name || !email) {
      return Response.json({ message: 'Name and email are required.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 })
    }

    const guideUrl = `${siteUrl}/resources/campaign-checklist`
    const result = await sendStudioEmail({
      subject: `Guide request from ${name}`,
      replyTo: email,
      text: [
        'Campaign Growth Guide Request',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        '',
        `Guide URL: ${guideUrl}`,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <h2>Campaign Growth Guide Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Guide:</strong> <a href="${guideUrl}">${guideUrl}</a></p>
      `,
    })

    if (!result.ok) {
      return Response.json(
        {
          message: 'Guide ready.',
          guideUrl,
          delivered: false,
        },
        { status: 200 },
      )
    }

    return Response.json({
      message: 'Thanks — check your inbox for the guide link. You can also open it now.',
      guideUrl,
      delivered: true,
    })
  } catch (error) {
    console.error('Newsletter form error:', error)
    return Response.json(
      { message: `Something went wrong. Please email ${contactEmail} for the guide.` },
      { status: 500 },
    )
  }
}
