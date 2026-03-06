import MarqueeAboutMe from '../components/ui/MarqueeAboutMe'
import AboutMeCard from '../components/ui/AboutMeCard'
import { useRef } from 'react'
import { useMarqueeReveal } from '../hooks/useMarqueeReveal'
import RevealTextAboutMe from '../components/ui/RevealTextAboutMe'

const AboutMe = () => {
  const marqueeRef1 = useRef<HTMLDivElement>(null)
  const marqueeRef2 = useRef<HTMLDivElement>(null)

  useMarqueeReveal(marqueeRef1)
  useMarqueeReveal(marqueeRef2)

  return (
    <section className="mt-16">
      {/* marquee */}
      <div className="relative flex flex-col items-center justify-center gap-12 overflow-hidden py-20">
        <MarqueeAboutMe
          className="-rotate-[7deg] bg-black py-4 md:-rotate-6"
          speed={25}
          items={[
            '10 Year Experience',
            'Full-Stack Developer',
            'System Architecture',
            'Scalable Web Solutions',
          ]}
        />
        <MarqueeAboutMe
          className="bg-orange absolute left-1/2 -translate-x-1/2 rotate-z-[7deg] py-4 md:rotate-z-6"
          speed={25}
          items={[
            '10 Year Experience',
            'Full-Stack Developer',
            'System Architecture',
            'Scalable Web Solutions',
          ]}
        />
      </div>
      {/* (About Me) */}
      <div className="mt-28 px-10 text-center">
        <span className="font-cal-sans text-orange text-2xl">(About Me)</span>
        <div className="mt-4 flex w-full items-center justify-center">
          {/* <h2 className="font-cal-sans inline-block text-[34px] leading-[1.1] text-black md:text-5xl">
            I am a Fullstack Web Developer <br className="max-md:hidden" />{' '}
            experienced in building modern,
            <span className="text-secondary">
              {' '}
              scalable <br className="max-lg:hidden" /> web applications from
              concept to deployment.
            </span>
          </h2> */}
          <div className="w-full md:w-[70%]">
            <RevealTextAboutMe text="I am a Fullstack Web Developer experienced in building modern, scalable web applications from concept to deployment." />
          </div>
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
