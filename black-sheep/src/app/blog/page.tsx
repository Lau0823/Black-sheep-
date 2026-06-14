"use client"

import React from "react"
import Link from "next/link"

type Post = {
  id: string
  title: string
  subtitle: string
  category: string
  issue: string
  img: string
}

const editorialPosts: Post[] = [
  {
    id: "v-1",
    title: "LA ARQUITECTURA DEL ALGODÓN PESADO.",
    subtitle: "Cómo el gramaje de 500 GSM redefinió la caída perfecta en el streetwear moderno.",
    category: "TEXTILES",
    issue: "N° 01",
    img: "https://i.pinimg.com/736x/e1/3b/72/e13b724ed479b089b4a389c0dee3e9bc.jpg"
  },
  {
    id: "v-2",
    title: "SILUETAS QUE HABLAN EN SILENCIO.",
    subtitle: "El minimalismo radical desplaza a los logos gigantes. Menos ruido, más presencia.",
    category: "DISEÑO",
    issue: "N° 02",
    img: "https://i.pinimg.com/736x/69/4e/51/694e516fd8bd0ab07ba9b3fe5396a03f.jpg"
  },
  {
    id: "v-3",
    title: "MIDNIGHT OCHRE & CRIMSON.",
    subtitle: "El contraste del naranja y el vinotinto profundo en la cultura nocturna urbana.",
    category: "PALETAS",
    issue: "N° 03",
    img: "https://i.pinimg.com/736x/ad/cf/18/adcf18456d4eefea44107c630baed62d.jpg"
  }
]

export default function VogueEditorialBlog() {
  const mainPost = editorialPosts[0]
  const secondaryPosts = editorialPosts.slice(1)

  return (
    <section id="editorial" className="w-full bg-white text-zinc-900">
      
      {/* 1. BANNER FULL SCREEN - LA PORTADA DE LA REVISTA */}
      <div className="relative h-screen w-full overflow-hidden border-b border-zinc-100">
        <img 
          src="https://i.pinimg.com/736x/ad/cf/18/adcf18456d4eefea44107c630baed62d.jpg" 
          alt="Vogue Editorial Cover" 
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Filtro degradado blanco sutil inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10" />

        {/* Textos de la Portada */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-20 z-10">
          <div className="flex justify-between items-baseline border-b border-zinc-900/10 pb-4">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-zinc-400">[ BLACK SHEEP JOURNAL ]</span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#550527" }}>EDICIÓN LIMITADA 2026</span>
          </div>

          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: "#ff990a" }}>
              HISTORIA DE PORTADA
            </p>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-zinc-900">
              EL NUEVO <br />
              <span style={{ color: "#550527" }}>LUJO CALLEJERO.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm md:text-base text-zinc-600 font-normal leading-relaxed">
              Exploramos la transición de las prendas casuales hacia piezas de arte textil coleccionables.
            </p>
          </div>

          <div className="flex justify-between items-center pt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">VOL. IV // DROPS</span>
            <div className="h-10 w-10 rounded-full flex items-center justify-center text-white animate-bounce shadow-sm" style={{ backgroundColor: "#550527" }}>
              ↓
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTERIOR DE LA REVISTA (LAYOUT ASIMÉTRICO) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        
        {/* Título de la Sección del Periódico/Revista */}
        <div className="text-center md:text-left mb-20 border-b border-zinc-900 pb-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900">
            BLACK SHEEP <span style={{ color: "#ff990a" }}>EDITORIAL</span>
          </h2>
        </div>

        {/* Artículo Principal (Estilo Reportaje de Moda) */}
        <Link href={`/blog/${mainPost.id}`} className="group block mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Imagen gigante redondeada */}
            <div className="lg:col-span-7 relative aspect-[16/10] md:aspect-[21/10] overflow-hidden rounded-[32px] bg-zinc-50 border border-zinc-100">
              <img 
                src={mainPost.img} 
                alt={mainPost.title} 
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-101" 
              />
            </div>
            
            {/* Texto lateral flotante */}
            <div className="lg:col-span-5 px-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#550527" }}>
                  {mainPost.category}
                </span>
                <span className="text-xs font-bold text-zinc-300">{mainPost.issue}</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 group-hover:text-[#ff990a] transition-colors leading-tight">
                {mainPost.title}
              </h3>
              <p className="mt-4 text-sm text-zinc-500 font-normal leading-relaxed">
                {mainPost.subtitle}
              </p>
              <span className="text-xs font-black text-zinc-900 uppercase tracking-widest block mt-6 border-b border-zinc-900 w-fit pb-1">
                Leer Reportaje →
              </span>
            </div>
          </div>
        </Link>

        {/* Artículos Secundarios en Paralelo (Contraste de dos columnas tipo Vogue) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {secondaryPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              {/* Imagen Vertical estilo sesión fotográfica de alta costura */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[32px] bg-zinc-50 border border-zinc-100 mb-6">
                <span 
                  className="absolute right-6 top-6 z-10 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-zinc-900 bg-white/90 shadow-sm border border-zinc-100"
                >
                  {post.issue}
                </span>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-102" 
                />
              </div>

              {/* Textos */}
              <div className="px-2">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: "#ff990a" }}>
                  {post.category}
                </p>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 group-hover:text-[#550527] transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="mt-2 text-sm text-zinc-500 font-normal leading-relaxed">
                  {post.subtitle}
                </p>
                <span className="text-xs font-bold text-zinc-400 block mt-4 uppercase tracking-wider">Ver galería fotográfica →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}