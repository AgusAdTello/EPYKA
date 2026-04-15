import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';

import productosLaca from '../data/productos.json';

const subcategoriasLaca = [
  { id: 'todas', label: "Todas las categorías", keywords: [] },
  { id: 'limpieza', label: "Limpieza / Pulidos", keywords: ["limpi", "demaquillante", "desmaquillante", "pulido", "exfoli", "micelar", "espuma", "gel de limpieza"] },
  { id: 'lociones', label: "Lociones", keywords: ["locion", "loción", "bruma", "neblina", "tónico", "tonico"] },
  { id: 'antiage', label: "Antiage", keywords: ["antiage", "arrugas", "hialur", "retinol", "colageno", "colágeno", "filler", "tensor", "firmeza", "edad"] },
  { id: 'hidratacion', label: "Hidratación", keywords: ["hidrata", "humecta", "aqua", "agua", "emulsión hidra"] },
  { id: 'manchas', label: "Anti-Manchas", keywords: ["mancha", "blanquea", "iluminador", "vitamina c", "radiant", "peeling"] },
  { id: 'acne', label: "Tratamiento Acné", keywords: ["acne", "acné", "secativo", "sebo", "grasa", "purific"] },
  { id: 'maquillaje', label: "Maquillajes", keywords: ["color", "base", "labial", "pestaña", "ceja", "makeup", "corrector", "delineador"] },
  { id: 'solar', label: "Protección Solar", keywords: ["solar", "pantalla", "fps", "uv", "bronceador"] },
  { id: 'corporal', label: "Cuidados Corporales", keywords: ["corporal", "cuerpo", "celulitis", "estrías", "reductor", "reafirmante"] },
  { id: 'manos_pies', label: "Manos y pies", keywords: ["mano", "pie", "uña"] },
  { id: 'mascaras', label: "Máscaras", keywords: ["mascara", "máscara", "mask"] },
  { id: 'capilar', label: "Cuidados Capilares", keywords: ["shampoo", "acondicionador", "pelo", "capilar", "cabello"] },
  { id: 'hombres', label: "Masculinos", keywords: ["hom", "men", "barba", "after shave"] }
];

export default function Catalogo() {
  // 1. Ahora arranca directamente en 'laca'
  const [filtro, setFiltro] = useState('laca'); 
  const [subCategoriaLaca, setSubCategoriaLaca] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  const whatsappNumber = "541164536335";

  const productosArtesanales = [
    {
      id: "artesanal-1",
      nombre: "Aceite de Cannabis Premium",
      marca: "Artesanal",
      categoria: "artesanal",
      descripcion: "Propiedades analgésicas y relajantes naturales.",
      imagen: "https://via.placeholder.com/300x300?text=Aceite+Cannabis"
    },
    {
      id: "artesanal-2",
      nombre: "Agua de Romero",
      marca: "Artesanal",
      categoria: "artesanal",
      descripcion: "Tónico capilar y facial revitalizante.",
      imagen: "https://via.placeholder.com/300x300?text=Agua+Romero"
    }
  ];

  const productos = [...productosLaca, ...productosArtesanales];

  const productosFiltrados = useMemo(() => {
    return productos.filter(p => {
      // 2. Como ya no existe "todos", el filtro global es directo
      const coincideFiltro = p.categoria === filtro;
      
      const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
      
      let coincideSub = true;
      if (filtro === 'laca' && subCategoriaLaca !== 'todas') {
        const catActiva = subcategoriasLaca.find(c => c.id === subCategoriaLaca);
        if (catActiva && catActiva.keywords.length > 0) {
          coincideSub = catActiva.keywords.some(kw => 
            p.nombre.toLowerCase().includes(kw.toLowerCase())
          );
        }
      }

      return coincideFiltro && coincideBusqueda && coincideSub;
    });
  }, [filtro, busqueda, subCategoriaLaca, productos]);

  const enviarConsulta = (producto) => {
    const msj = `Hola! Me interesa el producto: ${producto.nombre} (${producto.marca}). ¿Tenés stock disponible?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msj)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-oscuro-suave mb-4">
            Nuestro <span className="text-dorado italic">Catálogo</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Seleccionamos los mejores productos de Laboratorio LACA y nuestras propias elaboraciones naturales.
          </p>
        </header>

        <div className="flex flex-col gap-6 mb-12 bg-rosa-pastel/20 p-6 rounded-3xl">
          
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* 3. Botones Principales 50/50 (Quitamos "Todos") */}
            <div className="flex w-full md:w-auto bg-white p-1 rounded-full shadow-sm border border-rosa-bebe">
              {['laca', 'artesanal'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFiltro(cat);
                    setSubCategoriaLaca('todas');
                  }}
                  className={`flex-1 md:flex-none px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    filtro === cat ? 'bg-dorado text-white shadow-md' : 'text-gray-400 hover:text-dorado'
                  }`}
                >
                  {cat === 'laca' ? 'Productos LACA' : 'Artesanales'}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Buscar producto específico..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-none shadow-inner bg-white focus:outline-none focus:ring-2 focus:ring-dorado transition-all text-sm"
              />
            </div>
          </div>

          {/* 4. Subcategorías con 'flex-wrap' para que bajen solos de línea */}
          <AnimatePresence>
            {filtro === 'laca' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 pb-2 pt-2"
              >
                {subcategoriasLaca.map((subcat) => (
                  <button
                    key={subcat.id}
                    onClick={() => setSubCategoriaLaca(subcat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                      subCategoriaLaca === subcat.id
                      ? 'bg-oscuro-suave text-white border-oscuro-suave shadow-md'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-dorado hover:text-dorado shadow-sm'
                    }`}
                  >
                    {subcat.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        <div className="mb-6 flex justify-between items-center text-sm text-gray-500">
          <p>Mostrando <strong>{productosFiltrados.length}</strong> productos</p>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {productosFiltrados.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
                  <img 
                    src={prod.imagen} 
                    alt={prod.nombre}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      prod.categoria === 'laca' ? 'bg-gray-900 text-white' : 'bg-rosa-bebe text-white'
                    }`}>
                      {prod.marca}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-sans font-bold text-sm text-oscuro-suave mb-3 leading-tight line-clamp-2">{prod.nombre}</h3>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <button 
                      onClick={() => enviarConsulta(prod)}
                      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-oscuro-suave py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-dorado hover:text-white hover:border-dorado transition-all"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Consultar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {productosFiltrados.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <p className="text-gray-400 italic font-serif text-lg">No encontramos productos en esta categoría.</p>
          </div>
        )}

      </div>
    </div>
  );
}