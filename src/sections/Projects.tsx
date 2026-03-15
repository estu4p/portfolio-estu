import { useRef } from 'react'
import ProjectCard from '../components/ui/ProjectCard'
import { PROJECTS_DATA } from '../constants'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import useSectionStack from '../hooks/useSectionStack'

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const projectCardRef = useRef<HTMLDivElement>(null)
  useSectionStack(projectCardRef)

  useRevealAnimation(sectionRef, {
    y: 50,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  return (
    <section ref={sectionRef} className="relative mt-48 p-2">
      {/* title */}
      <div className="box-title">
        <span className="text-secondary mb-2 block text-center">
          (Projects)
        </span>
        <h2 className="text-title">Work Highlight</h2>
      </div>
      <div ref={projectCardRef} className="relative flex flex-col gap-25">
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
