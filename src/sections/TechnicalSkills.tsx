import { useEffect, useRef, useState } from 'react'
import { useMarqueeReveal } from '../hooks/useMarqueeReveal'
import useTextBlur from '../hooks/useTextBlur'
import TechnicalSkillIcon from '../components/ui/TechnicalSkillIcon'
import { TECHNICAL_SKILLS_DATA } from '../constants/technicalSkills'
import { useFloatingAnimation } from '../hooks/useFloatingAnimation'

const TechnicalSkills = () => {
  const textBlur = useRef<HTMLHeadingElement>(null)
  const [iconActive, setIconActive] = useState<string>('All')
  const [technicalSkills, setTechnicalSkills] = useState<any[]>([])

  useEffect(() => {
    const skills = TECHNICAL_SKILLS_DATA.find(
      (cat) => cat.category === iconActive,
    )
    if (skills) {
      setTechnicalSkills(skills.skills)
    } else {
      setTechnicalSkills(TECHNICAL_SKILLS_DATA.flatMap((cat) => cat.skills))
    }
  }, [iconActive])

  useTextBlur(textBlur)

  return (
    <section
      id="technicalSkills"
      className="relative mt-28 h-full overflow-x-hidden md:mt-20"
    >
      {/* title */}
      <div className="px-5 md:ml-16">
        <span className="text-secondary mb-4 block">(Tech Stack)</span>
        <h2
          ref={textBlur}
          className="font-cal-sans text-primary text-[64px] leading-none"
        >
          Technical Skills
        </h2>
      </div>
      <div className="mt-16 overflow-x-hidden px-5">
        <div className="border-t-secondary/20 text-secondary flex items-center justify-between border-t pt-8 md:mx-10">
          <button
            onClick={() => setIconActive('All')}
            className={`flex cursor-pointer items-center gap-3 ${iconActive === 'All' ? 'text-orange font-medium' : 'text-secondary'} `}
          >
            {iconActive === 'All' && (
              <div className="bg-orange h-2 w-2 rounded-full" />
            )}
            All
          </button>
          <button
            onClick={() => setIconActive('Front-End')}
            className={`flex cursor-pointer items-center gap-3 ${iconActive === 'Front-End' ? 'text-orange font-medium' : 'text-secondary'} `}
          >
            {iconActive === 'Front-End' && (
              <div className="bg-orange h-2 w-2 rounded-full" />
            )}
            Front-End
          </button>
          <button
            onClick={() => setIconActive('Back-End')}
            className={`flex cursor-pointer items-center gap-3 ${iconActive === 'Back-End' ? 'text-orange font-medium' : 'text-secondary'}`}
          >
            {iconActive === 'Back-End' && (
              <div className="bg-orange h-2 w-2 rounded-full" />
            )}
            Back-End
          </button>
          <button
            onClick={() => setIconActive('Database')}
            className={`flex cursor-pointer items-center gap-3 ${iconActive === 'Database' ? 'text-orange font-medium' : 'text-secondary'}`}
          >
            {iconActive === 'Database' && (
              <div className="bg-orange h-2 w-2 rounded-full" />
            )}
            Database
          </button>
        </div>
        <div className="flex h-full flex-col items-center justify-center">
          {iconActive === 'All' ? (
            <div className="marquee-mask my-14 w-full space-y-8 overflow-hidden px-10">
              <MarqueeRow duration={20} />
              <MarqueeRow direction="right" duration={30} />
              <MarqueeRow duration={40} />
            </div>
          ) : (
            <div className="flex h-90 w-full flex-wrap items-center justify-center gap-4 overflow-hidden px-10 py-14 md:gap-12">
              {technicalSkills.map((skill, index) => (
                <FloatingIcon key={index} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          )}
          <p className="text-primary w-full text-center md:w-[40%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, optio? Velit, dicta magnam assumenda quis suscipit
            culpa facilis quo saepe.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills

const MarqueeRow = ({
  direction = 'left',
  duration = 20,
  delay = 0,
}: {
  direction?: 'left' | 'right'
  duration?: number
  delay?: number
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useMarqueeReveal(marqueeRef, {
    direction: direction,
    duration: duration,
    delay: delay,
  })

  return (
    <div
      ref={marqueeRef}
      className="flex items-center justify-center gap-8 whitespace-nowrap"
    >
      {[
        ...TECHNICAL_SKILLS_DATA.flatMap((cat) => cat.skills),
        ...TECHNICAL_SKILLS_DATA.flatMap((cat) => cat.skills),
      ].map((skill, index) => (
        <div key={index} className="shrink-0">
          <TechnicalSkillIcon icon={skill.icon} name={skill.name} />
        </div>
      ))}
    </div>
  )
}

const FloatingIcon = ({
  icon,
  name = '',
}: {
  icon: string
  bgColor?: string
  name?: string
}) => {
  const iconRef = useRef<HTMLDivElement>(null)
  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min

  const xPercent = -randomInRange(9, 11)
  const yPercent = -randomInRange(9, 11)
  const duration = randomInRange(1.2, 1.8)
  useFloatingAnimation(iconRef, {
    xPercent,
    yPercent,
    duration,
    ease: 'sine.inOut',
  })

  return (
    <div
      ref={iconRef}
      className="flex items-center justify-center whitespace-nowrap"
    >
      <TechnicalSkillIcon icon={icon} name={name} />
    </div>
  )
}
