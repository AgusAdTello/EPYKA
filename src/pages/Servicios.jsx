import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Droplet, Wind, Activity, Hand, Footprints, MessageCircle, ChevronDown } from 'lucide-react';

// Componente para la Sub-Tarjeta Desplegable (Acordeón)
const SubTarjeta = ({ sub }) => {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl mb-3 overflow-hidden bg-gray-50/50 hover:border-rosa-bebe transition-colors">
      <button 
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
      >
        <span className="font-bold text-oscuro-suave text-sm">{sub.nombre}</span>
        <motion.div animate={{ rotate: abierto ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-4 h-4 text-dorado" />
        </motion.div>
      </button>

      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-4 pt-1 text-sm text-gray-500">
              <p className="mb-3 leading-relaxed">{sub.descripcion}</p>
              
              {sub.aparatologia && sub.aparatologia.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200/60">
                  {sub.aparatologia.map((maquina, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white border border-gray-200 text-dorado px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm"
                    >
                      {maquina}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Servicios() {
  const numeroWhatsApp = "541164536335";

  const generarLinkWpp = (servicio) => {
    const mensaje = `Hola! Me gustaría consultar por el tratamiento de: ${servicio}`;
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  };

  // NUEVA BASE DE DATOS ESTRUCTURADA CON SUB-TRATAMIENTOS
  const categorias = [
    {
      id: "facial",
      titulo: "Estética Facial",
      icono: <Sparkles className="w-5 h-5 text-dorado" />,
      imagen: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      descripcion: "Tratamientos personalizados según la necesidad de tu piel.",
      subTratamientos: [
        { nombre: "Limpieza Simple", descripcion: "Ideal para mantenimiento. Remueve impurezas superficiales y devuelve el brillo natural al rostro.", aparatologia: [] },
        { nombre: "Limpieza Profunda", descripcion: "Limpieza exhaustiva que incluye exfoliación y mascarillas adaptadas a tu biotipo cutáneo.", aparatologia: [] },
        { nombre: "Limpieza con Extracción", descripcion: "Proceso minucioso para remover comedones (puntos negros) y descongestionar los poros bloqueados.", aparatologia: [] },
        { nombre: "Peeling", descripcion: "Renovación celular para mejorar la textura de la piel, atenuar marcas y unificar el tono.", aparatologia: [] },
        { nombre: "Tratamiento Anti-age", descripcion: "Aporta hidratación profunda, estimula el colágeno y atenúa líneas de expresión.", aparatologia: [] },
        { nombre: "Control de Rosácea", descripcion: "Protocolo calmante y descongestivo para pieles sensibles y reactivas.", aparatologia: [] },
        { nombre: "Control de Acné", descripcion: "Tratamiento seborregulador para desinflamar y purificar pieles con tendencia acneica.", aparatologia: [] }
      ]
    },
    {
      id: "espalda",
      titulo: "Cuidado de Espalda",
      icono: <Wind className="w-5 h-5 text-dorado" />,
      imagen: "https://images.unsplash.com/photo-1614859324967-bdf47dcbcbf7?auto=format&fit=crop&w=800&q=80",
      descripcion: "Higiene y tratamientos específicos para una de las zonas más descuidadas.",
      subTratamientos: [
        { nombre: "Tratamiento de Acné", descripcion: "Protocolo desinfectante y seborregulador para brotes en la espalda.", aparatologia: ["Alta Frecuencia", "Electroporador"] },
        { nombre: "Tratamiento de Manchas", descripcion: "Aclarado y unificación del tono en zonas hiperpigmentadas.", aparatologia: ["Alta Frecuencia", "Electroporador", "Punta de Diamante"] },
        { nombre: "Pulido de Espalda", descripcion: "Exfoliación profunda para remover células muertas y dejar la piel súper suave.", aparatologia: ["Alta Frecuencia", "Punta de Diamante"] }
      ]
    },
    {
      id: "piernas",
      titulo: "Tratamiento de Piernas",
      icono: <Activity className="w-5 h-5 text-dorado" />,
      imagen: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      descripcion: "Salud y estética para tus piernas.",
      subTratamientos: [
        { nombre: "Piernas Cansadas", descripcion: "Masajes y estímulos para mejorar la circulación, el retorno venoso y aliviar la pesadez.", aparatologia: ["Electro Frecuencia", "Electroporador"] },
        { nombre: "Control de Celulitis", descripcion: "Técnicas orientadas a alisar la piel de naranja y mejorar la oxigenación del tejido.", aparatologia: ["Punta de Diamante", "Electroporador", "Electro Frecuencia"] },
        { nombre: "Tonificación", descripcion: "Reafirmación muscular y de la piel para combatir la flacidez.", aparatologia: ["Electro Frecuencia"] }
      ]
    },
    {
      id: "capilar",
      titulo: "Tratamiento Capilar",
      icono: <Droplet className="w-5 h-5 text-dorado" />,
      imagen: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      descripcion: "Atención Unisex.",
      subTratamientos: [
        { nombre: "Fortalecimiento y Recuperación", descripcion: "Estimulación del cuero cabelludo para frenar la caída y nutrir el folículo. Incluye masajes capilares relajantes.", aparatologia: ["Alta Frecuencia", "Ampolla con Electroporador"] }
      ]
    },
    {
      id: "maderoterapia",
      titulo: "Maderoterapia",
      icono: <Hand className="w-5 h-5 text-dorado" />,
      imagen: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      descripcion: "Sesiones de 40 a 60 minutos. Se eligen 2 zonas por sesión.",
      subTratamientos: [
        { nombre: "Zonas a elección", descripcion: "Podés elegir combinar: Brazos, Abdomen, Espalda, Glúteos, Pierna entera, Pantalón de montar o Aductores.", aparatologia: ["Maderas Anatómicas"] }
      ]
    },
    {
      id: "pies",
      titulo: "Belleza de Pies",
      icono: <Footprints className="w-5 h-5 text-dorado" />,
      imagen: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
      descripcion: "El descanso que tus pies merecen.",
      subTratamientos: [
        { nombre: "Tratamiento estético y de relajación", descripcion: "Cuidado integral de uñas y cutículas, exfoliación, hidratación profunda y masajes relajantes.", aparatologia: [] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-oscuro-suave mb-4"
        >
          Nuestros <span className="text-dorado italic">Tratamientos</span>
        </motion.h1>
        <p className="text-gray-500 font-sans max-w-2xl mx-auto">
          Cuidado integral y personalizado. Utilizamos aparatología de vanguardia para garantizar resultados visibles.
        </p>
      </div>

      {/* Cambiamos a 2 columnas para dar espacio a los menús desplegables */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categorias.map((cat, index) => (
          <motion.div 
            key={cat.id}
            layout // Importante para que las tarjetas de abajo se acomoden suavemente cuando abrimos un acordeón
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-full"
          >
            <div className="relative h-56 overflow-hidden bg-gray-100 shrink-0">
              <img 
                src={cat.imagen} 
                alt={cat.titulo}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  {cat.icono}
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-white font-bold drop-shadow-md leading-tight">
                    {cat.titulo}
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-6 italic">
                {cat.descripcion}
              </p>

              {/* LISTA DE SUB-TARJETAS (ACORDEONES) */}
              <div className="mb-8 flex-grow">
                {cat.subTratamientos.map((sub, idx) => (
                  <SubTarjeta key={idx} sub={sub} />
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-50">
                <button 
                  onClick={() => window.open(generarLinkWpp(cat.titulo), '_blank')}
                  className="w-full flex items-center justify-center gap-2 bg-rosa-pastel text-oscuro-suave py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-dorado hover:text-white transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar Turno por WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}