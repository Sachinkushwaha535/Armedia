'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { defaultTransition, fadeUpVariants } from '../lib/motion'

type ServiceCardData = {
  icon: string
  iconClass: string
  title: string
  sub: string
  tags: string[]
  cardClass?: string
}

type AnimatedServiceCardProps = {
  service: ServiceCardData
  index: number
}

function AnimatedServiceCard({ service, index }: AnimatedServiceCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      className={`service-card dr-service-card ${service.cardClass ?? ''}`}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -30px 0px' }}
      variants={fadeUpVariants}
      transition={{ ...defaultTransition, delay: index * 0.06 }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
    >
      <span className={`bento-icon ${service.iconClass}`}>{service.icon}</span>
      <h3 className="bento-title">{service.title}</h3>
      <p className="bento-sub">{service.sub}</p>
      <div className="bento-tag-list">
        {service.tags.map((tag) => (
          <span className="bento-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <Link className="text-link" href="/contact">
        Discuss this service
      </Link>
    </motion.article>
  )
}

export default AnimatedServiceCard
