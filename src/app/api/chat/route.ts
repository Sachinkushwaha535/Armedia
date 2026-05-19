import Groq from 'groq-sdk'
import { NextRequest, NextResponse } from 'next/server'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',   // ← free tier model
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant for Armedia, an Auckland digital studio. ' +
          'Help visitors learn about our services: web development, AI solutions, ' +
          'data analytics, cybersecurity, mobile apps, UX/UI design, and IT consulting. ' +
          'Keep answers concise and friendly. If asked about pricing or projects, ' +
          'encourage them to contact us at hello@armedia.co.nz.',
      },
      ...messages,
    ],
    max_tokens: 500,
  })

  return NextResponse.json({
    message: completion.choices[0].message.content,
  })
}