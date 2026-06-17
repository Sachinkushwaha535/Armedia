'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'
import { defaultTransition, fadeUpVariants } from '../../lib/motion'

type HomeSectionProps = {
  children: ReactNode
  className?: string
  id?: string
} & Pick<HTMLAttributes<HTMLElement>, 'aria-labelledby' | 'aria-label'>

function HomeSection({
  children,
  className = '',
  id,
  ...rest
}: HomeSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <section className={className} id={id} {...rest}>
        <div className="hp-section-inner">{children}</div>
      </section>
    )
  }

  return (
    <motion.section
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -60px 0px' }}
      variants={fadeUpVariants}
      transition={defaultTransition}
      {...rest}
    >
      <div className="hp-section-inner">{children}</div>
    </motion.section>
  )
}

export default HomeSection
