'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const defaultSteps = ['We listen', 'We research', 'We design', 'We build', 'We deliver']

type ProcessStripProps = {
  steps?: string[]
}

export default function ProcessStrip({ steps = defaultSteps }: ProcessStripProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [40, -40])

  return (
    <div ref={ref} className="border-y border-white/[0.06] bg-surface py-8 sm:py-10">
      <motion.div style={{ x }} className="container-agency">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-4 sm:gap-6">
              <span className="text-lg font-medium uppercase tracking-[0.15em] text-white sm:text-xl lg:text-2xl">
                {step}
              </span>
              {i < steps.length - 1 ? (
                <span className="hidden h-px w-8 bg-white/20 sm:block lg:w-12" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
