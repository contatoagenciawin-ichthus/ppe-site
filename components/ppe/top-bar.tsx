'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function TopBar() {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight - window.innerHeight
      setShow(scrollTop > 640)
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md transition-transform duration-500',
        show ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <span className="font-heading text-lg font-semibold tracking-tight text-primary">
          Dr. Juliano Plastina
        </span>
        <a
          href="#oferta"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Quero minha vaga
        </a>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
    </div>
  )
}
