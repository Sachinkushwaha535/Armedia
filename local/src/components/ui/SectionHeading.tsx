'use client'

import type { ReactNode } from 'react'
import { FadeIn, RevealLine, StaggerItem } from './motion'

type SectionHeadingProps = {
  tag: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
  embedded?: boolean
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = 'left',
  children,
  embedded = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'max-w-3xl'

  const content = (
    <div className={`mb-14 lg:mb-20 ${alignClass}`}>
      <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <RevealLine />
        {tag}
      </span>
      <h2 className="heading-section text-white">{title}</h2>
      {description ? <p className="text-body mt-5">{description}</p> : null}
      {children}
    </div>
  )

  if (embedded) {
    return <StaggerItem variant="scaleUp">{content}</StaggerItem>
  }

  return (
    <FadeIn variant="scaleUp">
      {content}
    </FadeIn>
  )
}
