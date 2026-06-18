'use client'

import { useEffect, useRef, useState } from 'react'
import { preloaderWords } from '../../data/homeContent'

const WORD_FADE_MS = 300
const WORD_HOLD_MS = 200
const EXIT_DELAY_MS = 350
const EXIT_ANIMATION_MS = 700

type WordPhase = 'enter' | 'hold' | 'leave'

type TWGPreloaderProps = {
  onComplete: () => void
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

function animateProgress(
  from: number,
  to: number,
  durationMs: number,
  onUpdate: (value: number) => void,
) {
  return new Promise<void>((resolve) => {
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const ratio = Math.min(1, elapsed / durationMs)
      const value = Math.round(from + (to - from) * ratio)
      onUpdate(value)

      if (ratio < 1) {
        requestAnimationFrame(tick)
      } else {
        resolve()
      }
    }

    requestAnimationFrame(tick)
  })
}

function TWGPreloader({ onComplete }: TWGPreloaderProps) {
  const onCompleteRef = useRef(onComplete)
  const runningRef = useRef(false)
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [wordPhase, setWordPhase] = useState<WordPhase>('enter')
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (runningRef.current) return
    runningRef.current = true

    let cancelled = false

    const runSequence = async () => {
      const wordCount = preloaderWords.length

      for (let index = 0; index < wordCount; index += 1) {
        if (cancelled) return

        const progressStart = Math.round((index / wordCount) * 100)
        const progressEnd = Math.round(((index + 1) / wordCount) * 100)

        setWordIndex(index)
        setWordPhase('enter')
        setProgress(progressStart)

        await waitForPaint()
        if (cancelled) return

        setWordPhase('hold')
        await Promise.all([
          wait(WORD_FADE_MS + WORD_HOLD_MS),
          animateProgress(progressStart, progressEnd, WORD_FADE_MS + WORD_HOLD_MS, (value) => {
            if (!cancelled) setProgress(value)
          }),
        ])
        if (cancelled) return

        setWordPhase('leave')
        await wait(WORD_FADE_MS)
      }

      if (cancelled) return

      setProgress(100)
      await wait(EXIT_DELAY_MS)
      if (cancelled) return

      setExiting(true)
      await wait(EXIT_ANIMATION_MS)
      if (!cancelled) onCompleteRef.current()
    }

    void runSequence()

    return () => {
      cancelled = true
      runningRef.current = false
    }
  }, [])

  return (
    <div
      className={[
        'twg-preloader fixed inset-0 z-[250] flex min-h-screen w-full flex-col items-center justify-center bg-black',
        exiting ? 'twg-preloader-exit' : '',
      ].join(' ')}
      aria-live="polite"
      aria-label="Site loading"
    >
      <div className="twg-preloader-stage flex w-full flex-1 items-center justify-center px-6">
        <p
          className={[
            'twg-preloader-word text-center font-heading font-medium text-white',
            wordPhase === 'enter' ? 'twg-preloader-word--enter' : '',
            wordPhase === 'hold' ? 'twg-preloader-word--hold' : '',
            wordPhase === 'leave' ? 'twg-preloader-word--leave' : '',
          ].join(' ')}
        >
          {preloaderWords[wordIndex]}
        </p>
      </div>

      <div className="twg-preloader-bar-wrap absolute bottom-[14%] left-1/2 w-[min(92vw,860px)] -translate-x-1/2">
        <span className="twg-preloader-loaded-label mb-4 block font-heading uppercase text-white/75">
          Loaded
        </span>
        <div className="relative h-[2px] w-full bg-white/20">
          <span
            className="absolute left-0 top-0 h-[2px] bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          className="twg-preloader-percent absolute top-[calc(100%+0.85rem)] font-heading tabular-nums text-white/85"
          style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
        >
          {String(progress).padStart(3, '0')}%
        </span>
      </div>
    </div>
  )
}

export default TWGPreloader
