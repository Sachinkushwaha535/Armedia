'use client'

import Link from 'next/link'
import { motion, useMotionValue, type MotionValue, useTransform } from 'framer-motion'
import {
  blurInVariants,
  heroCinematicLineVariants,
  heroGlowVariants,
  scaleInVariants,
  slowTransition,
  softTransition,
  splitRevealLeftVariants,
  splitRevealRightVariants,
  staggerContainer,
  fadeUpVariants,
  defaultTransition,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type ServicesPageHeroProps = {
  scrollProgress?: MotionValue<number>
}

function ServicesPageHero({ scrollProgress }: ServicesPageHeroProps) {
  const { shouldAnimate } = useMotionPreset()
  const fallbackProgress = useMotionValue(0)
  const progress = scrollProgress ?? fallbackProgress
  const heroY = useTransform(progress, [0, 0.35], [0, shouldAnimate ? -36 : 0])
  const heroOpacity = useTransform(progress, [0, 0.28], [1, shouldAnimate ? 0.82 : 1])
  const glowY = useTransform(progress, [0, 0.4], [0, shouldAnimate ? 48 : 0])

  if (!shouldAnimate) {
    return (
      <div className="services-copy services-hero-cinematic">
        <p className="services-kicker">Armedia Services</p>
        <h1 id="services-title">
          Strategy, media, AI, and campaign systems built for growth
        </h1>
        <p>
          Armedia helps brands plan smarter campaigns with integrated strategy, advertising,
          digital media, business intelligence, AI workflows, and supporting delivery systems
          designed to improve visibility, lead quality, and reporting clarity.
        </p>
        <div className="hero-actions">
          <Link className="services-cta" href="/contact">Start your project</Link>
          <Link className="btn-ghost" href="/contact">Book a consultation</Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="services-copy services-hero-cinematic"
      style={shouldAnimate ? { y: heroY, opacity: heroOpacity } : undefined}
    >
      <motion.div
        className="services-hero-glow"
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={heroGlowVariants}
        transition={slowTransition}
        style={shouldAnimate ? { y: glowY } : undefined}
      />
      <motion.span
        className="services-hero-orb services-hero-orb--a"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="services-hero-orb services-hero-orb--b"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="services-hero-lines"
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.14, 0.1)}
      >
        <motion.p
          className="services-kicker"
          variants={splitRevealLeftVariants}
          transition={softTransition}
        >
          Armedia Services
        </motion.p>

        <motion.h1
          id="services-title"
          className="services-hero-title"
          variants={heroCinematicLineVariants}
          transition={{ ...slowTransition, delay: 0.05 }}
        >
          Strategy, media, AI, and campaign systems built for growth
        </motion.h1>

        <motion.p
          variants={blurInVariants}
          transition={{ ...softTransition, delay: 0.08 }}
        >
          Armedia helps brands plan smarter campaigns with integrated strategy, advertising,
          digital media, business intelligence, AI workflows, and supporting delivery systems
          designed to improve visibility, lead quality, and reporting clarity.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={staggerContainer(0.1, 0.22)}
        >
          <motion.div variants={scaleInVariants} transition={defaultTransition}>
            <Link className="services-cta" href="/contact">Start your project</Link>
          </motion.div>
          <motion.div variants={fadeUpVariants} transition={defaultTransition}>
            <Link className="btn-ghost" href="/contact">Book a consultation</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ServicesPageHero
