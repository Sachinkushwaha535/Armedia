'use client'

import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function useMotionPreset() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const canAnimate = mounted && !prefersReducedMotion

  return {
    prefersReducedMotion: !!prefersReducedMotion,
    isMobile,
    shouldAnimate: canAnimate,
    mounted,
  }
}
