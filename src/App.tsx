import Navbar from './components/layouts/Navbar'
import useSmoothScroll from './hooks/useSmoothScroll'
import AboutMe from './sections/AboutMe'
import Banner from './sections/Banner'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import TechnicalSkills from './sections/TechnicalSkills'

function App() {
  useSmoothScroll()

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="max-container w-full">
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <Banner />
          <AboutMe />
          <Projects />
          <TechnicalSkills />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
