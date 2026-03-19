import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS } from '../../constants'
import Button from '../ui/Button'
import Header from '../ui/Header'
import { useRevealAnimation } from '../../hooks/useRevealAnimation'
import useLenis from '../../hooks/useLenis'
import useMobileNavAnimation from '../../hooks/useMobileNavAnimation'
import useHamburgerAnimation from '../../hooks/useHamburgerAnimation'

const Navbar = () => {
  const lenisRef = useLenis()
  const [navMobileOpen, setNavMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)

  useMobileNavAnimation(mobileMenuRef, navMobileOpen)
  useHamburgerAnimation(line1Ref, line2Ref, line3Ref, navMobileOpen)

  useRevealAnimation(navRef, {
    delay: 0.6,
    duration: 0.4,
    spring: true,
  })

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navMobileOpen && !(e.target as HTMLElement).closest('.navbar')) {
        setNavMobileOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [navMobileOpen])

  const handleNavMobileOpen = () => {
    setNavMobileOpen(!navMobileOpen)
  }

  return (
    <div
      id="navbar"
      className="navbar bg-background z-50 w-full max-md:fixed max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
    >
      <Header />
      <nav ref={navRef} className="relative transform-gpu will-change-scroll">
        <div className="bg-background relative z-30 flex items-center justify-between px-5 pt-8 pb-3 md:px-10 md:pb-0">
          {/* logo */}
          <div className="text-orange font-cal-sans text-4xl leading-0.5">
            <h1>
              {' '}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault()
                  lenisRef.current?.scrollTo('#hero', {
                    offset: -80,
                    duration: 1.2,
                  })
                }}
              >
                Estu.
              </a>
            </h1>
          </div>
          {/* navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  lenisRef.current?.scrollTo(link.href, {
                    duration: 1.2,
                  })
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* contact */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                lenisRef.current?.scrollTo('#contact', {
                  duration: 1.2,
                })
              }}
            >
              <Button title="Contact" />
            </a>
          </div>
          <button
            onClick={handleNavMobileOpen}
            className="relative h-7 w-7 md:hidden"
          >
            <span
              ref={line1Ref}
              className="bg-secondary absolute top-1 left-0 h-0.5 w-full"
            />

            <span
              ref={line2Ref}
              className="bg-secondary absolute top-3 left-0 h-0.5 w-full"
            />

            <span
              ref={line3Ref}
              className="bg-secondary absolute top-5 left-0 h-0.5 w-full"
            />
          </button>
        </div>
        <div
          ref={mobileMenuRef}
          className="bg-background absolute top-full right-0 left-0 -z-20 w-full px-5 py-7.5 text-start md:hidden"
        >
          <div className="mt- flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  lenisRef.current?.scrollTo(link.href, {
                    offset: -80,
                    duration: 1.2,
                  })

                  setNavMobileOpen(false)
                }}
                className="text-secondary px-3 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-7.5 w-full">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                lenisRef.current?.scrollTo('#contact', {
                  offset: -80,
                  duration: 1.2,
                })
                setNavMobileOpen(false)
              }}
            >
              <Button
                title="Contact"
                className="flex w-full items-center justify-center"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
