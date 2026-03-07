import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'

interface RevealOptions {
  xPercent?: number
  yPercent?: number
  duration?: number
  ease?: string
}

export const useFloatingAnimation = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: RevealOptions = {},
) => {
  const {
    xPercent = -9,
    yPercent = -9,
    duration = 1.6,
    ease = 'sine.inOut',
  } = options || {}

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        xPercent,
        yPercent,
        duration,
        ease,
        repeat: -1,
        yoyo: true,
      })
    }, ref)
    return () => ctx.revert()
  }, [ref, xPercent, yPercent, duration, ease])
}
