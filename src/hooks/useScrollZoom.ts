import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, type RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ScrollZoomOptions {
  scale?: number
  opacity?: number
  duration?: number
  ease?: string
}

const useScrollZoom = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: ScrollZoomOptions = {},
) => {
  const {
    scale = 1.25,
    opacity = 1,
    // delay = 0,
    duration = 0.8,
    ease = 'elastic.out(1, 0.4)',
    // spring = false,
  } = options

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          scale,
          opacity,
        },
        {
          scale: 1.1,
          opacity: 0.9,
          duration,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top center',
            scrub: true,
          },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [ref, scale, opacity, duration, ease])
}

export default useScrollZoom
