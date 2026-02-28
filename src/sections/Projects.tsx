import ProjectCard from '../components/ui/ProjectCard'
import { PROJECTS_DATA } from '../constants'

const Projects = () => {
  return (
    <section className="relative mt-40 p-2">
      {/* title */}
      <div className="box-title -mt-20">
        <h2 className="text-title">Work Highlight</h2>
      </div>
      <div className="flex flex-col gap-2">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
