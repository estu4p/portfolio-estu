import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react'
import Button from '../components/ui/Button'
import HeroIcon from '../components/ui/HeroIcon'
import { useRef } from 'react'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import AnimatedHeroText from '../components/ui/AnimatedHeroText'
import useLenis from '../hooks/useLenis'

const Hero = () => {
  const lenisRef = useLenis()
  const hiRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useRevealAnimation(hiRef, {
    x: 20,
    duration: 0.4,
    delay: 1.4,
    ease: 'power2.inOut',
  })

  useRevealAnimation(descRef, {
    y: 12,
    delay: 1.6,
  })

  return (
    <section id="hero" className="bg-background pt-50 md:pt-28">
      <div className="mx-auto text-center">
        <p ref={hiRef} className="text-secondary mb-4 text-xl">
          Hi there, I'm Estu
        </p>
        <div className="">
          <AnimatedHeroText>
            <span data-animate>Building Robust</span>{' '}
            <span data-animate>
              <HeroIcon bgColor="bg-orange" icon={<ShieldCheck size={36} />} />
            </span>
            <br />
            <span className="text-secondary" data-animate>
              and
            </span>{' '}
            <span className="text-orange" data-animate>
              Scalable
            </span>{' '}
            <span data-animate>
              <HeroIcon
                icon={<TrendingUp size={36} className="hero-icon" />}
                bgColor="bg-black"
              />
            </span>
            <span data-animate>Full-Stack</span>
            <br />
            <span className="text-secondary" data-animate>
              Web Solutions
            </span>
          </AnimatedHeroText>
        </div>
        <div ref={descRef} className="mt-8">
          <p className="px-10 text-base">
            I design and develop modern web applications focused on solid
            architecture, performance, security,{' '}
            <br className="hidden md:block" /> and long-term scalability —
            delivering clean, efficient, and future-ready solutions.
          </p>
          <div className="mt-12">
            <Button
              onClick={(e) => {
                e.preventDefault()
                lenisRef.current?.scrollTo('#contact', {
                  duration: 1.2,
                })
              }}
              title="View Projects"
              icon={<ArrowRight className="h-5 w-5" />}
              className="button-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
