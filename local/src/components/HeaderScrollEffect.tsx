'use client'

import { useEffect } from 'react'

function HeaderScrollEffect() {
  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return

    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 48)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}

export default HeaderScrollEffect
