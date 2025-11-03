import { motion } from "framer-motion";
import { Briefcase, Scale, Shield } from "lucide-react";

const areas = [
    {
        icon: <Scale className="w-10 h-10 text-primary" />,
        title: "Derecho Civil y Comercial",
        description:
            "Brindamos soluciones efectivas en conflictos patrimoniales, contractuales y de responsabilidad civil, con enfoque práctico y resolutivo.",
    },
    {
        icon: <Shield className="w-10 h-10 text-primary" />,
        title: "Seguros y Derecho de Daños",
        description:
            "Amplia experiencia en litigios y asesoramiento en materia de seguros, daños y reclamos derivados de siniestros.",
    },
    {
        icon: <Briefcase className="w-10 h-10 text-primary" />,
        title: "Derecho del Consumo y Laboral",
        description:
            "Defensa de los derechos del consumidor y acompañamiento integral en conflictos laborales, priorizando el diálogo y la resolución.",
    },
];

const Areas = () => {
    return (
        <section
            id="services"
            className="py-20 bg-gray-50 text-gray-800 px-6 md:px-20"
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Áreas de Práctica
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-between gap-10">
                {areas.map((area, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 text-center md:text-left bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div>{area.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Areas;
