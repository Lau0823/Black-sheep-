"use client"

import Link from "next/link"

type Cat = { name: string; href: string; img: string }
type Prod = { id: string; name: string; price: string; img: string; tag?: string }

const categories: Cat[] = [
  { name: "Camisetas", href: "/camisetas", img: "https://i.pinimg.com/736x/69/4e/51/694e516fd8bd0ab07ba9b3fe5396a03f.jpg" },
  { name: "Hoodies", href: "/hoodies", img: "https://i.pinimg.com/736x/ad/cf/18/adcf18456d4eefea44107c630baed62d.jpg" },
  { name: "Gorras", href: "/gorras", img: "https://i.pinimg.com/1200x/43/5a/6c/435a6c60e8cc01c85b78652e64df755a.jpg" },
  { name: "Buzos", href: "/buzos", img: "https://i.pinimg.com/736x/4b/f5/67/4bf5672fd32caf513cc46c21c1654d78.jpg" },
]

const featured: Prod[] = [
  { id: "1", name: "Camiseta Oversize", price: "$89.900", tag: "Nuevo", img: "https://i.pinimg.com/1200x/f3/59/a0/f359a020190e3c3d9f6916477249b46b.jpg" },
  { id: "2", name: "Hoodie Street", price: "$215.000", tag: "Top", img: "https://i.pinimg.com/736x/e1/3b/72/e13b724ed479b089b4a389c0dee3e9bc.jpg" },
  { id: "3", name: "Gorra Classic", price: "$55.000", img: "https://i.pinimg.com/736x/73/58/06/735806f71ff17f99e0ed2e5f4edaf716.jpg" },
  { id: "4", name: "Buzo Básico", price: "$129.900", tag: "Drop", img: "https://i.pinimg.com/1200x/ef/2b/8b/ef2b8b59d97b3864ab5f993a56027a59.jpg" },
]

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
      {children}
    </span>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-black text-white font-extrabold">S</div>
          <span className="text-sm font-extrabold uppercase tracking-tight">StreetShop</span>
        </Link>

        {/* buscador */}
      

        {/* acciones */}
        <div className="flex items-center gap-2">
          <Link
            href="/catalogo"
            className="hidden sm:inline-flex rounded-2xl border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/5"
          >
            Catálogo
          </Link>

          <Link
            href="/carrito"
            className="inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-black/90"
          >
            🛒 Carrito
          </Link>
        </div>
      </div>

      {/* buscador mobile */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex w-full items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2">
          <span className="text-xs font-semibold text-black/40">🔎</span>
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
            placeholder="Buscar productos..."
          />
        </div>
      </div>
    </header>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0f0f0e]">
      {/* topbar */}
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-[11px] font-semibold tracking-wide text-black/70">
          ENVÍO RÁPIDO • CAMBIOS FÁCILES • DROP 2025
        </div>
      </div>

      {/* nav */}
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 pt-6">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[28px] border border-black/10">
          <div className="relative h-[72vh] min-h-[520px] md:h-[70vh] md:min-h-[560px] w-full">
            <img
              src="https://i.pinimg.com/736x/d7/53/a8/d753a8b9247a251975b536dc7f262c47.jpg"
              alt="Hero"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent" />

            <div className="absolute left-4 md:left-6 top-4 md:top-6 flex flex-wrap gap-2">
              <Pill>Street</Pill>
              <Pill>Oversize</Pill>
              <Pill>Drop 2025</Pill>
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 md:px-10">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight">
                    EL MEJOR ESTILO <br />
                    <span className="text-black/55">AQUÍ</span>
                  </h1>

                  <p className="mt-4 max-w-md text-sm sm:text-base md:text-lg text-black/60">
                    Camisetas, hoodies y gorras con vibra joven y street.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                    <Link href="/nuevo" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 text-center">
                      Ver colección
                    </Link>

                    <Link href="/camisetas" className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 hover:bg-black/5 text-center">
                      Camisetas →
                    </Link>
                  </div>

                  <div className="mt-6 hidden sm:flex flex-wrap gap-2">
                    <Pill>Camisetas</Pill>
                    <Pill>Hoodies</Pill>
                    <Pill>Gorras</Pill>
                    <Pill>Accesorios</Pill>
                  </div>
                </div>
              </div>
            </div>

            {/* promo (desktop) */}
            <div className="absolute bottom-6 right-6 hidden w-[260px] md:block">
              <Glass className="p-4">
                <p className="text-xs font-semibold text-black/60">Promo</p>
                <p className="mt-1 text-2xl font-extrabold">30% OFF</p>
                <p className="mt-1 text-xs text-black/55">En toda la tienda</p>
                <Link href="/rebajas" className="mt-4 inline-flex w-full justify-center rounded-2xl bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-black/90">
                  Ver rebajas →
                </Link>
              </Glass>
            </div>

            {/* promo (mobile) */}
            <div className="absolute bottom-4 left-4 right-4 md:hidden">
              <Glass className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-black/60">Promo</p>
                    <p className="mt-0.5 text-lg font-extrabold">30% OFF</p>
                    <p className="mt-0.5 text-xs text-black/55">En toda la tienda</p>
                  </div>
                  <Link href="/rebajas" className="inline-flex shrink-0 justify-center rounded-2xl bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-black/90">
                    Ver →
                  </Link>
                </div>
              </Glass>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">Categorías</h2>
            <Link href="/categorias" className="text-sm font-semibold text-black/60 hover:text-black">Ver todo →</Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((c) => (
              <Link key={c.name} href={c.href} className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-white">
                <div className="relative h-36 sm:h-44 w-full">
                  <img src={c.img} alt={c.name} className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-extrabold uppercase text-black backdrop-blur">{c.name}</span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">Ver →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* DESTACADOS */}
        <section className="pb-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">Destacados</h2>
            <Link href="/destacados" className="text-sm font-semibold text-black/60 hover:text-black">Ver más →</Link>
          </div>

          <div className="mt-6 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((p) => (
              <Link
                key={p.id}
                href={`/producto/${p.id}`}
                className="group min-w-[220px] sm:min-w-[250px] max-w-[250px] overflow-hidden rounded-[22px] border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  {p.tag ? (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                      {p.tag}
                    </span>
                  ) : null}

                  <div className="h-52 sm:h-56 w-full bg-[#f6f6f6]">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm font-bold">{p.name}</p>
                  <p className="mt-1 text-sm font-extrabold">{p.price}</p>
                  <div className="mt-3 rounded-2xl bg-black px-4 py-2 text-center text-xs font-semibold text-white">
                    Ver producto
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="pb-16">
          <Glass className="p-6 md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight">Newsletter</h3>
                <p className="mt-2 text-sm text-black/60">Drops, promos y lanzamientos antes que nadie.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/20"
                  placeholder="tuemail@gmail.com"
                />
                <button className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90">
                  Suscribirme
                </button>
              </div>
            </div>
          </Glass>
        </section>
      </div>
    </main>
  )
}
