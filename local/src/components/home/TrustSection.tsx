'use client'

import { motion } from 'framer-motion'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import { fadeUpVariants, staggerContainer, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

const trustPoints = [
  {
    title: 'Verified proof only',
    body: 'Named clients, logos, and performance numbers appear only when they are accurate and approved.',
  },
  {
    title: 'Strategy before spend',
    body: 'We clarify audience, offer, channels, and measurement before budget goes live — so campaigns start with intent.',
  },
  {
    title: 'One connected system',
    body: 'Strategy, creative, media, AI workflows, BI reporting, and delivery work together instead of across separate vendors.',
  },
  {
    title: 'Clear next steps',
    body: 'Every conversation ends with practical priorities, timelines, and a plain-language view of what happens next.',
  },
]

function TrustSection() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <section
      className="am-section am-twg-section am-theme-ink am-section-trust"
      aria-labelledby="trust-heading"
    >
      <div className="am-container">
        <TwgSectionHeader
          tag="Why trust Armedia"
          title="Professional standards for campaign planning and delivery"
          titleId="trust-heading"
          description="We focus on clarity, verified proof, and measurable outcomes — not inflated claims or placeholder content."
          centered
        />

        <motion.ul
          className="am-trust-grid"
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={viewportOnce}
          variants={staggerContainer(0.08, 0.12)}
        >
          {trustPoints.map((point) => (
            <motion.li key={point.title} className="am-trust-card" variants={fadeUpVariants}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default TrustSection
