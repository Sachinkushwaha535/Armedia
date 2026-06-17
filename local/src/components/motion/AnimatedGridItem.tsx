'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { defaultTransition, fadeUpVariants } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type AnimatedGridItemProps = {
  children: ReactNode
  className?: string
  index?: number
  hoverLift?: boolean
}

function AnimatedGridItem({
  children,
  className,
  index = 0,
  hoverLift = true,
}: AnimatedGridItemProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -24px 0px' }}
      variants={fadeUpVariants}
      transition={{ ...defaultTransition, delay: index * 0.07 }}
      whileHover={hoverLift ? { y: -5, transition: { duration: 0.25 } } : undefined}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedGridItem
