'use client'

import { motion } from 'framer-motion'
import { resultsBenefits, resultsStats } from '../../data/homeData'
import AnimatedCounter from '../ui/AnimatedCounter'
import SpotlightCard from '../ui/SpotlightCard'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import StaggerReveal from '../motion/StaggerReveal'
import { fadeUpVariants, scaleInVariants, staggerContainer } from '../../lib/motion'

function ResultsShowcase() {
  return (
    <section className="am-section am-twg-section am-theme-ivory am-section-results" aria-labelledby="results-heading">
      <div className="am-container am-results-layout">
        <div className="am-results-copy">
          <TwgSectionHeader
            tag="Results Focus"
            title="What brands gain from a connected campaign system"
            titleId="results-heading"
            description="Armedia improves visibility, simplifies decision-making, and makes performance easier to understand across every stage of the campaign."
          />

          <StaggerReveal
            className="am-stats-grid"
            stagger={0.09}
            delayChildren={0.2}
            variants={staggerContainer(0.09, 0.2)}
          >
            {resultsStats.map((stat, index) => (
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
        </div>

        <StaggerReveal
          className="am-results-cards"
          stagger={0.1}
          delayChildren={0.15}
          variants={staggerContainer(0.1, 0.15)}
        >
          {resultsBenefits.map((card, index) => (
            <motion.div key={card.title} variants={fadeUpVariants}>
              <SpotlightCard
                className={`am-result-card ${card.featured ? 'is-featured' : ''}`}
                index={index}
                variant={card.featured ? 'featured' : 'default'}
                animateOnView={false}
              >
                <span className="am-result-label">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

export default ResultsShowcase
