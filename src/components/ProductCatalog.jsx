import { useMemo, useState } from 'react'
import { categories, products } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductCatalog({ onOpenProduct }) {
  const [filter, setFilter] = useState('Todos')

  const filtered = useMemo(() => {
    if (filter === 'Todos') return products
    return products.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="coleccion" className="scroll-mt-24 bg-white px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-dark sm:text-4xl">
              New Arrivals
            </h2>
            <p className="mt-3 text-slate">
              Filtra por categoría. Cada ficha abre el detalle con más contexto y tallas
              sugeridas (demo).
            </p>
          </div>
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Categorías de producto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-medium transition ${
                  filter === cat
                    ? 'text-dark underline decoration-2 underline-offset-4'
                    : 'text-slate hover:text-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onOpenProduct}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-slate">
            No hay productos en esta categoría todavía.
          </p>
        )}
      </div>
    </section>
  )
}
