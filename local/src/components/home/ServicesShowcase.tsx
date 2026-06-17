'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { services } from '../../data/homeData'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import ShowcaseImage from '../ui/ShowcaseImage'
import { carouselSlideVariants, defaultTransition, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

const AUTO_PLAY_MS = 3000

function ServicesShowcase() {
  const { shouldAnimate } = useMotionPreset()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (services.length <= 1) return

    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % services.length)
    }, AUTO_PLAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  const active = services[activeIndex]

  return (
    <section
      className="am-section am-twg-section am-theme-snow am-section-services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="am-container">
        <div className="twg-services-head">
          <TwgSectionHeader
            tag="How we can help"
            title="Growth services your brand can count on"
            titleId="services-heading"
          />
          <span className="am-carousel-counter am-carousel-counter--solo" aria-hidden="true">
            {activeIndex + 1} / {services.length}
          </span>
        </div>

        <motion.div
          className="am-service-carousel"
          initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <div className="am-service-carousel-track" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={active.title}
                className={`am-service-slide am-service-slide--${active.accent}`}
                custom={direction}
                variants={carouselSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="am-service-slide-layout">
                  <ShowcaseImage
                    src={active.image}
                    alt={active.imageAlt}
                    animate={shouldAnimate}
                    priority={activeIndex === 0}
                  />
                  <div className="am-service-slide-copy">
                    <div className="am-service-slide-head">
                      <span className="am-service-icon">{active.icon}</span>
                      <h3>{active.title}</h3>
                    </div>
                    <p className="am-service-slide-lead">{active.sub}</p>
                    <p className="am-service-slide-detail">{active.detail}</p>
                    <div className="am-service-tags">
                      {active.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link className="am-service-slide-cta twg-pill-btn twg-pill-btn--dark" href="/contact">
                      <span className="twg-pill-dot twg-pill-dot--light" aria-hidden="true" />
                      {active.cta}
                    </Link>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesShowcase
