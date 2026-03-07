import { ChevronLeft, ChevronRight } from 'lucide-react'
import Badge from './Badge'
import { useRef } from 'react'
import { useRevealAnimation } from '../../hooks/useRevealAnimation'

interface ExperienceCardProps {
  badge: string
  name: string
  year: string
  photo: string
  desc: string
}

const ExperienceCard = ({
  badge,
  name,
  year,
  photo,
  desc,
}: ExperienceCardProps) => {
  const rightRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)

  useRevealAnimation(rightRef, {
    y: 12,
    duration: 0.6,
    delay: 0.4,
    ease: 'power2.inOut',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  useRevealAnimation(leftRef, {
    y: 12,
    duration: 0.6,
    delay: 0.4,
    ease: 'power2.inOut',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  return (
    <div className="relative flex flex-col justify-between md:flex-row">
      <div ref={leftRef} className="md:mt-40 md:w-[30%]">
        <div className="flex items-center gap-4">
          <Badge text={badge} />
          <span className="text-accent text-base">01 </span>
          <span className="text-accent/60 text-base">/ 03</span>
        </div>
        <hr className="border-secondary/40 my-7" />
        <span className="text-secondary block">{name}</span>
        <span className="font-cal-sans text-primary block text-base">
          {year}
        </span>
        <div className="-top-12 right-0 mt-12 flex items-center gap-4 max-md:absolute">
          <div className="box-badge flex h-fit w-fit items-center justify-center rounded-full p-3">
            <ChevronLeft className="h-5 w-5 text-white/80" />
          </div>
          <div className="box-badge flex h-fit w-fit items-center justify-center rounded-full p-3">
            <ChevronRight className="h-5 w-5 text-white/80" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-7 w-fit md:mt-0">
        <img
          src={photo}
          alt={name}
          className="h-121.75 w-107 rounded-3xl object-cover brightness-90"
        />
      </div>
      <div
        ref={rightRef}
        className="my-auto flex w-full flex-col items-end max-md:mt-7 md:w-[30%]"
      >
        <p className="text-accent leading-normal md:w-[80%]">{desc}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
