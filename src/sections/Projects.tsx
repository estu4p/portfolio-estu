import ProjectCard from '../components/ui/ProjectCard'
import { PROJECTS_DATA } from '../constants'
import { useSectionStack } from '../hooks/useSectionStack'

const Projects = () => {
  useSectionStack()

  return (
    <section className="relative mt-48 p-2">
      {/* title */}
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">
          (Projects)
        </span>
        <h2 className="text-title">Work Highlight</h2>
      </div>
      <div className="flex flex-col gap-2">
        {PROJECTS_DATA.map((project, index) => (
          <div
            id={project.id}
            key={index}
            className="project-section will-change-transform"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
