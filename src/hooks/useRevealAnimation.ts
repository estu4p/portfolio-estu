import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  x?: number
  y?: number
  delay?: number
  duration?: number
  ease?: string
  spring?: boolean
  scrollTrigger?: {
    trigger?: HTMLElement
    start?: string
    end?: string
    toggleActions?: string
  }
}

export const useRevealAnimation = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: RevealOptions = {},
) => {
  const {
    x = 0,
    y = 0,
    delay = 0,
    duration = 0.8,
    ease = 'power2.out',
    spring = false,
    scrollTrigger,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          x,
          y,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: spring ? 'elastic.out(0.7, 0.5)' : ease,
          scrollTrigger: scrollTrigger
            ? {
                trigger: scrollTrigger.trigger || ref.current,
                start: scrollTrigger.start || 'top 80%',
                end: scrollTrigger.end || undefined,
                toggleActions:
                  scrollTrigger.toggleActions || 'play none none none',
              }
            : undefined,
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [ref, x, y, delay, duration, ease, spring])
}
