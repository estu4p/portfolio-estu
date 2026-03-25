import { EXPERIENCE_DATA } from '../constants'
import ExperienceCard from '../components/ui/ExperienceCard'
import { useEffect, useRef, useState } from 'react'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import gsap from 'gsap'

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLCollectionOf<Element>>(null)
  const isAnimating = useRef(false)

  useRevealAnimation(sectionRef, {
    y: 50,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  const extendedData = [
    EXPERIENCE_DATA[EXPERIENCE_DATA.length - 1],
    ...EXPERIENCE_DATA,
    EXPERIENCE_DATA[0],
  ]

  const [index, setIndex] = useState(1)
  const total = EXPERIENCE_DATA.length

  const slideTo = (newIndex: number) => {
    if (!carouselRef.current || !cardsRef.current || isAnimating.current) return

    isAnimating.current = true
    const cards = cardsRef.current

    const prevIndex = index

    gsap.to(carouselRef.current, {
      x: `-${newIndex * 100}%`,
      duration: 0.6,
      ease: 'power2.inOut',
      overwrite: 'auto',

      onStart: () => {
        gsap.to(cards[prevIndex], {
          scale: 0.9,
          opacity: 0.5,
          // filter: 'blur(4px)',
          duration: 0.3,
        })

        gsap.to(cards[newIndex], {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.3,
        })
      },

      onComplete: () => {
        isAnimating.current = false

        if (newIndex === 0) {
          gsap.set(carouselRef.current, { x: `-${total * 100}%` })
          setIndex(total)

          gsap.set(cards[total], {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
          })
        }

        if (newIndex === total + 1) {
          gsap.set(carouselRef.current, { x: `-100%` })
          setIndex(1)

          gsap.set(cards[1], {
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
          })
        }
      },
    })
  }

  useEffect(() => {
    if (!carouselRef.current) return

    const ctx = gsap.context(() => {
      const cards = carouselRef.current!.children
      cardsRef.current = cards

      gsap.set(carouselRef.current, {
        x: `-100%`,
      })

      gsap.set(cards, {
        scale: 0.9,
        opacity: 0.5,
        filter: 'blur(4px)',
      })

      gsap.set(cards[1], {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      })
    })

    return () => ctx.revert()
  }, [])

  const next = () => {
    setIndex((prev) => {
      const newIndex = prev + 1
      slideTo(newIndex)
      return newIndex
    })
  }

  const prev = () => {
    setIndex((prev) => {
      const newIndex = prev - 1
      slideTo(newIndex)
      return newIndex
    })
  }

  return (
    <section id="experience" ref={sectionRef} className="relative mt-50 px-0">
      {/* TITLE */}
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">
          (Education & Experience)
        </span>
        <h2 className="text-title">My Journey</h2>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-hidden">
        <div ref={carouselRef} className="flex">
          {extendedData.map((experience, i) => (
            <div
              key={i}
              className="w-full shrink-0 px-5 will-change-transform md:px-10"
            >
              <ExperienceCard {...experience} onNext={next} onPrev={prev} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
