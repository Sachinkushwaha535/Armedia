'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import Link from 'next/link'
import PageShell from './PageShell'
import { contactEmail, contactFallbackText, contactPhone, contactPhoneHref } from './siteConfig'

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
        setStatusMessage(data.message ?? `Something went wrong. ${contactFallbackText}`)
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
      <div className="contact-pro-layout">
        <section className="contact-pro-main">
          <div className="contact-method-grid">
            <article>
              <span>Email</span>
              <strong>Drop us a line</strong>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </article>
            <article>
              <span>Call</span>
              <strong>{contactPhone ? 'Call the studio' : 'Request a call back'}</strong>
              {contactPhone && contactPhoneHref ? (
                <a href={contactPhoneHref}>{contactPhone}</a>
              ) : (
                <p>Share your number and we will respond with the right next step.</p>
              )}
            </article>
            <article>
              <span>Plan</span>
              <strong>Get a clear next step</strong>
              <p>We help shape strategy, media, creative, AI, BI, and execution.</p>
            </article>
          </div>

          <form className="contact-pro-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <p className="eyebrow">Project Inquiry</p>
              <h2>Share your vision with us</h2>
              <p>Tell us your current challenge and we will help turn it into a sharper growth strategy.</p>
            </div>

            <div className="contact-grid">
              <label>
                <span>Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
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
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />
              </label>
            </div>

            <label>
              <span>Project details</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us your brand, campaign goal, audience, timeline, channels you want to use, and the result you want to achieve."
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
              {loading ? 'Sending...' : 'Launch message'}
            </button>

            {statusMessage ? (
              <p className="contact-status" role="status">
                {statusMessage}
              </p>
            ) : null}
          </form>
        </section>

        <aside className="contact-growth-panel">
          <p className="eyebrow">Why choose us</p>
          <h2>Your growth plan starts with clarity.</h2>
          <div className="contact-growth-stats">
            <span><strong>&lt; 1h</strong>Response focus</span>
            <span><strong>18</strong>Service capabilities</span>
            <span><strong>AI</strong>Workflow-ready</span>
            <span><strong>BI</strong>Reporting-led</span>
          </div>
          <p>
            We connect media planning, creative direction, advertising, OOH, offline marketing,
            AI workflows, dashboards, and campaign-supporting technology into one practical growth system.
          </p>
          <div className="contact-panel-links">
            <Link className="text-link" href="/services">Explore services</Link>
            <Link className="text-link" href="/start-project">Build a brief</Link>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

export default ContactPage
