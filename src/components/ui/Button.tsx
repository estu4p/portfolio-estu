import type { ReactNode } from 'react'

interface ButtonProps {
  title: string
  href?: string
  icon?: ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const Button = ({
  title,
  href = '#',
  icon,
  className = '',
  onClick,
}: ButtonProps) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-black/80 px-5 py-3 text-white shadow-[0_12px_12px_-6px_rgba(26,26,26,0.12)] ${className}`}
      onClick={onClick}
    >
      {title}
      {icon}
    </a>
  )
}

export default Button
