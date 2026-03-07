import { EXPERIENCE_DATA } from '../constants'
import ExperienceCard from '../components/ui/ExperienceCard'
import { useRef } from 'react'
import { useRevealAnimation } from '../hooks/useRevealAnimation'

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useRevealAnimation(sectionRef, {
    y: 50,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  return (
    <section ref={sectionRef} className="relative mt-50 px-5 md:px-10">
      {/* title */}
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">
          (Education & Experience)
        </span>
        <h2 className="text-title">My Journey</h2>
      </div>
      <div className="">
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience
