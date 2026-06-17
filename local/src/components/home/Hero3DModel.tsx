'use client'

import dynamic from 'next/dynamic'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import HeroVisual from './HeroVisual'
import { useIsTouch } from '../../lib/useIsTouch'
import { useMotionPreset } from '../../lib/useMotionPreset'

const Hero3DScene = dynamic(() => import('../Hero3DScene'), {
  ssr: false,
  loading: () => null,
})

function Hero3DModel() {
  const { shouldAnimate } = useMotionPreset()
  const isTouch = useIsTouch()
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 110, damping: 16, mass: 0.55 })
  const springY = useSpring(mouseY, { stiffness: 110, damping: 16, mass: 0.55 })

  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14])
  const rotateX = useTransform(springY, [-0.5, 0.5], [11, -11])
  const shiftX = useTransform(springX, [-0.5, 0.5], [-28, 28])
  const shiftY = useTransform(springY, [-0.5, 0.5], [-22, 22])

  const enablePointer = shouldAnimate && !isTouch

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enablePointer || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`am-hero-media-stage${enablePointer ? ' am-hero-media-stage--interactive' : ''}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        enablePointer
          ? {
              rotateX,
              rotateY,
              x: shiftX,
              y: shiftY,
              transformPerspective: 1200,
            }
          : undefined
      }
    >
      <Hero3DScene reducedMotion={!shouldAnimate} pointerX={springX} pointerY={springY} />
      <HeroVisual pointerX={springX} pointerY={springY} enablePointer={enablePointer} />
    </motion.div>
  )
}

export default Hero3DModel
