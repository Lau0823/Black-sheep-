/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Archivos en el directorio `app` (App Routing)
    "./components/**/*.{js,ts,jsx,tsx}", // Componentes reutilizables
    "./pages/**/*.{js,ts,jsx,tsx}", // Si usas Pages Routing, incluye esto
    "./src/**/*.{js,ts,jsx,tsx}", // Si tus archivos están en `src`, inclúyelo
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ['"Permanent Marker"', 'cursive'], // Nombre personalizado para la fuente
      },
    },
  },
  plugins: [],
};
