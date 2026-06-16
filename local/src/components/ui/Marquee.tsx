'use client'

import { motion, useReducedMotion } from 'framer-motion'

type MarqueeProps = {
  items: string[]
  speed?: number
  className?: string
}

export default function Marquee({ items, speed = 35, className = '' }: MarqueeProps) {
  const reducedMotion = useReducedMotion()
  const doubled = [...items, ...items]

  if (reducedMotion) {
    return (
      <div className={`flex flex-wrap justify-center gap-x-8 gap-y-2 ${className}`}>
        {items.map((item) => (
          <span key={item} className="text-sm uppercase tracking-widest text-zinc-500">
            {item}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={`overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-5 ${className}`}>
      <motion.div
        className="flex w-max shrink-0 gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
