'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { NavItem } from './siteData'

type HeaderNavProps = {
  items: NavItem[]
}

function HeaderNav({ items }: HeaderNavProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return
    header.classList.toggle('menu-open', isMenuOpen)
    return () => header.classList.remove('menu-open')
  }, [isMenuOpen])

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

      <nav
        id="primary-navigation"
        className={`nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Primary"
      >
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            className={pathname === item.path ? 'active' : undefined}
            aria-current={pathname === item.path ? 'page' : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default HeaderNav
