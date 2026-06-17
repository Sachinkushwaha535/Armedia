'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Transition, Variants, ViewportOptions } from 'framer-motion'
import {
  blurInVariants,
  defaultTransition,
  fadeUpVariants,
  pickFadeUp,
  quickTransition,
  softTransition,
  splitRevealLeftVariants,
  splitRevealRightVariants,
  staggerContainer,
  testimonialDriftVariants,
  viewportOnce,
} from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

export type SectionHeaderStyle =
  | 'fadeUp'
  | 'blurIn'
  | 'split'
  | 'restrained'
  | 'soft'

type SectionHeaderProps = {
  tag: string
  title: string
  description?: string
  centered?: boolean
  simple?: boolean
  titleId?: string
  style?: SectionHeaderStyle
}

const headerTransitions: Record<SectionHeaderStyle, Transition> = {
  fadeUp: defaultTransition,
  blurIn: softTransition,
  split: defaultTransition,
  restrained: quickTransition,
  soft: softTransition,
}

function getTagVariants(style: SectionHeaderStyle, isMobile: boolean): Variants {
  switch (style) {
    case 'blurIn':
      return blurInVariants
    case 'split':
      return splitRevealLeftVariants
    case 'restrained':
      return pickFadeUp(isMobile)
    case 'soft':
      return testimonialDriftVariants
    default:
      return pickFadeUp(isMobile)
  }
}

function getTitleVariants(style: SectionHeaderStyle, isMobile: boolean): Variants {
  switch (style) {
    case 'blurIn':
      return blurInVariants
    case 'split':
      return splitRevealRightVariants
    case 'restrained':
      return pickFadeUp(isMobile)
    case 'soft':
      return testimonialDriftVariants
    default:
      return pickFadeUp(isMobile)
  }
}

function SectionHeader({
  tag,
  title,
  description,
  centered,
  simple,
  titleId,
  style = 'fadeUp',
}: SectionHeaderProps) {
  const { shouldAnimate, isMobile } = useMotionPreset()
  const transition = headerTransitions[style]
  const viewport = viewportOnce

  if (simple) {
    const content = !shouldAnimate ? (
      <>
        <p className="section-tag">{tag}</p>
        <h2 className="section-h2" id={titleId}>{title}</h2>
      </>
    ) : (
      <>
        <motion.p
          className="section-tag"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={getTagVariants(style, isMobile)}
          transition={transition}
        >
          {tag}
        </motion.p>
        <motion.h2
          className="section-h2"
          id={titleId}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={getTitleVariants(style, isMobile)}
          transition={{ ...transition, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      </>
    )

    if (centered) {
      return <div className="section-top section-top-centered">{content}</div>
    }
    return content
  }

  if (!shouldAnimate) {
    return (
      <div className={`section-top ${centered ? 'section-top-centered' : ''}`}>
        <div>
          <p className="section-tag">{tag}</p>
          <h2 className="section-h2" id={titleId}>{title}</h2>
        </div>
        {description ? <p className="section-desc">{description}</p> : null}
      </div>
    )
  }

  return (
    <motion.div
      className={`section-top ${centered ? 'section-top-centered' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.1, 0)}
    >
      <div>
        <motion.p
          className="section-tag"
          variants={getTagVariants(style, isMobile)}
          transition={transition}
        >
          {tag}
        </motion.p>
        <motion.h2
          className="section-h2"
          id={titleId}
          variants={getTitleVariants(style, isMobile)}
          transition={{ ...transition, delay: 0.06 }}
        >
          {title}
        </motion.h2>
      </div>
      {description ? (
        <motion.p
          className="section-desc"
          variants={fadeUpVariants}
          transition={{ ...transition, delay: 0.14 }}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeader
