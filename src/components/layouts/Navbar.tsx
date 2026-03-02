import { useState } from 'react'
import { NAV_LINKS } from '../../constants'
import Button from '../ui/Button'
import { Equal } from 'lucide-react'
import Header from '../ui/Header'

const Navbar = () => {
  const [navMobileOpen, setNavMobileOpen] = useState(false)

  const handleNavMobileOpen = () => {
    setNavMobileOpen(!navMobileOpen)
  }

  return (
    <>
      <div className="top-0 z-50 max-md:sticky">
        <Header />
        <nav className="bg-background px-10 pt-8 pb-3 md:pb-0">
          <div className="flex items-center justify-between">
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
              <Equal className="cursor-pointer text-2xl" />
            </button>
          </div>
        </nav>
      </div>
      <nav></nav>
    </>
  )
}

export default Navbar
