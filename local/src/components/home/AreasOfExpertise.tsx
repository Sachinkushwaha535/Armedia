'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { expertiseAreas } from '../../data/homeData'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import StaggerReveal from '../motion/StaggerReveal'
import AnimatedExpertiseIcon from '../ui/AnimatedExpertiseIcon'
import { fadeUpVariants, staggerContainer, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function AreasOfExpertise() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <section
      className="am-section am-twg-section am-theme-paper am-section-expertise"
      aria-labelledby="expertise-heading"
    >
      <div className="am-container">
        <div className="twg-expertise-layout">
          <div className="twg-expertise-intro">
            <TwgSectionHeader
              tag="Services"
              title="Areas of expertise"
              titleId="expertise-heading"
            />
            <p className="twg-expertise-sub">Multidisciplined gameplan</p>
            <p className="twg-expertise-desc">
              Strategy, media, intelligence, creative, digital delivery, and design — connected
              in one practical growth system for brands that need clarity before spend.
            </p>
            <motion.div
              initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Link className="twg-pill-btn" href="/services">
                <span className="twg-pill-dot" aria-hidden="true" />
                Our services
              </Link>
            </motion.div>
          </div>

          <StaggerReveal
            className="twg-expertise-grid"
            stagger={0.09}
            delayChildren={0.08}
            variants={staggerContainer(0.09, 0.08)}
          >
            {expertiseAreas.map((area) => (
              <motion.article key={area.title} className="twg-expertise-block" variants={fadeUpVariants}>
                <AnimatedExpertiseIcon type={area.iconType} />
                <h3>{area.title}</h3>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>
                      <span className="twg-list-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}

export default AreasOfExpertise
