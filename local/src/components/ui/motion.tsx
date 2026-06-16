'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 72,
    clipPath: 'inset(100% 0 0 0 round 24px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0 round 0px)',
  },
}

export const heroPanelReveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(100% 0 0 0)',
    y: 40,
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    y: 0,
  },
}

export const lineExpand: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: 'div' | 'section' | 'article' | 'li'
  variant?: 'fadeUp' | 'scaleUp' | 'fadeIn'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.65,
  as = 'div',
  variant = 'fadeUp',
}: FadeInProps) {
  const Component = motion[as]
  const variants = variant === 'scaleUp' ? scaleUp : variant === 'fadeIn' ? fadeIn : fadeUp

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </Component>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  fast?: boolean
}

export function Stagger({ children, className, fast }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fast ? staggerFast : staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  variant = 'fadeUp',
}: {
  children: ReactNode
  className?: string
  variant?: 'fadeUp' | 'scaleUp'
}) {
  const variants = variant === 'scaleUp' ? scaleUp : fadeUp
  return (
    <motion.div className={className} variants={variants} transition={{ duration: 0.55, ease: easeOut }}>
      {children}
    </motion.div>
  )
}

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  id?: string
  'aria-labelledby'?: string
}

/** Scroll-triggered section: panel opens on scroll */
export function AnimatedSection({
  children,
  className = '',
  id,
  'aria-labelledby': ariaLabelledby,
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <section className={className} id={id} aria-labelledby={ariaLabelledby}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={className}
      id={id}
      aria-labelledby={ariaLabelledby}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '-50px' }}
      variants={sectionReveal}
      transition={{ duration: 0.9, ease: easeOut }}
    >
      {children}
    </motion.section>
  )
}

type HeroSectionProps = {
  children: ReactNode
  className?: string
  id?: string
  'aria-labelledby'?: string
}

/** Page-load hero: section opens upward, then content reveals */
export function HeroSection({
  children,
  className = '',
  id,
  'aria-labelledby': ariaLabelledby,
}: HeroSectionProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <section className={className} id={id} aria-labelledby={ariaLabelledby}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={className}
      id={id}
      aria-labelledby={ariaLabelledby}
      initial="hidden"
      animate="visible"
      variants={heroPanelReveal}
      transition={{ duration: 1, ease: easeOut }}
    >
      {children}
    </motion.section>
  )
}

type RevealTextProps = {
  children: ReactNode
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3'
  delay?: number
}

/** Masked line reveal — text slides up into view */
export function RevealText({ children, className = '', as = 'span', delay = 0 }: RevealTextProps) {
  const reducedMotion = useReducedMotion()
  const Component = motion[as]

  if (reducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <span className={`block overflow-hidden ${className}`}>
      <Component
        initial={{ y: '115%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, delay, ease: easeOut }}
      >
        {children}
      </Component>
    </span>
  )
}

/** Accent line that expands before section content */
export function RevealLine({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <span className={`block h-px w-12 bg-accent ${className}`} aria-hidden="true" />
  }

  return (
    <motion.span
      className={`block h-px w-12 origin-left bg-accent ${className}`}
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={lineExpand}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    />
  )
}

/** Wraps scroll sections like marquee / process strip */
export function AnimatedBand({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
