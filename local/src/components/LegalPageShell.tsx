import Link from 'next/link'
import type { ReactNode } from 'react'

type LegalPageShellProps = {
  breadcrumb: string
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

function LegalPageShell({ breadcrumb, eyebrow, title, description, children }: LegalPageShellProps) {
  return (
    <>
      <section className="contact-page-hero armedia-section-dark">
        <div className="armedia-hero-bg absolute inset-0" aria-hidden="true" />
        <div className="armedia-container relative z-10">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </nav>
          <p className="armedia-eyebrow text-brand-gold">{eyebrow}</p>
          <h1 className="services-page-title mt-4">{title}</h1>
          <p className="armedia-lead mt-5 max-w-3xl text-brand-muted">{description}</p>
        </div>
      </section>

      <section className="armedia-section-light border-t border-black/10">
        <div className="armedia-container py-14 lg:py-16">
          <div className="legal-page-content">{children}</div>
        </div>
      </section>
    </>
  )
}

export default LegalPageShell
