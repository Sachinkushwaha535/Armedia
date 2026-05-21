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
        
        {/* LEFT INFO PANEL */}
        <div className="contact-aside">
          <p className="eyebrow">Let's talk</p>

          <h2>
            We respond within 12 hours and keep the process clear.
          </h2>

          <ul className="contact-points">
            <li>We sign an NDA if requested</li>
            <li>Access to dedicated consultant specialists</li>
            <li>Premium website and web app projects</li>
          </ul>

          <div className="contact-details">
            <a href="mailto:contact.armedianz@gmail.com" className="text-link">
              contact.armedianz@gmail.com
            </a>

            <p>Auckland, New Zealand</p>

            <Link className="text-link" href="/services">
              Explore our services
            </Link>
          </div>
        </div>


        {/* CONTACT FORM */}
        <div className="contact-card">
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
