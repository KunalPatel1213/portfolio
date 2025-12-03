import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Name from './components/Name'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contect'

const App = () => {
  return (
    <div>
      <Resume />
      <Navbar />
      <Name />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default App
