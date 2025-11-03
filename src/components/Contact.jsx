import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-white text-gray-800 px-6 md:px-20"
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Contacto
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-between">
                {/* Datos de contacto */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg leading-relaxed">
                        ¿Tenés una consulta o querés coordinar una reunión?
                        Escribinos y te responderemos a la brevedad.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-6 h-6 text-primary" />
                            <span>contacto@arlegalgroup.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6 text-primary" />
                            <span>+54 381 123 4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-primary" />
                            <span>San Miguel de Tucumán, Argentina</span>
                        </div>
                    </div>
                </motion.div>

                {/* Formulario */}
                <motion.form
                    className="flex-1 bg-gray-50 p-8 rounded-2xl shadow space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                        placeholder="Mensaje"
                        rows="4"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
