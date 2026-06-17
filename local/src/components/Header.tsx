'use client'

import Link from 'next/link'
import ArmediaLogo from './ArmediaLogo'
import HeaderNav from './HeaderNav'
import HeaderScrollEffect from './HeaderScrollEffect'
import { navItems } from './siteData'

function Header() {
  return (
    <>
      <HeaderScrollEffect />
      <header className="topbar" id="site-header">
        <div className="brand-block">
          <Link className="brand" href="/" aria-label="Armedia home">
            <span className="brand-mark">
              <ArmediaLogo className="brand-logo-svg" title="Armedia logo" variant="mark" />
            </span>
            <span className="brand-copy">
              <strong>ARMEDIA</strong>
              <span>Marketing Media</span>
            </span>
          </Link>
        </div>

        <div className="header-actions">
          <HeaderNav items={navItems} />
          <Link className="topbar-cta" href="/start-project">
            Start a project
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
