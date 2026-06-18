'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { PortfolioItem } from '../../data/homeContent'

const TAG_MARKERS = ['①', '②', '③', '④', '⑤', '⑥']
const IMAGE_INTRO_START_X = -160

type FeaturedProjectsListProps = {
  items: PortfolioItem[]
}

function FeaturedProjectsList({ items }: FeaturedProjectsListProps) {
  const [active, setActive] = useState<number | null>(null)
  const [smoothX, setSmoothX] = useState(IMAGE_INTRO_START_X)
  const targetXRef = useRef(0)
  const introActiveRef = useRef(false)
  const activeRowRef = useRef<number | null>(null)

  useEffect(() => {
    let frame = 0
    const animate = () => {
      setSmoothX((prev) => {
        const target = targetXRef.current
        const speed = introActiveRef.current ? 0.13 : 0.09
        const next = prev + (target - prev) * speed

        if (introActiveRef.current && Math.abs(next - target) < 2) {
          introActiveRef.current = false
        }

        return next
      })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const setLabelTargetX = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    targetXRef.current = event.clientX - rect.left
  }, [])

  const handleLabelEnter = useCallback((event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left

    if (activeRowRef.current !== index) {
      introActiveRef.current = true
      activeRowRef.current = index
      setSmoothX(IMAGE_INTRO_START_X)
    }

    setActive(index)
    targetXRef.current = x
  }, [])

  const handleSectionLeave = useCallback(() => {
    setActive(null)
    activeRowRef.current = null
    introActiveRef.current = false
  }, [])

  return (
    <section
      className="twg-section relative overflow-hidden border-t border-brand-line bg-black py-16 lg:py-24"
      onMouseLeave={handleSectionLeave}
    >
      <div className="mx-auto max-w-content px-5 lg:px-12">
        <p className="twg-kicker">Featured Projects</p>

        <div className="mt-4 border-t border-brand-line pt-6">
          <ul className="w-full">
            {items.map((item, index) => {
              const isActive = active === index

              return (
                <li key={item.title} className="border-t border-white/10 first:border-t-0">
                  <Link href={item.href} className="group block">
                    <span
                      className={[
                        'block py-1 font-heading text-xs tracking-widest transition-colors duration-300',
                        isActive ? 'text-brand-gold' : 'text-white/35',
                      ].join(' ')}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div
                      className={[
                        'twg-featured-label relative w-full overflow-hidden',
                        isActive ? 'twg-featured-label--active' : 'py-1',
                      ].join(' ')}
                      onMouseEnter={(event) => handleLabelEnter(event, index)}
                      onMouseMove={setLabelTargetX}
                    >
                      {isActive ? (
                        <div
                          className="twg-featured-card-bg pointer-events-none absolute z-0"
                          style={{
                            left: smoothX,
                            top: '50%',
                            transform: 'translate(-50%, -50%) rotate(3deg)',
                          }}
                          aria-hidden="true"
                        >
                          <Image
                            src={item.image}
                            alt=""
                            width={210}
                            height={580}
                            className="twg-featured-card-img"
                            sizes="210px"
                            priority={false}
                          />
                        </div>
                      ) : null}

                      <div className="relative z-10 px-2 py-2 text-center">
                        {isActive ? (
                          <p className="mb-2 font-heading text-[10px] uppercase tracking-[0.14em] text-brand-gold">
                            {item.tags.map((tag, tagIndex) => (
                              <span key={tag} className="mx-1.5 inline-block">
                                {TAG_MARKERS[tagIndex] ?? `${tagIndex + 1}.`} {tag}
                              </span>
                            ))}
                          </p>
                        ) : null}

                        <span
                          className={[
                            'block text-[clamp(1.65rem,4.5vw,3.4rem)] leading-[1.05] transition-all duration-300',
                            isActive
                              ? 'font-display italic text-brand-gold'
                              : 'font-heading text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-tight text-white',
                          ].join(' ')}
                        >
                          {item.title}
                        </span>
                      </div>
                    </div>

                    <div className="relative h-px w-full bg-white/12">
                      <span
                        className={[
                          'absolute left-0 top-0 h-px transition-[width] duration-700 ease-out',
                          isActive ? 'w-full bg-brand-gold' : 'w-0 bg-white',
                        ].join(' ')}
                      />
                    </div>

                    <div className="flex items-center justify-end py-1.5">
                      {isActive ? (
                        <span className="inline-flex items-center gap-2 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          Visit site
                        </span>
                      ) : (
                        <span className="h-4" aria-hidden="true" />
                      )}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsList
