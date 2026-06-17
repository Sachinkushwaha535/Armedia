'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'
import {
  blurInSoftVariants,
  defaultTransition,
  pickDirectionalVariant,
  scaleInVariants,
  staggerItemTransition,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type PageGridItemElement = 'article' | 'div' | 'section' | 'span'

export type PageGridItemVariant = 'directional' | 'scale' | 'blur'

type PageGridItemProps = {
  children: ReactNode
  className?: string
  index?: number
  as?: PageGridItemElement
  variant?: PageGridItemVariant
  hoverLift?: boolean
}

function resolveVariants(
  variant: PageGridItemVariant,
  index: number,
  isMobile: boolean,
): Variants {
  switch (variant) {
    case 'scale':
      return scaleInVariants
    case 'blur':
      return blurInSoftVariants
    default:
      return pickDirectionalVariant(index, isMobile)
  }
}

function PageGridItem({
  children,
  className,
  index = 0,
  as = 'article',
  variant = 'directional',
  hoverLift = true,
}: PageGridItemProps) {
  const { shouldAnimate, isMobile } = useMotionPreset()
  const prefersReducedMotion = useReducedMotion()
  const Tag = as

  if (!shouldAnimate) {
    return <Tag className={className}>{children}</Tag>
  }

  const Component = motion[as]
  const variants = resolveVariants(variant, index, isMobile)

  return (
    <Component
      className={className}
      variants={variants}
      transition={staggerItemTransition(index)}
      whileHover={
        hoverLift && !prefersReducedMotion ? { y: -5, transition: { duration: 0.22 } } : undefined
      }
    >
      {children}
    </Component>
  )
}

export default PageGridItem
