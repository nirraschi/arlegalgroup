import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Areas from '../components/Areas'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Carrusel />
      <Services />
      <Areas />

      <Contact />
    </div>
  )
}

export default Home