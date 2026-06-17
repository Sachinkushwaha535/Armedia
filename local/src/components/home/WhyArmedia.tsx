'use client'

import { motion } from 'framer-motion'
import { philosophyCards, whyUsCards } from '../../data/homeData'
import MagneticButton from '../ui/MagneticButton'
import SpotlightCard from '../ui/SpotlightCard'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import StaggerReveal from '../motion/StaggerReveal'
import {
  fadeUpVariants,
  splitRevealLeftVariants,
  splitRevealRightVariants,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function WhyArmedia() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <section className="am-section am-twg-section am-theme-paper am-section-why" aria-labelledby="why-heading">
      <motion.div
        className="am-why-bg-shift"
        aria-hidden="true"
        initial={shouldAnimate ? { opacity: 0 } : false}
        whileInView={shouldAnimate ? { opacity: 1 } : undefined}
        viewport={viewportOnce}
        transition={{ duration: 1.2 }}
      />
      <div className="am-container">
        <TwgSectionHeader
          tag="Why Armedia"
          title="Built for brands that need clarity, trust & momentum"
          titleId="why-heading"
          description="Instead of scattered tasks and disconnected vendors, Armedia gives you a strategic partner that shapes the plan, builds the assets, launches the campaign, and makes results easier to understand."
        />

        <div className="am-why-layout">
          <motion.div
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={viewportOnce}
            variants={splitRevealLeftVariants}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <SpotlightCard className="am-why-feature" index={0} variant="featured" animateOnView={false}>
              <p className="am-kicker">Positioning</p>
              <h3>A strategic partner for brands that need more than disconnected campaigns.</h3>
              <p>
                We bring together strategy, creative direction, media execution, AI workflows,
                reporting, and campaign-supporting technology so each activity has a clear role
                in the wider growth plan.
              </p>
            </SpotlightCard>
          </motion.div>

          <StaggerReveal
            className="am-why-grid"
            stagger={0.09}
            delayChildren={0.22}
            variants={staggerContainer(0.09, 0.22)}
          >
            {whyUsCards.map((card, index) => (
              <motion.div key={card.title} variants={fadeUpVariants}>
                <SpotlightCard className="am-why-card" index={index + 1} animateOnView={false}>
                  <span className="am-result-label">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>

        <StaggerReveal
          className="am-principles-grid"
          stagger={0.08}
          delayChildren={0.18}
          variants={staggerContainer(0.08, 0.18)}
        >
          {philosophyCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={index % 2 === 0 ? splitRevealLeftVariants : splitRevealRightVariants}
            >
              <SpotlightCard className="am-principle-card" index={index} animateOnView={false}>
                <span className="am-principle-num">{card.icon}</span>
                <h3>{card.title}</h3>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerReveal>

        <motion.div
          className="am-cta-banner"
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewportOnce}
          variants={splitRevealRightVariants}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div>
            <p className="am-kicker">Ready for a clearer plan?</p>
            <h3>Turn your next campaign into a connected growth system.</h3>
          </div>
          <MagneticButton href="/start-project" variant="primary">
            Start your project brief
            <span className="am-btn-icon" aria-hidden="true">→</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyArmedia
