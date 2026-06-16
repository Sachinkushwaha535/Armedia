'use client'

import { motion, useInView, useSpring, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = useReducedMotion()
  const spring = useSpring(0, { duration: reducedMotion ? 0 : 2, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    spring.set(value)
  }, [inView, spring, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => setDisplay(Math.round(latest)))
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {inView || reducedMotion ? display : 0}
      {suffix}
    </span>
  )
}
