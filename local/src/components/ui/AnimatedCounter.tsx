'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { defaultTransition, statPopVariants } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  label: string
  index?: number
  animateContainer?: boolean
}

function AnimatedCounter({
  value,
  suffix = '',
  label,
  index = 0,
  animateContainer = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const { shouldAnimate } = useMotionPreset()
  const [count, setCount] = useState(shouldAnimate ? 0 : value)

  useEffect(() => {
    if (!isInView || !shouldAnimate) {
      setCount(value)
      return
    }

    let frame = 0
    const totalFrames = 44
    const timer = window.setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (frame >= totalFrames) window.clearInterval(timer)
    }, 18)

    return () => window.clearInterval(timer)
  }, [isInView, shouldAnimate, value])

  const content = (
    <>
      <motion.strong
        initial={shouldAnimate ? { opacity: 0, scale: 0.85 } : false}
        animate={shouldAnimate && isInView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ ...defaultTransition, delay: 0.1 + index * 0.06, type: 'spring', stiffness: 180, damping: 18 }}
      >
        {count}
        {suffix}
      </motion.strong>
      <span>{label}</span>
    </>
  )

  if (!animateContainer) {
    return (
      <div ref={ref} className="am-stat">
        {content}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className="am-stat"
      initial={shouldAnimate ? 'hidden' : false}
      whileInView={shouldAnimate ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.4 }}
      variants={statPopVariants}
      transition={{ ...defaultTransition, delay: index * 0.08 }}
    >
      {content}
    </motion.div>
  )
}

export default AnimatedCounter
