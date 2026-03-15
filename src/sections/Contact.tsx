import contactImage from '../assets/images/contact.jpg'
import icon1 from '../assets/icons/icons1.svg'
import { useRef } from 'react'
import { useMarqueeReveal } from '../hooks/useMarqueeReveal'
import useTextBlur from '../hooks/useTextBlur'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import ContactForm from '../components/ui/ContactForm'

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
    <section
      id="contact"
      ref={sectionRef}
      className="relative mt-50 px-2 md:h-195"
    >
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">(Contact)</span>
        <h2 className="text-title">Let's Connect</h2>
      </div>
      {/* card section */}
      <div
        ref={cardRef}
        className="relative h-full w-full overflow-x-hidden rounded-4xl bg-cover bg-center bg-no-repeat p-5 md:px-7.5 md:py-10"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
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
          {/* right/form */}
          <div className="flex w-full justify-end max-md:mt-10 md:w-1/2">
            <ContactForm />
          </div>
        </div>
        {/* marquee */}
        <div
          ref={marqueeRef}
          className="absolute right-7.5 bottom-5 left-7.5 flex items-center gap-8 text-nowrap md:bottom-10"
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
