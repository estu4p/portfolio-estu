import contactImage from '../assets/images/contact.jpg'
import icon1 from '../assets/icons/icons1.svg'
import { useRef } from 'react'
import { useMarqueeReveal } from '../hooks/useMarqueeReveal'
import useTextBlur from '../hooks/useTextBlur'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRevealAnimation } from '../hooks/useRevealAnimation'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const textBlur = useRef<HTMLHeadingElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useTextBlur(textBlur)
  useMarqueeReveal(marqueeRef)
  useRevealAnimation(cardRef, {
    y: 50,
    duration: 1,
    delay: 0.1,
    ease: 'power2.inOut',
    scrollTrigger: {
      start: 'top 80%',
    },
  })
  useRevealAnimation(sectionRef, {
    y: 50,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  return (
    <section ref={sectionRef} className="relative mt-50 px-2 md:h-195">
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">(Contact)</span>
        <h2 className="text-title">Let's Connect</h2>
      </div>
      {/* card section */}
      <div
        ref={cardRef}
        className="relative h-full w-full overflow-x-hidden rounded-4xl bg-cover bg-center bg-no-repeat px-5 py-10 md:px-7.5"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="flex flex-col max-md:mb-40 md:flex-row">
          {/* left */}
          <div className="md:w-2/5">
            <h2
              ref={textBlur}
              className="font-cal-sans text-[64px] leading-[1.1] text-white"
            >
              Got a project in mind?
            </h2>
            <p className="mt-4 text-white">
              Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          {/* right */}
          <div className="flex w-[80%] justify-end max-md:mt-10 md:w-1/2">
            <form className="w-full space-y-8 md:w-114">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-base text-white">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="border-b-secondary border-b py-2 text-white placeholder:text-white/80 focus:ring-0 focus:outline-none"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-base text-white">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border-b-secondary border-b py-2 text-white placeholder:text-white/80 focus:ring-0 focus:outline-none"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-base text-white">
                  Project Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="border-b-secondary border-b py-2 text-white placeholder:text-white/80 focus:ring-0 focus:outline-none"
                  placeholder="Enter your Project Description"
                />
              </div>
              <button className="bg-background hover:bg-background/70 w-full rounded-full py-2 transition-colors duration-300">
                <span className="text-accent">Send Now!</span>
              </button>
            </form>
          </div>
        </div>
        {/* marquee */}
        <div
          ref={marqueeRef}
          className="absolute right-7.5 bottom-10 left-7.5 flex items-center gap-8 text-nowrap"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-7.5">
              <h3 className="font-cal-sans hover:text-orange text-[32px] text-white">
                contact@estu.dev
              </h3>
              <img src={icon1} alt="Icon" className="h-4 w-4" />
            </div>
          ))}
        </div>
      </div>
      {/*  */}
    </section>
  )
}

export default Contact
