import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ProductDetail({ product, addToCart, navigate }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleAddToCart = () => {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const categoryColor = {
    PlayStation: 'text-ps border-ps/30 bg-ps/10',
    Xbox: 'text-xbox border-xbox/30 bg-xbox/10',
    Controllers: 'text-neon border-neon/30 bg-neon/10',
    Accessories: 'text-neonGreen border-neonGreen/30 bg-neonGreen/10',
  }

  const Stars = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-border'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-muted font-mono-game ml-1">{product.rating} / 5.0</span>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-8 font-mono-game text-xs text-muted">
        <button onClick={() => navigate('home')} className="hover:text-neon transition-colors">Home</button>
        <span>/</span>
        <button onClick={() => navigate('shop')} className="hover:text-neon transition-colors">Shop</button>
        <span>/</span>
        <span className="text-textSecondary">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Image */}
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-border aspect-square bg-surface">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/20 to-transparent" />
            {product.badge && (
              <div className={`absolute top-4 left-4 font-display font-bold text-xs tracking-widest px-3 py-1.5 rounded-full ${
                product.badgeColor === 'ps' ? 'bg-ps text-white' :
                product.badgeColor === 'xbox' ? 'bg-xbox text-white' :
                'bg-neon text-bg'
              }`}>
                {product.badge}
              </div>
            )}
          </div>

          {/* Thumbnail row (decorative) */}
          <div className="grid grid-cols-4 gap-3">
            {[1,2,3,4].map((i) => (
              <div key={i} className={`rounded-xl overflow-hidden border aspect-square cursor-pointer transition-all duration-200 ${i === 1 ? 'border-neon' : 'border-border hover:border-neon/50'}`}>
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          {/* Category & rating */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`font-display font-bold text-xs tracking-widest px-3 py-1.5 rounded-full border ${categoryColor[product.category] || 'text-muted border-border bg-surface'}`}>
              {product.category}
            </span>
            <Stars rating={product.rating} />
          </div>

          {/* Name */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-5xl text-neon">
              ${product.price.toFixed(2).split('.')[0]}
            </span>
            <span className="font-display text-2xl text-neon/70">
              .{product.price.toFixed(2).split('.')[1]}
            </span>
            <span className="text-muted text-sm font-mono-game ml-2">USD</span>
          </div>

          {/* In stock indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neonGreen animate-pulse" />
            <span className="text-neonGreen text-sm font-mono-game">In Stock — Ships within 24hrs</span>
          </div>

          {/* Description */}
          <p className="text-textSecondary leading-relaxed text-base border-t border-border pt-6">
            {product.description}
          </p>

          {/* Specs */}
          {product.specs && (
            <div className="grid grid-cols-2 gap-3">
              {product.specs.map((spec) => (
                <div key={spec} className="flex items-center gap-2 bg-surface border border-border rounded-lg px-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                  <span className="text-textSecondary text-sm">{spec}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4 pt-2">
            {/* Quantity */}
            <div className="flex items-center border border-border rounded-xl overflow-hidden bg-surface">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-11 h-11 flex items-center justify-center text-muted hover:text-neon hover:bg-neon/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              <span className="w-11 text-center font-display font-bold text-lg">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-11 h-11 flex items-center justify-center text-muted hover:text-neon hover:bg-neon/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-3 font-display font-bold text-base tracking-wide py-3 rounded-xl transition-all duration-300 ${
                added
                  ? 'bg-neonGreen/20 border border-neonGreen text-neonGreen'
                  : 'bg-neon/10 border border-neon text-neon hover:bg-neon hover:text-bg hover:shadow-neon'
              }`}
            >
              {added ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Added to Cart!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border">
            {[
              { icon: '🚀', text: 'Fast Shipping' },
              { icon: '🔒', text: 'Secure Pay' },
              { icon: '↩️', text: '30-Day Return' },
            ].map((t) => (
              <div key={t.text} className="flex flex-col items-center gap-1 text-center">
                <span className="text-xl">{t.icon}</span>
                <span className="text-muted text-xs">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20">
          <div className="mb-8">
            <p className="font-mono-game text-xs text-neon tracking-widest mb-2">// YOU MAY ALSO LIKE</p>
            <h2 className="font-display font-bold text-3xl">Related Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} navigate={navigate} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
