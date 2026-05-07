export default function Header({ activeView, onNavigate, cartCount }) {
  const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'shop', label: 'Tienda' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2.5 text-left transition hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-dark text-white">
            <span className="font-display text-lg font-bold">C</span>
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-dark">
            Capile
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-medium transition ${
                activeView === link.id
                  ? 'text-dark'
                  : 'text-slate hover:text-dark'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
            className="text-slate transition hover:text-dark"
            aria-label="Favoritos"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('cart')}
            className="relative text-slate transition hover:text-dark"
            aria-label="Carrito de compras"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
