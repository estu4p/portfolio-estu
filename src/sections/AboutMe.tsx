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
      <div className="relative mt-44 flex justify-center gap-54 px-8">
        <div className="box-title -mt-20">
          <h2 className="text-title">How I Work</h2>
        </div>
        <div className="w-114">
          <img
            src={ABOUT_ME_DATA.photo}
            alt="Profile"
            className="h-142.5 w-full rounded-3xl object-cover brightness-90"
          />
        </div>
        <div className="w-114">
          <span className="text-primary font-cal-sans text-4xl">
            {ABOUT_ME_DATA.title}
          </span>
          <p className="text-secondary mt-8 text-lg">{ABOUT_ME_DATA.p1}</p>
          <div className="mt-14">
            <hr className="border-secondary/40" />
            <span className="text-secondary mt-8 block text-base">
              {ABOUT_ME_DATA.p2}
            </span>
          </div>
          <div className="mt-14 flex flex-wrap gap-2.5">
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

{
  /* 
        <div className="bg-primary relative w-[40%] overflow-hidden rounded-3xl px-8 py-6 brightness-90">
          <h3 className="font-cal-sans text-justify text-2xl text-white">
            I have experience working with technologies such as Laravel, Vue.js,
            React, Next.js, Express.js. While I use modern tools, my main
            priority is choosing the right approach based on project needs
            rather than relying on a specific framework.
          </h3>
          <span className="mt-4 block text-base text-white">
            For me, good software is not only about delivering features, but
            also about stability, efficiency, and long-term sustainability.
          </span>
          <div className="absolute -right-20 -bottom-10 opacity-40">
            <img src={icon1orange} alt="Icon" className="h-64 w-64" />
          </div>
        </div>
        <div className="h-90 w-[60%]">
          <img
            src={photo}
            alt="Profile"
            className="h-full w-full rounded-3xl object-cover brightness-90"
          />
        </div> */
}
