'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

/**
 * 1. ENRICHED INTENT SUGGESTIONS
 * - Swapped vague generic strings for core keyword clusters.
 * - Kept titles brief and matching your design patterns perfectly.
 */
const SUGGESTED = [
  'Request an omnichannel media strategy plan',
  'How do automated AI workflows optimize conversion?',
  'Build a performance advertising campaign mix',
]

export default function ChatWidget() {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [pulse, setPulse]       = useState(true)
  const bottomRef  = useRef<HTMLDivElement>(null)
  const inputRef   = useRef<HTMLInputElement>(null)
  const panelRef   = useRef<HTMLDivElement>(null)

  /* scroll to bottom whenever messages change */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  /* focus input when opening */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120)
  }, [open])

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const send = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim()
    if (!msg || loading) return

    const next: Message[] = [...messages, { role: 'user', content: msg }]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res  = await fetch('/api/chat', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'The connection timed out. Please refresh or contact us directly at contact.armedianz@gmail.com for performance advertising, AI workflows, BI dashboards, or media planning support.' },
      ])
    } finally {
      setLoading(false)
    }
  }, [input, messages, loading])

  return (
    <>
      {/* ── Floating panel ── */}
      <div
        ref={panelRef}
        id="cw-panel"
        className={`cw-panel ${open ? 'cw-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Armedia conversion assistant"
      >
        {/* Header */}
        <div className="cw-header">
          <div className="cw-header-left">
            <span className="cw-avatar" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  fill="currentColor"/>
              </svg>
            </span>
            <div>
              <p className="cw-title">Armedia Growth Assistant</p>
              <span className="cw-status">
                <span className="cw-dot" aria-hidden="true" />
                Online now
              </span>
            </div>
          </div>
          
          {/* Header Close button added for optimal mobile accessibility map */}
          <button 
            className="cw-header-close md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close chat assistant panel"
          >
            ✕
          </button>
        </div>

        {/* Messages Container */}
        <div className="cw-messages" role="log" aria-live="polite">
          {messages.length === 0 && (
            <div className="cw-empty">
              {/* Refined greeting strings targeting key conversion optimization phrases */}
              <p className="cw-welcome text-sm text-gray-700 leading-relaxed">
                Welcome to Armedia. Define your pipeline or revenue milestone goals, and our assistant will map practical AI automation, conversion rate optimization, OOH buying, and cross-channel marketing media insights.
              </p>
              <div className="cw-suggestions space-y-2 mt-4">
                {SUGGESTED.map(s => (
                  <button
                    key={s}
                    className="cw-chip block w-full text-left border border-gray-100 hover:bg-gray-50 p-2 rounded text-xs text-gray-600 transition"
                    onClick={() => send(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`cw-bubble cw-bubble--${m.role}`}>
              {m.role === 'assistant' && (
                <span className="cw-bubble-avatar" aria-hidden="true">A</span>
              )}
              <p className="text-sm">{m.content}</p>
            </div>
          ))}

          {loading && (
            <div className="cw-bubble cw-bubble--assistant cw-bubble--typing">
              <span className="cw-bubble-avatar" aria-hidden="true">A</span>
              <span className="cw-typing" aria-label="Assistant is analyzing query data">
                <span /><span /><span />
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Footer */}
        <div className="cw-footer">
          <div className="cw-input-row">
            <input
              ref={inputRef}
              className="cw-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
              placeholder="Inquire about campaign allocation..."
              aria-label="Inquiry message entry"
              disabled={loading}
              maxLength={500}
            />
            <button
              className="cw-send"
              onClick={() => send()}
              disabled={!input.trim() || loading}
              aria-label="Submit message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── FAB trigger ── */}
      <button
        className={`cw-fab ${open ? 'cw-fab--active' : ''} ${pulse ? 'cw-fab--pulse' : ''}`}
        onClick={() => {
          setPulse(false)
          setOpen(o => !o)
        }}
        aria-label={open ? 'Close growth assistant panel' : 'Open live session with our marketing media assistant'}
        aria-expanded={open}
        aria-controls="cw-panel"
      >
        <span className="cw-fab-icon cw-fab-icon--chat" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="cw-fab-icon cw-fab-icon--close" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        {!open && <span className="cw-fab-label font-medium tracking-wide">Get growth insights</span>}
      </button>
    </>
  )
}
