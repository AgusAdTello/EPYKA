/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Nuevos colores del logo y fondo ---
        'epyka-nav': '#F4EFEA',   // Color exacto del fondo de la imagen del logo
        'epyka-fondo': '#FCFAF8', // Un beige/rosa apenas más claro para el cuerpo de la web
        'epyka-verde': '#364635', // El verde oliva oscuro de las letras EPYKA

        // --- Tus colores originales (los mantenemos por si se usan en otros lados) ---
        'rosa-pastel': '#FCE4EC',
        'rosa-bebe': '#F8BBD0',
        'dorado': '#D4AF37',
        'dorado-claro': '#F3E5AB',
        'oscuro-suave': '#333333',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}