'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '../motion/ScrollReveal'
import { blurInVariants, slowTransition, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function IntroStatement() {
  const { shouldAnimate } = useMotionPreset()

  return (
    <ScrollReveal
      as="section"
      className="am-intro am-intro-band am-twg-section"
      id="intro-section"
      variants={blurInVariants}
      transition={slowTransition}
    >
      <div className="am-intro-glow" aria-hidden="true" />
      <div className="am-container">
        <motion.p
          className="am-intro-emphasis"
          initial={shouldAnimate ? { opacity: 0, y: 28 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="am-intro-highlight"
            initial={shouldAnimate ? { opacity: 0, scale: 0.96 } : false}
            whileInView={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            What&apos;s different about Armedia?
          </motion.span>{' '}
          We connect strategy, media, creative, AI, and reporting into one practical growth system — so your
          next campaign is easier to plan, launch, and improve.
        </motion.p>
      </div>
    </ScrollReveal>
  )
}

export default IntroStatement
