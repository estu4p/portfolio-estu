import type { ReactNode } from 'react'

const Button = ({
  title,
  href = '#',
  icon,
}: {
  title: string
  href?: string
  icon?: ReactNode
}) => {
  return (
    <a
      href={href}
      className="bg-accent inline-flex items-center gap-2 rounded-full px-5 py-3 text-white"
    >
      {title}
      {icon}
    </a>
  )
}

export default Button
