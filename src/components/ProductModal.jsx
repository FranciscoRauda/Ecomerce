import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import SafeImage from './SafeImage'

export default function ProductModal({ product, onClose }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const confirmAdd = () => {
    addItem(product, qty)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-dark/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative flex max-h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl lg:max-h-[92vh] lg:grid lg:grid-cols-2 lg:rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white p-2 text-dark shadow-lg ring-1 ring-border transition hover:bg-soft-bg lg:right-4 lg:top-4 lg:min-h-0 lg:min-w-0"
          aria-label="Cerrar"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative max-h-[36vh] w-full shrink-0 overflow-hidden bg-soft-bg lg:max-h-none lg:min-h-[420px]">
          <SafeImage
            src={product.image}
            alt={product.name}
            className="h-full w-full max-h-[36vh] object-cover lg:max-h-none lg:min-h-[420px]"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-6 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-14 sm:p-8 lg:pt-8 lg:pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate">
              {product.category}
            </p>
            <h2
              id="product-modal-title"
              className="mt-2 font-display text-3xl font-bold text-dark"
            >
              {product.name}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-1 text-xs text-slate">
              <span className="text-sm">★★★★★</span>
              <span>(4.9 / 128 reviews)</span>
            </div>
            <p className="mt-3 font-display text-2xl font-bold text-dark">${product.price}</p>
          </div>

          <p className="text-base leading-relaxed text-slate">{product.description}</p>

          <div className="space-y-3 border-t border-border pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-dark">Detalles</h3>
            <ul className="space-y-2 text-sm text-slate">
              <li className="flex gap-2">
                <span className="font-semibold text-dark">Envío:</span>
                <span>gratuito desde $120 (demo).</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-dark">Devoluciones:</span>
                <span>30 días, etiquetas incluidas.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-dark">Mantenimiento:</span>
                <span>ver guía incluida en caja.</span>
              </li>
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <label htmlFor="qty" className="text-sm font-semibold text-dark">
                Cantidad
              </label>
              <div className="flex items-center rounded-md border border-border bg-soft-bg">
                <button
                  type="button"
                  className="min-h-[44px] min-w-[44px] text-lg font-semibold text-dark transition hover:bg-border sm:min-h-0 sm:min-w-0 sm:px-3 sm:py-1"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Menos"
                >
                  −
                </button>
                <input
                  id="qty"
                  inputMode="numeric"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-14 bg-transparent py-2 text-center text-sm font-semibold text-dark outline-none"
                />
                <button
                  type="button"
                  className="min-h-[44px] min-w-[44px] text-lg font-semibold text-dark transition hover:bg-border sm:min-h-0 sm:min-w-0 sm:px-3 sm:py-1"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Más"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={confirmAdd}
              className="w-full rounded-md bg-dark py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-dark/90 sm:w-auto sm:min-w-[220px] sm:px-6"
            >
              Añadir a la bolsa — ${(product.price * qty).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
