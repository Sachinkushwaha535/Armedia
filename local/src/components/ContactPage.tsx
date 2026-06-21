'use client'

import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { contactServicesList, displayPhone, displayPhoneHref, officeAddress } from '../data/contactPageContent'
import { contactEmail, contactFallbackText } from './siteConfig'

function ContactPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    const phone = searchParams.get('phone')
    const guide = searchParams.get('guide')

    setFormData((prev) => ({
      name: name ?? prev.name,
      email: email ?? prev.email,
      phone: phone ?? prev.phone,
      message: guide === '1' ? 'Please send me the connected marketing guide by email.' : prev.message,
    }))
  }, [searchParams])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatusMessage('')
    setIsError(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (!response.ok) {
        setIsError(true)
        setStatusMessage(data.message ?? `Something went wrong. ${contactFallbackText}`)
        return
      }

      setStatusMessage(data.message ?? 'Thank you — we will be in touch shortly.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setIsError(true)
      setStatusMessage(`Something went wrong. ${contactFallbackText}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="contact-page-hero armedia-section-dark">
        <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />
        <div className="armedia-container relative z-10">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">Contact</span>
          </nav>
          <p className="armedia-eyebrow text-brand-gold">Get in touch</p>
          <h1 className="services-page-title mt-4 max-w-4xl">
            Talk to Armedia about web, media, systems, and business growth.
          </h1>
          <p className="armedia-lead mt-5 max-w-2xl text-brand-muted">
            Whether you need a website, media execution, CRM setup, workflow automation, reporting,
            or full end-to-end support, Armedia helps connect the systems your business depends on.
          </p>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="contact-page-grid">
            <aside>
              <p className="armedia-eyebrow text-black/50">How we can help</p>
              <h2 className="armedia-heading mt-4 text-black">Services we support</h2>
              <p className="armedia-body mt-4 max-w-md text-black/70">
                Tell us what you need and we will map the best next step for your business.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-black/75">
                {contactServicesList.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="contact-direct-block">
                <div className="contact-direct-item">
                  <span>Email</span>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
                <div className="contact-direct-item">
                  <span>Phone</span>
                  <a href={displayPhoneHref}>{displayPhone}</a>
                </div>
                <div className="contact-direct-item">
                  <span>Response time</span>
                  <p>We aim to reply within one business day.</p>
                </div>
              </div>

              <Link href="/services" className="armedia-btn-secondary mt-10 inline-flex">
                View services
              </Link>
            </aside>

            <form className="contact-form-panel" onSubmit={handleSubmit}>
              <p className="armedia-eyebrow text-black/50">Send a message</p>
              <h3 className="mt-3 font-heading text-xl font-bold text-black">Project enquiry</h3>

              <div className="mt-6 grid gap-5">
                <label>
                  Your name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="armedia-input"
                  />
                </label>

                <label>
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="armedia-input"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="armedia-input"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what you need — website, media, systems, automation, reporting, or full support."
                    className="armedia-input min-h-[140px] resize-y"
                  />
                </label>

                <button type="submit" className="armedia-btn-primary w-fit" disabled={loading}>
                  {loading ? 'Sending…' : 'Send message'}
                </button>

                {statusMessage ? (
                  <p
                    className={[
                      'contact-form-status',
                      isError ? 'contact-form-status--error' : '',
                    ].join(' ')}
                    role="status"
                  >
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="armedia-section-muted border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="contact-visit-grid">
            <div>
              <p className="armedia-eyebrow text-black/50">Visit us</p>
              <h2 className="armedia-heading mt-4 text-black">Our Auckland office</h2>
              <address className="armedia-body mt-6 not-italic text-black/75">
                <strong className="block font-heading text-base text-black">{officeAddress.name}</strong>
                {officeAddress.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={officeAddress.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-directions-link"
              >
                Get directions →
              </a>
            </div>

            <div className="contact-map-frame">
              <iframe
                title="Armedia office location map"
                src={officeAddress.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
