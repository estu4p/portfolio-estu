import { Instagram, Linkedin } from 'lucide-react'
import { ABOUT_ME_DATA } from '../../constants'
import Badge from './Badge'
import { useRef } from 'react'
import useScrollZoom from '../../hooks/useScrollZoom'

const AboutMeCard = () => {
  const photoRef = useRef<HTMLDivElement>(null)

  useScrollZoom(photoRef, {
    scale: 3,
    duration: 0.8,
    ease: 'power2.out',
  })

  return (
    <div className="flex flex-col flex-wrap justify-center gap-10 px-5 md:flex-row md:justify-between md:px-8">
      <div className="flex w-full flex-col items-end justify-end lg:w-1/2">
        <div className="relative h-121.75 w-full overflow-hidden rounded-3xl lg:w-107">
          <div ref={photoRef} className="h-full w-full overflow-hidden">
            <img
              src={ABOUT_ME_DATA.photo}
              alt="Profile"
              className="h-full w-full object-cover brightness-90"
            />
          </div>
          <div className="absolute bottom-8 left-8 flex items-center gap-2.5">
            <div className="hover:bg-orange rounded-full bg-white/16 p-3 transition-colors duration-300">
              <Instagram size={20} className="h-5 w-5 text-white/80" />
            </div>
            <div className="hover:bg-orange rounded-full bg-white/16 p-3">
              <Linkedin size={20} className="h-5 w-5 text-white/80" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between lg:w-114">
        <div className="">
          <span className="text-primary font-cal-sans text-3xl md:text-4xl">
            {ABOUT_ME_DATA.title}
          </span>
          <p className="text-secondary mt-4 text-lg">{ABOUT_ME_DATA.p1}</p>
          <hr className="border-secondary/40 my-8" />
          <span className="text-secondary block text-base">
            {ABOUT_ME_DATA.p2}
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {ABOUT_ME_DATA.badge.map((item, index) => {
            const Icon = item.icon
            return (
              <Badge
                key={index}
                icon={<Icon className="h-5 w-5 text-white/80" />}
                text={item.text}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutMeCard
