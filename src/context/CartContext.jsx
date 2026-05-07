import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const STORAGE_KEY = 'lumen-cart'

function loadInitialItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialItems)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((l) => l.product.id === product.id)
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id
            ? { ...l, quantity: l.quantity + quantity }
            : l,
        )
      }
      return [...prev, { product, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((l) => l.product.id !== productId))
  }, [])

  const setQuantity = useCallback((productId, quantity) => {
    const next = Math.max(0, Math.floor(Number(quantity)) || 0)
    if (next === 0) {
      removeItem(productId)
      return
    }
    setItems((prev) =>
      prev.map((l) =>
        l.product.id === productId ? { ...l, quantity: next } : l,
      ),
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const count = items.reduce((acc, l) => acc + l.quantity, 0)
    const subtotal = items.reduce(
      (acc, l) => acc + l.product.price * l.quantity,
      0,
    )
    return { count, subtotal }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      ...totals,
    }),
    [items, addItem, removeItem, setQuantity, clearCart, totals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook export compartido con el provider; Fast Refresh tolerado aquí.
// eslint-disable-next-line react-refresh/only-export-components -- hook ligado al contexto del carrito
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
