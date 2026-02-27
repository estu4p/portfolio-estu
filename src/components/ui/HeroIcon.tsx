import type { ReactNode } from 'react'

const HeroIcon = ({
  icon,
  bgColor = 'bg-orange',
}: {
  icon: ReactNode
  bgColor?: string
}) => {
  return (
    <div
      className={`${bgColor} inline-flex h-16 w-20 items-center justify-center overflow-hidden rounded-full px-4 text-white`}
    >
      {icon}
    </div>
  )
}

export default HeroIcon
