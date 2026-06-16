'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import type { MouseEvent, ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
}

const variants = {
  primary:
    'bg-accent text-zinc-950 hover:bg-accent-dim focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-void',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30',
  ghost: 'text-zinc-300 hover:text-white link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external,
}: ButtonProps) {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || variant === 'ghost') return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.08)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.08)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    variant === 'ghost'
      ? 'inline-flex items-center gap-2 text-sm font-medium transition-colors'
      : 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors'

  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <motion.div style={reducedMotion ? undefined : { x: springX, y: springY }} className="inline-block">
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...linkProps}
      >
        {children}
      </Link>
    </motion.div>
  )
}
