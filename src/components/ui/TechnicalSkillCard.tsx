import banner from '../../assets/images/banner.jpg'

interface TechnicalSkillCardProps {
  id: number
  category: string
  skills: { name: string; icon: string; width?: string }[]
}

const TechnicalSkillCard = ({
  id,
  category,
  skills,
}: TechnicalSkillCardProps) => {
  return (
    <div
      className="h-full w-full rounded-3xl bg-cover bg-center bg-no-repeat p-0.5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
      }}
    >
      <div className="h-full w-full rounded-3xl border border-white/40 p-5">
        <div className="flex w-full items-center justify-between">
          <h3 className="font-cal-sans text-4xl text-white">
            {category} Tools
          </h3>
          <div className="text-base">
            <span className="text-white">0{id} </span>
            <span className="text-white80">/ 03</span>
          </div>
        </div>
        {/* content */}
        <div className="mt-2 flex w-full flex-wrap items-center gap-2">
          {skills?.map((skill, index) => (
            <div
              key={index}
              className={`bg-secondary/60 flex items-center gap-3 rounded-md px-3 py-2 ${skill.width ? skill.width : 'flex-1'}`}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="h-10 w-10"
              />
              <span className="text-base text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnicalSkillCard
