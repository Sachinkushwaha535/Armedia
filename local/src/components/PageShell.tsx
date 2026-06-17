'use client'

import type { ReactNode } from 'react'
import PageHeader from './motion/PageHeader'

type PageShellProps = {
  kicker: string
  title: string
  description: string
  titleId?: string
  actions?: ReactNode
  children: ReactNode
}

function PageShell({ kicker, title, description, titleId, actions, children }: PageShellProps) {
  return (
    <section className="page-shell section page-shell-animated" aria-labelledby={titleId ?? 'page-title'}>
      <PageHeader
        kicker={kicker}
        title={title}
        description={description}
        titleId={titleId ?? 'page-title'}
        actions={actions}
      />
      {children}
    </section>
  )
}

export default PageShell
