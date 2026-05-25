'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const ChatWidget = dynamic(() => import('./ChatWidget'), {
  ssr: false,
  loading: () => null,
})

function DeferredChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const load = () => setShouldLoad(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(load, { timeout: 2500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = globalThis.setTimeout(load, 1500)
    return () => globalThis.clearTimeout(timeoutId)
  }, [shouldLoad])

  return shouldLoad ? <ChatWidget /> : null
}

export default DeferredChatWidget
