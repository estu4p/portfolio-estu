import icon1 from '@/assets/icons/icons1.svg'

const MarqueeAboutMe = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} scale-110 p-3 text-nowrap`}>
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
  )
}

export default MarqueeAboutMe
