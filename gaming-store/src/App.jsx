import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const navigate = (p, product = null) => {
    setPage(p)
    if (product) setSelectedProduct(product)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        )
      }
      return [...prev, { ...product, quantity: qty }]
    })
    setCartOpen(true)
  }

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <div className="min-h-screen bg-bg text-textPrimary font-body">
      <Navbar
        navigate={navigate}
        cartCount={cartCount}
        openCart={() => setCartOpen(true)}
        currentPage={page}
      />

      <main>
        {page === 'home' && (
          <Home navigate={navigate} addToCart={addToCart} />
        )}
        {page === 'shop' && (
          <Shop navigate={navigate} addToCart={addToCart} />
        )}
        {page === 'product' && selectedProduct && (
          <ProductDetail product={selectedProduct} addToCart={addToCart} navigate={navigate} />
        )}
        {page === 'checkout' && (
          <Checkout cart={cart} cartTotal={cartTotal} navigate={navigate} />
        )}
      </main>

      <Footer navigate={navigate} />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        navigate={navigate}
      />
    </div>
  )
}
