import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage({ onContinueShopping }) {
  const { items, setQuantity, removeItem, subtotal, clearCart } = useCart()
  const [checkoutDone, setCheckoutDone] = useState(false)

  const shipping = subtotal >= 120 || subtotal === 0 ? 0 : 6.9
  const total = subtotal + shipping

  const handleCheckout = () => {
    setCheckoutDone(true)
    clearCart()
  }

  if (checkoutDone) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-10 shadow-lg">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold text-dark">
            ¡Gracias por tu compra!
          </h2>
          <p className="mt-4 text-slate">
            Este proyecto es una demo front-end: no se procesa ningún pago ni se guardan datos
            en servidor.
          </p>
          <button
            type="button"
            onClick={() => {
              setCheckoutDone(false)
              onContinueShopping()
            }}
            className="mt-8 rounded-md bg-dark px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-dark/90"
          >
            Volver a la tienda
          </button>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-dark">Tu carrito está vacío</h2>
        <p className="mt-4 text-slate">
          Añade productos desde la tienda. Los artículos se guardan en tu navegador.
        </p>
        <button
          type="button"
          onClick={onContinueShopping}
          className="mt-8 rounded-md bg-dark px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-dark/90"
        >
          Ir a la tienda
        </button>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold text-dark">Tu Carrito</h2>
          <p className="mt-2 text-slate">{items.length} referencias distintas</p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="self-start rounded-md border border-border px-4 py-2 text-sm font-semibold text-slate transition hover:border-dark hover:text-dark sm:self-auto"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <ul className="divide-y divide-border rounded-lg border border-border bg-white">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-full rounded-lg object-cover sm:h-28 sm:w-28"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg font-bold text-dark">{product.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate">
                    {product.category}
                  </p>
                  <p className="mt-2 text-sm text-slate">${product.price} / ud.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center rounded-md border border-border bg-soft-bg">
                    <button
                      type="button"
                      className="px-3 py-2 text-lg font-semibold transition hover:bg-border"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      aria-label="Reducir cantidad"
                    >
                      −
                    </button>
                    <span className="min-w-[2.5rem] text-center text-sm font-semibold">{quantity}</span>
                    <button
                      type="button"
                      className="px-3 py-2 text-lg font-semibold transition hover:bg-border"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    Quitar
                  </button>
                  <p className="w-full text-right font-display text-xl font-bold text-dark sm:w-auto">
                    ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-lg border border-dashed border-border bg-soft-bg p-6">
            <h3 className="font-display text-base font-bold text-dark">Notas de demo</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate">
              <li>El carrito usa localStorage para persistir al recargar.</li>
              <li>Envío gratis simulado a partir de $120.</li>
              <li>&quot;Finalizar compra&quot; solo muestra un mensaje de éxito.</li>
            </ul>
          </div>
        </div>

        <aside className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h3 className="font-display text-lg font-bold text-dark">Resumen del Pedido</h3>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate">Subtotal</dt>
              <dd className="font-semibold text-dark">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate">Envío estimado</dt>
              <dd className="font-semibold text-dark">
                {shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <span className="font-display text-lg font-bold text-dark">Total</span>
            <span className="font-display text-2xl font-bold text-dark">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className="mt-6 w-full rounded-md bg-dark py-4 font-semibold text-white shadow-lg transition hover:bg-dark/90"
          >
            Finalizar compra (demo)
          </button>
        </aside>
      </div>
    </section>
  )
}
