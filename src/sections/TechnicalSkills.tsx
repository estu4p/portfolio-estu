import { useRef } from 'react'
import { useMarqueeReveal } from '../hooks/useMarqueeReveal'
import useTextBlur from '../hooks/useTextBlur'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { TECHNICAL_SKILLS_ICON } from '../constants/technicalSkills'
import TechnicalSkillIcon from '../components/ui/TechnicalSkillIcon'

const TechnicalSkills = () => {
  const textBlur = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const marqueeLeftRef = useRef<HTMLDivElement>(null)
  const marqueeLeft1Ref = useRef<HTMLDivElement>(null)
  const marqueeRightRef = useRef<HTMLDivElement>(null)

  useTextBlur(textBlur)
  useMarqueeReveal(marqueeLeftRef, {
    duration: 20,
  })
  useMarqueeReveal(marqueeRightRef, {
    direction: 'right',
    duration: 30,
    delay: 2,
  })
  useMarqueeReveal(marqueeLeft1Ref, {
    duration: 40,
    delay: 4,
  })

  useRevealAnimation(imageRef, {
    x: 118,
    duration: 0.6,
    delay: 0.4,
    ease: 'power2.inOut',
    scrollTrigger: {
      start: 'top 70%',
    },
  })

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
        <div className="border-t-secondary/20 text-secondary flex items-center justify-between border-t pt-8 font-medium md:mx-10">
          <button className="text-orange flex cursor-pointer items-center gap-3 font-medium">
            {' '}
            <div className="bg-orange h-2 w-2 rounded-full" /> Front-End
          </button>
          <button className="cursor-pointer">Back-End</button>
          <button className="cursor-pointer">Database</button>
          <button className="cursor-pointer">Tools</button>
        </div>
        <div className="mt-14 flex h-full flex-col items-center justify-center">
          <div className="h-91.5 w-full space-y-8 px-10">
            <div ref={marqueeLeftRef} className="flex whitespace-nowrap">
              {[...TECHNICAL_SKILLS_ICON, ...TECHNICAL_SKILLS_ICON].map(
                (skill, index) => (
                  <div key={index} className="mr-8 shrink-0">
                    <TechnicalSkillIcon icon={skill.icon} name={skill.name} />
                  </div>
                ),
              )}
            </div>
            <div ref={marqueeRightRef} className="flex whitespace-nowrap">
              {[...TECHNICAL_SKILLS_ICON, ...TECHNICAL_SKILLS_ICON].map(
                (skill, index) => (
                  <div key={index} className="mr-8 shrink-0">
                    <TechnicalSkillIcon icon={skill.icon} name={skill.name} />
                  </div>
                ),
              )}
            </div>
            <div ref={marqueeLeft1Ref} className="flex whitespace-nowrap">
              {[...TECHNICAL_SKILLS_ICON, ...TECHNICAL_SKILLS_ICON].map(
                (skill, index) => (
                  <div key={index} className="mr-8 shrink-0">
                    <TechnicalSkillIcon icon={skill.icon} name={skill.name} />
                  </div>
                ),
              )}
            </div>
          </div>
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
