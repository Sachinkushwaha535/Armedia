import type { ReactNode } from 'react'

type PageShellProps = {
  kicker: string
  title: string
  description: string
  actions?: ReactNode
  children: ReactNode
}

function PageShell({ kicker, title, description, actions, children }: PageShellProps) {
  return (
    <section className="page-shell section" aria-labelledby="page-title">
      <div className="section-heading">
        <p className="eyebrow">{kicker}</p>
        <h1 className="page-title" id="page-title">{title}</h1>
        <p>{description}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
      {children}
    </section>
  )
}

export default PageShell
