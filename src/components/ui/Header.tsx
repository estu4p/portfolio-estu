import headerBg from '@/assets/icons/header.svg'

const Header = () => {
  return (
    <div className="bg-background top-0 z-50 flex w-full items-center justify-center max-md:sticky">
      <div className="relative">
        <img src={headerBg} alt="Header" />
        <div className="absolute top-1/2 left-1/2 flex -translate-1/2 items-center gap-2 text-nowrap">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium tracking-wide text-white">
            Available for New Projects
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
