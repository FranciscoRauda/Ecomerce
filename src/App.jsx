import { useState } from 'react'
import { CartProvider, useCart } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCatalog from './components/ProductCatalog'
import ProductModal from './components/ProductModal'
import CartPage from './components/CartPage'
import PromoBanner from './components/PromoBanner'
import InstagramSection from './components/InstagramSection'
import Footer from './components/Footer'

function AppShell() {
  const [view, setView] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { count } = useCart()

  const openShop = () => {
    setView('shop')
    requestAnimationFrame(() => {
      document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <div className="relative min-h-svh bg-cream max-md:min-w-0 max-md:overflow-x-hidden">
      <div className="relative z-[2] flex min-h-svh flex-col">
        <Header activeView={view} onNavigate={setView} cartCount={count} />

        <main className="flex-1">
          {view === 'cart' ? (
            <CartPage onContinueShopping={() => setView('shop')} />
          ) : (
            <>
              {view === 'home' && (
                <>
                  <Hero onShop={openShop} />
                  <ProductCatalog onOpenProduct={setSelectedProduct} />
                  <PromoBanner />
                  <InstagramSection />
                </>
              )}
              {view === 'shop' && (
                <>
                  <section className="border-b border-border bg-soft-bg px-4 py-12 sm:px-8">
                    <div className="mx-auto max-w-7xl text-center">
                      <h2 className="font-display text-3xl font-bold text-dark sm:text-4xl">
                        Todo el catálogo
                      </h2>
                      <p className="mt-3 mx-auto max-w-2xl text-slate">
                        Filtra, abre la ficha y añade a la bolsa. Los datos son locales en tu
                        navegador.
                      </p>
                    </div>
                  </section>
                  <ProductCatalog onOpenProduct={setSelectedProduct} />
                  <PromoBanner />
                </>
              )}
            </>
          )}
        </main>

        <Footer />
      </div>

      {selectedProduct ? (
        <ProductModal
          key={selectedProduct.id}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  )
}
