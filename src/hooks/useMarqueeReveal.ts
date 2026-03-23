import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useMarqueeReveal = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) => {
  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const ctx = gsap.context(() => {
      const width = el.scrollWidth / 2

      gsap.set(el, { x: 0 })

      gsap.to(el, {
        x: -width,
        duration: 40,
        ease: 'none',
        repeat: -1,
        force3D: true,
      })
    }, ref)

    return () => ctx.revert()
  }, [ref])
}
