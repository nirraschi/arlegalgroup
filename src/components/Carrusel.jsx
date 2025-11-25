import React from 'react'
import { motion } from 'framer-motion'
import { section } from 'framer-motion/client'

const Carrusel = () => {

    const logos = [
        { img: "/src/assets/carrusel/cnp.png", alt: "CNP" },
        { img: "/src/assets/carrusel/federacion.png", alt: "Federación" },
        { img: "/src/assets/carrusel/sancor.png", alt: "Sancor" },
        { img: "/src/assets/carrusel/cnp.png", alt: "CNP" },
        { img: "/src/assets/carrusel/federacion.png", alt: "Federación" },
        { img: "/src/assets/carrusel/sancor.png", alt: "Sancor" },
        { img: "/src/assets/carrusel/cnp.png", alt: "CNP" },
        { img: "/src/assets/carrusel/federacion.png", alt: "Federación" },
        { img: "/src/assets/carrusel/sancor.png", alt: "Sancor" },
        { img: "/src/assets/carrusel/cnp.png", alt: "CNP" },
        { img: "/src/assets/carrusel/federacion.png", alt: "Federación" },
        { img: "/src/assets/carrusel/sancor.png", alt: "Sancor" },
        { img: "/src/assets/carrusel/cnp.png", alt: "CNP" },
        { img: "/src/assets/carrusel/federacion.png", alt: "Federación" },
        { img: "/src/assets/carrusel/sancor.png", alt: "Sancor" },
        { img: "/src/assets/carrusel/cnp.png", alt: "CNP" },
        { img: "/src/assets/carrusel/federacion.png", alt: "Federación" },
        { img: "/src/assets/carrusel/sancor.png", alt: "Sancor" },


    ]
    return (
        <section className='relative my-10 overflow-hidden max-h-1/2 max-w-screen'>

            <div className='z-10 pointer-events-none absolute inset-0 
            bg-linear-to-r from-white via-transparent to-white w-full h-full'>

            </div>

            <motion.div
                className='flex relative'
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 50,
                    ease: "linear"

                }}
                whileHover={{ x: "50%" }}
            >


                {logos.map((item, index) => (
                    <motion.img
                        key={index}
                        src={item.img}
                        alt={item.alt}
                        className='w-30 h-30 object-contain mr-30'
                    />
                ))}
            </motion.div>
        </section>
    )
}

export default Carrusel