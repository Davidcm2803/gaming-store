import { products, getFeatured } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home({ navigate, addToCart }) {
  const featured = getFeatured().slice(0, 4)

  const categories = [
    {
      name: 'PlayStation',
      icon: '🎮',
      color: 'ps',
      gradient: 'from-ps/20 to-psLight/5',
      border: 'border-ps/30',
      count: products.filter((p) => p.category === 'PlayStation').length,
    },
    {
      name: 'Xbox',
      icon: '🕹️',
      color: 'xbox',
      gradient: 'from-xbox/20 to-xboxLight/5',
      border: 'border-xbox/30',
      count: products.filter((p) => p.category === 'Xbox').length,
    },
    {
      name: 'Controllers',
      icon: '🎯',
      color: 'neon',
      gradient: 'from-neon/20 to-neon/5',
      border: 'border-neon/30',
      count: products.filter((p) => p.category === 'Controllers').length,
    },
    {
      name: 'Accessories',
      icon: '⚡',
      color: 'neonGreen',
      gradient: 'from-neonGreen/20 to-neonGreen/5',
      border: 'border-neonGreen/30',
      count: products.filter((p) => p.category === 'Accessories').length,
    },
  ]

  const stats = [
    { value: '10,000+', label: 'Happy Gamers' },
    { value: '500+', label: 'Products' },
    { value: '4.9★', label: 'Avg Rating' },
    { value: '24/7', label: 'Support' },
  ]

  const catNums = ['01', '02', '03', '04']
  const catTags = ['Sony', 'Microsoft', 'Input', 'Gear']

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden grid-bg min-h-[85vh] flex items-center">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ps/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-xbox/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/30 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                <span className="font-mono-game text-xs text-neon tracking-widest">NEW ARRIVALS IN STOCK</span>
              </div>

              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight">
                LEVEL UP
                <br />
                <span className="text-gradient-neon">YOUR GAME</span>
              </h1>

              <p className="text-textSecondary text-lg leading-relaxed max-w-lg">
                Premium PlayStation & Xbox consoles, controllers, and accessories.
                Authentic gear, competitive prices, next-day delivery.
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate('shop')} className="btn-neon text-base">
                  Shop Now
                </button>
                <button
                  onClick={() => navigate('shop')}
                  className="font-display font-semibold tracking-wide text-base px-6 py-3 rounded-lg text-textSecondary hover:text-textPrimary border border-border hover:border-neon/50 transition-all duration-200"
                >
                  View Deals
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 pt-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-xl text-neon">{s.value}</div>
                    <div className="text-muted text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-4 rounded-full border border-neon/20 animate-pulse_neon" />
                <div className="absolute inset-8 rounded-full border border-ps/20" />
                <div className="absolute inset-12 rounded-2xl overflow-hidden border border-border shadow-neon">
                  <img
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80"
                    alt="PlayStation 5"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                </div>
                <div className="absolute top-8 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-card">
                  <div className="font-mono-game text-xs text-muted">Starting at</div>
                  <div className="font-display font-bold text-xl text-neon">$299.99</div>
                </div>
                <div className="absolute -bottom-2 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-card flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neonGreen animate-pulse" />
                  <div className="font-mono-game text-xs text-neonGreen">In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono-game text-xs text-neon tracking-widest mb-2">// BROWSE BY TYPE</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Shop Categories</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border rounded-2xl overflow-hidden border border-border">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => navigate('shop')}
              className="group relative bg-card hover:bg-surface transition-colors duration-200 p-6 text-left overflow-hidden min-h-[180px] flex flex-col justify-between"
            >
              {/* Top */}
              <div>
                <span
                  className={`inline-block font-mono-game text-[9px] tracking-widest uppercase px-2 py-1 rounded mb-3
                    ${cat.color === 'ps' ? 'bg-ps/10 text-ps' : ''}
                    ${cat.color === 'xbox' ? 'bg-xbox/10 text-xbox' : ''}
                    ${cat.color === 'neon' ? 'bg-neon/10 text-neon' : ''}
                    ${cat.color === 'neonGreen' ? 'bg-neonGreen/10 text-neonGreen' : ''}
                  `}
                >
                  {catTags[i]}
                </span>
                <div
                  className={`h-[2px] w-8 rounded-full mb-3
                    ${cat.color === 'ps' ? 'bg-ps' : ''}
                    ${cat.color === 'xbox' ? 'bg-xbox' : ''}
                    ${cat.color === 'neon' ? 'bg-neon' : ''}
                    ${cat.color === 'neonGreen' ? 'bg-neonGreen' : ''}
                  `}
                />
                <h3 className="font-display font-black text-2xl uppercase leading-tight text-textPrimary">
                  {cat.name}
                </h3>
              </div>

              {/* Bottom */}
              <div className="flex items-end justify-between mt-4">
                <span className="font-mono-game text-xs text-muted">
                  <span className="text-textSecondary">{cat.count}</span> products
                </span>
                <svg
                  className={`w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200
                    ${cat.color === 'ps' ? 'text-ps' : ''}
                    ${cat.color === 'xbox' ? 'text-xbox' : ''}
                    ${cat.color === 'neon' ? 'text-neon' : ''}
                    ${cat.color === 'neonGreen' ? 'text-neonGreen' : ''}
                  `}
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              {/* Número decorativo de fondo */}
              <span
                className={`absolute -right-2 -bottom-4 font-display font-black text-[100px] leading-none select-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.03] transition-opacity
                  ${cat.color === 'ps' ? 'text-ps' : ''}
                  ${cat.color === 'xbox' ? 'text-xbox' : ''}
                  ${cat.color === 'neon' ? 'text-neon' : ''}
                  ${cat.color === 'neonGreen' ? 'text-neonGreen' : ''}
                `}
              >
                {catNums[i]}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono-game text-xs text-neon tracking-widest mb-2">// HAND-PICKED FOR YOU</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl">Featured Products</h2>
            </div>
            <button
              onClick={() => navigate('shop')}
              className="hidden sm:flex items-center gap-2 text-neon font-display font-semibold hover:gap-3 transition-all duration-200"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} navigate={navigate} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <button onClick={() => navigate('shop')} className="btn-neon">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* ─── BANNER CTA ─── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-surface to-card p-12 text-center">
          <div className="absolute top-0 left-0 w-64 h-64 bg-ps/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-xbox/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <p className="font-mono-game text-xs text-neon tracking-widest">// LIMITED TIME OFFER</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
              Free Shipping on
              <br />
              <span className="text-gradient-neon">Orders Over $50</span>
            </h2>
            <p className="text-textSecondary">
              Get your gaming gear delivered fast — no minimums on select items, and free next-day shipping on orders above $50.
            </p>
            <button onClick={() => navigate('shop')} className="btn-neon text-base">
              Start Shopping
            </button>
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="border-t border-border bg-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Fast Delivery', desc: 'Next-day shipping available' },
              { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL encryption' },
              { icon: '↩️', title: '30-Day Returns', desc: 'No questions asked' },
              { icon: '🏆', title: 'Authentic Products', desc: 'Official Sony & Microsoft gear' },
            ].map((badge) => (
              <div key={badge.title} className="flex flex-col items-center text-center gap-3">
                <div className="text-3xl">{badge.icon}</div>
                <div>
                  <div className="font-display font-bold text-textPrimary">{badge.title}</div>
                  <div className="text-muted text-sm mt-0.5">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}