'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { faqItems } from '../../data/homeData'
import TwgSectionHeader from '../motion/TwgSectionHeader'
import StaggerReveal from '../motion/StaggerReveal'
import {
  faqItemVariants,
  quickTransition,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function FaqSection() {
  const { shouldAnimate } = useMotionPreset()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="am-section am-twg-section am-theme-sand am-section-faq" aria-labelledby="faq-heading">
      <div className="am-container">
        <TwgSectionHeader
          tag="FAQ"
          title="Frequently asked questions"
          titleId="faq-heading"
          description="Clear answers about services, timelines, collaboration, and how Armedia approaches campaign planning."
        />

        <StaggerReveal
          className="am-faq-list"
          stagger={0.05}
          delayChildren={0.08}
          variants={staggerContainer(0.05, 0.08)}
          viewport={viewportOnce}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.question}
                className={`am-faq-item ${isOpen ? 'is-open' : ''}`}
                variants={faqItemVariants}
                transition={quickTransition}
              >
                <button
                  type="button"
                  className="am-faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.question}
                  <motion.span
                    className="am-faq-icon"
                    aria-hidden="true"
                    animate={shouldAnimate ? { rotate: isOpen ? 45 : 0 } : undefined}
                    transition={{ duration: 0.28 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      className="am-faq-answer"
                      initial={shouldAnimate ? { height: 0, opacity: 0 } : false}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={shouldAnimate ? { height: 0, opacity: 0 } : undefined}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </StaggerReveal>
      </div>
    </section>
  )
}

export default FaqSection
