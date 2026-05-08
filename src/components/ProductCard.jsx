import SafeImage from './SafeImage'

export default function ProductCard({ product, onOpen }) {
  return (
    <article className="product-card group flex flex-col overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative block w-full overflow-hidden text-left"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-soft-bg">
          <SafeImage
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 md:group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          {product.tag && (
            <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {product.tag}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-white/95 py-3 backdrop-blur-sm md:translate-y-full md:transition-transform md:group-hover:translate-y-0">
            <span className="text-sm font-semibold text-dark max-md:text-xs max-md:uppercase max-md:tracking-wider">
              Ver detalle
            </span>
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-snug text-dark line-clamp-2 md:line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate">
            {product.category}
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate" aria-hidden>
          <span className="text-sm">★★★★★</span>
          <span>(4.9)</span>
        </div>
        <p className="font-display text-lg font-semibold text-dark">${product.price}</p>
      </div>
    </article>
  )
}
