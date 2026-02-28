import Navbar from './components/layouts/Navbar'
import Header from './components/ui/Header'
import AboutMe from './sections/AboutMe'
import Banner from './sections/Banner'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import TechnicalSkills from './sections/TechnicalSkills'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Banner />
      <AboutMe />
      <TechnicalSkills />
      <Footer />
    </>
  )
}

export default App
