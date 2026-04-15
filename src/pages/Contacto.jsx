import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Camera } from 'lucide-react';

export default function Contacto() {
  const whatsappNumber = "541164536335";
  const instagramUser = "tu_instagram"; // Reemplazar con el usuario real de tu mamá

  const infoCards = [
    {
      id: 1,
      icono: <MapPin className="w-6 h-6 text-dorado" />,
      titulo: "Ubicación",
      detalle: "Buenos Aires, Argentina", // Aquí podés poner la dirección exacta
      subDetalle: "Consultar dirección exacta por WhatsApp"
    },
    {
      id: 2,
      icono: <Phone className="w-6 h-6 text-dorado" />,
      titulo: "Teléfono / WhatsApp",
      detalle: "+54 11 6453-6335",
      link: `https://wa.me/${whatsappNumber}`
    },
    {
      id: 3,
      icono: <Camera className="w-6 h-6 text-dorado" />, // Cambiamos Instagram por Camera
      titulo: "Instagram",
      detalle: `@${instagramUser}`,
      link: `https://instagram.com/${instagramUser}`
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-oscuro-suave mb-4"
          >
            Contacto y <span className="text-dorado italic">Ubicación</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Estamos para asesorarte. Reservá tu turno o consultanos cualquier duda sobre nuestros tratamientos.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Info y Horarios */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infoCards.map((card) => (
                <motion.a
                  key={card.id}
                  href={card.link || "#"}
                  target={card.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:border-rosa-bebe"
                >
                  <div className="p-3 bg-rosa-pastel rounded-full mb-4">
                    {card.icono}
                  </div>
                  <h3 className="font-serif text-lg text-oscuro-suave mb-1">{card.titulo}</h3>
                  <p className="text-sm text-gray-600 font-semibold">{card.detalle}</p>
                  {card.subDetalle && <p className="text-xs text-gray-400 mt-1">{card.subDetalle}</p>}
                </motion.a>
              ))}
            </div>

            {/* Tarjeta de Horarios */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-6 h-6 text-dorado" />
                <h2 className="text-2xl font-serif text-oscuro-suave">Horarios de Atención</h2>
              </div>
              <div className="space-y-3">
                {[
                  { dia: "Lunes a Viernes", hora: "09:00 - 19:00" },
                  { dia: "Sábados", hora: "10:00 - 14:00" },
                  { dia: "Domingos y Feriados", hora: "Cerrado" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-600">{item.dia}</span>
                    <span className="font-semibold text-oscuro-suave">{item.hora}</span>
                  </div>
                ))}
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hola!%20Quisiera%20consultar%20disponibilidad%20de%20turnos.`}
                className="mt-8 w-full flex items-center justify-center gap-3 bg-dorado text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Turno
              </a>
            </div>
          </div>

          {/* Columna Derecha: Mapa */}
          <div className="h-[500px] lg:h-auto min-h-[400px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-2">
            <iframe 
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713578103!2d-58.38415068477038!3d-34.60373888045946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11beebf1c3466629!2sObelisco!5e0!3m2!1ses!2sar!4v1682345678910!5m2!1ses!2sar" 
              className="w-full h-full rounded-2xl"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}