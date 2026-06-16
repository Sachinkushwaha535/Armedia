'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import { contactFallbackText } from './siteConfig'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500/50 focus:bg-white/[0.06]'

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
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

      setStatusMessage(data.message ?? 'Message sent successfully.')
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch {
      setStatusMessage(`Something went wrong. ${contactFallbackText}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h3 className="text-base font-semibold text-white">Tell us what you want to grow</h3>
      <div className="grid gap-3 sm:grid-cols-3">
        <label>
          <span className="sr-only">Full name</span>
          <input
            className={inputClass}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span className="sr-only">Mobile number</span>
          <input
            className={inputClass}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile no"
            autoComplete="tel"
            required
          />
        </label>
        <label>
          <span className="sr-only">Email address</span>
          <input
            className={inputClass}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label>
        <span className="sr-only">Project or inquiry details</span>
        <textarea
          className={`${inputClass} resize-none`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your brand, audience, goal, timeline, budget range, and the channels you want to explore..."
          rows={5}
          required
        />
      </label>
      <button
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Request a growth plan'}
      </button>
      {statusMessage ? (
        <p className="text-sm text-zinc-400" role="status">
          {statusMessage}
        </p>
      ) : null}
    </form>
  )
}
