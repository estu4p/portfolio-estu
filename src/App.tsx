import Navbar from './components/layouts/Navbar'
import AboutMe from './sections/AboutMe'
import Banner from './sections/Banner'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import TechnicalSkills from './sections/TechnicalSkills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <AboutMe />
      <Projects />
      <TechnicalSkills />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
