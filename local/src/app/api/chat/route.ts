import Groq from 'groq-sdk'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { message: 'Chat is not configured yet. Please email contact.armedianz@gmail.com for campaign support.' },
      { status: 503 }
    )
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
  const { messages } = await req.json()

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system',
        content:
          'You are a friendly growth assistant for Armedia, a marketing media agency. ' +
          'Write in a confident, client-facing style focused on brand visibility, quality leads, campaign performance, media planning, and measurable growth. ' +
          'Help visitors with Armedia services: AI marketing tools, business intelligence dashboards, advertising, Meta Ads, Google Ads, digital media, OOH media, offline marketing, campaign analytics, brand positioning, and growth strategy. ' +
          'Keep answers concise, action-oriented, and focused on outcomes such as awareness, enquiries, conversions, brand recall, smarter reporting, and scalable campaigns. ' +
          'If asked about pricing, timelines, or a real project, encourage them to contact contact.armedianz@gmail.com.',
      },
      ...messages,
    ],
    max_tokens: 500,
  })

  return NextResponse.json({
    message: completion.choices[0].message.content,
  })
}
