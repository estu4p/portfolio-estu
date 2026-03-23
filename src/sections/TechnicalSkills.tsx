import { useRef } from 'react'
import icon1Orange from '../assets/icons/icons1-orange.svg'
import { useMarqueeReveal } from '../hooks/useMarqueeReveal'
import useTextBlur from '../hooks/useTextBlur'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import TechnicalSkillCard from '../components/ui/TechnicalSkillCard'
import { TECHNICAL_SKILLS_DATA } from '../constants/technicalSkills'

const MarqueeItems = ['Front-End', 'Back-End', 'Database', 'Tools']

const TechnicalSkills = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const textBlur = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useTextBlur(textBlur)
  useMarqueeReveal(marqueeRef)

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
      <div className="relative mt-16 overflow-x-hidden px-5">
        <div className="marquee-mask-white absolute top-1/2 -z-10 hidden h-fit w-full -translate-y-1/2 items-center justify-center md:flex">
          <div
            ref={marqueeRef}
            className="flex w-full items-center gap-16 whitespace-nowrap"
          >
            {[...MarqueeItems, ...MarqueeItems].map((item, index) => (
              <div key={index} className="flex items-center">
                <h3 className="font-cal-sans text-orange mx-16 text-9xl leading-none">
                  {item}
                </h3>
                <img
                  src={icon1Orange}
                  alt="Front End Icon"
                  className="h-16 w-16"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-secondary/20 text-secondary flex items-center justify-between border-t pt-8 font-medium md:mx-10">
          <button className="text-orange flex cursor-pointer items-center gap-3 font-medium">
            {' '}
            <div className="bg-orange h-2 w-2 rounded-full" /> Front-End
          </button>
          <button className="cursor-pointer">Back-End</button>
          <button className="cursor-pointer">Database</button>
          <button className="cursor-pointer">Tools</button>
        </div>
        <div className="mt-16 flex h-full flex-col items-center justify-center">
          {/* <div ref={imageRef} className="h-91.5 max-w-137.5">
            <img
              src={banner}
              alt="Banner"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div> */}
          {TECHNICAL_SKILLS_DATA.map((tech, index) => (
            <div className="h-72 w-full max-w-137.5" key={index}>
              <TechnicalSkillCard {...tech} />
            </div>
          ))}
          <p className="text-primary mt-8 w-[70%] text-center md:w-[40%]">
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
