'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { heroRotatingWords } from '../../data/homeData'
import { heroWordVariants } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function HeroRotatingWords() {
  const { shouldAnimate } = useMotionPreset()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroRotatingWords.length)
    }, 2400)
    return () => window.clearInterval(timer)
  }, [shouldAnimate])

  if (!shouldAnimate) {
    return <p className="am-hero-rotate">{heroRotatingWords[0]}</p>
  }

  return (
    <p className="am-hero-rotate" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroRotatingWords[activeIndex]}
          variants={heroWordVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroRotatingWords[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </p>
  )
}

export default HeroRotatingWords
