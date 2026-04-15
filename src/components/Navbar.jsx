import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  // Recuperamos exactamente TU lógica: Texto oscuro, y Dorado cuando está activo o le pasás el mouse
  const linkStyle = ({ isActive }) => 
    `transition-colors duration-300 uppercase tracking-widest text-sm font-semibold ${
      isActive ? 'text-dorado' : 'text-oscuro-suave hover:text-dorado'
    }`;

  return (
    // bg-[#F8F5F0] es el color exacto del fondo de tu imagen. Reduje el padding para que no sea tan "ancha/alta"
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-12 bg-[#FEEDE6] shadow-sm sticky top-0 z-50">
      
      <div className="mb-4 md:mb-0">
        <NavLink to="/">
          <img 
            src={logoImg} 
            alt="EPYKA" 
            // h-12 mantiene la navbar finita y elegante. 
            // mix-blend-multiply es CLAVE: hace que el fondo del JPG se vuelva transparente
            className="h-12 md:h-14 w-auto object-contain mix-blend-multiply" 
          />
        </NavLink>
      </div>
      
      <div className="flex gap-6 md:gap-10">
        <NavLink to="/" className={linkStyle}>Inicio</NavLink>
        <NavLink to="/servicios" className={linkStyle}>Servicios</NavLink>
        <NavLink to="/catalogo" className={linkStyle}>Catálogo</NavLink>
        <NavLink to="/contacto" className={linkStyle}>Contacto</NavLink>
      </div>
    </nav>
  );
}