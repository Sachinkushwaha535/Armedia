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
  const { shouldAnimate, mounted } = useMotionPreset()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 60 : 0])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, shouldAnimate ? 24 : 0])

  const animateProps =
    mounted && shouldAnimate ? { initial: 'hidden' as const, animate: 'visible' as const } : {}

  const titleLines = [
    { className: 'am-hero-title-line', text: 'Build a connected' },
    { className: 'am-hero-title-line am-hero-title-accent', text: 'growth system' },
    { className: 'am-hero-title-line am-hero-title-sub', text: 'for smarter campaigns' },
  ]

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
        <motion.div className="am-hero-copy" style={shouldAnimate ? { y: copyY } : undefined}>
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
            {titleLines.map((line, index) =>
              mounted && shouldAnimate ? (
                <motion.span
                  key={line.text}
                  className={line.className}
                  {...animateProps}
                  variants={heroCinematicLineVariants}
                  transition={{
                    ...softTransition,
                    delay: 0.18 + index * 0.12,
                    ease: easeCinematic,
                  }}
                >
                  {line.text}
                </motion.span>
              ) : (
                <span key={line.text} className={line.className}>
                  {line.text}
                </span>
              ),
            )}
          </h1>

          {mounted && shouldAnimate ? (
            <motion.p
              className="am-hero-lead"
              {...animateProps}
              variants={heroCinematicLineVariants}
              transition={{ ...softTransition, delay: 0.54 }}
            >
              Armedia is a New Zealand marketing media agency that connects strategy, advertising,
              paid media, SEO, AI workflows, BI reporting, and media planning — so your brand moves
              with clarity, momentum, and measurable performance.
            </motion.p>
          ) : (
            <p className="am-hero-lead">
              Armedia is a New Zealand marketing media agency that connects strategy, advertising,
              paid media, SEO, AI workflows, BI reporting, and media planning — so your brand moves
              with clarity, momentum, and measurable performance.
            </p>
          )}

          <div className="am-hero-actions">
            <MagneticButton href="/contact" variant="primary">
              Book a growth consultation
              <span className="am-btn-icon" aria-hidden="true">
                →
              </span>
            </MagneticButton>
            <MagneticButton href="/start-project" variant="ghost">
              Start a project brief
            </MagneticButton>
          </div>

          <ul className="am-hero-trust">
            <li>Google Ads &amp; Meta advertising</li>
            <li>SEO, web &amp; digital media</li>
            <li>AI + BI reporting clarity</li>
          </ul>
        </motion.div>

        <div className="am-hero-visual-wrap">
          <Hero3DModel />
        </div>
      </div>
    </section>
  )
}

export default PremiumHero
