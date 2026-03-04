import MarqueeAboutMe from '../components/ui/MarqueeAboutMe'
import AboutMeCard from '../components/ui/AboutMeCard'

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
          <h2 className="font-cal-sans inline-block text-[34px] leading-[1.1] text-black md:text-5xl">
            I am a Fullstack Web Developer <br className="max-md:hidden" />{' '}
            experienced in building modern,
            <span className="text-secondary">
              {' '}
              scalable <br className="max-lg:hidden" /> web applications from
              concept to deployment.
            </span>
          </h2>
        </div>
      </div>
      {/* How I work */}
      <div className="mt-14">
        <AboutMeCard />
      </div>
    </section>
  )
}

export default AboutMe
