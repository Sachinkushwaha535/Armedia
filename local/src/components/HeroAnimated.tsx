'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'
import { defaultTransition, heroLineVariants } from '../lib/motion'

function HeroAnimated() {
  const prefersReducedMotion = useReducedMotion()

  const lines = [
    <span key="l1">Plan smarter campaigns</span>,
    <span key="l2">
      with <em className="hero-em">AI, BI</em>
    </span>,
    <span key="l3">and connected media strategy</span>,
  ]

  const animateProps = prefersReducedMotion
    ? {}
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
      }

  return (
    <section className="hp-hero" aria-labelledby="home-hero-title">
      <div className="hp-hero-glow hp-hero-glow-a" aria-hidden="true" />
      <div className="hp-hero-glow hp-hero-glow-b" aria-hidden="true" />

      <div className="hp-hero-inner">
        <div className="hero-main-grid">
          <div className="hero-copy">
            <motion.div
              className="hero-eyebrow"
              {...animateProps}
              variants={heroLineVariants}
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              <span className="eyebrow-dot" />
              Integrated marketing, media, and intelligence for growth
            </motion.div>

            <h1 className="hero-h1" id="home-hero-title">
              {lines.map((line, index) => (
                <motion.span
                  key={index}
                  {...animateProps}
                  variants={heroLineVariants}
                  transition={{ ...defaultTransition, delay: 0.2 + index * 0.1 }}
                  style={{ display: 'block' }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="hero-sub"
              {...animateProps}
              variants={heroLineVariants}
              transition={{ ...defaultTransition, delay: 0.55 }}
            >
              Armedia helps ambitious brands turn marketing activity into a connected growth system:
              sharper positioning, better media planning, stronger creative, cleaner reporting,
              and campaigns that are easier to measure and improve.
            </motion.p>

            <motion.div
              className="hero-actions"
              {...animateProps}
              variants={heroLineVariants}
              transition={{ ...defaultTransition, delay: 0.7 }}
            >
              <Link className="btn-primary" href="/contact">
                Book a growth consultation <span className="btn-arrow" aria-hidden="true">-&gt;</span>
              </Link>
              <Link className="btn-ghost" href="/services">
                Explore services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <ScrollIndicator targetId="intro-section" />
    </section>
  )
}

export default HeroAnimated
