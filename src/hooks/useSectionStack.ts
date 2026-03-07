import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useSectionStack = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.pppp')
    // const sections = gsap.utils.toArray<HTMLElement>('.project-section')

    sections.forEach((section, index) => {
      if (index !== 0) {
        gsap.set(section, {
          opacity: 0.08,
          scale: 0.6,
          rotate: -10,
        })
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl.to(section, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: 'elastic.out(1,0.2)',
      }).to(section, {
        opacity: 0.02,
        scale: 0.7,
        rotate: 10,
        duration: 0.3,
        ease: 'elastic.out(1,0.2)',
      })
    })
  }, [])
}
