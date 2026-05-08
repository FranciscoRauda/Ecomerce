import SafeImage from './SafeImage'
import { unsplashPhoto } from '../lib/unsplashUrl'

const HERO_IMG = unsplashPhoto('photo-1490114538077-0a7f8cb49891', 1000)

export default function Hero({ onShop }) {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Envío Gratis',
      description: 'Compras sobre $99',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: '30 Días Retorno',
      description: 'Devoluciones fáciles',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Pago Seguro',
      description: '100% protegido',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: '24/7 Soporte',
      description: 'Atención dedicada',
    },
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-soft-bg">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="animate-fade-up min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
              PRIMAVERA/VERANO 2026
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-dark sm:text-5xl lg:text-6xl">
              Sale 30%
              <br />
              <span className="text-slate">Off Everything</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate">
              Seleccionamos textiles nobles, cerámica de taller y objetos que envejecen
              bien. Un comercio pequeño, pensado para durar.
            </p>
            <button
              type="button"
              onClick={onShop}
              className="mt-8 w-full rounded-md bg-dark px-10 py-3.5 font-semibold text-white transition hover:bg-dark/90 md:w-auto"
            >
              SHOP NOW
            </button>
          </div>

          <div className="animate-slide-left relative min-w-0">
            <div className="relative md:rounded-none">
              <SafeImage
                src={HERO_IMG}
                alt="Modelo masculino con chaqueta estampada"
                className="h-auto max-h-[65vh] w-full rounded-lg object-cover md:max-h-none md:rounded-none"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="shrink-0 text-dark">{feature.icon}</div>
                <div>
                  <h3 className="font-display text-base font-bold text-dark">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
