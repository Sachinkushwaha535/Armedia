'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navItems } from './siteData'
import { contactPhone, contactPhoneHref } from './siteConfig'

const navLinks = [
  { label: 'Who we are', path: '/about' },
  ...navItems.filter((item) => item.path !== '/'),
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

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled || menuOpen
          ? 'bg-[rgba(10,10,10,0.95)] shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="armedia-container flex items-center justify-between py-5">
        <Link href="/" className="font-heading text-sm font-black uppercase tracking-[0.18em] text-white lg:text-base">
          Ar<span className="text-brand-gold">m</span>edia
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((item) => (
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
              className="hidden font-heading text-[11px] uppercase tracking-[0.1em] text-white/80 transition-colors hover:text-brand-gold lg:inline"
            >
              {contactPhone}
            </a>
          ) : null}
          <Link href="/contact" className="armedia-btn-primary hidden !px-5 !py-2.5 lg:inline-flex">
            Contact
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={[
                  'absolute left-0 block h-px w-4 bg-white transition-all duration-200',
                  menuOpen ? 'top-1.5 rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-1.5 block h-px w-4 bg-white transition-all duration-200',
                  menuOpen ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 block h-px w-4 bg-white transition-all duration-200',
                  menuOpen ? 'top-1.5 -rotate-45' : 'top-3',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={[
          'fixed inset-0 z-40 flex lg:hidden',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={[
            'absolute inset-0 bg-black/95 transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={[
            'armedia-container relative flex w-full flex-col pt-24 transition-all duration-300',
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
          ].join(' ')}
        >
          <nav className="flex flex-col border-t border-white/10" aria-label="Mobile">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={[
                  'border-b border-white/10 py-4 font-heading text-lg font-bold uppercase tracking-[0.08em] transition-colors',
                  pathname === item.path ? 'text-brand-gold' : 'text-white hover:text-brand-gold',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            {contactPhone && contactPhoneHref ? (
              <a
                href={contactPhoneHref}
                className="block font-heading text-sm uppercase tracking-[0.1em] text-white/80"
              >
                {contactPhone}
              </a>
            ) : null}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="armedia-btn-primary inline-flex"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
