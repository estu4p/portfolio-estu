import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react'
import Button from '../components/ui/Button'
import HeroIcon from '../components/ui/HeroIcon'

const Hero = () => {
  return (
    <section id="Hero" className="bg-background pt-20">
      <div className="mx-auto text-center">
        <p className="text-secondary mb-4 text-xl">Hi there, I'm Estu</p>

        <h1 className="font-cal-sans text-7xl leading-[1.2] text-black">
          Building Robust <HeroIcon icon={<ShieldCheck size={36} />} />
          <br />
          <span className="text-secondary">and</span>{' '}
          <span className="text-orange">
            Scalable{' '}
            <HeroIcon icon={<TrendingUp size={36} />} bgColor="bg-black" />
          </span>{' '}
          Full-Stack
          <br />
          <span className="text-secondary">Web Solutions</span>
        </h1>
        <p className="mt-8 text-base">
          I design and develop modern web applications focused on solid
          architecture, performance, security, <br /> and long-term scalability
          — delivering clean, efficient, and future-ready solutions.
        </p>
        <div className="mt-12">
          <Button
            title="View Projects"
            icon={<ArrowRight className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
