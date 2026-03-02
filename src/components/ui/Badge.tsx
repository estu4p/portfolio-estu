import type { ReactNode } from 'react'

interface BadgeProps {
  text: string
  icon: ReactNode
}

const Badge = ({ text, icon }: BadgeProps) => {
  return (
    <div className="box-badge flex h-fit items-center gap-2 rounded-full px-5 py-3">
      {icon}
      <span className="text-sm text-nowrap text-white/80">{text}</span>
    </div>
  )
}

export default Badge
