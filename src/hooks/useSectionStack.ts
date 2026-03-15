import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useSectionStack = (ref: React.RefObject<HTMLDivElement | null>) => {
  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.project-section')

      sections.forEach((section, index) => {
        // card ke 3 tidak ada efek
        if (index === 2) return

        const transformSettings = [
          { opacity: 0.02, scale: 0.7, rotate: 10 }, // card 1
          { opacity: 0.08, scale: 0.6, rotate: 6 }, // card 2
        ]

        const settings = transformSettings[index]

        gsap.fromTo(
          section,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
          },
          {
            ...settings,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'bottom bottom',
              scrub: true,
            },
          },
        )
      })
    }, ref)

    return () => ctx.revert()
  }, [ref])
}

export default useSectionStack
