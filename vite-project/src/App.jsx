import { useState } from 'react'
import Hero from './pages/Hero'
import ShowCase from './pages/ShowCase'
import NavBar from './Components/NavBar'
import TechStack from './pages/TechStack'
import Footer from './pages/Footer'


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <TechStack />
      <Footer />
    </>
  )
}

export default App
