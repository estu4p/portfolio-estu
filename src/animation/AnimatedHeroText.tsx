import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const AnimatedHeroText = ({ children }: { children: React.ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const splitText = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return node.split('').map((char, index) => (
        <span key={index} className="char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    }

    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>

      return React.cloneElement(
        element,
        {},
        React.Children.map(element.props.children, splitText),
      )
    }

    return node
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = wrapperRef.current?.querySelectorAll('.char')
      if (!chars) return

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 20,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.4,
          ease: 'cubic-bezier(0.44, 0, 0.56, 1)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef}>
      <h1 className="font-cal-sans mx-auto text-[34px] leading-[1.2] text-black md:text-7xl">
        {React.Children.map(children, splitText)}
      </h1>
    </div>
  )
}

export default AnimatedHeroText
