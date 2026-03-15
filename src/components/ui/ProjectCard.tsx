import { ArrowUpRight } from 'lucide-react'

interface ProjectsProps {
  id: string
  project: string
  desc: string
  image: string
  year: string
  tools: string
  features: string[]
  previewLink: string
}

const ProjectCard = ({
  id,
  project,
  desc,
  image,
  year,
  tools,
  features,
  previewLink,
}: ProjectsProps) => {
  return (
    <div
      id={id}
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-4xl p-5 md:h-screen md:p-3.25"
    >
      {/* blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          // backgroundPosition: 'right bottom -290px',
        }}
      />
      {/* background blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />
      {/* content */}
      <div className="relative z-10 flex flex-col gap-12 md:flex-row">
        <div className="flex min-h-full w-full flex-col justify-between gap-17.5 md:w-56">
          <p className="text-white80">{desc}</p>
          <div className="">
            <div className="">
              <span className="text-white">0{id} </span>
              <span className="text-white80">/ 03</span>
              <hr className="mt-4 w-11 border-white/40" />
            </div>
            <span className="font-cal-sans -mb-5 block text-[64px] leading-none text-white">
              {project}
            </span>
          </div>
        </div>
        <img
          src={image}
          alt="Project 1"
          className="h-99.5 w-74.5 rounded-3xl border border-white/20 object-cover"
        />
        <div className="relative flex min-h-full w-full flex-col justify-between md:w-56">
          <div className="">
            <div className="space-y-1.5">
              <p className="text-white80">Year</p>
              <span className="font-cal-sans text-2xl text-white">{year}</span>
            </div>
            <div className="mt-7 space-y-1.5 md:mt-16">
              <p className="text-white80">Tools</p>
              <span className="text-white">{tools}</span>
            </div>
          </div>
          <div className="mt-7 space-y-1.5 md:mt-16">
            <p className="text-white80">Features</p>
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="text-white">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute right-0 bottom-0 md:-right-20">
            <a
              href={previewLink}
              className="text-white80 flex items-center gap-2 underline"
            >
              Preview <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
