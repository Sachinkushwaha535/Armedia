'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { NavItem } from './siteData'

type HeaderNavProps = {
  items: NavItem[]
}

const MOBILE_NAV_QUERY = '(max-width: 1024px)'

function HeaderNav({ items }: HeaderNavProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMobileNav, setIsMobileNav] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(MOBILE_NAV_QUERY).matches
  })

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(MOBILE_NAV_QUERY)
    const sync = () => setIsMobileNav(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return
    header.classList.toggle('menu-open', isMenuOpen && isMobileNav)
    return () => header.classList.remove('menu-open')
  }, [isMenuOpen, isMobileNav])

  useEffect(() => {
    const shouldLock = isMenuOpen && isMobileNav
    document.body.classList.toggle('armedia-mobile-nav-open', shouldLock)
    document.body.style.overflow = shouldLock ? 'hidden' : ''
    return () => {
      document.body.classList.remove('armedia-mobile-nav-open')
      document.body.style.overflow = ''
    }
  }, [isMenuOpen, isMobileNav])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const mobileNavPanel =
    mounted && isMobileNav && isMenuOpen
      ? createPortal(
          <>
            <button
              type="button"
              className="am-mobile-nav-backdrop"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            />
            <nav
              id="primary-navigation"
              className="am-mobile-nav-panel"
              aria-label="Primary"
            >
              {items.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  className={pathname === item.path ? 'active' : undefined}
                  aria-current={pathname === item.path ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link className="am-mobile-nav-cta" href="/start-project" onClick={closeMenu}>
                Start a project
              </Link>
            </nav>
          </>,
          document.body,
        )
      : null

  return (
    <>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {!isMobileNav ? (
        <nav id="primary-navigation" className="nav" aria-label="Primary">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.path}
              className={pathname === item.path ? 'active' : undefined}
              aria-current={pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}

      {mobileNavPanel}
    </>
  )
}

export default HeaderNav
