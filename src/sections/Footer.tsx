import imgFooter from '../assets/images/img-footer.jpg'
import { FOOTER_LINKS } from '../constants'

const Footer = () => {
  return (
    <section className="relative h-[780px] overflow-hidden p-2">
      <div
        className="h-full w-full rounded-4xl bg-cover bg-no-repeat px-7.5 py-10"
        style={{ backgroundImage: `url(${imgFooter})` }}
      >
        <div className="flex justify-between md:w-[30%]">
          {FOOTER_LINKS.map((link) => (
            <div key={link.label} className="">
              <h3 className="mb-4 text-[#FFFFFFA3]">{link.label}</h3>
              <ul className="mt-2 space-y-2.5">
                {link.links.map((subLink) => (
                  <li key={subLink.label} className="">
                    <a
                      href={subLink.href}
                      className="font-cal-sans text-2xl text-white"
                    >
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-32 flex w-1/2 items-center justify-between">
          <span className="text-[#FFFFFFA3]">
            © 2025 Agero. All rights reserved.
          </span>
          <span className="text-[#FFFFFFA3]">Yogyakarta, Indonesia</span>
        </div>
        <h1 className="font-cal-sans text-background/80 absolute bottom-0 left-1/2 -translate-x-1/2 text-[clamp(6rem,25vw,25rem)] lg:-bottom-32">
          Estu.dev
        </h1>
        <div className="absolute bottom-2 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full bg-transparent backdrop-blur-xs"></div>
      </div>
    </section>
  )
}

export default Footer
