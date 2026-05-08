import SafeImage from './SafeImage'
import { unsplashPhoto } from '../lib/unsplashUrl'

const PROMO_IMG = unsplashPhoto('photo-1515886657613-9f3515b0c78f', 800)

export default function PromoBanner() {
  return (
    <section className="bg-soft-bg px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                SALE SUMMER 2026
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-dark sm:text-4xl">
                Summer Sale — Up to
                <br />
                50% Off All Products!
              </h2>
              <p className="mt-4 text-slate">
                Aprovecha las mejores ofertas de la temporada en nuestra colección de verano.
              </p>
              <button
                type="button"
                className="mt-6 w-full rounded-md bg-dark px-8 py-3.5 font-semibold text-white transition hover:bg-dark/90 md:w-auto"
              >
                SHOP NOW →
              </button>
            </div>
            <div className="relative min-w-0">
              <SafeImage
                src={PROMO_IMG}
                alt="Moda verano"
                className="max-h-[220px] w-full rounded-lg object-cover sm:max-h-[280px] lg:h-full lg:max-h-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-display text-2xl font-bold text-dark">
            Subscribe to Our Newsletter
          </h3>
          <p className="mt-2 text-slate">
            Suscríbete y recibe un 10% de descuento (solo demostración).
          </p>
          <form
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-2"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
              className="min-h-[48px] min-w-0 flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm text-dark outline-none ring-dark/20 placeholder:text-slate focus:ring-2"
            />
            <button
              type="submit"
              className="min-h-[48px] shrink-0 rounded-md bg-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-dark/90"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
