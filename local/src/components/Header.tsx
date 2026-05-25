'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ArmediaLogo from './ArmediaLogo'
import { navItems } from './siteData'

function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`topbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="brand-block">
        <Link className="brand" href="/" aria-label="Armedia home" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark">
            <ArmediaLogo className="brand-logo-svg" title="Armedia logo" variant="mark" />
          </span>
          <span className="brand-copy">
            <strong>ARMEDIA</strong>
            <span>Marketing Media</span>
          </span>
        </Link>

        {/* <div className="header-meta" aria-label="Studio details">
          <span>Digital studio</span>
          <span className="header-meta-sep" />
          <span>Auckland, NZ</span>
          <span className="header-meta-sep" />
          <a href="mailto:contact.armedianz@gmail.com">contact.armedianz@gmail.com</a>
        </div> */}
      </div>

      <div className="header-actions">
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
          {navItems.map((item) => (
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

        <Link className="topbar-cta" href="/start-project" onClick={() => setIsMenuOpen(false)}>
          Start a project
        </Link>
      </div>
    </header>
  )
}

export default Header
