'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from '../ui/MagneticButton'
import Hero3DModel from './Hero3DModel'
import HeroRotatingWords from './HeroRotatingWords'
import {
  easeCinematic,
  heroCinematicLineVariants,
  heroGlowVariants,
  slowTransition,
  softTransition,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

function PremiumHero() {
  const { shouldAnimate } = useMotionPreset()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 60 : 0])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 24 : 0])

  const animateProps = shouldAnimate
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : {}

  return (
    <section ref={sectionRef} className="am-hero" aria-labelledby="home-hero-title">
      <motion.div
        className="am-hero-bg"
        aria-hidden="true"
        {...animateProps}
        variants={heroGlowVariants}
        transition={{ ...slowTransition, duration: 1.1 }}
        style={shouldAnimate ? { y: bgY } : undefined}
      >
        <motion.span
          className="am-hero-mesh am-hero-mesh-a"
          {...animateProps}
          variants={heroGlowVariants}
          transition={{ ...slowTransition, delay: 0.1 }}
        />
        <motion.span
          className="am-hero-mesh am-hero-mesh-b"
          {...animateProps}
          variants={heroGlowVariants}
          transition={{ ...slowTransition, delay: 0.22 }}
        />
        <motion.span
          className="am-hero-mesh am-hero-mesh-c"
          {...animateProps}
          variants={heroGlowVariants}
          transition={{ ...slowTransition, delay: 0.34 }}
        />
        <span className="am-hero-vignette" />
        <span className="am-hero-grid" />
      </motion.div>

      <div className="am-container am-hero-layout">
        <motion.div
          className="am-hero-copy"
          style={shouldAnimate ? { y: copyY } : undefined}
        >
          <HeroRotatingWords />

          <motion.div
            className="am-eyebrow"
            {...animateProps}
            variants={heroCinematicLineVariants}
            transition={{ ...softTransition, delay: 0.08 }}
          >
            <span className="am-eyebrow-dot" />
            Strategy · Media · AI · BI · Growth
          </motion.div>

          <h1 className="am-hero-title" id="home-hero-title">
            <motion.span
              className="am-hero-title-line"
              {...animateProps}
              variants={heroCinematicLineVariants}
              transition={{ ...softTransition, delay: 0.18, ease: easeCinematic }}
            >
              Build a connected
            </motion.span>
            <motion.span
              className="am-hero-title-line am-hero-title-accent"
              {...animateProps}
              variants={heroCinematicLineVariants}
              transition={{ ...softTransition, delay: 0.3, ease: easeCinematic }}
            >
              growth system
            </motion.span>
            <motion.span
              className="am-hero-title-line am-hero-title-sub"
              {...animateProps}
              variants={heroCinematicLineVariants}
              transition={{ ...softTransition, delay: 0.42, ease: easeCinematic }}
            >
              for smarter campaigns
            </motion.span>
          </h1>

          <motion.p
            className="am-hero-lead"
            {...animateProps}
            variants={heroCinematicLineVariants}
            transition={{ ...softTransition, delay: 0.54 }}
          >
            Armedia is a New Zealand marketing media agency that unifies strategy, advertising,
            Google Ads, Meta ads, SEO, AI workflows, BI reporting, and media planning into one
            growth engine — so your brand moves with clarity, momentum, and measurable performance.
          </motion.p>

          <motion.div
            className="am-hero-actions"
            {...animateProps}
            variants={heroCinematicLineVariants}
            transition={{ ...softTransition, delay: 0.72 }}
          >
            <MagneticButton href="/contact" variant="primary">
              Book a growth consultation
              <span className="am-btn-icon" aria-hidden="true">→</span>
            </MagneticButton>
            <MagneticButton href="/services" variant="ghost">
              Explore services
            </MagneticButton>
          </motion.div>

          <motion.ul
            className="am-hero-trust"
            {...animateProps}
            variants={heroCinematicLineVariants}
            transition={{ ...softTransition, delay: 0.84 }}
          >
            <li>Google Ads &amp; Meta advertising</li>
            <li>SEO, web &amp; digital media</li>
            <li>AI + BI reporting clarity</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="am-hero-visual-wrap"
          {...animateProps}
          variants={heroCinematicLineVariants}
          transition={{ ...softTransition, delay: 0.36 }}
        >
          <Hero3DModel />
        </motion.div>
      </div>

    </section>
  )
}

export default PremiumHero
