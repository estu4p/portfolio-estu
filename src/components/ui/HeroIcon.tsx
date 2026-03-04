import { useRef } from 'react'
import { useFloatingAnimation } from '../../hooks/useFloatingAnimation'

interface HeroIconProps {
  icon: React.ReactNode
  bgColor?: string
}

const HeroIcon = ({ icon, bgColor = 'bg-primary' }: HeroIconProps) => {
  const iconRef = useRef<HTMLDivElement>(null)

  useFloatingAnimation(iconRef, {
    xPercent: -9,
    yPercent: -9,
    duration: 1.6,
    ease: 'sine.inOut',
  })

  return (
    <div
      ref={iconRef}
      className={`${bgColor} mx-2 hidden h-16 w-20 items-center justify-center overflow-hidden rounded-full px-4 text-white md:inline-flex`}
    >
      {icon}
    </div>
  )
}

export default HeroIcon
