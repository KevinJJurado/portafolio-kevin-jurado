
import { useEffect, useState } from 'react'
import './App.css'
import './styles/NavBar.css'
import './styles/Home.css'
import './styles/AboutMe.css'
import './styles/Projects.css'
import './styles/Contact.css'
import './styles/Skills.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={`${darkMode ? 'darkmode' : 'principal'}`}>
      <header className='header'>
        <Navbar 
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
      </header>
      <section className='content'>
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </section>

    </div>
  )
}

export default App
