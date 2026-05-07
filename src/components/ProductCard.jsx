export default function ProductCard({ product, onOpen }) {
  return (
    <article className="product-card group flex flex-col overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative block overflow-hidden text-left"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-soft-bg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {product.tag && (
            <span className="absolute left-3 top-3 bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {product.tag}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-white/95 py-3 backdrop-blur-sm transition-transform group-hover:translate-y-0">
            <span className="text-sm font-semibold text-dark">Ver detalle</span>
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-display text-base font-semibold text-dark line-clamp-1">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-slate">
              {product.category}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate">
          <span className="text-sm">★★★★★</span>
          <span>(4.9)</span>
        </div>
        <p className="font-display text-lg font-bold text-dark">
          ${product.price}
        </p>
      </div>
    </article>
  )
}
