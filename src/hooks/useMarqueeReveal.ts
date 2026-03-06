import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useMarqueeReveal = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) => {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          x: 0,
          y: 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          //   ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [ref])
}
