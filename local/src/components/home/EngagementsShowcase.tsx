'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { portfolioProjects } from '../../data/homeData'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import ShowcaseImage from '../ui/ShowcaseImage'
import { carouselSlideVariants, defaultTransition, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

const AUTO_PLAY_MS = 3000

function EngagementsShowcase() {
  const { shouldAnimate } = useMotionPreset()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (portfolioProjects.length <= 1) return

    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % portfolioProjects.length)
    }, AUTO_PLAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  const active = portfolioProjects[activeIndex]

  return (
    <section className="am-section am-twg-section am-theme-midnight am-section-engagements" aria-labelledby="work-heading">
      <div className="am-container">
        <TwgSectionHeader
          tag="Featured engagements"
          title="How Armedia builds connected campaigns"
          titleId="work-heading"
        />

        <motion.div
          className="am-portfolio-carousel"
          initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={viewportOnce}
          transition={defaultTransition}
        >
          <div className="am-portfolio-carousel-track" aria-live="polite">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={active.title}
                className={`am-portfolio-slide am-portfolio-slide--${active.tone}`}
                custom={direction}
                variants={carouselSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <ShowcaseImage
                  src={active.image}
                  alt={active.imageAlt}
                  className="am-portfolio-slide-image"
                  animate={shouldAnimate}
                />
                <div className="am-portfolio-slide-body">
                  <div className="am-portfolio-slide-services">
                    {active.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                  <span className="am-engagement-badge">{active.badge}</span>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                  <p className="am-engagement-meta">
                    <strong>Focus:</strong> {active.metric}
                  </p>
                  <div className="am-service-tags">
                    {active.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link className="am-link am-portfolio-slide-cta" href="/contact">
                    Discuss this engagement
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <span className="am-carousel-counter am-carousel-counter--solo" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, '0')} — {portfolioProjects.length}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default EngagementsShowcase
