import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/NavBar/NavBar";




const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chill Pets",
  description: "E-commerce para tus mascotas 🐾",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
      
          <div className="flex flex-col min-h-screen pt-20 ">
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="flex-3">
              {/* Banner o secciones que deben ocupar toda la pantalla */}
              {children}
            </main>

            {/* Footer */}
          
          </div>
        
      </body>
    </html>
  );
}
