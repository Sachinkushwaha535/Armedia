import type { ReactNode } from 'react'
import PageHero from './ui/PageHero'

type PageShellProps = {
  kicker: string
  title: string
  description: string
  actions?: ReactNode
  children: ReactNode
  withGlow?: boolean
}

function PageShell({ kicker, title, description, actions, children, withGlow = true }: PageShellProps) {
  return (
    <>
      <PageHero
        tag={kicker}
        title={title}
        description={description}
        actions={actions}
        withGlow={withGlow}
      />
      <div className="container-agency px-5 pb-24 sm:px-6 lg:px-8">{children}</div>
    </>
  )
}

export default PageShell
