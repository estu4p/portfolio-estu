import { useRef } from 'react'
import ProjectCard from '../components/ui/ProjectCard'
import { PROJECTS_DATA } from '../constants'
import { useSectionStack } from '../hooks/useSectionStack'
import { useRevealAnimation } from '../hooks/useRevealAnimation'

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  useSectionStack()

  useRevealAnimation(sectionRef, {
    y: 50,
    duration: 0.4,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      start: 'top 80%',
    },
  })

  useRevealAnimation(cardRef, {
    y: 50,
    duration: 1,
    delay: 0.1,
    ease: 'power2.inOut',
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
      <div ref={cardRef} className="flex flex-col gap-2">
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
