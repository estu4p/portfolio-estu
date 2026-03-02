import { ChevronLeft, ChevronRight } from 'lucide-react'
import Badge from './Badge'

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
  return (
    <div className="flex justify-between">
      <div className="w-[30%] md:mt-40">
        <div className="flex items-center gap-4">
          <Badge text={badge} />
          <span className="text-accent text-base">01 </span>
          <span className="text-accent/60 text-base">/ 03</span>
        </div>
        <hr className="border-secondary/40 my-6" />
        <span className="text-secondary block">{name}</span>
        <span className="font-cal-sans text-primary block text-base">
          {year}
        </span>
        <div className="mt-12 flex items-center gap-4">
          <div className="box-badge flex h-fit w-fit items-center justify-center rounded-full p-3">
            <ChevronLeft className="h-5 w-5 text-white/80" />
          </div>
          <div className="box-badge flex h-fit w-fit items-center justify-center rounded-full p-3">
            <ChevronRight className="h-5 w-5 text-white/80" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-fit">
        <img
          src={photo}
          alt={name}
          className="h-121.75 w-107 rounded-3xl object-cover brightness-90"
        />
      </div>
      <div className="my-auto flex w-[30%] flex-col items-end">
        <p className="text-accent w-[80%] leading-normal">{desc}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
