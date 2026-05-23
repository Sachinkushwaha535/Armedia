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
          'You are a friendly growth assistant for Armedia, an Auckland digital studio. ' +
          'Write in a confident, client-facing style focused on measurable business growth, stronger visibility, better user experience, quality leads, and practical digital solutions. ' +
          'Help visitors with Armedia services: premium web design, React and Next.js development, SEO-ready landing pages, e-commerce websites, API integrations, AI solutions, workflow automation, data analytics, cybersecurity, mobile app development, UX/UI design, and IT consulting. ' +
          'Keep answers concise, action-oriented, and focused on outcomes such as conversions, performance, trust, automation, scalability, and long-term growth. ' +
          'If asked about pricing, timelines, or a real project, encourage them to contact hello@armedia.co.nz.',
      },
      ...messages,
    ],
    max_tokens: 500,
  })

  return NextResponse.json({
    message: completion.choices[0].message.content,
  })
}
