'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import Link from 'next/link'
import PageShell from './PageShell'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatusMessage(data.message ?? 'Something went wrong. Please email hello@armedia.co.nz.')
        return
      }

      setStatusMessage(data.message ?? 'Inquiry submitted successfully.')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch {
      setStatusMessage('Something went wrong. Please email hello@armedia.co.nz.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageShell
      kicker="Contact"
      title="Tell us about your project."
      description="A premium inquiry panel inspired by the contact-focused layout."
    >
      <div className="contact-showcase">
        <div className="contact-aside">
          <p className="eyebrow">Let's talk</p>

          <h2>
            Clear project guidance before we talk numbers.
          </h2>

          <p className="contact-aside-copy">
            Share the goal, timeline, and tools involved. We will reply with the next sensible
            step instead of pushing a generic package.
          </p>

          <ul className="contact-points">
            <li>We sign an NDA if requested</li>
            <li>Strategy-first project scoping</li>
            <li>Premium website, app, and AI workflow projects</li>
          </ul>

          <div className="contact-metric-grid" aria-label="Contact highlights">
            <div>
              <strong>&lt;12h</strong>
              <span>Typical reply</span>
            </div>
            <div>
              <strong>30m</strong>
              <span>Intro call</span>
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-detail-row">
              <span>Email</span>
              <a href="mailto:contact.armedianz@gmail.com" className="text-link">
                contact.armedianz@gmail.com
              </a>
            </div>

            <div className="contact-detail-row">
              <span>Location</span>
              <p>Auckland, New Zealand</p>
            </div>

            <div className="contact-detail-row">
              <span>Services</span>
              <Link className="text-link" href="/services">
                Explore our services
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-form-head">
            <p className="eyebrow">Project inquiry</p>
            <h2>Send the details</h2>
            <p>Tell us enough to understand the opportunity. Short is fine.</p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-grid">

              <label>
                <span>Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>


              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>


              <label>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+64 21 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>

            </div>


            <label>
              <span>Project details</span>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us what you need, timeline, and references."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>


            <button
              type="submit"
              className="button button-primary contact-submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit inquiry'}
            </button>

            {statusMessage ? (
              <p className="contact-status" role="status">
                {statusMessage}
              </p>
            ) : null}

          </form>
        </div>

      </div>
    </PageShell>
  )
}

export default ContactPage
