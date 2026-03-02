import type { ReactNode } from 'react'

const Button = ({
  title,
  href = '#',
  icon,
  className = '',
}: {
  title: string
  href?: string
  icon?: ReactNode
  className?: string
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-black/80 px-5 py-3 text-white shadow-[0_12px_12px_-6px_rgba(26,26,26,0.12)] ${className}`}
    >
      {title}
      {icon}
    </a>
  )
}

export default Button
