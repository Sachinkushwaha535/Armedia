'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { imageRevealVariants } from '../../lib/motion'
import { useMotionPreset } from '../../lib/useMotionPreset'

type ShowcaseImageProps = {
  src: string
  alt: string
  priority?: boolean
  className?: string
  animate?: boolean
}

function ShowcaseImage({
  src,
  alt,
  priority = false,
  className = '',
  animate = true,
}: ShowcaseImageProps) {
  const { shouldAnimate } = useMotionPreset()

  const enableMotion = animate && shouldAnimate

  return (
    <motion.div
      className={`am-showcase-image ${className}`}
      initial={enableMotion ? 'hidden' : false}
      animate={enableMotion ? 'visible' : undefined}
      variants={imageRevealVariants}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="am-showcase-image-inner"
        animate={enableMotion ? { scale: [1, 1.06, 1] } : undefined}
        transition={
          enableMotion
            ? { duration: 8, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 600px"
          priority={priority}
          className="am-showcase-image-img"
        />
      </motion.div>
      <span className="am-showcase-image-shine" aria-hidden="true" />
      <span className="am-showcase-image-frame" aria-hidden="true" />
    </motion.div>
  )
}

export default ShowcaseImage
