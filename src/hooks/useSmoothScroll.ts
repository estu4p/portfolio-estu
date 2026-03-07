import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const useSmoothScroll = () => {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.6,
      smoothTouch: 0.1,
      normalizeScroll: true,
    })

    ScrollTrigger.refresh()

    return () => smoother.kill()
  }, [])
}

export default useSmoothScroll
