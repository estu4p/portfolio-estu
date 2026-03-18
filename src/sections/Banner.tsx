import banner from '../assets/images/banner.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useRevealAnimation } from '../hooks/useRevealAnimation'

gsap.registerPlugin(ScrollTrigger)

const Banner = () => {
  const bannerRef = useRef<HTMLImageElement>(null)

  useRevealAnimation(bannerRef, {
    x: -118,
    duration: 0.6,
    delay: 0.4,
    ease: 'power2.inOut',
    scrollTrigger: {
      start: 'top 85%',
    },
  })

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
          className="absolute inset-0 h-full w-full rounded-4xl object-cover will-change-transform"
        />
      </div>
    </section>
  )
}

export default Banner
