import React from 'react'
import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/img/logo.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 shadow bg-white overflow-hidden">
      <div className='max-w-full md:max-w-6xl mx-auto px-4 sm:px-6 py-4 flex  justify-between items-center'>
        {/* logo */}
        <img src={logo} alt={siteConfig.name} className='h-10' />
        

        {/* Links Desktop */}
        
        <ul className='hidden md:flex gap-6 text-primary font-semibold'>
          <li className="">
            <a href="#about">Nosotras</a>
          </li>
          <li className="">
            <a href="#services">Áreas</a>
          </li>
          <li className="">
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        {/* Botón burger */}
        <div className='md:hidden '>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-primary focus:outline-none'
          >
            {isOpen ? "✕" : "☰"}

          </button>

        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden flex flex-col gap-4 bg-white shadow py-4 items-center'>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>Nosotras</a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>Áreas</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar