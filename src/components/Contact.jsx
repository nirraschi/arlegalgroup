import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
//Agregar foto detras y layer con opacidad arriba
const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-primary  px-6 md:px-20 rounded-4xl shadow mb-10"
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Contacto
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-between text-white">
                {/* Datos de contacto */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg leading-relaxed">
                        ¿Tenés una consulta o necesitas una cotización? No dudes en
                        contactarnos. ¡Te responderemos muy pronto!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-accent" />
                            <span>organizacionar@hotmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6 text-accent" />
                            <span>+54 381 597 9426</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-accent" />
                            <span>Tucumán, Argentina</span>
                        </div>
                    </div>
                </motion.div>

                {/* Formulario */}
                <motion.form
                    className="flex-1 bg-gray-50 p-8 rounded-2xl shadow space-y-4 "
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Nombre"
                        className=" w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
                    />
                    <textarea
                        placeholder="Mensaje"
                        rows="4"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
                    ></textarea>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition"
                    >
                        Enviar mensaje
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
