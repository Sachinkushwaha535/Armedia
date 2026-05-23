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
      title="Share your vision. We will help shape the next step."
      description="Tell us what you want to build or improve, and Armedia will help you turn it into a clear digital plan for websites, apps, AI, automation, SEO, or technical systems."
    >
      <div className="contact-showcase">
        
        {/* LEFT INFO PANEL */}
        <div className="contact-aside">
          <p className="eyebrow">Let's build with clarity</p>

          <h2>
            Get practical guidance for your next website, app, AI workflow, or digital growth project.
          </h2>

          <ul className="contact-points">
            <li>Clear recommendations based on your business goal</li>
            <li>Premium website, web app, AI, and automation project support</li>
            <li>Focused next steps for visibility, performance, and conversions</li>
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
                placeholder="Tell us your goal, what you need, timeline, current website or tools, and the result you want to achieve."
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
              {loading ? 'Sending...' : 'Start the conversation'}
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
