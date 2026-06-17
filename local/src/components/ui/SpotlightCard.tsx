'use client'

import { motion } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'
import { useRef } from 'react'
import type { Transition, Variants, ViewportOptions } from 'framer-motion'
import { blurInSoftVariants, defaultTransition, viewportOnce } from '../../lib/motion'
import { useIsTouch } from '../../lib/useIsTouch'
import { useMotionPreset } from '../../lib/useMotionPreset'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  index?: number
  variant?: 'default' | 'featured' | 'soft'
  hoverLift?: boolean
  revealVariant?: Variants
  transition?: Transition
  viewport?: ViewportOptions
  animateOnView?: boolean
}

function SpotlightCard({
  children,
  className = '',
  index = 0,
  variant = 'default',
  hoverLift = true,
  revealVariant = blurInSoftVariants,
  transition,
  viewport = viewportOnce,
  animateOnView = true,
}: SpotlightCardProps) {
  const { shouldAnimate } = useMotionPreset()
  const isTouch = useIsTouch()
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!shouldAnimate || isTouch || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    ref.current.style.setProperty('--spot-x', `${x}px`)
    ref.current.style.setProperty('--spot-y', `${y}px`)
  }

  const hoverProps =
    !shouldAnimate || isTouch || !hoverLift
      ? undefined
      : { y: -8, scale: 1.015 }

  const cardTransition = transition ?? {
    duration: 0.45,
    delay: index * 0.07,
    ease: [0.22, 1, 0.36, 1] as const,
  }

  if (!shouldAnimate) {
    return (
      <div
        ref={ref}
        className={`am-spotlight-card am-spotlight-card--${variant} ${className}`}
        onMouseMove={handleMove}
      >
        <span className="am-spotlight-card-shine" aria-hidden="true" />
        <span className="am-spotlight-card-glow" aria-hidden="true" />
        <span className="am-spotlight-card-edge" aria-hidden="true" />
        <div className="am-spotlight-card-body">{children}</div>
      </div>
    )
  }

  const motionProps = animateOnView
    ? {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport,
        variants: revealVariant,
        transition: cardTransition,
      }
    : {}

  return (
    <motion.div
      ref={ref}
      className={`am-spotlight-card am-spotlight-card--${variant} ${className}`}
      onMouseMove={handleMove}
      {...motionProps}
      whileHover={hoverProps}
    >
      <span className="am-spotlight-card-shine" aria-hidden="true" />
      <span className="am-spotlight-card-glow" aria-hidden="true" />
      <span className="am-spotlight-card-edge" aria-hidden="true" />
      <div className="am-spotlight-card-body">{children}</div>
    </motion.div>
  )
}

export default SpotlightCard
