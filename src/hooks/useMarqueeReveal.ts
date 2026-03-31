import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  direction?: string
  duration?: number
  delay?: number
}

export const useMarqueeReveal = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: RevealOptions = {},
) => {
  const { direction = 'left', duration = 40, delay = 0 } = options

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const ctx = gsap.context(() => {
      const width = el.scrollWidth / 2

      gsap.set(el, { x: 0 })

      gsap.to(el, {
        x: direction === 'left' ? -width : width,
        duration,
        delay,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: (x) => {
            let value = parseFloat(x)

            if (direction === 'left') {
              value = value % width
            } else {
              value = value % width
              if (value > 0) value -= width
            }

            return `${value}px`
          },
          // x: gsap.utils.wrap(-width, 0),
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [ref, direction, duration, delay])
}
