import { Link } from 'react-router-dom';
import { MapPin, Phone, Camera } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-rosa-pastel pt-16 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Columna 1: Marca */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-serif text-oscuro-suave mb-4 tracking-tighter">EPYKA</h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Realzando tu belleza natural con tratamientos personalizados y aparatología de última generación.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-dorado font-bold uppercase tracking-widest text-xs mb-6">Explorar</h3>
          <ul className="space-y-3 text-sm text-gray-500 font-medium">
            <li><Link to="/" className="hover:text-dorado transition-colors">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-dorado transition-colors">Tratamientos</Link></li>
            <li><Link to="/catalogo" className="hover:text-dorado transition-colors">Catálogo LACA</Link></li>
            <li><Link to="/contacto" className="hover:text-dorado transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-dorado font-bold uppercase tracking-widest text-xs mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-rosa-bebe" />
              Buenos Aires, Argentina
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-rosa-bebe" />
              +54 11 6453-6335
            </li>
            <li className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-rosa-bebe" />
              @epyka.estetica
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">
          &copy; {currentYear} Epyka Estética. Todos los derechos reservados.
        </p>
        <p className="text-xs text-gray-400">
          Desarrollado con ♥ por <a href="https://github.com/AgusAdTello" target="_blank" rel="noopener noreferrer" className="text-dorado hover:underline">Agustín</a>
        </p>
      </div>
    </footer>
  );
}