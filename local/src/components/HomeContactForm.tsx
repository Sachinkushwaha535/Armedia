'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import { contactFallbackText } from './siteConfig'

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
    <form className="home-contact-form" onSubmit={handleSubmit}>
      <h3>Tell us what you want to grow</h3>
      <div className="home-contact-fields">
        <label>
          <span className="sr-only">Full name</span>
          <input
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
        <span className="sr-only">Project or enquiry details</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your brand, audience, goal, timeline, budget range, and the channels you want to explore..."
          rows={5}
          required
        />
      </label>
      <button className="btn-primary" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Request a growth plan'}
      </button>
      {statusMessage ? <p className="contact-status" role="status">{statusMessage}</p> : null}
    </form>
  )
}
