'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  blurInVariants,
  defaultTransition,
  fadeUpVariants,
  softTransition,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'
import SectionScrollProgress from './SectionScrollProgress'

type PageHeaderProps = {
  kicker: string
  title: string
  description?: string
  titleId?: string
  actions?: ReactNode
  className?: string
  kickerClassName?: string
  titleClassName?: string
  withScrollProgress?: boolean
}

function PageHeader({
  kicker,
  title,
  description,
  titleId = 'page-title',
  actions,
  className = 'section-heading page-header-animated',
  kickerClassName = 'eyebrow',
  titleClassName = 'page-title',
  withScrollProgress = false,
}: PageHeaderProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return (
      <div className={className}>
        {withScrollProgress ? <SectionScrollProgress /> : null}
        <p className={kickerClassName}>{kicker}</p>
        <h1 className={titleClassName || undefined} id={titleId}>{title}</h1>
        {description ? <p>{description}</p> : null}
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1, 0)}
    >
      {withScrollProgress ? <SectionScrollProgress /> : null}
      <motion.p
        className={kickerClassName}
        variants={blurInVariants}
        transition={softTransition}
      >
        {kicker}
      </motion.p>
      <motion.h1
        className={titleClassName || undefined}
        id={titleId}
        variants={fadeUpVariants}
        transition={{ ...defaultTransition, delay: 0.08 }}
      >
        {title}
      </motion.h1>
      {description ? (
        <motion.p
          variants={fadeUpVariants}
          transition={{ ...defaultTransition, delay: 0.16 }}
        >
          {description}
        </motion.p>
      ) : null}
      {actions ? (
        <motion.div
          className="hero-actions"
          variants={fadeUpVariants}
          transition={{ ...defaultTransition, delay: 0.24 }}
        >
          {actions}
        </motion.div>
      ) : null}
    </motion.div>
  )
}

export default PageHeader
