'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import BackgroundGlow from './BackgroundGlow'
import Button from './Button'
import { FadeIn } from './motion'

type PageHeroProps = {
  tag: string
  title: string
  description: string
  actions?: ReactNode
  withGlow?: boolean
}

export default function PageHero({
  tag,
  title,
  description,
  actions,
  withGlow = true,
}: PageHeroProps) {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      {withGlow ? <BackgroundGlow /> : null}
      <div className="container-agency relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {tag}
          </span>
          <h1 className="heading-display text-white">{title}</h1>
          <p className="text-body mt-6 max-w-2xl">{description}</p>
          {actions ?? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Book a consultation</Button>
              <Button href="/start-project" variant="secondary">
                Start a project
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
