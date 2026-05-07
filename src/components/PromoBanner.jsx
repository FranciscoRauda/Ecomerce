export default function PromoBanner() {
  return (
    <section className="bg-soft-bg px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                SALE SUMMER 2026
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-dark sm:text-4xl">
                Summer Sale - Up to
                <br />
                50% Off All Products!
              </h2>
              <p className="mt-4 text-slate">
                Aprovecha las mejores ofertas de la temporada en nuestra colección de verano.
              </p>
              <button className="mt-6 rounded-md bg-dark px-8 py-3.5 font-semibold text-white transition hover:bg-dark/90">
                SHOP NOW →
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                alt="Moda verano"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-display text-2xl font-bold text-dark">
            Subscribe to Our Newsletter
          </h3>
          <p className="mt-2 text-slate">
            Subscribe to our newsletter and get 10% discount on perm booking
          </p>
          <form
            className="mx-auto mt-6 flex max-w-md gap-2"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm text-dark outline-none ring-dark/20 placeholder:text-slate focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-md bg-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-dark/90"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
