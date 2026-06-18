'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { processSteps, whatWeDo } from '../../data/homeContent'

function ProcessRevealSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [openStep, setOpenStep] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const node = wrapRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const total = node.offsetHeight - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      setProgress(scrolled / total)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const processLift = Math.min(1, Math.max(0, (progress - 0.18) / 0.62)) * 100
  const ideasParallax = processLift * 0.06
  const ideasFade = processLift >= 88 ? Math.max(0, 1 - (processLift - 88) / 12) : 1

  useEffect(() => {
    if (processLift >= 52 && !revealed) {
      setRevealed(true)
    }
  }, [processLift, revealed])

  return (
    <div ref={wrapRef} className="relative bg-black" style={{ height: '140vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* What we do layer (revealed behind) */}
        <section
          className="twg-ideas-layer absolute inset-0 z-0 flex h-full flex-col justify-center overflow-hidden bg-black px-5 py-10 lg:px-12 lg:py-14"
          style={{ opacity: ideasFade }}
        >
          <div className="twg-ideas-glow twg-ideas-glow-a" aria-hidden="true" />
          <div className="twg-ideas-glow twg-ideas-glow-b" aria-hidden="true" />
          <div className="twg-ideas-gridline" aria-hidden="true" />

          <div
            className="relative z-10 mx-auto w-full max-w-content"
            style={{ transform: `translateY(${ideasParallax}%)` }}
          >
            <p className="twg-kicker twg-ideas-kicker">
              <span className="twg-ideas-kicker-dot" aria-hidden="true" />
              {whatWeDo.kicker}
            </p>

            <div className="mt-8 border-t border-brand-line/80 pt-12">
              <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="twg-ideas-headline font-display leading-[0.88] text-white">
                    <span className="twg-ideas-headline-word block">ideas</span>
                    <span className="mt-1 flex items-baseline gap-3">
                      <span className="twg-ideas-headline-slash text-brand-gold">/</span>
                      <span className="twg-ideas-headline-word twg-ideas-headline-word--accent italic text-brand-gold">
                        around
                      </span>
                    </span>
                  </h2>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-muted">{whatWeDo.subline}</p>
                </div>

                <div className="twg-ideas-frame relative hidden h-52 w-40 shrink-0 lg:block">
                  <div className="twg-ideas-frame-border" aria-hidden="true" />
                  <div className="relative h-full w-full overflow-hidden rounded-sm">
                    <Image src={whatWeDo.image} alt="" fill className="object-cover" sizes="192px" />
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex items-end justify-between gap-6 border-t border-brand-line/80 pt-6">
                <div className="twg-ideas-watermark font-display leading-none" aria-hidden="true">
                  <span className="twg-ideas-watermark-line block">ideas</span>
                  <span className="twg-ideas-watermark-line twg-ideas-watermark-line--gold block">around</span>
                </div>

                <div className="relative z-10 shrink-0">
                  <Link href={whatWeDo.cta.href} className="twg-pill-btn twg-pill-btn-red">
                    <span className="twg-pill-dot bg-white" />
                    {whatWeDo.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process layer slides up */}
        <section
          className="absolute inset-0 z-10 flex flex-col overflow-hidden bg-white text-black will-change-transform"
          style={{ transform: `translateY(-${processLift}%)` }}
        >
          <div className="mx-auto flex h-full min-h-0 w-full max-w-content flex-col px-5 py-8 lg:px-12 lg:py-12">
            <p
              className={[
                'shrink-0 text-black/60 transition-all duration-700 uppercase',
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
              ].join(' ')}
            >
              Our Process
            </p>
            <div className="mt-4 grid min-h-0 flex-1 gap-6 border-t border-black/15 pt-6 lg:grid-cols-2 lg:gap-8 lg:pt-8">
              <div
                className={[
                  'twg-process-intro shrink-0 transition-all duration-700 lg:max-w-md',
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                ].join(' ')}
              >
                <h2 className="font-heading text-[clamp(1.65rem,3.2vw,3rem)] font-bold leading-tight">
                  <span className="text-black">Our </span>
                  <span className="font-display italic text-brand-red">campaign planning</span>
                  <span className="text-black"> process</span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-black/70">
                  As a full-service marketing media agency, Armedia uses a transparent process from discovery to
                  improvement — with clear deliverables, reporting, and practical communication at every step.
                </p>
                <Link href="/contact" className="twg-pill-btn twg-pill-btn-dark mt-6">
                  <span className="twg-pill-dot bg-white" />
                  Get a free campaign audit
                </Link>
              </div>

              <ul className="twg-process-list min-h-0 overflow-y-auto border-t border-black/10 pr-1">
                {processSteps.map((step, index) => {
                  const isOpen = openStep === index
                  return (
                    <li
                      key={step.title}
                      className={[
                        'twg-process-step border-b border-black/10 transition-all duration-700',
                        revealed ? 'twg-process-step--visible' : '',
                        isOpen ? 'twg-process-step--open bg-black/[0.03]' : 'hover:bg-black/[0.02]',
                      ].join(' ')}
                      style={{ transitionDelay: revealed ? `${120 + index * 90}ms` : '0ms' }}
                    >
                      <button
                        type="button"
                        className="group flex w-full items-center justify-between gap-4 py-3.5 text-left lg:py-4"
                        onClick={() => setOpenStep(isOpen ? null : index)}
                      >
                        <span className="font-heading text-[clamp(1.1rem,2vw,1.75rem)] font-bold text-black transition-colors duration-300 group-hover:text-brand-red">
                          {step.title}
                        </span>
                        <span
                          className={[
                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base text-white transition-all duration-300 lg:h-9 lg:w-9',
                            isOpen ? 'rotate-180 bg-brand-red' : 'bg-black',
                          ].join(' ')}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <div
                        className={[
                          'overflow-hidden transition-all duration-500 ease-out',
                          isOpen ? 'max-h-36 pb-4 opacity-100' : 'max-h-0 opacity-0',
                        ].join(' ')}
                      >
                        <p className="twg-process-step-body max-w-2xl text-sm leading-relaxed text-black/70">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProcessRevealSection
