import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const useHamburgerAnimation = (
  line1Ref: React.RefObject<HTMLSpanElement | null>,
  line2Ref: React.RefObject<HTMLSpanElement | null>,
  line3Ref: React.RefObject<HTMLSpanElement | null>,
  isOpen: boolean,
) => {
  const tl = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!line1Ref.current || !line2Ref.current || !line3Ref.current) return

    tl.current = gsap.timeline({ paused: true })

    tl.current
      .to(line1Ref.current, {
        y: 8,
        rotate: 45,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        line2Ref.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        '<',
      )
      .to(
        line3Ref.current,
        {
          y: -8,
          rotate: -45,
          duration: 0.3,
          ease: 'power2.out',
        },
        '<',
      )
  }, [])

  useEffect(() => {
    if (!tl.current) return

    if (isOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [isOpen])
}

export default useHamburgerAnimation
