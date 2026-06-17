'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { softTransition } from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

export type Testimonial = {
  quote: string
  name: string
  role: string
  company?: string
}

type TestimonialsCarouselProps = {
  items: Testimonial[]
  autoPlayMs?: number
}

function TestimonialsCarousel({ items, autoPlayMs = 3000 }: TestimonialsCarouselProps) {
  const { shouldAnimate } = useMotionPreset()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (index: number) => {
      if (items.length === 0) return
      setDirection(index > activeIndex ? 1 : -1)
      setActiveIndex((index + items.length) % items.length)
    },
    [activeIndex, items.length],
  )

  useEffect(() => {
    if (items.length <= 1) return

    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % items.length)
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, items.length])

  if (items.length === 0) return null

  const active = items[activeIndex]

  return (
    <div className="testimonials-carousel" aria-live="polite">
      <div className="testimonials-carousel-track">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={activeIndex}
            className="testimonials-carousel-quote"
            custom={direction}
            initial={shouldAnimate ? { opacity: 0, x: direction > 0 ? 40 : -40 } : false}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldAnimate ? { opacity: 0, x: direction > 0 ? -40 : 40 } : undefined}
            transition={softTransition}
          >
            <p>&ldquo;{active.quote}&rdquo;</p>
            <footer>
              <cite>{active.name}</cite>
              <span>
                {active.role}
                {active.company ? ` · ${active.company}` : ''}
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {items.length > 1 ? (
        <div className="testimonials-carousel-dots" role="tablist" aria-label="Testimonials">
          {items.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              role="tab"
              className={index === activeIndex ? 'is-active' : undefined}
              aria-selected={index === activeIndex}
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default TestimonialsCarousel
