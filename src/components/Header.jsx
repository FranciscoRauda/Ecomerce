import { useState } from 'react'

export default function Header({ activeView, onNavigate, cartCount }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const ir = (id) => {
    onNavigate(id)
    setMenuAbierto(false)
  }

  const enlacesBarra = [
    { id: 'home', label: 'Inicio' },
    { id: 'shop', label: 'Tienda' },
  ]

  const enlacesMovil = [
    ...enlacesBarra,
    { id: 'cart', label: 'Carrito' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md shadow-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8 md:gap-6">
        <button
          type="button"
          onClick={() => ir('home')}
          className="group flex max-w-[60%] min-w-0 items-center gap-2.5 text-left transition hover:opacity-80 md:max-w-none"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dark text-white">
            <span className="font-display text-lg font-bold">C</span>
          </div>
          <span className="font-display truncate text-2xl font-bold tracking-tight text-dark">
            Capile
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {enlacesBarra.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => ir(link.id)}
              className={`text-sm font-medium transition ${
                activeView === link.id ? 'text-dark' : 'text-slate hover:text-dark'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="hidden text-slate transition hover:text-dark sm:block"
            aria-label="Buscar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            type="button"
            className="hidden text-slate transition hover:text-dark sm:block"
            aria-label="Favoritos"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => ir('cart')}
            className="relative flex min-h-[44px] min-w-[44px] items-center justify-center text-slate transition hover:text-dark md:min-h-0 md:min-w-0 md:p-0"
            aria-label="Carrito de compras"
          >
            <svg className="h-5 w-5 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute right-2 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white md:-right-1.5 md:-top-1.5 md:h-4 md:min-w-4 md:text-[10px]">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-dark md:hidden"
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuAbierto((v) => !v)}
          >
            {menuAbierto ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={`border-t border-border bg-white md:hidden ${menuAbierto ? 'block' : 'hidden'}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2" aria-label="Móvil">
          {enlacesMovil.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => ir(link.id)}
              className={`min-h-[48px] w-full rounded-md px-2 text-left text-base font-medium ${
                activeView === link.id ? 'bg-soft-bg text-dark' : 'text-slate'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
