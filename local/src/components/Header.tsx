'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ArmediaLogo from './ArmediaLogo'
import HeaderNav from './HeaderNav'
import { navItems } from './siteData'

function Header() {
  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 80], ['rgba(5,5,5,0.4)', 'rgba(5,5,5,0.92)'])
  const headerBorder = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0.04)', 'rgba(255,255,255,0.1)'])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (v) => setScrolled(v > 40))
    return unsubscribe
  }, [scrollY])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-[padding] duration-300"
      style={{ backgroundColor: headerBg, borderBottom: headerBorder, borderBottomWidth: 1, borderBottomStyle: 'solid' }}
      id="site-header"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'h-14' : 'h-16 sm:h-[72px]'
        }`}
      >
        <Link
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          href="/"
          aria-label="Armedia home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <ArmediaLogo className="h-6 w-6 object-contain" title="Armedia logo" variant="mark" />
          </span>
          <span className="hidden flex-col sm:flex">
            <strong className="text-sm font-semibold tracking-[0.18em] text-white">ARMEDIA</strong>
            <span className="text-[11px] tracking-wide text-zinc-500">Marketing Media</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <HeaderNav items={navItems} />
          <Link
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-zinc-950 transition-all hover:bg-accent-dim sm:inline-flex"
            href="/start-project"
          >
            Start a project
          </Link>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
