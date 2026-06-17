'use client'

import { motion } from 'framer-motion'
import { processSteps } from '../../data/homeData'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import {
  defaultTransition,
  pickDirectionalVariant,
  timelineGrowVariants,
  timelineNodeVariants,
  viewportOnceTight,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function ProcessTimeline() {
  const { shouldAnimate, isMobile } = useMotionPreset()

  return (
    <section className="am-section am-twg-section am-theme-sand am-section-process" aria-labelledby="process-heading">
      <div className="am-container">
        <TwgSectionHeader
          tag="Process"
          title="A clear path from idea to measurable campaign"
          titleId="process-heading"
        />

        <div className="am-timeline">
          <motion.span
            className="am-timeline-line"
            aria-hidden="true"
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnceTight}
            variants={timelineGrowVariants}
            transition={{ ...defaultTransition, duration: 1 }}
            style={{ transformOrigin: 'left center' }}
          />
          {processSteps.map((step, index) => (
            <motion.article
              key={step.num}
              className="am-timeline-step"
              initial={shouldAnimate ? 'hidden' : false}
              whileInView={shouldAnimate ? 'visible' : undefined}
              viewport={viewportOnceTight}
              variants={pickDirectionalVariant(index, isMobile)}
              transition={{ ...defaultTransition, delay: 0.15 + index * 0.1 }}
            >
              <motion.span
                className="am-timeline-node"
                initial={shouldAnimate ? 'hidden' : false}
                whileInView={shouldAnimate ? 'visible' : undefined}
                viewport={viewportOnceTight}
                variants={timelineNodeVariants}
                transition={{ ...defaultTransition, delay: 0.25 + index * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              >
                {step.num}
              </motion.span>
              <div className="am-timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
