import { Instagram, Linkedin, X } from 'lucide-react'
import Badge from '../components/ui/Badge'
import MarqueeAboutMe from '../components/ui/MarqueeAboutMe'
import { ABOUT_ME_DATA } from '../constants'

const AboutMe = () => {
  return (
    <section className="mt-16">
      {/* marquee */}
      <div className="relative flex flex-col justify-center gap-12 overflow-hidden py-20">
        <MarqueeAboutMe className="-rotate-6 bg-black" />
        <MarqueeAboutMe className="bg-orange absolute left-0 rotate-z-6" />
      </div>
      {/* (About Me) */}
      <div className="mt-28 text-center">
        <span className="font-cal-sans text-orange text-2xl">(About Me)</span>
        <div className="mt-4 w-full text-center">
          <h2 className="font-cal-sans inline-block text-5xl leading-[1.1] text-black">
            I am a Fullstack Web Developer <br /> experienced in building
            modern,
            <span className="text-secondary">
              scalable <br /> web applications from concept to deployment.
            </span>
          </h2>
        </div>
      </div>
      {/* How I work */}
      <div className="mt-14 flex justify-center gap-54 px-8">
        <div className="relative w-107">
          <img
            src={ABOUT_ME_DATA.photo}
            alt="Profile"
            className="h-121.75 w-full rounded-3xl object-cover brightness-90"
          />
          <div className="absolute bottom-8 left-8 flex items-center gap-2.5">
            <div className="hover:bg-orange rounded-full bg-white/16 p-3 transition-colors duration-300">
              <Instagram size={20} className="h-5 w-5 text-white/80" />
            </div>
            <div className="hover:bg-orange rounded-full bg-white/16 p-3">
              <Linkedin size={20} className="h-5 w-5 text-white/80" />
            </div>
          </div>
        </div>
        <div className="flex w-114 flex-col justify-between">
          <div className="">
            <span className="text-primary font-cal-sans text-4xl">
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
    </section>
  )
}

export default AboutMe
