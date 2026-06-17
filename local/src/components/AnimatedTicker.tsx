'use client'

import { motion } from 'framer-motion'
import { tickerRevealVariants, viewportOnce } from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

type AnimatedTickerProps = {
  items: string[]
}

function AnimatedTicker({ items }: AnimatedTickerProps) {
  const { shouldAnimate } = useMotionPreset()
  const doubled = [...items, ...items]

  return (
    <motion.div
      className="ticker"
      aria-hidden="true"
      initial={shouldAnimate ? 'hidden' : false}
      whileInView={shouldAnimate ? 'visible' : undefined}
      viewport={viewportOnce}
      variants={tickerRevealVariants}
      transition={{ duration: 0.6 }}
    >
      <span className="ticker-fade ticker-fade--left" aria-hidden="true" />
      <div className="ticker-inner">
        {doubled.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
      <span className="ticker-fade ticker-fade--right" aria-hidden="true" />
    </motion.div>
  )
}

export default AnimatedTicker
