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
    <section className="twg-section border-t border-brand-line bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-content px-5 lg:px-12">
        <p className="twg-kicker">Download guide</p>
        <div className="mt-4 grid gap-12 border-t border-brand-line pt-10 lg:grid-cols-2 lg:items-start">
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-tight text-white">
            {titleParts[0]}
            <span className="text-brand-yellow">{downloadGuide.highlight}</span>
            {titleParts[1]}
          </h2>

          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-brand-muted">
                Your name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-yellow"
                />
              </label>
              <label className="grid gap-2 text-sm text-brand-muted">
                Phone number
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-yellow"
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
                className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-yellow"
              />
            </label>
            <button type="submit" className="twg-pill-btn twg-pill-btn-light w-fit">
              <span className="twg-pill-dot bg-black" />
              {downloadGuide.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DownloadGuideSection
