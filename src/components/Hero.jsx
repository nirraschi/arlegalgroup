import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/img/hero.jpg'

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden mt-18 md:mt-12 "
    >
      {/* Imagen de fondo */}
      <div
        className=" absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      ></div>

      {/* Capa de color (overlay) */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/*Text content*/}
      <motion.div
        className='flex-1 text-center md:text-left space-y-6 z-10 m-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='text-4xl md:text-6xl font-bold'>AR Legal Group</h1>

        <p className="text-lg text-gray-300 max-w-xl">
          Derecho civil y comercial, seguros, consumo y salud.
          <br />
          <span className="text-white font-semibold">
            Una visión práctica y resolutiva.
          </span>
        </p>

        <motion.a href="#contact"
          className="inline-block bg-white text-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white/90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contáctanos
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero