import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useTextBlur = <T extends HTMLElement>(ref: React.RefObject<T | null>) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return

      const element = ref.current
      const text = element.innerText

      element.innerHTML = text
        .split('')
        .map((char) => `<span class="text-char">${char}</span>`)
        .join('')

      const chars = element.querySelectorAll('.text-char')

      gsap.fromTo(
        chars,
        {
          y: 10,
          opacity: 0,
          filter: 'blur(10px)',
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.4,
          ease: 'cubic-bezier(0.44, 0, 0.56, 1)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            toggleActions: 'play none none none',
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [])
}

export default useTextBlur
