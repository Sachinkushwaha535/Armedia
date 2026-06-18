'use client'

import { FormEvent, useState } from 'react'
import { downloadGuide } from '../../data/homeContent'

function DownloadGuideSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const params = new URLSearchParams({ name, phone, email, guide: '1' })
    window.location.href = `/contact?${params.toString()}`
  }

  const titleParts = downloadGuide.title.split(downloadGuide.highlight)

  return (
    <section id="download-guide" className="armedia-section-dark border-t border-white/10">
      <div className="armedia-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="armedia-eyebrow text-brand-gold">Download guide</p>
            <h2 className="armedia-heading mt-4 text-white">
              {titleParts[0]}
              <span className="text-brand-gold">{downloadGuide.highlight}</span>
              {titleParts[1]}
            </h2>
            <p className="armedia-body mt-5 max-w-md text-brand-muted">
              Share your details and we will send a practical overview of how connected strategy,
              media, and reporting work together — no fluff, no hard sell.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="grid gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 lg:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-brand-muted">
                Your name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="armedia-input-dark"
                />
              </label>
              <label className="grid gap-2 text-sm text-brand-muted">
                Phone number
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="armedia-input-dark"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-brand-muted">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="armedia-input-dark"
              />
            </label>
            <button type="submit" className="armedia-btn-primary w-fit">
              Send me the guide
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DownloadGuideSection
