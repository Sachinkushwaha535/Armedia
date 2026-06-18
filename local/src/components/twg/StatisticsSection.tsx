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
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="armedia-section-dark border-t border-white/10">
      <div className="armedia-container py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="armedia-eyebrow text-brand-gold">At a glance</p>
            <h2 className="armedia-heading mt-4 text-white">{statistics.heading}</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {statistics.items.map((item, index) => (
              <div
                key={item.value}
                className={[
                  'border-l border-brand-gold/40 pl-5 transition-all duration-700',
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                ].join(' ')}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="armedia-stat-value">{item.value}</p>
                <p className="armedia-body mt-2 text-brand-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
