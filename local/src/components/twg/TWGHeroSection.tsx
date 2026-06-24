'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { heroContent } from '../../data/homeContent'

function TWGHeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex w-full overflow-hidden bg-brand-dark pb-16 pt-20 lg:min-h-screen lg:items-end lg:pb-24 lg:pt-32">
      <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />

      <div
        className={[
          'relative z-10 w-full px-5 transition-all duration-700 ease-out lg:px-12',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        ].join(' ')}
      >
        <div className="armedia-container !px-0 lg:!px-0">
          <p className="armedia-eyebrow text-brand-gold">Auckland · New Zealand</p>
          <h1 className="armedia-heading mt-5 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] text-white">
            {heroContent.headline}
          </h1>
          <p className="armedia-lead mt-6 max-w-2xl text-brand-muted">{heroContent.subheadline}</p>

          <div className="mt-10">
            <Link href={heroContent.primaryCta.href} className="armedia-btn-primary">
              {heroContent.primaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TWGHeroSection
