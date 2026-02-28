import icon1 from '../assets/icons/icons1.svg'
import icon1orange from '../assets/icons/icons1-orange.svg'
import photo from '../assets/images/banner.jpg'

const AboutMe = () => {
  return (
    <section className="mt-16">
      {/* marquee */}
      <div className="relative flex flex-col justify-center gap-12 overflow-hidden py-20">
        <div
          className="scale-110 -rotate-6 bg-black p-3 text-nowrap"
          //   data-duration="20"
        >
          <div className="flex gap-3.5">
            <div className="flex items-center gap-7">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <span className="font-cal-sans text-[32px] text-white">
                    10 Year Experience
                  </span>
                  <img src={icon1} alt="Logo" className="ml-4 inline h-7 w-7" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="bg-orange absolute left-0 scale-110 rotate-z-6 p-3 text-nowrap"
          //   data-duration="20"
        >
          <div className="flex gap-3.5">
            <div className="flex items-center gap-7">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <span className="font-cal-sans text-[32px] text-white">
                    10 Year Experience
                  </span>
                  <img src={icon1} alt="Logo" className="ml-4 inline h-7 w-7" />
                </div>
              ))}
            </div>
          </div>
        </div>
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
      <div className="relative mt-28 flex gap-6 px-8">
        <div className="box-title -top-20">
          <h2 className="text-title">How I Work</h2>
        </div>
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
        <div className="h-[360px] w-[60%]">
          <img
            src={photo}
            alt="Profile"
            className="h-full w-full rounded-3xl object-cover brightness-90"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
