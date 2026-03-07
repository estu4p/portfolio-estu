import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, type RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ScrollZoomOptions {
  scale?: number
  duration?: number
  ease?: string
}

const useScrollZoom = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: ScrollZoomOptions = {},
) => {
  const {
    scale = 1.25,
    // delay = 0,
    duration = 0.8,
    ease = 'power2.out',
    // spring = false,
  } = options

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        scale,
      },
      {
        scale: 1,
        duration,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      },
    )
  }, [ref, scale, duration, ease])

  //   return (
  //   )
}

export default useScrollZoom
