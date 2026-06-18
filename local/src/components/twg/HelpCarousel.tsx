'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { helpSlides } from '../../data/homeContent'

function HelpCarousel() {
  const [index, setIndex] = useState(0)
  const slide = helpSlides[index]

  return (
    <section className="armedia-section-light border-t border-black/10">
      <div className="armedia-container py-16 lg:py-20">
        <p className="armedia-eyebrow text-black/50">How we can help</p>
        <h2 className="armedia-heading mt-4 max-w-3xl text-black">
          Campaign systems your business can count on
        </h2>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {helpSlides.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                'shrink-0 rounded-full px-4 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors',
                i === index
                  ? 'bg-brand-dark text-white'
                  : 'border border-black/15 text-black/60 hover:border-black/30 hover:text-black',
              ].join(' ')}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-[#f0efec]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold text-black">{slide.title}</h3>
            <p className="armedia-body mt-4 text-black/75">{slide.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/services" className="armedia-btn-secondary mt-8">
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpCarousel
