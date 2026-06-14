"use client"

import React, { useState } from "react"
import Navbar from "@/components/NavBar/NavBar"

type HoodieProd = {
  id: string
  name: string
  price: string
  img: string
  colors: string[]
  prints: string[]
  sizes: string[]
}

const hoodiesData: HoodieProd[] = [
  { 
    id: "h1", 
    name: "Hoodie Heavy Streetwear", 
    price: "$215.000", 
    img: "https://i.pinimg.com/736x/e1/3b/72/e13b724ed479b089b4a389c0dee3e9bc.jpg",
    colors: ["#000000", "#ffffff", "#550527"],
    prints: ["Cyber Sheep Back", "Classic Center"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  { 
    id: "h2", 
    name: "Hoodie Acid Wash Distressed", 
    price: "$230.000", 
    img: "https://i.pinimg.com/1200x/8e/99/97/8e9997e55c70fb2ad39ec97ececaef95.jpg",
    colors: ["#3f3f46", "#18181b"],
    prints: ["No Noise Sleeve", "Minimal Front"],
    sizes: ["S", "M", "L", "XL"]
  },
  { 
    id: "h3", 
    name: "Hoodie Boxy Fleece", 
    price: "$215.000", 
    img: "https://i.pinimg.com/1200x/43/5a/6c/435a6c60e8cc01c85b78652e64df755a.jpg",
    colors: ["#e4e4e7", "#000000"],
    prints: ["Midnight Drop"],
    sizes: ["M", "L", "XL"]
  },
  { 
    id: "h4", 
    name: "Hoodie Midnight Ochre", 
    price: "$225.000", 
    img: "https://i.pinimg.com/736x/ad/cf/18/adcf18456d4eefea44107c630baed62d.jpg",
    colors: ["#550527", "#ff990a", "#000000"],
    prints: ["Classic Center", "Cyber Sheep Back"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
]

export default function HoodiesPage() {
  const [selections, setSelections] = useState<Record<string, { color: string; print: string; size: string }>>({
    h1: { color: "#000000", print: "Cyber Sheep Back", size: "L" },
    h2: { color: "#3f3f46", print: "Minimal Front", size: "XL" },
    h3: { color: "#e4e4e7", print: "Midnight Drop", size: "M" },
    h4: { color: "#550527", print: "Classic Center", size: "L" },
  })

  const handleSelect = (prodId: string, type: "color" | "print" | "size", value: string) => {
    setSelections(prev => ({
      ...prev,
      [prodId]: { ...prev[prodId], [type]: value }
    }))
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans antialiased pt-24 selection:bg-[#ff990a] selection:text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="border-b border-zinc-100 pb-6 mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "#ff990a" }}>Colecciones</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 mt-1">HOODIES</h1>
        </div>

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
          {hoodiesData.map((p) => {
            const current = selections[p.id] || { color: p.colors[0], print: p.prints[0], size: p.sizes[0] }

            return (
              <div key={p.id} className="group grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4 rounded-[32px] border border-zinc-100 bg-white transition-all hover:border-zinc-200">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] bg-zinc-50">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-102" />
                </div>

                <div className="flex flex-col h-full justify-between py-2">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900">{p.name}</h3>
                    <p className="text-base font-black mt-1 text-zinc-500">{p.price}</p>
                    <hr className="my-4 border-zinc-100" />

                    {/* Color */}
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
                          />
                        ))}
                      </div>
                    </div>

                    {/* Estampado */}
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

                    {/* Talla */}
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

                  <button 
                    className="w-full h-11 rounded-full text-xs font-bold uppercase tracking-widest text-white transition-transform duration-300 active:scale-95 shadow-md"
                    style={{ backgroundColor: "#550527" }}
                    onClick={() => alert(`Hoodie añadido: ${p.name}\nColor: ${current.color}\nEstampado: ${current.print}\nTalla: ${current.size}`)}
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