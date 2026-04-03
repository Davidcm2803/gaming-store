import { useState } from 'react'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop({ navigate, addToCart }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState(500)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filtered = products
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .filter((p) => p.price <= priceRange)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const SidebarContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-display font-bold text-sm tracking-widest text-textPrimary mb-4">CATEGORIES</h3>
        <div className="space-y-1">
          {categories.map((cat) => {
            const count = cat === 'All' ? products.length : products.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 font-body ${
                  activeCategory === cat
                    ? 'bg-neon/10 text-neon border border-neon/30'
                    : 'text-textSecondary hover:bg-surface hover:text-textPrimary'
                }`}
              >
                <span>{cat}</span>
                <span className={`font-mono-game text-xs px-2 py-0.5 rounded-full ${activeCategory === cat ? 'bg-neon/20 text-neon' : 'bg-card text-muted'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display font-bold text-sm tracking-widest text-textPrimary mb-4">MAX PRICE</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted text-xs font-mono-game">$0</span>
            <span className="font-display font-bold text-neon">${priceRange}</span>
            <span className="text-muted text-xs font-mono-game">$500</span>
          </div>
          <input
            type="range"
            min="25"
            max="500"
            step="25"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-neon cursor-pointer"
          />
        </div>
      </div>

      {/* Rating filter (UI only) */}
      <div>
        <h3 className="font-display font-bold text-sm tracking-widest text-textPrimary mb-4">MIN RATING</h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5].map((r) => (
            <button key={r} className="w-full flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors text-sm">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className={`w-3.5 h-3.5 ${s <= r ? 'text-yellow-400' : 'text-border'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-mono-game text-xs">& up</span>
            </button>
          ))}
        </div>
      </div>

      {/* Platforms (UI only) */}
      <div>
        <h3 className="font-display font-bold text-sm tracking-widest text-textPrimary mb-4">PLATFORM</h3>
        <div className="space-y-2">
          {['PlayStation 5', 'Xbox Series X|S', 'Cross-Platform'].map((p) => (
            <label key={p} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 rounded border border-border group-hover:border-neon transition-colors flex items-center justify-center bg-surface" />
              <span className="text-textSecondary group-hover:text-textPrimary text-sm transition-colors">{p}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => { setActiveCategory('All'); setPriceRange(500) }}
        className="w-full text-muted hover:text-neon text-sm font-display tracking-wide border border-border hover:border-neon/50 py-2 rounded-lg transition-all"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="font-mono-game text-xs text-neon tracking-widest mb-2">// ALL PRODUCTS</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display font-bold text-4xl">Shop</h1>
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center gap-2 border border-border px-4 py-2 rounded-lg text-sm text-textSecondary hover:text-textPrimary hover:border-neon/50 transition-all font-display"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface border border-border text-textSecondary text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-neon transition-colors cursor-pointer font-body"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Result count */}
        <p className="text-muted text-sm mt-2 font-mono-game">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
          {activeCategory !== 'All' && <span className="text-neon"> in {activeCategory}</span>}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6">
            <SidebarContent />
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 z-50 w-72 bg-surface border-r border-border p-6 overflow-y-auto animate-slideIn lg:hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display font-bold text-lg">Filters</h2>
                <button onClick={() => setSidebarOpen(false)} className="p-1 text-muted hover:text-textPrimary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <SidebarContent />
            </div>
          </>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="text-5xl">🔍</div>
              <h3 className="font-display font-bold text-xl">No products found</h3>
              <p className="text-muted text-sm">Try adjusting your filters</p>
              <button onClick={() => { setActiveCategory('All'); setPriceRange(500) }} className="btn-neon mt-2">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} navigate={navigate} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
