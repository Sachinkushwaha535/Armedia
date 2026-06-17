'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  contactCardScrollVariants,
  contactPageViewport,
  fadeUpVariants,
  getServiceIconTone,
  softTransition,
  staggerContainer,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type LegalContentRevealProps = {
  children: ReactNode
  updatedLabel?: string
}

function LegalContentReveal({ children, updatedLabel = 'Last updated: June 2026' }: LegalContentRevealProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return (
      <div className="legal-content legal-content-animated">
        <p className="legal-updated-note">{updatedLabel}</p>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className="legal-content legal-content-animated"
      initial="hidden"
      whileInView="visible"
      viewport={contactPageViewport}
      variants={staggerContainer(0.08, 0.06)}
    >
      <motion.p className="legal-updated-note" variants={fadeUpVariants} transition={softTransition}>
        {updatedLabel}
      </motion.p>
      {children}
    </motion.div>
  )
}

export function LegalSection({
  children,
  index,
}: {
  children: ReactNode
  index: number
}) {
  const { shouldAnimate } = useMotionPreset()
  const prefersReducedMotion = useReducedMotion()
  const tone = getServiceIconTone(index)
  const sectionNum = String(index + 1).padStart(2, '0')

  if (!shouldAnimate) {
    return (
      <section className={`legal-section-card legal-section-card--${tone}`}>
        <span className="legal-section-num">{sectionNum}</span>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={`legal-section-card legal-section-card--${tone}`}
      initial="hidden"
      whileInView="visible"
      viewport={contactPageViewport}
      variants={contactCardScrollVariants}
      transition={{ duration: 0.52, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
    >
      <span className="legal-section-shine" aria-hidden="true" />
      <span className={`legal-section-num legal-section-num--${tone}`}>{sectionNum}</span>
      {children}
    </motion.section>
  )
}

export default LegalContentReveal
