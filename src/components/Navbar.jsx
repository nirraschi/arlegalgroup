import React from 'react'
import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import logo from '../assets/img/logo.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useViewportScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.8)"]
  );
  const height = useTransform(scrollY, [0, 100], [70, 70]);

  return (
    <motion.nav
      id="navbar"
      style={{ background, height }}

      className="fixed w-full z-50 shadow bg-white/30 overflow-hidden
      backdrop-blur-md border-b border-white/20 transition-all duration-300 ">
      <div className='max-w-full md:max-w-6xl mx-auto px-4 sm:px-6 py-4 flex  justify-between items-center'>
        {/* logo */}
        <div className='flex items-center justify-start gap-4'>
          <img src={logo} alt={siteConfig.name} className='h-10' />
          <p href="" className='font-bold text-xl text-primary font-'>Organización AR</p>


        </div>


        {/* Links Desktop */}

        <ul className='hidden md:flex gap-6 text-primary font-semibold'>
          <li className="hover:underline-offset-4 hover:underline">
            <a href="#home">Inicio</a>
          </li>
          <li className="hover:underline-offset-4 hover:underline">
            <a href="#services">Qué ofrecemos</a>
          </li>
          <li className="hover:underline-offset-4 hover:underline">
            <a href="#about">Sobre nosotros</a>
          </li>
          <li className="hover:underline-offset-4 hover:underline">
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

    </motion.nav>
  )
}

export default Navbar