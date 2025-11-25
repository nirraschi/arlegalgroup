import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/img/hero.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row h-screen overflow-hidden ">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />


      <motion.div
        className="flex flex-col justify-center gap-4 items-center md:items-start text-center md:text-left  flex-1 px-6 md:px-16 py-10 space-y-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        href="#home"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Protegé tu futuro 
          <br/>
          <span className="text-5xl">y el de tu familia.</span>
        </h1>

        <p className="text-lg text-gray-700 max-w-xl pr-18">
          Más de 25 años acompañando a familias, profesionales y empresas en la protección de su futuro.

        </p>

        <motion.a
          href="#contact"
          className="inline-block bg-accent text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-primary transition "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contactanos
        </motion.a>
      </motion.div>


    </section>
  );
};

export default Hero;
