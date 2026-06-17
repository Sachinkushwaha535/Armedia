'use client'

import { motion } from 'framer-motion'
import SectionScrollProgress from './SectionScrollProgress'
import { blurInVariants, fadeUpVariants, softTransition, staggerContainer, viewportOnce } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type TwgSectionHeaderProps = {
  tag: string
  title: string
  description?: string
  titleId?: string
  centered?: boolean
}

function TwgSectionHeader({ tag, title, description, titleId, centered }: TwgSectionHeaderProps) {
  const { shouldAnimate } = useMotionPreset()

  if (!shouldAnimate) {
    return (
      <div className={`twg-section-header ${centered ? 'twg-section-header--centered' : ''}`.trim()}>
        <SectionScrollProgress />
        <p className="twg-section-tag">{tag}</p>
        <h2 className="twg-section-title" id={titleId}>{title}</h2>
        {description ? <p className="twg-section-desc">{description}</p> : null}
      </div>
    )
  }

  return (
    <motion.div
      className={`twg-section-header ${centered ? 'twg-section-header--centered' : ''}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.1, 0)}
    >
      <SectionScrollProgress />
      <motion.p className="twg-section-tag" variants={blurInVariants} transition={softTransition}>
        {tag}
      </motion.p>
      <motion.h2 className="twg-section-title" id={titleId} variants={fadeUpVariants} transition={softTransition}>
        {title}
      </motion.h2>
      {description ? (
        <motion.p className="twg-section-desc" variants={fadeUpVariants} transition={{ ...softTransition, delay: 0.08 }}>
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

export default TwgSectionHeader
