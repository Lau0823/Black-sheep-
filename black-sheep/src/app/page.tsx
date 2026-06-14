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

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function SectionHeader({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-zinc-100 pb-4 mb-8">
      <div>
        {kicker && (
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#ff990a" }}>
            {kicker}
          </p>
        )}
        <h2 className="mt-1 text-2xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900">{title}</h2>
      </div>
    </div>
  )
}

/** HERO FULL SCREEN BANNER CON FONDO LIMPIO */
function FullScreenHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Imagen de Fondo a todo color */}
      <img
        src="https://i.pinimg.com/736x/e6/3a/44/e63a44f68e5508b5e5da782ddcd86bbe.jpg"
        alt="Black Sheep Campaign"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Degradado blanco desde abajo para fundirse con la sección siguiente */}
      <div 
        className="absolute inset-0 bg-gradient-to-t via-transparent" 
        style={{ backgroundImage: 'linear-gradient(to top, #ffffff 5%, rgba(255,255,255,0.1) 50%, rgba(85, 5, 39, 0.15) 100%)' }} 
      />

      {/* Contenido sobre el Banner */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 md:p-20 z-10">
        {/* Navbar */}
        <div className="flex justify-between items-center w-full">
          <span className="text-xl font-black uppercase tracking-widest text-zinc-900">
            BLACK <span style={{ color: "#ff990a" }}>SHEEP</span>
          </span>
          <span 
            className="text-xs font-bold tracking-[0.2em] uppercase backdrop-blur px-4 py-1.5 rounded-full border hidden sm:inline"
            style={{ color: "#550527", borderColor: "rgba(85, 5, 39, 0.2)", backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          >
            Drop 2026 / Streetwear
          </span>
        </div>

        {/* Textos Principales */}
        <div className="max-w-4xl mt-auto">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-zinc-900">
            MENOS RUIDO.<br />
            <span style={{ color: "#ff990a" }}>MÁS PRESENCIA.</span>
          </h1>
          
          <p className="mt-6 max-w-md text-sm sm:text-base text-zinc-700 font-normal tracking-wide">
            Prendas premium, fit oversize y una estética limpia. Diseñado para quienes no necesitan explicar nada.
          </p>

          {/* Botones Redondos Interactivos */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#categorias"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 shadow-md hover:opacity-95"
              style={{ backgroundColor: "#550527" }}
            >
              Ver Categorías ↓
            </a>
            <a
              href="#catalogo"
              className="inline-flex h-14 items-center justify-center rounded-full border px-8 text-xs font-bold uppercase tracking-widest text-zinc-900 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-50"
              style={{ borderColor: "rgba(0,0,0,0.15)", backgroundColor: "rgba(255,255,255,0.5)" }}
            >
              Ver Catálogo
            </a>
          </div>
        </div>

        {/* Footer del Hero */}
        <div className="mt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 border-t border-zinc-200 pt-4">
          <span>Premium Cotton</span>
          <span style={{ color: "#550527" }}>★ Limited Drops ★</span>
          <span>Made to Last</span>
        </div>
      </div>
    </section>
  )
}

/** CATEGORÍAS FULL SCREEN EN ENTORNO CLARO */
function FullScreenCategories() {
  const cats = [
    { name: "Camisetas", tag: "Oversize Tees", img: "https://i.pinimg.com/736x/69/4e/51/694e516fd8bd0ab07ba9b3fe5396a03f.jpg", link: "/camisetas" },
    { name: "Hoodies", tag: "Heavy Street", img: "https://i.pinimg.com/736x/ad/cf/18/adcf18456d4eefea44107c630baed62d.jpg", link: "/hoodies" },
    { name: "Buzos", tag: "Essentials", img: "https://i.pinimg.com/1200x/ef/2b/8b/ef2b8b59d97b3864ab5f993a56027a59.jpg", link: "/buzos" },
    { name: "Gorras", tag: "Accessories", img: "https://i.pinimg.com/736x/73/58/06/735806f71ff17f99e0ed2e5f4edaf716.jpg", link: "/gorras" },
  ]

  return (
    <section id="categorias" className="w-full bg-white text-zinc-900 min-h-screen flex flex-col justify-center py-16">
      <Container>
        <SectionHeader kicker="Colecciones" title="Explora las Categorías" />
      </Container>

      {/* Bloque Full Screen expansivo para las categorías */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 h-auto md:h-[75vh] w-full border-y border-zinc-100">
        {cats.map((c) => (
          <Link 
            key={c.name} 
            href={c.link} 
            className="group relative flex items-end overflow-hidden h-[45vh] md:h-full w-full border-b md:border-b-0 md:border-r border-zinc-100 last:border-0 transition-all duration-500 ease-in-out md:hover:flex-[1.3]"
          >
            {/* Imagen a todo color */}
            <img 
              src={c.img} 
              alt={c.name} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Gradiente blanco y liso inferior para limpieza visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />

            {/* Textos y botones */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: "#ff990a" }}>
                  {c.tag}
                </p>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-zinc-900 leading-none">
                  {c.name}
                </h3>
              </div>
              
              {/* Botón Redondo que reacciona con tus colores */}
              <div 
                className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full text-white text-sm font-bold transition-all duration-300 group-hover:w-full group-hover:px-6 overflow-hidden shadow-sm"
                style={{ backgroundColor: "#550527" }}
              >
                <span className="group-hover:hidden">→</span>
                <span className="hidden group-hover:inline text-xs font-black uppercase tracking-widest" style={{ color: "#ffffff" }}>
                  Ver Catálogo Completo
                </span>
              </div>
            </div>

            {/* Línea decorativa superior en Naranja al hacer Hover */}
            <div 
              className="absolute top-0 left-0 w-full h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: "#ff990a" }} 
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

/** CATÁLOGO RESPONSIVE DE PRODUCTOS EN FONDO BLANCO */
function FeaturedGrid() {
  return (
    <section id="catalogo" className="py-20 scroll-mt-6 bg-white">
      <SectionHeader kicker="Shop" title="Destacados del Drop" />

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <Link key={p.id} href={`/producto/${p.id}`} className="group block">
            {/* Contenedor Imagen */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-50 rounded-[24px] border border-zinc-100">
              {p.tag && (
                <span 
                  className="absolute left-4 top-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white shadow-sm"
                  style={{ backgroundColor: "#ff990a" }}
                >
                  {p.tag}
                </span>
              )}
              <img 
                src={p.img} 
                alt={p.name} 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            {/* Detalles del Producto */}
            <div className="mt-4 px-2">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 group-hover:text-[#ff990a] transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-black text-zinc-900">{p.price}</p>
              </div>
              
              {/* Botón interactivo que cambia al Vinotinto en Hover */}
              <div 
                className="mt-3 w-full inline-flex h-11 items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border bg-white text-zinc-900 border-zinc-200 group-hover:text-white"
                style={{ /** Manejado dinámicamente mediante clases Tailwind en combinación con inline-styles en hover nativo */ }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#550527"
                  e.currentTarget.style.borderColor = "#550527"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff"
                  e.currentTarget.style.borderColor = "#e4e4e7"
                }}
              >
                Ver Producto
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/** SECCIÓN EDITORIAL EN FONDO CLARO */
function OutfitIdeas() {
  return (
    <section className="py-12 bg-white">
      <div 
        className="grid gap-8 lg:grid-cols-5 items-center rounded-[32px] p-6 md:p-12 border bg-zinc-50" 
        style={{ borderColor: "rgba(85, 5, 39, 0.08)" }}
      >
        <div className="lg:col-span-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#ff990a" }}>Estilo Editorial</p>
          <h3 className="mt-2 text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-zinc-900">
            EL TRUCO ES LA SILUETA.
          </h3>
          <p className="mt-6 text-sm text-zinc-600 max-w-xl font-normal">
            Oversize arriba + recto abajo. El balance perfecto de la moda urbana actual que define la actitud de Black Sheep.
          </p>

          <div className="mt-8 space-y-3 border-l-2 pl-4" style={{ borderColor: "#550527" }}>
            <p className="text-xs font-bold uppercase text-zinc-800">01 / Paleta de Contraste Urbano</p>
            <p className="text-xs font-bold uppercase text-zinc-800">02 / Algodón Peruano Exclusivo</p>
            <p className="text-xs font-bold uppercase text-zinc-800">03 / Estampados de Larga Duración</p>
          </div>
        </div>

        <div className="lg:col-span-2 aspect-[3/4] w-full overflow-hidden rounded-[24px] border border-zinc-100">
          <img
            src="https://i.pinimg.com/736x/e1/3b/72/e13b724ed479b089b4a389c0dee3e9bc.jpg"
            alt="Outfit Streetwear Editorial"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/** NEWSLETTER MINIMALISTA */
function Newsletter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center rounded-[32px] p-8 md:p-12 border border-zinc-100 bg-zinc-50">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "#ff990a" }}>Comunidad Black Sheep</p>
        <h3 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900">DROPS EXCLUSIVOS</h3>
        <p className="mt-3 text-xs tracking-wide text-zinc-500 uppercase">Sé el primero en enterarte de los lanzamientos limitados.</p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
          <input
            className="flex-grow rounded-full border border-zinc-200 bg-white px-6 py-4 text-xs font-bold uppercase tracking-widest outline-none focus:border-zinc-400 text-zinc-800 placeholder:text-zinc-400"
            placeholder="Tu email aquí"
            inputMode="email"
          />
          <button 
            className="rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 shadow-md"
            style={{ backgroundColor: "#550527" }}
          >
            Unirme
          </button>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#ff990a] selection:text-white">
      {/* Banner Principal Full Screen */}
      <FullScreenHero />

      {/* Categorías Full Screen Expansivas */}
      <FullScreenCategories />

      {/* Catálogo de Productos */}
      <Container>
        <FeaturedGrid />
        <OutfitIdeas />
        <Newsletter />
      </Container>
    </main>
  )
}