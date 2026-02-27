import banner from '../assets/images/banner.jpg'

const Banner = () => {
  return (
    <section className="bg-background rounded-b-4xl px-2 pt-8 pb-14">
      <img
        src={banner}
        alt="Banner"
        className="h-auto w-full rounded-4xl object-cover"
      />
    </section>
  )
}

export default Banner
