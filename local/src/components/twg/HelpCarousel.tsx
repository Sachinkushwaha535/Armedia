'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { helpSlides } from '../../data/homeContent'

function HelpCarousel() {
  const [index, setIndex] = useState(0)
  const slide = helpSlides[index]

  return (
    <section className="twg-section border-t border-brand-line bg-white text-black">
      <div className="mx-auto max-w-content px-5 py-14 lg:px-12 lg:py-20">
        <p className="twg-kicker text-black/60">How we can help</p>
        <div className="mt-4 border-t border-black/15 pt-8">
          <h2 className="max-w-3xl font-heading text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-tight text-black">
            Campaign systems your business can count on.
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-2xl bg-[#ececec] p-6 lg:p-10">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                  <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                </div>
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-black">{slide.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {slide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/15 bg-black/5 px-3 py-1 text-xs font-medium text-black/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIndex((i) => (i - 1 + helpSlides.length) % helpSlides.length)}
                  className="twg-outline-btn text-black"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((i) => (i + 1) % helpSlides.length)}
                  className="twg-outline-btn text-black"
                >
                  Next →
                </button>
              </div>

              <h3 className="font-heading text-2xl font-bold text-black">{slide.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-black/75">{slide.body}</p>
              <Link href="/services" className="twg-pill-btn twg-pill-btn-dark mt-8">
                <span className="twg-pill-dot bg-white" />
                {slide.cta}
              </Link>
              <p className="mt-10 font-heading text-xs uppercase tracking-[0.15em] text-black/50">
                {index + 1} / {helpSlides.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpCarousel
