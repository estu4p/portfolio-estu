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
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
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
        // scrollTrigger: {
        //   trigger: el,
        //   start: 'top 85%',
        //   toggleActions: 'play none none none',
        // },
      },
    )
  }, [ref, x, y, delay, duration, ease, spring])
}
