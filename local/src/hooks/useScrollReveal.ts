'use client'

import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal:not(.visible), .reveal-card:not(.visible), .reveal-item:not(.visible)'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    const observeTargets = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el))
    }

    observeTargets()

    const mutationObserver = new MutationObserver(observeTargets)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
