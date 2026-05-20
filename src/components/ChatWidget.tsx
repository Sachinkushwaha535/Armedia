'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTED = [
  'What services do you offer?',
  'How do I start a project?',
  'Tell me about your AI solutions',
]

export default function ChatWidget() {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [mounted, setMounted]   = useState(false)
  const [pulse, setPulse]       = useState(true)
  const bottomRef  = useRef<HTMLDivElement>(null)
  const inputRef   = useRef<HTMLInputElement>(null)
  const panelRef   = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  /* stop pulsing after first open */
  useEffect(() => { if (open) setPulse(false) }, [open])

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
        { role: 'assistant', content: 'Something went wrong. Please try again or email hello@armedia.co.nz' },
      ])
    } finally {
      setLoading(false)
    }
  }, [input, messages, loading])

  if (!mounted) return null

  return (
    <>
      {/* ── Floating panel ── */}
      <div
        ref={panelRef}
        className={`cw-panel ${open ? 'cw-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Armedia chat assistant"
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
              <p className="cw-title">Armedia Assistant</p>
              <span className="cw-status">
                <span className="cw-dot" aria-hidden="true" />
                Online now
              </span>
            </div>
          </div>
        
        </div>

        {/* Messages */}
        <div className="cw-messages" role="log" aria-live="polite">
          {messages.length === 0 && (
            <div className="cw-empty">
              <p className="cw-welcome">
                Hi! I'm the Armedia assistant. Ask me anything about our services, process, or how we can help grow your business.
              </p>
              <div className="cw-suggestions">
                {SUGGESTED.map(s => (
                  <button
                    key={s}
                    className="cw-chip"
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
              <p>{m.content}</p>
            </div>
          ))}

          {loading && (
            <div className="cw-bubble cw-bubble--assistant cw-bubble--typing">
              <span className="cw-bubble-avatar" aria-hidden="true">A</span>
              <span className="cw-typing" aria-label="Assistant is typing">
                <span /><span /><span />
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="cw-footer">
          <div className="cw-input-row">
            <input
              ref={inputRef}
              className="cw-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
              placeholder="Ask anything…"
              aria-label="Chat message"
              disabled={loading}
              maxLength={500}
            />
            <button
              className="cw-send"
              onClick={() => send()}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {/* <p className="cw-footnote">Powered by Llama · <a href="/privacy">Privacy</a></p> */}
        </div>
      </div>

      {/* ── FAB trigger ── */}
      <button
        className={`cw-fab ${open ? 'cw-fab--active' : ''} ${pulse ? 'cw-fab--pulse' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat with Armedia assistant'}
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
        {!open && <span className="cw-fab-label">Chat with us</span>}
      </button>

      
    </>
  )
}