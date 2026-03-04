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
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      xPercent,
      yPercent,
      duration,
      ease,
      repeat: -1,
      yoyo: true,
    })
  }, [ref, xPercent, yPercent, duration, ease])
}
