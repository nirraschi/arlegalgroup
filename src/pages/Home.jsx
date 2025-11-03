import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Areas from '../components/Areas'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <About />
      <Areas />
      <Contact />
    </div>
  )
}

export default Home