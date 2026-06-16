'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { StaggerItem } from './motion'

export type ProjectItem = {
  title: string
  description: string
  tags: string[]
  index: number
  gradient: string
  href?: string
}

type ProjectCardProps = {
  project: ProjectItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const reducedMotion = useReducedMotion()
  const num = String(project.index).padStart(2, '0')

  return (
    <StaggerItem variant="scaleUp">
      <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-elevated transition-colors hover:border-white/15">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            whileHover={reducedMotion ? undefined : { scale: 1.08 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/20 to-transparent" />
          <span className="absolute left-6 top-6 text-6xl font-light text-white/20">{num}</span>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{project.description}</p>
          {project.href ? (
            <Link
              className="link-underline mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent"
              href={project.href}
            >
              View engagement model <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : null}
        </div>
      </article>
    </StaggerItem>
  )
}
