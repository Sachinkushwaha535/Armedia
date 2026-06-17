'use client'

import { motion } from 'framer-motion'
import SectionScrollProgress from '../motion/SectionScrollProgress'
import {
  blurInVariants,
  blurInSoftVariants,
  defaultTransition,
  fadeUpVariants,
  softTransition,
  splitRevealLeftVariants,
  splitRevealRightVariants,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type ServicesSectionHeadingProps = {
  kicker: string
  title: string
  description: string
  variant?: 'core' | 'supporting'
  className?: string
}

function ServicesSectionHeading({
  kicker,
  title,
  description,
  variant = 'core',
  className = 'services-section-head',
}: ServicesSectionHeadingProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return (
      <div className={className}>
        <p className="section-tag">{kicker}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  }

  const tagVariants = variant === 'core' ? splitRevealLeftVariants : blurInSoftVariants
  const titleVariants = variant === 'core' ? splitRevealRightVariants : blurInVariants
  const descVariants = variant === 'core' ? fadeUpVariants : splitRevealLeftVariants

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.11, 0)}
    >
      <SectionScrollProgress />
      <motion.p
        className="section-tag"
        variants={tagVariants}
        transition={softTransition}
      >
        {kicker}
      </motion.p>
      <motion.h2
        variants={titleVariants}
        transition={{ ...defaultTransition, delay: 0.06 }}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={descVariants}
        transition={{ ...defaultTransition, delay: 0.14 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export default ServicesSectionHeading
