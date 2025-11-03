import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-white text-gray-800 flex flex-col md:flex-row items-center gap-10 px-6 md:px-20"
        >
            {/* Texto */}
            <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Nosotras
                </h2>

                <p className="leading-relaxed text-lg text-gray-700">
                    Somos un estudio jurídico en constante crecimiento, fundado con una
                    misión clara: ejercer la profesión adaptándonos a las nuevas
                    realidades, con compromiso en la formación continua para brindar un
                    servicio de excelencia a quienes nos eligen.
                </p>

                <p className="leading-relaxed text-lg text-gray-700">
                    Este compromiso nos llevó a especializarnos en el ámbito asegurador,
                    en idiomas y en transformación digital. Aplicamos todos los
                    conocimientos adquiridos en nuestras áreas de práctica:{" "}
                    <span className="font-semibold">
                        Derecho de Daños, Derecho del Consumo y Derecho Laboral.
                    </span>
                </p>

                <p className="leading-relaxed text-lg text-gray-700">
                    Nuestro enfoque principal en cada caso es el análisis riguroso y el
                    criterio legal, pero a su vez brindamos una mirada cercana a cada
                    situación. Creemos en una abogacía que equilibra técnica, estrategia
                    y humanidad, construyendo así relaciones de confianza y acompañando a
                    nuestros clientes con empatía, escucha activa y profesionalismo.
                </p>
            </motion.div>

            {/* Imagen */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img
                    src="/team-meeting.jpg"
                    alt="Equipo de abogadas AR Legal Group"
                    className="w-80 md:w-[450px] rounded-2xl shadow-lg object-cover"
                />
            </motion.div>
        </section>
    );
};

export default About;
