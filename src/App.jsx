import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Páginas
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      {/* Acá está el "rosa clarito" para el fondo de toda la web: bg-[#FFFFFF] */}
      <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
        <Navbar /> 

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;