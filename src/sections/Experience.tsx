import { EXPERIENCE_DATA } from '../constants'
import ExperienceCard from '../components/ui/ExperienceCard'

const Experience = () => {
  return (
    <section className="relative mt-32 px-10">
      {/* title */}
      <div className="box-title -mt-28">
        <span className="text-secondary mb-2 block text-center">
          (Education & Experience)
        </span>
        <h2 className="text-title">My Journey</h2>
      </div>
      <div className="">
        {EXPERIENCE_DATA.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience
