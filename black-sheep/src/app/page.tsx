"use client"

import React from "react"
import Link from "next/link"

type Prod = { id: string; name: string; price: string; img: string; tag?: string }

const featured: Prod[] = [
  { id: "1", name: "Camiseta Oversize", price: "$89.900", tag: "Nuevo", img: "https://i.pinimg.com/1200x/f3/59/a0/f359a020190e3c3d9f6916477249b46b.jpg" },
  { id: "2", name: "Hoodie Street", price: "$215.000", tag: "Top", img: "https://i.pinimg.com/736x/e1/3b/72/e13b724ed479b089b4a389c0dee3e9bc.jpg" },
  { id: "3", name: "Gorra Classic", price: "$55.000", img: "https://i.pinimg.com/736x/73/58/06/735806f71ff17f99e0ed2e5f4edaf716.jpg" },
  { id: "4", name: "Buzo Básico", price: "$129.900", tag: "Drop", img: "https://i.pinimg.com/1200x/ef/2b/8b/ef2b8b59d97b3864ab5f993a56027a59.jpg" },
]

/** HERO BANNER COMPLETAMENTE FULL SCREEN & ULTRA MINIMAL */
function FullScreenHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <img
        src="https://i.pinimg.com/736x/e6/3a/44/e63a44f68e5508b5e5da782ddcd86bbe.jpg"
        alt="Black Sheep"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Difuminado sutil para fundirse a blanco abajo */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-16 z-10">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-black uppercase tracking-widest text-zinc-900">
            BLACK <span style={{ color: "#ff990a" }}>SHEEP</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">
            [ DROP 2026 ]
          </span>
        </div>

        {/* Core Title (Casi sin texto abajo) */}
        <div className="max-w-4xl">
          <h1 className="text-7xl sm:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-zinc-900">
            MENOS RUIDO.<br />
            <span style={{ color: "#ff990a" }}>MÁS PRESENCIA.</span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 shadow-md"
              style={{ backgroundColor: "#550527" }}
            >
              Explorar Drop ↓
            </a>
          </div>
        </div>

        {/* Tickers */}
        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-400 border-t border-zinc-100 pt-4">
          <span>Heavy Cotton</span>
          <span>Limited edition</span>
        </div>
      </div>
    </section>
  )
}

/** CATEGORÍAS EN PANELES FULL SCREEN EXPANSIVOS */
function FullScreenCategories() {
  const cats = [
    { name: "Camisetas", tag: "01", img: "https://i.pinimg.com/736x/69/4e/51/694e516fd8bd0ab07ba9b3fe5396a03f.jpg" },
    { name: "Hoodies", tag: "02", img: "https://i.pinimg.com/736x/ad/cf/18/adcf18456d4eefea44107c630baed62d.jpg" },
    { name: "Buzos", tag: "03", img: "https://i.pinimg.com/1200x/ef/2b/8b/ef2b8b59d97b3864ab5f993a56027a59.jpg" },
    { name: "Gorras", tag: "04", img: "https://i.pinimg.com/736x/73/58/06/735806f71ff17f99e0ed2e5f4edaf716.jpg" },
  ]

  return (
    <section className="w-full bg-white min-h-[85vh] flex flex-col justify-center py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[75vh] w-full border-y border-zinc-100">
        {cats.map((c) => (
          <Link 
            key={c.name} 
            href={`/${c.name.toLowerCase()}`} 
            className="group relative flex items-end overflow-hidden h-[45vh] md:h-full w-full border-b md:border-b-0 md:border-r border-zinc-100 last:border-0 transition-all duration-500 ease-in-out md:hover:flex-[1.4]"
          >
            <img 
              src={c.img} 
              alt={c.name} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Degradado minimalista blanco */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-95" />

            <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black block mb-1" style={{ color: "#ff990a" }}>{c.tag}</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-zinc-900 leading-none">
                  {c.name}
                </h3>
              </div>
              
              <div 
                className="h-10 w-10 inline-flex items-center justify-center rounded-full text-white text-xs font-bold transition-all duration-300 transform group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: "#550527" }}
              >
                →
              </div>
            </div>

            {/* Top Border Indicator */}
            <div 
              className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: "#ff990a" }} 
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

/** CATÁLOGO RESPONSIVE DE PRODUCTOS (GRID MODERNO) */
function FeaturedGrid() {
  return (
    <section id="catalogo" className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex items-baseline justify-between border-b border-zinc-100 pb-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">CATÁLOGO</h2>
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">[ CREW COLLECTION ]</span>
      </div>

      <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <Link key={p.id} href={`/producto/${p.id}`} className="group block">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-50 rounded-[24px] border border-zinc-100">
              {p.tag && (
                <span 
                  className="absolute left-4 top-4 z-10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full text-white"
                  style={{ backgroundColor: "#ff990a" }}
                >
                  {p.tag}
                </span>
              )}
              <img 
                src={p.img} 
                alt={p.name} 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-102" 
              />
            </div>

            <div className="mt-4 px-1 flex justify-between items-start">
              <div>
                <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 transition-colors group-hover:text-[#ff990a]">
                  {p.name}
                </h3>
                <span className="text-xs font-bold text-zinc-400 block mt-0.5">Comprar →</span>
              </div>
              <p className="text-sm font-black text-zinc-900">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/** NEWSLETTER ULTRA LIMPIO */
function Newsletter() {
  return (
    <section className="py-24 bg-white max-w-3xl mx-auto px-4 text-center">
      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">PRE-ACCESO DROPS</h3>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
        <input
          className="flex-grow rounded-full border border-zinc-200 bg-zinc-50 px-6 py-4 text-xs font-bold uppercase tracking-widest outline-none focus:border-zinc-400 text-zinc-800 placeholder:text-zinc-400"
          placeholder="TU EMAIL"
          inputMode="email"
        />
        <button 
          className="rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 shadow-md"
          style={{ backgroundColor: "#550527" }}
        >
          Unirme
        </button>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#ff990a] selection:text-white antialiased">
      {/* 1. Hero Cover */}
      <FullScreenHero />

      {/* 2. Categorías Full Screen fluidas */}
      <FullScreenCategories />

      {/* 3. Catálogo de productos */}
      <FeaturedGrid />

      {/* 4. Newsletter */}
      <Newsletter />
    </main>
  )
}