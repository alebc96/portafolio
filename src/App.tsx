import './App.css'
import AboutMe from './components/aboutme/AboutMe'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Presentation from './components/presentation/Presentation'
import { Proyects } from './components/proyects/Proyects'
import Skills from './components/skills/Skills'

function App() {

  return (
    < >
      <Header></Header>
      <AboutMe></AboutMe>
      <Presentation></Presentation>
      <Skills></Skills>
      <Proyects></Proyects>
      <Footer></Footer>
    </>
  )
}

export default App
