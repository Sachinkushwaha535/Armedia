'use client'

import { useEffect, useRef, useState } from 'react'
import { statistics } from '../../data/homeContent'

function StatisticsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-20 border-t border-black/20 bg-brand-yellow py-16 text-black lg:py-24">
      <div className="mx-auto max-w-content px-5 lg:px-12">
        <p className="twg-kicker text-black/70">Statistics</p>
        <div className="mt-4 border-t border-black/20 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_1fr] lg:items-start">
            <h2 className="font-heading text-2xl font-semibold leading-snug text-black lg:col-span-1">
              {statistics.heading}
            </h2>
            {statistics.items.map((item, index) => (
              <div
                key={item.value}
                className={[
                  'transition-all duration-700 ease-out',
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                ].join(' ')}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="font-display text-[clamp(3rem,6vw,5rem)] leading-none text-black">{item.value}</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-black/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
