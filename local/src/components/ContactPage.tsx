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
        setStatusMessage(data.message ?? 'Something went wrong. Please email contact.armedianz@gmail.com.')
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
      setStatusMessage('Something went wrong. Please email contact.armedianz@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageShell
      kicker="Contact Us"
      title="Let us shape your next growth campaign."
      description="Connect with our performance marketing agency to design an integrated media strategy. We specialize in cross-channel advertising, data-driven BI dashboards, and automated AI workflows built to scale commercial conversions."
    >
      <div className="contact-pro-layout">
        <section className="contact-pro-main">
          {/* Informational grid enriched with targeted agency keywords */}
          <div className="contact-method-grid">
            <article>
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Email</span>
              <strong>Direct consultation</strong>
              <a href="mailto:contact.armedianz@gmail.com" className="hover:underline">contact.armedianz@gmail.com</a>
            </article>
            <article>
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Briefing</span>
              <strong>Submit project scopes</strong>
              <p>Outline your operational targets, core channels, and conversion timelines.</p>
            </article>
            <article>
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Strategy</span>
              <strong>Receive clear allocation maps</strong>
              <p>We build structured media blueprints bridging digital ads, OOH layouts, and CRM data structures.</p>
            </article>
          </div>

          <form className="contact-pro-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <p className="eyebrow">Project Inquiry</p>
              <h2>Share your campaign vision</h2>
              <p>Detail your current customer acquisition roadblocks, and we will formulate a unified marketing roadmap.</p>
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
                  required
                />
              </label>

              <label>
                <span>Email address</span>
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
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              <span>Project metrics and goals</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Briefly state your brand, target channels (Digital, OOH, Offline), baseline budget parameters, operational timeline, and your primary target conversion goal."
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
              {loading ? 'Processing...' : 'Submit project brief'}
            </button>

            {statusMessage ? (
              <p className="contact-status mt-4 text-sm font-medium" role="status">
                {statusMessage}
              </p>
            ) : null}
          </form>
        </section>

        {/* Side panel optimized for scannable trust signals using typography layout elements */}
        <aside className="contact-growth-panel">
          <p className="eyebrow">Why partners choose us</p>
          <h2>Your marketing strategy starts with metric clarity.</h2>
          <div className="contact-growth-stats border-y border-gray-100 py-4 my-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span><strong>&lt; 1h</strong> Response time focus</span>
            </div>
            <div className="flex justify-between text-sm">
              <span><strong>18</strong> Core service capabilities</span>
            </div>
            <div className="flex justify-between text-sm">
              <span><strong>AI</strong> Workflow automations</span>
            </div>
            <div className="flex justify-between text-sm">
              <span><strong>BI</strong> Performance metrics dashboards</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            We systematically integrate omnichannel media buying, focused creative directions, target conversion rate optimization, and custom technical reporting architectures into an execution-ready marketing model.
          </p>
          <div className="contact-panel-links pt-4 flex space-x-4 text-sm">
            <Link className="text-link text-blue-600 hover:underline" href="/services">Explore solutions</Link>
            <Link className="text-link text-blue-600 hover:underline" href="/start-project">Build structured brief</Link>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

export default ContactPage
