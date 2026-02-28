import { ArrowUpRight } from 'lucide-react'

interface ProjectsProps {
  project: string
  desc: string
  image: string
  year: string
  tools: string
  features: string[]
  previewLink: string
}

const ProjectCard = ({
  project,
  desc,
  image,
  year,
  tools,
  features,
  previewLink,
}: ProjectsProps) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-4xl py-3.25">
      {/* blur */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'right bottom -290px',
        }}
      />
      {/* background blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />
      {/* content */}
      <div className="relative z-10 flex gap-12">
        <div className="flex min-h-full w-full flex-col justify-between md:w-56">
          <p className="text-white80">{desc}</p>
          <div className="">
            <div className="">
              <span className="text-white">01 </span>
              <span className="text-white80">/ 03</span>
              <hr className="mt-4 w-11 border-white/40" />
            </div>
            <span className="font-cal-sans -mb-5 block text-[64px] text-white">
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
            <div className="mt-16 space-y-1.5">
              <p className="text-white80">Tools</p>
              <span className="text-white">{tools}</span>
            </div>
          </div>
          <div className="mt-16 space-y-1.5">
            <p className="text-white80">Features</p>
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="text-white">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -right-20 bottom-0">
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
