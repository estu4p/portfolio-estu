import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, type RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

const useRevealBatch = (ref: RefObject<HTMLElement | null>) => {
  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.set('.reveal-card', {
        y: 50,
        opacity: 0,
      })
      // title
      gsap.utils.toArray<HTMLElement>('.reveal-title').forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              once: true,
            },
          },
        )
      })

      // card
      ScrollTrigger.batch('.reveal-card', {
        start: 'top 80%',
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.1,
              ease: 'power2.inOut',
            },
          )
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [ref])
}

export default useRevealBatch
