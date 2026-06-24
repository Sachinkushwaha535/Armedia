'use client'

import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { officeAddress } from '../data/contactPageContent'
import { contactFallbackText } from './siteConfig'

const SUCCESS_MESSAGE = 'Your request was sent successfully. We will be in touch soon.'
const SUCCESS_TOAST_MS = 2500

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
  const [showSuccessToast, setShowSuccessToast] = useState(false)

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

  useEffect(() => {
    if (!showSuccessToast) return
    const timer = window.setTimeout(() => setShowSuccessToast(false), SUCCESS_TOAST_MS)
    return () => window.clearTimeout(timer)
  }, [showSuccessToast])

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

      setFormData({ name: '', email: '', phone: '', message: '' })
      setShowSuccessToast(true)
    } catch {
      setIsError(true)
      setStatusMessage(`Something went wrong. ${contactFallbackText}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {showSuccessToast ? (
        <div className="contact-success-toast" role="status" aria-live="polite">
          <p className="font-heading text-sm font-bold text-black">{SUCCESS_MESSAGE}</p>
        </div>
      ) : null}

      <section className="armedia-section-light border-b border-black/10 pt-28 lg:pt-32">
        <div className="armedia-container py-10 lg:py-12">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <p className="armedia-eyebrow text-black/50">Get in touch</p>
            <h1 className="armedia-heading mt-4 text-black">Contact us</h1>
            <p className="armedia-body mt-3 text-black/70">
              Send your details and we will reply with practical next steps for your project.
            </p>
          </div>

          <form className="contact-form-panel mx-auto max-w-4xl" onSubmit={handleSubmit}>
            <h2 className="font-heading text-base font-bold text-black lg:text-lg">Send a message</h2>

            <div className="contact-form-fields mt-5">
              <label className="contact-form-label">
                Your name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="armedia-input contact-form-input"
                />
              </label>

              <label className="contact-form-label">
                Phone number:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="armedia-input contact-form-input"
                />
              </label>

              <label className="contact-form-label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="armedia-input contact-form-input"
                />
              </label>

              <label className="contact-form-label contact-form-label--full">
                Message:
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you need — website, media, systems, automation, reporting, or full support."
                  className="armedia-input contact-form-input min-h-[88px] resize-y"
                />
              </label>

              <div className="contact-form-actions">
                <button type="submit" className="armedia-btn-primary w-fit" disabled={loading}>
                  {loading ? 'Sending…' : 'Send message'}
                </button>

                {statusMessage && isError ? (
                  <p className="contact-form-status contact-form-status--error" role="alert">
                    {statusMessage}
                  </p>
                ) : null}
              </div>
            </div>
          </form>
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
