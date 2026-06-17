'use client'

import Link from 'next/link'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'

type MagneticButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}

function MagneticButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    x.set(offsetX * 0.18)
    y.set(offsetY * 0.18)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass = variant === 'primary' ? 'am-btn am-btn-primary' : 'am-btn am-btn-ghost'

  if (prefersReducedMotion) {
    return (
      <Link className={`${baseClass} ${className}`} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <motion.div
      style={{ x: springX, y: springY, display: 'inline-flex' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Link className={`${baseClass} ${className}`} href={href}>
        {children}
      </Link>
    </motion.div>
  )
}

export default MagneticButton
