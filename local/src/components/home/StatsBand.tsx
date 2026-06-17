'use client'

import { motion } from 'framer-motion'
import { statsBand } from '../../data/homeData'
import AnimatedCounter from '../ui/AnimatedCounter'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import StaggerReveal from '../motion/StaggerReveal'
import { scaleInVariants, staggerContainer, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function StatsBand() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <section className="am-section am-twg-section am-theme-slate am-section-stats-band" aria-labelledby="stats-heading">
      <div className="am-container">
        <TwgSectionHeader
          tag="Statistics"
          title="Why choose Armedia?"
          titleId="stats-heading"
          centered
        />

        <StaggerReveal
          className="am-stats-band-grid"
          stagger={0.1}
          delayChildren={0.12}
          variants={staggerContainer(0.1, 0.12)}
        >
          {statsBand.map((stat, index) => (
            <motion.div key={stat.label} variants={scaleInVariants}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
                animateContainer={false}
              />
            </motion.div>
          ))}
        </StaggerReveal>

        <motion.p
          className="am-stats-band-note"
          initial={shouldAnimate ? { opacity: 0 } : false}
          whileInView={shouldAnimate ? { opacity: 1 } : undefined}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          One partner for strategy, media, AI, BI, and measurable campaign execution.
        </motion.p>
      </div>
    </section>
  )
}

export default StatsBand
