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
    <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-black pb-16 pt-28 lg:pb-24 lg:pt-32">
      <div className="twg-hero-bg absolute inset-0" aria-hidden="true" />

      <div
        className={[
          'relative z-10 w-full px-5 transition-all duration-700 ease-out lg:px-12 xl:px-16',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        ].join(' ')}
      >
        <div className="mx-auto max-w-content">
          <h1 className="max-w-5xl font-heading text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-white">
            {heroContent.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link href={heroContent.primaryCta.href} className="twg-pill-btn twg-pill-btn-yellow">
              <span className="twg-pill-dot bg-black" />
              {heroContent.primaryCta.label}
            </Link>
            <Link href={heroContent.secondaryCta.href} className="twg-pill-link group">
              <span className="twg-pill-circle">
                <span className="block h-2 w-2 rotate-45 border-b-2 border-r-2 border-white" />
              </span>
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TWGHeroSection
