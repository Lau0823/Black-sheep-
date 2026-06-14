"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingCart, LogIn, UserPlus, Menu, X, Search } from "lucide-react"

type NavItem = { href: string; label: string }

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState("")
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const items: NavItem[] = useMemo(
    () => [
      { href: "/lonuevo", label: "Lo nuevo" },
      { href: "/camisetas", label: "Camisetas" },
      { href: "/hoodies", label: "Hoodies" },
    
      { href: "/buzos", label: "Buzos" },
      { href: "/blog", label: "Blog" },
    ],
    []
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cierra menú al cambiar de ruta
  useEffect(() => {
    setOpenMenu(false)
    setOpenSearch(false)
  }, [pathname])

  const submitSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    const q = search.trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        // Glass premium cuando haces scroll
        scrolled ? "bg-white/75 backdrop-blur-xl border-b border-black/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/bs.png"
              alt="Black Sheep"
              className="h-20 w-20 rounded-2xl object-contain"
            />
            {/* Wordmark premium */}
            <div className="hidden sm:block leading-none">
              <div className="text-[12px] font-extrabold uppercase tracking-[0.18em]">
                BLACK SHEEP
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
                
              </div>
            </div>
          </Link>

          {/* CENTER: Menu (desktop) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {items.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative text-[13px] font-semibold uppercase tracking-[0.12em] transition",
                        active ? "text-black" : "text-black/65 hover:text-black"
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute left-0 -bottom-2 h-[2px] w-full rounded-full transition",
                          active ? "bg-black opacity-100" : "bg-black opacity-0 hover:opacity-100"
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* RIGHT: Search + Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search desktop */}
            <form
              onSubmit={submitSearch}
              className="hidden md:flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 backdrop-blur"
            >
              <Search size={16} className="text-black/60" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar…"
                className="w-44 lg:w-56 bg-transparent text-sm outline-none placeholder:text-black/35"
              />
              <button
                type="submit"
                className="rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white hover:bg-black/90"
              >
                Buscar
              </button>
            </form>

            {/* Search mobile button */}
            <button
              onClick={() => setOpenSearch(true)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-black/70 backdrop-blur hover:bg-white"
              aria-label="Abrir búsqueda"
              type="button"
            >
              <Search size={18} />
            </button>

            {/* Icons */}
            <Link
              href="/cart"
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-black/70 backdrop-blur hover:bg-white"
              aria-label="Carrito"
            >
              <ShoppingCart size={18} />
            </Link>

            <Link
              href="/login"
              className="hidden sm:grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-black/70 backdrop-blur hover:bg-white"
              aria-label="Login"
            >
              <LogIn size={18} />
            </Link>

            <Link
              href="/register"
              className="hidden sm:grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-black/70 backdrop-blur hover:bg-white"
              aria-label="Registro"
            >
              <UserPlus size={18} />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpenMenu((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-black/70 backdrop-blur hover:bg-white"
              aria-label="Abrir menú"
              type="button"
            >
              {openMenu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          openMenu ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="rounded-3xl border border-black/10 bg-white/85 p-4 backdrop-blur-xl">
            <div className="grid gap-2">
              {items.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition",
                      active ? "bg-black text-white" : "bg-white text-black/75 hover:bg-black/5"
                    )}
                  >
                    {item.label}
                    <span className={cn("text-xs", active ? "text-white/80" : "text-black/40")}>→</span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/70"
              >
                <LogIn size={16} /> Login
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white"
              >
                <UserPlus size={16} /> Registro
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search overlay */}
      {openSearch ? (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/35 backdrop-blur-sm">
          <div className="mx-auto mt-20 max-w-6xl px-4">
            <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Buscar productos
                </p>
                <button
                  onClick={() => setOpenSearch(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-black/70"
                  aria-label="Cerrar búsqueda"
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={submitSearch} className="mt-3 flex items-center gap-2">
                <div className="flex w-full items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-3">
                  <Search size={16} className="text-black/50" />
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Camisetas, hoodies, gorras…"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white"
                >
                  Ir
                </button>
              </form>

              <p className="mt-3 text-[11px] text-black/45">
              
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}