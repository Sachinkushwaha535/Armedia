'use client'

import { AnimatePresence, motion } from 'framer-motion'
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
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <button
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 sm:hidden"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <motion.span
          className="block h-0.5 w-5 rounded-full bg-white"
          animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        />
        <motion.span
          className="block h-0.5 w-5 rounded-full bg-white"
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span
          className="block h-0.5 w-5 rounded-full bg-white"
          animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        />
      </button>

      <nav id="primary-navigation" className="hidden items-center gap-1 sm:flex" aria-label="Primary">
        {items.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.key}
              href={item.path}
              className={`link-underline rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              className="fixed inset-x-4 top-20 z-40 flex flex-col gap-1 rounded-2xl border border-white/10 bg-zinc-950/95 p-3 backdrop-blur-xl sm:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile primary"
            >
              {items.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.key}
                    href={item.path}
                    className={`rounded-xl px-4 py-3 text-base transition-colors ${
                      isActive ? 'bg-accent/10 text-accent' : 'text-zinc-300 hover:bg-white/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-zinc-950"
                href="/start-project"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a project
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default HeaderNav
