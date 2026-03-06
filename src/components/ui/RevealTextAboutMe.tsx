import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  text: string
}
const RevealTextAboutMe = ({ text }: Props) => {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll('.char')

    if (!letters) return

    gsap.to(letters, {
      color: '#000000',
      stagger: 0.05,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'top 15%',
        scrub: true,
      },
    })
  }, [])

  const words = text.split(' ')

  return (
    <p
      ref={containerRef}
      className="font-cal-sans flex flex-wrap items-center justify-center text-[34px] leading-[1.1] tracking-tight text-black md:text-5xl"
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="mr-2">
          {word.split('').map((char, cIndex) => (
            <span
              key={cIndex}
              className="char text-secondary transition-colors"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  )
}

export default RevealTextAboutMe
