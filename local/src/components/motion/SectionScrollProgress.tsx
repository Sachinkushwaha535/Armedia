'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useMotionPreset } from '../../lib/useMotionPreset'

type SectionScrollProgressProps = {
  className?: string
}

function SectionScrollProgress({ className = '' }: SectionScrollProgressProps) {
  const { shouldAnimate } = useMotionPreset()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.35'],
  })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className={`twg-progress-wrap ${className}`.trim()} aria-hidden="true">
      <div className="twg-progress-track">
        {shouldAnimate ? (
          <motion.div className="twg-progress-fill" style={{ scaleX, transformOrigin: 'left center' }} />
        ) : (
          <div className="twg-progress-fill twg-progress-fill--static" />
        )}
      </div>
    </div>
  )
}

export default SectionScrollProgress
