import React from "react";
import { Shield, HeartHandshake, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
    const servicios = [
        {
            icon: Shield,
            title: "Seguros de Vida",
            description:
                "Protegé a quienes más querés con planes personalizados que garantizan respaldo económico y tranquilidad en todo momento.",
        },
        {
            icon: PiggyBank,
            title: "Ahorro y Capitalización",
            description:
                "Construí tu futuro con programas que combinan rentabilidad, ahorro y seguridad, pensados para cada etapa de tu vida.",
        },
        {
            icon: HeartHandshake,
            title: "Coberturas Generales",
            description:
                "Ofrecemos seguros para autos, flotas, comercios, responsabilidad profesional, hogar y más. Un servicio integral para cada necesidad.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-white rounded-4xl shadow my-10">
            <div className="max-w-6xl mx-auto px-6 text-center ">
                {/* Título */}
                <h2
                    className="text-4xl font-bold text-primary mb-4"
                >
                    Qué ofrecemos
                </h2>

                {/* Subtítulo */}
                <p
                    className="text-lg max-w-2xl mx-auto mb-12"

                >
                    Más que pólizas, ofrecemos tranquilidad. Diseñamos soluciones de
                    protección, ahorro y capitalización adaptadas a cada persona,
                    familia o empresa.
                </p>

                {/* Cards */}
                <div className="relative grid md:grid-cols-3 gap-10 ">
                    {servicios.map((item, index) => (

                        <motion.div
                            key={index}
                            className="group text-accent group-hover:text-white  relative bg-white overflow-hidden rounded-2xl shadow-lg p-8 flex flex-col items-start text-start hover:shadow-xl transition-opacity"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.4 }}
                        >

                            <div className="z-0 absolute inset-0 opacity-0 bg-[url('./src/assets/img/card.png')] bg-cover bg-center group-hover:opacity-100 transition-opacity duration-600">

                            </div>
                            <div className="relative z-10 text-primary group-hover:text-white transition-colors ">
                                <div className="mb-4 z-10">
                                    <item.icon className="w-15 h-15 text-accent group-hover:text-white transition-colors" />
                                </div>

                                <h3 className=" z-10 text-xl font-semibold  mb-3">
                                    {item.title}
                                </h3>
                                <p className="z-10 text-md">{item.description}</p>

                            </div>

                        </motion.div>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;
