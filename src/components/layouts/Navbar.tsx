import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../constants'
import Button from '../ui/Button'
import { Equal } from 'lucide-react'
import Header from '../ui/Header'

const Navbar = () => {
  const [navMobileOpen, setNavMobileOpen] = useState(false)

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
    <div className="navbar top-0 z-50 max-md:sticky">
      <Header />
      <nav className="bg-background relative px-5 pt-8 pb-3 md:px-10 md:pb-0">
        <div className="relative z-30 flex items-center justify-between">
          {/* logo */}
          <div className="text-orange font-cal-sans text-4xl leading-0.5">
            <h1>Estu.</h1>
          </div>
          {/* navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          {/* contact */}
          <div className="hidden md:block">
            <Button title="Contact" />
          </div>
          <button className="md:hidden" onClick={handleNavMobileOpen}>
            <Equal className="h-7 w-7 cursor-pointer" />
          </button>
        </div>
        <div
          className={`bg-background absolute right-0 left-0 -z-10 w-full px-5 py-7.5 text-start transition-all duration-600 ease-in-out md:hidden ${navMobileOpen ? 'top-15' : '-top-96'}`}
        >
          <div className="mt- flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary px-3 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-7.5 w-full">
            <Button
              title="Contact"
              className="flex w-full items-center justify-center"
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
