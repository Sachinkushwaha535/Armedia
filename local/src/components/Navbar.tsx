'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navItems } from './siteData'
import { contactPhone, contactPhoneHref } from './siteConfig'

const extendedNav = [
  { label: 'Who we are', path: '/about' },
  ...navItems.filter((item) => item.path !== '/'),
  { label: 'Start project', path: '/start-project' },
]

function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled ? 'bg-[rgba(10,10,10,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.45)]' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex w-full items-center justify-between px-5 py-5 lg:px-12">
        <Link href="/" className="font-heading text-sm font-black uppercase tracking-[0.18em] text-white lg:text-base">
          Ar<span className="text-brand-yellow">m</span>edia
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {extendedNav.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={[
                'font-heading text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors',
                pathname === item.path ? 'text-white' : 'text-white/70 hover:text-white',
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {contactPhone && contactPhoneHref ? (
            <a
              href={contactPhoneHref}
              className="hidden font-heading text-[11px] uppercase tracking-[0.1em] text-white underline decoration-white/40 underline-offset-4 lg:inline"
            >
              {contactPhone}
            </a>
          ) : null}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-1">
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </span>
          </button>
        </div>
      </div>

      <div
        className={[
          'fixed inset-0 z-40 flex flex-col bg-black/98 px-8 pt-28 transition-opacity duration-300',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {extendedNav.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-2xl font-bold uppercase tracking-[0.08em] text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="twg-pill-btn twg-pill-btn-red mt-6 w-fit"
          >
            <span className="twg-pill-dot bg-white" />
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
