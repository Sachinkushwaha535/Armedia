'use client'

import { motion, useReducedMotion } from 'framer-motion'

type ScrollIndicatorProps = {
  targetId?: string
}

function ScrollIndicator({ targetId = 'intro-section' }: ScrollIndicatorProps) {
  const prefersReducedMotion = useReducedMotion()

  const handleClick = () => {
    const target = document.getElementById(targetId)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      type="button"
      className="scroll-indicator"
      onClick={handleClick}
      aria-label="Scroll to next section"
    >
      <span className="scroll-indicator-label">Scroll</span>
      <motion.span
        className="scroll-indicator-icon"
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <rect x="7" y="3" width="10" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <motion.circle
            cx="12"
            cy="9"
            r="1.5"
            fill="currentColor"
            animate={prefersReducedMotion ? undefined : { cy: [9, 13, 9] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        </svg>
      </motion.span>
    </button>
  )
}

export default ScrollIndicator
