import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
