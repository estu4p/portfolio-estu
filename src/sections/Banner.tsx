import banner from '../assets/images/banner.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Banner = () => {
  const bannerRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bannerRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotationX: 35,
          rotationY: 0,
          rotationZ: 0,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
          transformPerspective: 1000,
          transformOrigin: 'center center',
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'cubic-bezier(0.09, 0.89, 0.34, 1.03)',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="banner"
      className="bg-background rounded-b-4xl px-2 pt-8 pb-14"
    >
      <div className="relative aspect-video w-full">
        <img
          ref={bannerRef}
          src={banner}
          alt="Banner"
          className="absolute inset-0 h-full w-full rounded-4xl object-cover"
        />
      </div>
    </section>
  )
}

export default Banner
