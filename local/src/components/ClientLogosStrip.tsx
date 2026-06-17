'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './motion/ScrollReveal'
import {
  logoFadeVariants,
  staggerContainer,
  testimonialDriftVariants,
  viewportOnce,
} from '../lib/motion'
import { useMotionPreset } from '../lib/useMotionPreset'

type ClientLogosStripProps = {
  clients: string[]
}

function ClientLogosStrip({ clients }: ClientLogosStripProps) {
  const { shouldAnimate } = useMotionPreset()

  return (
    <ScrollReveal
      as="section"
      className="client-logos-strip am-twg-section am-theme-snow client-logos-strip--animated"
      aria-label="Industries we serve"
      variants={testimonialDriftVariants}
    >
      <div className="client-logos-glow" aria-hidden="true" />

      <motion.p
        className="client-logos-kicker"
        initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={viewportOnce}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="client-logos-kicker-line" aria-hidden="true" />
        Trusted by growth-focused brands across key industries
        <span className="client-logos-kicker-line" aria-hidden="true" />
      </motion.p>

      <motion.ul
        className="client-logos-list client-logos-list--grid"
        initial={shouldAnimate ? 'hidden' : false}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={viewportOnce}
        variants={staggerContainer(0.08, 0.14)}
      >
        {clients.map((client, index) => (
          <motion.li
            key={client}
            className="client-logo-item client-logo-item--pill"
            variants={logoFadeVariants}
            whileHover={shouldAnimate ? { y: -6, scale: 1.03 } : undefined}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          >
            <span className="client-logo-shine" aria-hidden="true" />
            <span className="client-logo-badge" aria-hidden="true">
              {client
                .split(' ')
                .slice(0, 2)
                .map((word) => word[0])
                .join('')}
            </span>
            <span className="client-logo-name">{client}</span>
            <span className="client-logo-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </ScrollReveal>
  )
}

export default ClientLogosStrip
