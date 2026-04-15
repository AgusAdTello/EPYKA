import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-rosa-pastel to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-dorado uppercase tracking-[0.3em] text-sm mb-4 font-sans font-semibold">
            Bienvenido a tu bienestar
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-oscuro-suave mb-6 leading-tight">
            Realzá tu belleza <br /> 
            <span className="italic">natural</span>
          </h1>
          <p className="text-gray-600 text-lg mb-10 font-sans max-w-xl mx-auto">
            Tratamientos personalizados con tecnología de vanguardia y productos de alta calidad para el cuidado de tu piel y cuerpo.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/servicios" 
              className="bg-dorado text-white px-8 py-4 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-black transition-all duration-300 shadow-lg"
            >
              Explorar Servicios
            </Link>
            <Link 
              to="/contacto" 
              className="border-2 border-dorado text-dorado px-8 py-4 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-dorado hover:text-white transition-all duration-300"
            >
              Reservar Turno
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Una pequeña sección de introducción debajo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-rosa-pastel rounded-2xl overflow-hidden shadow-2xl">
            {/* Aquí luego pondrás una foto de tu mamá trabajando o del centro */}
            <div className="w-full h-full flex items-center justify-center text-dorado opacity-50 italic">
              [ Espacio para Imagen Profesional ]
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-serif mb-6">Tratamientos con propósito</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              En nuestro centro, cada atención es única. Utilizamos aparatología de última generación como punta de diamante y electroporador para garantizar resultados visibles desde la primera sesión.
            </p>
            <ul className="space-y-3 text-sm uppercase tracking-wider text-gray-500">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dorado rounded-full"></span> 
                Atención Unisex
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dorado rounded-full"></span> 
                Productos Laboratorio LACA
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-dorado rounded-full"></span> 
                Asesoramiento Personalizado
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}