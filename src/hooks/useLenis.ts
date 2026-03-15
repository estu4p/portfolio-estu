import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return lenisRef
}

export default useLenis
