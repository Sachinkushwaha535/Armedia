'use client'

import { motion } from 'framer-motion'
import {
  blurInVariants,
  defaultTransition,
  fadeUpVariants,
  softTransition,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type PageSectionHeadingProps = {
  kicker: string
  title: string
  description?: string
  titleId?: string
  kickerClassName?: string
  className?: string
}

function PageSectionHeading({
  kicker,
  title,
  description,
  titleId,
  className = 'section-heading',
  kickerClassName = 'eyebrow',
}: PageSectionHeadingProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return (
      <div className={className}>
        <p className={kickerClassName}>{kicker}</p>
        <h2 id={titleId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.09, 0)}
    >
      <motion.p className={kickerClassName} variants={blurInVariants} transition={softTransition}>
        {kicker}
      </motion.p>
      <motion.h2
        id={titleId}
        variants={fadeUpVariants}
        transition={{ ...defaultTransition, delay: 0.06 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUpVariants}
          transition={{ ...defaultTransition, delay: 0.12 }}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

export default PageSectionHeading
