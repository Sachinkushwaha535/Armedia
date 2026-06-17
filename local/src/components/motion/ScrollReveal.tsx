'use client'

import { motion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'
import type { Transition, Variants, ViewportOptions } from 'framer-motion'
import {
  defaultTransition,
  fadeUpVariants,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type ScrollRevealElement = 'div' | 'section' | 'article' | 'aside'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ScrollRevealElement
  id?: string
  variants?: Variants
  transition?: Transition
  viewport?: ViewportOptions
} & Pick<HTMLAttributes<HTMLElement>, 'id' | 'aria-labelledby' | 'aria-label'>

function ScrollReveal({
  children,
  className,
  delay = 0,
  as = 'div',
  id,
  variants = fadeUpVariants,
  transition = defaultTransition,
  viewport = viewportOnce,
  ...rest
}: ScrollRevealProps) {
  const { shouldAnimate } = useMotionPreset()
  const Component = motion[as]

  if (!shouldAnimate) {
    const Tag = as
    return (
      <Tag className={className} id={id} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <Component
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ ...transition, delay }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal
