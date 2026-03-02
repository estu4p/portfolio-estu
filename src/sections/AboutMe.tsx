import { Instagram, Linkedin } from 'lucide-react'
import Badge from '../components/ui/Badge'
import MarqueeAboutMe from '../components/ui/MarqueeAboutMe'
import { ABOUT_ME_DATA } from '../constants'

const AboutMe = () => {
  return (
    <section className="mt-16">
      {/* marquee */}
      <div className="relative flex flex-col items-center justify-center gap-12 overflow-hidden py-20">
        <MarqueeAboutMe className="-rotate-[7deg] bg-black md:-rotate-6" />
        <MarqueeAboutMe className="bg-orange absolute left-1/2 -translate-x-1/2 rotate-z-[7deg] md:rotate-z-6" />
      </div>
      {/* (About Me) */}
      <div className="mt-28 px-10 text-center">
        <span className="font-cal-sans text-orange text-2xl">(About Me)</span>
        <div className="mt-4 w-full text-center">
          <h2 className="font-cal-sans inline-block text-[35px] leading-[1.1] text-black md:text-5xl">
            I am a Fullstack Web Developer <br className="max-md:hidden" />{' '}
            experienced in building modern,
            <span className="text-secondary">
              scalable <br className="max-md:hidden" /> web applications from
              concept to deployment.
            </span>
          </h2>
        </div>
      </div>
      {/* How I work */}
      <div className="mt-14 flex flex-col justify-center gap-24 px-5 md:flex-row md:justify-between md:px-8">
        <div className="relative w-full md:w-107">
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
        <div className="flex w-full flex-col justify-between md:w-114">
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
