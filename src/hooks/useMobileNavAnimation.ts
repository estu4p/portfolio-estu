import { useEffect, useRef, type RefObject } from 'react'
import gsap from 'gsap'

const useMobileNavAnimation = (
  menuRef: RefObject<HTMLDivElement | null>,
  isOpen: boolean,
) => {
  const tl = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!menuRef.current) return

    tl.current = gsap.timeline({ paused: true })

    tl.current.fromTo(
      menuRef.current,
      { y: -300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.6,
        ease: 'elastic.out(0.2, 0.9)', // spring feel
      },
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

export default useMobileNavAnimation
