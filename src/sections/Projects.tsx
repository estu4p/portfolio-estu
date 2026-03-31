import { useRef } from 'react'
import ProjectCard from '../components/ui/ProjectCard'
import { PROJECTS_DATA } from '../constants'
import useSectionStack from '../hooks/useSectionStack'
import useRevealBatch from '../hooks/useRevealBatch'

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  useSectionStack(cardRef)

  useRevealBatch(sectionRef)

  return (
    <section id="projects" ref={sectionRef} className="relative mt-48 p-2">
      {/* title */}
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">
          (Projects)
        </span>
        <h2 className="text-title reveal-title">Work Highlight</h2>
      </div>
      <div ref={cardRef} className="reveal-card relative flex flex-col gap-25">
        {PROJECTS_DATA.map((project, index) => (
          <div
            id={project.id}
            key={index}
            className="project-section sticky -top-96 will-change-transform md:top-5"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
