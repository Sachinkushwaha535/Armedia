'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function BackgroundGlow() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 noise opacity-70" />

      {!reducedMotion && (
        <>
          <motion.div
            className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[140px]"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[120px]"
            animate={{ opacity: [0.3, 0.5, 0.3], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 h-[400px] w-[700px] rounded-full bg-accent/[0.05] blur-[100px]"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  )
}
