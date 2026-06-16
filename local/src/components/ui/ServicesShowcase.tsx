'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { FadeIn } from './motion'

export type ServiceSlide = {
  title: string
  subtitle: string
  description: string
  tags: string[]
}

type ServicesShowcaseProps = {
  services: ServiceSlide[]
}

export default function ServicesShowcase({ services }: ServicesShowcaseProps) {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  const current = services[active]

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {services.map((service, i) => (
          <button
            key={service.title}
            type="button"
            className={`shrink-0 rounded-xl border px-4 py-3 text-left transition-all lg:px-5 lg:py-4 ${
              active === i
                ? 'border-accent/40 bg-accent/10 text-white'
                : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
            }`}
            onClick={() => setActive(i)}
            aria-current={active === i ? 'true' : undefined}
          >
            <span className="block text-xs uppercase tracking-widest text-zinc-500">{service.subtitle}</span>
            <span className="mt-1 block text-sm font-semibold sm:text-base">{service.title}</span>
          </button>
        ))}
      </div>

      <FadeIn className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-elevated p-8 sm:p-10 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{current.title}</h3>
            <p className="text-body mt-5">{current.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </FadeIn>
    </div>
  )
}
