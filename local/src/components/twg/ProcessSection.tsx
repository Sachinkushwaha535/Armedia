'use client'

import Link from 'next/link'
import { useState } from 'react'
import { processSteps, whatWeDo } from '../../data/homeContent'

function ProcessSection() {
  const [openStep, setOpenStep] = useState(0)

  return (
    <>
      <section className="armedia-section-dark border-t border-white/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="armedia-eyebrow">{whatWeDo.kicker}</p>
              <h2 className="armedia-heading mt-4 text-white">
                Strategy, media, and reporting —{' '}
                <span className="font-display italic text-brand-gold">connected in one plan.</span>
              </h2>
              <p className="armedia-lead mt-5 text-brand-muted">{whatWeDo.subline}</p>
            </div>
            <Link href={whatWeDo.cta.href} className="armedia-btn-primary w-fit shrink-0">
              {whatWeDo.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="armedia-eyebrow text-black/50">Our process</p>
              <h2 className="armedia-heading mt-4 text-black">
                A clear path from discovery to improvement
              </h2>
              <p className="armedia-body mt-5 max-w-md text-black/70">
                Every engagement follows a transparent workflow — with defined deliverables, reporting,
                and practical communication at each stage.
              </p>
              <Link href="/contact" className="armedia-btn-secondary mt-8">
                Request a campaign audit
              </Link>
            </div>

            <ol className="divide-y divide-black/10 border-y border-black/10">
              {processSteps.map((step, index) => {
                const isOpen = openStep === index
                return (
                  <li key={step.title}>
                    <button
                      type="button"
                      className="group flex w-full items-start gap-5 py-5 text-left lg:py-6"
                      onClick={() => setOpenStep(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-sm font-bold tabular-nums text-brand-gold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-heading text-lg font-bold text-black transition-colors group-hover:text-brand-gold lg:text-xl">
                          {step.title}
                        </span>
                        <span
                          className={[
                            'armedia-body mt-2 block overflow-hidden text-black/70 transition-all duration-300',
                            isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100',
                          ].join(' ')}
                        >
                          {step.body}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProcessSection
