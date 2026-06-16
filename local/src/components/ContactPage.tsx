'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import Link from 'next/link'
import PageShell from './PageShell'
import Button from './ui/Button'
import { FadeIn } from './ui/motion'
import { contactEmail, contactFallbackText, contactPhone, contactPhoneHref } from './siteConfig'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.06]'

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatusMessage('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) {
        setStatusMessage(data.message ?? `Something went wrong. ${contactFallbackText}`)
        return
      }
      setStatusMessage(data.message ?? 'Inquiry submitted successfully.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatusMessage(`Something went wrong. ${contactFallbackText}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageShell
      kicker="Contact"
      title="Let us shape your next growth campaign."
      description="Share your brand goal, audience, campaign idea, timeline, and preferred channels. Armedia will help you turn it into a clear plan for AI, BI, advertising, media, offline marketing, and technology support."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <FadeIn>
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Email', title: 'Drop us a line', content: contactEmail, href: `mailto:${contactEmail}` },
              {
                label: 'Call',
                title: contactPhone ? 'Call the studio' : 'Request a call back',
                content: contactPhone ?? 'Share your number and we will respond.',
                href: contactPhoneHref,
              },
              { label: 'Plan', title: 'Get a clear next step', content: 'Strategy, media, creative, AI, BI, and execution.' },
            ].map((m) => (
              <article key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">{m.label}</span>
                <strong className="mt-2 block text-sm text-white">{m.title}</strong>
                {m.href ? (
                  <a className="link-underline mt-1 block text-sm text-zinc-400" href={m.href}>
                    {m.content}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-zinc-500">{m.content}</p>
                )}
              </article>
            ))}
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8" onSubmit={handleSubmit}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project inquiry</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Share your vision with us</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Tell us your current challenge and we will help turn it into a sharper growth strategy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {(['name', 'email', 'phone'] as const).map((field) => (
                <label key={field}>
                  <span className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">{field}</span>
                  <input
                    className={inputClass}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    placeholder={field === 'name' ? 'Your name' : field === 'email' ? 'you@example.com' : 'Phone'}
                    value={formData[field]}
                    onChange={handleChange}
                    autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'tel'}
                    required
                  />
                </label>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-zinc-500">Project details</span>
              <textarea
                className={`${inputClass} resize-none`}
                name="message"
                rows={6}
                placeholder="Tell us your brand, campaign goal, audience, timeline, channels, and desired result."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-accent-dim disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Launch message'}
            </button>
            {statusMessage ? (
              <p className="mt-4 text-sm text-zinc-400" role="status">
                {statusMessage}
              </p>
            ) : null}
          </form>
        </FadeIn>

        <FadeIn delay={0.1}>
          <aside className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why choose us</p>
            <h2 className="mt-3 text-xl font-semibold text-white">Your growth plan starts with clarity.</h2>
            <div className="mt-6 space-y-4">
              {[
                { num: '<1h', label: 'Response focus' },
                { num: '18', label: 'Service capabilities' },
                { num: 'AI', label: 'Workflow-ready' },
                { num: 'BI', label: 'Reporting-led' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4 border-b border-white/[0.06] pb-4">
                  <strong className="text-xl font-light text-accent">{s.num}</strong>
                  <span className="text-sm text-zinc-400">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-500">
              We connect media planning, creative direction, advertising, OOH, offline marketing, AI workflows,
              dashboards, and campaign-supporting technology into one practical growth system.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
              <Link className="link-underline text-sm font-medium text-accent" href="/start-project">
                Build a brief
              </Link>
            </div>
          </aside>
        </FadeIn>
      </div>
    </PageShell>
  )
}

export default ContactPage
