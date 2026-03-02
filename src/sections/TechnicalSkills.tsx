import icon1Orange from '../assets/icons/icons1-orange.svg'
import banner from '../assets/images/banner.jpg'

const TechnicalSkills = () => {
  return (
    <section className="relative mt-28 md:mt-20">
      {/* title */}
      <div className="px-5 md:ml-16">
        <span className="text-secondary mb-4 block">(Tech Stack)</span>
        <h2 className="font-cal-sans text-primary text-[64px] leading-none">
          Technical Skills
        </h2>
      </div>
      <div className="mt-16 px-5">
        <div className="border-t-secondary/20 text-secondary flex items-center justify-between border-t pt-8 font-medium md:mx-10">
          <button className="text-orange flex cursor-pointer items-center gap-3 font-medium">
            {' '}
            <div className="bg-orange h-2 w-2 rounded-full" /> Front-End
          </button>
          <button className="cursor-pointer">Back-End</button>
          <button className="cursor-pointer">Database</button>
          <button className="cursor-pointer">Tools</button>
        </div>
        <div className="relative mt-16 flex h-full flex-col items-center justify-center overflow-x-hidden">
          <div className="absolute top-1/2 -z-10 flex -translate-y-1/2 items-center gap-16 text-nowrap">
            <h3 className="font-cal-sans text-orange text-9xl leading-none">
              Front-End
            </h3>
            <img src={icon1Orange} alt="Front End Icon" className="h-16 w-16" />
            <h3 className="font-cal-sans text-orange text-9xl leading-none">
              Front-End
            </h3>
            <img src={icon1Orange} alt="Front End Icon" className="h-16 w-16" />
            <h3 className="font-cal-sans text-orange text-9xl leading-none">
              Front-End
            </h3>
            <img src={icon1Orange} alt="Front End Icon" className="h-16 w-16" />
          </div>
          <div className="h-91.5 max-w-137.5">
            <img
              src={banner}
              alt="Banner"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
          <p className="text-primary mt-8 w-[70%] text-center md:w-[40%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, optio? Velit, dicta magnam assumenda quis suscipit
            culpa facilis quo saepe.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
