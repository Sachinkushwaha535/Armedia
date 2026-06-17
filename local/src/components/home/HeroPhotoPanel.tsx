'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { heroImages } from '../../data/homeData'
import { imageRevealVariants } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function HeroPhotoPanel() {
  const { shouldAnimate } = useMotionPreset()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!shouldAnimate || heroImages.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [shouldAnimate])

  const active = heroImages[activeIndex]

  return (
    <div className="am-hero-photo-panel" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.src}
          className="am-hero-photo-frame"
          initial={shouldAnimate ? 'hidden' : false}
          animate={shouldAnimate ? 'visible' : undefined}
          exit={shouldAnimate ? { opacity: 0, scale: 1.04 } : undefined}
          variants={imageRevealVariants}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="am-hero-photo-inner"
            animate={shouldAnimate ? { scale: [1, 1.05, 1] } : undefined}
            transition={
              shouldAnimate
                ? { duration: 10, repeat: Infinity, ease: 'easeInOut' }
                : undefined
            }
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority
              sizes="(max-width: 1100px) 92vw, 560px"
              className="am-hero-photo-img"
            />
          </motion.div>
          <span className="am-hero-photo-overlay" />
          <span className="am-hero-photo-edge" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroPhotoPanel
