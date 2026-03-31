import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useSectionStack = (ref: React.RefObject<HTMLDivElement | null>) => {
  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(
        '.project-section',
        ref.current,
      )

      const mm = gsap.matchMedia()

      mm.add('(max-width: 768px)', () => {
        sections.forEach((section, index) => {
          if (index >= 2) return

          gsap.fromTo(
            section,
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
            },
            {
              opacity: 0.15,
              scale: 0.6,
              rotate: 6,
              force3D: true,
              y: -500,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'bottom 95%',
                scrub: 0.5,
              },
            },
          )
        })
      })

      mm.add('(min-width: 769px)', () => {
        sections.forEach((section, index) => {
          // card ke 3 tidak ada efek
          if (index > 2) return

          const transformSettings = [
            { opacity: 0.02, scale: 0.7, rotate: 10 }, // card 1
            { opacity: 0.08, scale: 0.6, rotate: 6 }, // card 2
          ]

          const settings = transformSettings[index]

          if (!settings) return

          gsap.fromTo(
            section,
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
            },
            {
              ...settings,
              force3D: true,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'bottom 95%',
                scrub: true,
              },
            },
          )
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [ref])
}

export default useSectionStack
