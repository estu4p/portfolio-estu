const Header = () => {
  return (
    <div className="bg-background flex justify-center">
      <div className="bg-accent relative rounded-t-2xl rounded-b-2xl px-8 py-2 text-white shadow-lg">
        {/* Top Curve */}
        {/* <div className="absolute -top-4 -right-[70px] h-8 w-24 -translate-x-1/2 rounded-b-full bg-red-400"></div> */}

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium tracking-wide">
            Available for New Projects
          </span>
        </div>

        {/* Bottom Curve */}
        {/* <div className="absolute -right-[55px] bottom-0 h-8 w-24 -translate-x-1/2 rounded-t-full bg-gray-900"></div> */}
      </div>
    </div>
  )
}

export default Header
