'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import Link from 'next/link'
import { contactFallbackText } from './siteConfig'
import {
  startProjectFormIntro,
  startProjectProjectTypes,
  startProjectScopeOptions,
  startProjectScopeQuestion,
} from '../data/startProjectContent'

function StartProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: '',
  })
  const [scopeAreas, setScopeAreas] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleScopeChange = (option: string) => {
    setScopeAreas((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatusMessage('')
    setIsError(false)

    const scopeText = scopeAreas.length > 0 ? scopeAreas.join(', ') : 'Not specified'
    const message = [
      `Project type: ${formData.projectType}`,
      `${startProjectScopeQuestion} ${scopeText}`,
      '',
      formData.details.trim() || 'No additional details provided.',
    ].join('\n')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message,
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        setIsError(true)
        setStatusMessage(data.message ?? `Something went wrong. ${contactFallbackText}`)
        return
      }

      setStatusMessage(data.message ?? 'Thank you — we will be in touch shortly.')
      setFormData({ name: '', email: '', phone: '', projectType: '', details: '' })
      setScopeAreas([])
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
            <span className="text-white/80">Start a project</span>
          </nav>
          <p className="armedia-eyebrow text-brand-gold">Start a project</p>
          <h1 className="services-page-title mt-4 max-w-4xl">Tell us what your business needs next</h1>
          <p className="armedia-lead mt-5 max-w-2xl text-brand-muted">{startProjectFormIntro}</p>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <form className="contact-form-panel mx-auto max-w-3xl" onSubmit={handleSubmit}>
            <p className="armedia-eyebrow text-black/50">Project intake</p>
            <h2 className="mt-3 font-heading text-xl font-bold text-black">Share your project details</h2>

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
                Project type
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="armedia-input"
                >
                  <option value="">Select a project type</option>
                  {startProjectProjectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <fieldset className="border-0 p-0">
                <legend className="mb-3 font-heading text-sm font-semibold text-black">
                  {startProjectScopeQuestion}
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {startProjectScopeOptions.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black/80"
                    >
                      <input
                        type="checkbox"
                        checked={scopeAreas.includes(option)}
                        onChange={() => handleScopeChange(option)}
                        className="h-4 w-4 accent-black"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label>
                Additional details
                <textarea
                  name="details"
                  rows={6}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Share your goal, timeline, current systems, and anything else that will help us respond with the right next step."
                  className="armedia-input min-h-[140px] resize-y"
                />
              </label>

              <button type="submit" className="armedia-btn-primary w-fit" disabled={loading}>
                {loading ? 'Sending…' : 'Send project details'}
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
      </section>
    </>
  )
}

export default StartProjectPage
