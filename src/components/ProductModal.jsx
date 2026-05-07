import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'

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
      className="fixed inset-0 z-50 flex items-end justify-center bg-dark/50 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-dark shadow-lg transition hover:bg-slate hover:text-white"
          aria-label="Cerrar"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="grid max-h-[92vh] gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative bg-soft-bg">
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[500px]"
            />
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto p-6 sm:p-8">
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
              <div className="mt-2 flex items-center gap-1 text-xs text-slate">
                <span className="text-sm">★★★★★</span>
                <span>(4.9 / 128 reviews)</span>
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-dark">
                ${product.price}
              </p>
            </div>

            <p className="text-base leading-relaxed text-slate">{product.description}</p>

            <div className="space-y-3 border-t border-border pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-dark">
                Detalles
              </h3>
              <ul className="space-y-2 text-sm text-slate">
                <li className="flex gap-2">
                  <span className="font-semibold text-dark">Envío:</span>
                  gratuito desde $120 (demo).
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-dark">Devoluciones:</span>
                  30 días, etiquetas incluidas.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-dark">Mantenimiento:</span>
                  ver guía incluida en caja.
                </li>
              </ul>
            </div>

            <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-4">
                <label htmlFor="qty" className="text-sm font-semibold text-dark">
                  Cantidad:
                </label>
                <div className="flex items-center rounded-md border border-border bg-soft-bg">
                  <button
                    type="button"
                    className="px-4 py-2 text-lg font-semibold text-dark transition hover:bg-border"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Menos"
                  >
                    −
                  </button>
                  <input
                    id="qty"
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) =>
                      setQty(Math.max(1, Number(e.target.value) || 1))
                    }
                    className="w-16 bg-transparent text-center text-sm font-semibold text-dark outline-none"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 text-lg font-semibold text-dark transition hover:bg-border"
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
                className="w-full rounded-md bg-dark py-4 text-center font-semibold text-white shadow-lg transition hover:bg-dark/90"
              >
                Añadir al Carrito — ${(product.price * qty).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
