import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-6 md:px-20 mt-10">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} AR Legal Group. Todos los derechos reservados.
        </p>

        <div className="text-sm text-center md:text-right space-x-4">
          <a href="#hero" className="hover:underline">
            Inicio
          </a>
          <a href="#about" className="hover:underline">
            Nosotras
          </a>
          <a href="#services" className="hover:underline">
            Áreas
          </a>
          <a href="#contact" className="hover:underline">
            Contacto
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
