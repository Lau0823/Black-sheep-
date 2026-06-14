"use client"

import React, { useState } from "react"
import Navbar from "@/components/NavBar/NavBar" // Ajusta la ruta de importación según tu proyecto

type CamisetaProd = {
  id: string
  name: string
  price: string
  img: string
  colors: string[]       // Ej: ["#000000", "#ffffff", "#550527"]
  prints: string[]       // Ej: ["Classic Logo", "Cyber Sheep", "Minimal Back"]
  sizes: string[]        // Ej: ["S", "M", "L", "XL"]
}

const camisetasData: CamisetaProd[] = [
  { 
    id: "c1", 
    name: "Camiseta Heavy Oversize", 
    price: "$89.900", 
    img: "https://i.pinimg.com/1200x/f3/59/a0/f359a020190e3c3d9f6916477249b46b.jpg",
    colors: ["#000000", "#ffffff", "#550527"],
    prints: ["Classic Logo", "Cyber Sheep"],
    sizes: ["S", "M", "L", "XL"]
  },
  { 
    id: "c2", 
    name: "Camiseta Acid Wash Graphic", 
    price: "$95.000", 
    img: "https://i.pinimg.com/736x/e2/ac/d0/e2acd010d3dfa0330bf7ab755c3cdca9.jpg",
    colors: ["#1f2937", "#4b5563"],
    prints: ["Midnight Drop", "Minimal Back"],
    sizes: ["M", "L", "XL"]
  },
  { 
    id: "c3", 
    name: "Camiseta Boxy Streetwear", 
    price: "$89.900", 
    img: "https://i.pinimg.com/736x/69/4e/51/694e516fd8bd0ab07ba9b3fe5396a03f.jpg",
    colors: ["#000000", "#ffffff"],
    prints: ["Cyber Sheep", "No Noise"],
    sizes: ["S", "M", "L"]
  },
  { 
    id: "c4", 
    name: "Camiseta Raw Edge Vintage", 
    price: "$92.000", 
    img: "https://i.pinimg.com/736x/d7/53/a8/d753a8b9247a251975b536dc7f262c47.jpg",
    colors: ["#550527", "#000000"],
    prints: ["Classic Logo"],
    sizes: ["S", "M", "L", "XL"]
  }
]

export default function CamisetasPage() {
  // Estados para manejar las selecciones independientes de cada tarjeta de producto
  const [selections, setSelections] = useState<Record<string, { color: string; print: string; size: string }>>({
    c1: { color: "#000000", print: "Classic Logo", size: "M" },
    c2: { color: "#1f2937", print: "Midnight Drop", size: "L" },
    c3: { color: "#000000", print: "Cyber Sheep", size: "M" },
    c4: { color: "#550527", print: "Classic Logo", size: "L" },
  })

  const handleSelect = (prodId: string, type: "color" | "print" | "size", value: string) => {
    setSelections(prev => ({
      ...prev,
      [prodId]: {
        ...prev[prodId],
        [type]: value
      }
    }))
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans antialiased pt-24 selection:bg-[#ff990a] selection:text-white">
      {/* Navbar Inyectada */}
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header de Categoría */}
        <div className="border-b border-zinc-100 pb-6 mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "#ff990a" }}>Colecciones</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 mt-1">CAMISETAS</h1>
        </div>

        {/* Catálogo de Camisetas */}
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
          {camisetasData.map((p) => {
            const current = selections[p.id] || { color: p.colors[0], print: p.prints[0], size: p.sizes[0] }

            return (
              <div key={p.id} className="group grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4 rounded-[32px] border border-zinc-100 bg-white transition-all hover:border-zinc-200">
                {/* Imagen del Producto */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-zinc-50">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-102" 
                  />
                </div>

                {/* Configurador de Variantes */}
                <div className="flex flex-col h-full justify-between py-2">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900">
                      {p.name}
                    </h3>
                    <p className="text-base font-black mt-1 text-zinc-500">{p.price}</p>
                    
                    <hr className="my-4 border-zinc-100" />

                    {/* 1. Selección de Color */}
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block mb-2">Color</span>
                      <div className="flex gap-2">
                        {p.colors.map((c) => (
                          <button
                            key={c}
                            onClick={() => handleSelect(p.id, "color", c)}
                            className="h-6 w-6 rounded-full border transition-transform"
                            style={{ 
                              backgroundColor: c,
                              borderColor: current.color === c ? '#ff990a' : 'rgba(0,0,0,0.1)',
                              transform: current.color === c ? 'scale(1.15)' : 'scale(1)'
                            }}
                            title={c}
                          />
                        ))}
                      </div>
                    </div>

                    {/* 2. Selección de Estampado */}
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block mb-2">Estampado</span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.prints.map((pr) => (
                          <button
                            key={pr}
                            onClick={() => handleSelect(p.id, "print", pr)}
                            className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full border transition-all"
                            style={{
                              backgroundColor: current.print === pr ? "#550527" : "#ffffff",
                              color: current.print === pr ? "#ffffff" : "#52525b",
                              borderColor: current.print === pr ? "#550527" : "#e4e4e7"
                            }}
                          >
                            {pr}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 3. Selección de Talla */}
                    <div className="mb-6">
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block mb-2">Talla</span>
                      <div className="flex gap-1.5">
                        {p.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSelect(p.id, "size", s)}
                            className="h-8 w-8 text-xs font-bold rounded-full border flex items-center justify-center transition-all"
                            style={{
                              backgroundColor: current.size === s ? "#ff990a" : "#ffffff",
                              color: current.size === s ? "#ffffff" : "#000000",
                              borderColor: current.size === s ? "#ff990a" : "#e4e4e7"
                            }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Botón de Acción */}
                  <button 
                    className="w-full h-11 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-transform duration-300 active:scale-95 shadow-md"
                    style={{ backgroundColor: "#550527" }}
                    onClick={() => alert(`Añadido: ${p.name} \nColor: ${current.color} \nEstampado: ${current.print} \nTalla: ${current.size}`)}
                  >
                    Añadir al carro
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}