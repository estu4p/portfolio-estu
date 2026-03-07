import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import icon1 from '@/assets/icons/icons1.svg'

type MarqueeProps = {
  className?: string
  speed?: number
  items: string[]
}

const MarqueeAboutMe = forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, speed = 20, items }, ref) => {
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!trackRef.current) return

      const track = trackRef.current

      track.innerHTML += track.innerHTML

      const totalWidth = track.scrollWidth / 2

      const animation = gsap.to(track, {
        x: -totalWidth,
        duration: speed * 4,
        ease: 'none',
        repeat: -1,
      })

      return () => {
        animation.kill()
      }
    }, [speed])

    const marqueeItems = [...items, ...items]

    return (
      <div
        ref={ref}
        className={`${className} overflow-hidden whitespace-nowrap`}
      >
        <div ref={trackRef} className="flex w-max items-center gap-10">
          {marqueeItems.map((text, index) => (
            <div key={index} className="flex items-center gap-10">
              <span className="font-cal-sans text-[32px] whitespace-nowrap text-white">
                {text}
              </span>

              <img src={icon1} alt="Logo" className="h-7 w-7 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    )
  },
)

export default MarqueeAboutMe
