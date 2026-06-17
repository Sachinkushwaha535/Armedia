'use client'

import { motion, useReducedMotion } from 'framer-motion'

export type ExpertiseIconType =
  | 'strategy'
  | 'creative'
  | 'web'
  | 'design'
  | 'marketing'
  | 'insights'

type AnimatedExpertiseIconProps = {
  type: ExpertiseIconType
  colors?: [string, string, string]
}

const defaultColors: Record<ExpertiseIconType, [string, string, string]> = {
  strategy: ['#e8785a', '#d9a441', '#9b8fd9'],
  creative: ['#d9a441', '#e8785a', '#f5f2eb'],
  web: ['#9b8fd9', '#d9a441', '#e8785a'],
  design: ['#e8785a', '#d9a441', '#9b8fd9'],
  marketing: ['#d9a441', '#e8785a', '#9b8fd9'],
  insights: ['#9b8fd9', '#d9a441', '#e8785a'],
}

const ballPaths = [
  { x: [0, 5, -3, 2, 0], y: [0, -4, 3, -2, 0], duration: 2.8 },
  { x: [0, -4, 6, -2, 0], y: [0, 3, -5, 4, 0], duration: 3.2 },
  { x: [0, 3, -5, 4, 0], y: [0, 5, -3, 2, 0], duration: 2.5 },
]

function FloatingBall({
  color,
  className,
  pathIndex,
}: {
  color: string
  className: string
  pathIndex: number
}) {
  const reduced = useReducedMotion()
  const path = ballPaths[pathIndex]

  if (reduced) {
    return <span className={`twg-icon-ball ${className}`} style={{ background: color }} />
  }

  return (
    <motion.span
      className={`twg-icon-ball ${className}`}
      style={{ background: color }}
      animate={{ x: path.x, y: path.y }}
      transition={{ duration: path.duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function AnimatedExpertiseIcon({ type, colors }: AnimatedExpertiseIconProps) {
  const palette = colors ?? defaultColors[type]

  return (
    <div className={`twg-expertise-icon twg-expertise-icon--${type}`} aria-hidden="true">
      {type === 'strategy' && (
        <svg viewBox="0 0 48 48" fill="none">
          <line x1="14" y1="10" x2="14" y2="38" stroke="currentColor" strokeWidth="1.5" />
          <line x1="24" y1="16" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
          <line x1="34" y1="8" x2="34" y2="38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
      {type === 'creative' && (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
      {type === 'web' && (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="1.5" />
          <line x1="24" y1="34" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
      {type === 'design' && (
        <svg viewBox="0 0 48 48" fill="none">
          <rect x="16" y="8" width="16" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="36" r="1.5" fill="currentColor" />
        </svg>
      )}
      {type === 'marketing' && (
        <svg viewBox="0 0 48 48" fill="none">
          <line x1="30" y1="10" x2="30" y2="38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
      {type === 'insights' && (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
      <FloatingBall color={palette[0]} className="twg-icon-ball--1" pathIndex={0} />
      <FloatingBall color={palette[1]} className="twg-icon-ball--2" pathIndex={1} />
      <FloatingBall color={palette[2]} className="twg-icon-ball--3" pathIndex={2} />
    </div>
  )
}

export default AnimatedExpertiseIcon
