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
      gsap.to(ref.current, {
        xPercent: -50,
        duration: 20,
        ease: 'linear',
        repeat: -1,
      })
    }, ref)

    return () => ctx.revert()
  }, [ref])
}
