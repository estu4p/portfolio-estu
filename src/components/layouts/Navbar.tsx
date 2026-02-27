import { NAV_LINKS } from '../../constants'
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <div className="bg-background flex items-center justify-between px-10 pt-9">
      {/* logo */}
      <div className="text-orange font-cal-sans text-4xl leading-0.5">
        <h1>estu.</h1>
      </div>
      {/* navigation */}
      <div className="flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      {/* contact */}
      <Button title="Contact" />
    </div>
  )
}

export default Navbar
