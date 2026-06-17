'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Transition, Variants, ViewportOptions } from 'framer-motion'
import { staggerContainer, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type StaggerRevealProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  viewport?: ViewportOptions
  transition?: Transition
  variants?: Variants
}

function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.06,
  viewport = viewportOnce,
  transition,
  variants,
}: StaggerRevealProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants ?? staggerContainer(stagger, delayChildren)}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default StaggerReveal
