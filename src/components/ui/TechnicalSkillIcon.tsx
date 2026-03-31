interface TechnicalSkillIconProps {
  name: string
  icon: string
  width?: string
}

const TechnicalSkillIcon = ({
  name,
  icon,
  width = 'h-13 w-13',
}: TechnicalSkillIconProps) => {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]">
      <img src={icon} alt={name} className={width} />
    </div>
  )
}

export default TechnicalSkillIcon
