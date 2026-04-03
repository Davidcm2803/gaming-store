export default function ProductCard({ product, addToCart, navigate }) {
  const badgeColors = {
    ps: 'bg-ps text-white',
    xbox: 'bg-xbox text-white',
    neon: 'bg-neon text-bg',
  }

  const Stars = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-border'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-xs text-muted ml-1 font-mono-game">{rating}</span>
      </div>
    )
  }

  return (
    <div className="card-gaming group relative cursor-pointer">
      {/* Badge */}
      {product.badge && (
        <div className={`absolute top-3 left-3 z-10 text-xs font-display font-bold tracking-widest px-2.5 py-1 rounded-full ${badgeColors[product.badgeColor] || 'bg-neon text-bg'}`}>
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div
        className="relative h-52 overflow-hidden bg-surface cursor-pointer"
        onClick={() => navigate('product', product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        {/* Category tag */}
        <div className="absolute bottom-3 right-3 font-mono-game text-xs text-neon/80 bg-bg/60 backdrop-blur-sm px-2 py-0.5 rounded">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <button
          onClick={() => navigate('product', product)}
          className="text-left w-full"
        >
          <h3 className="font-display font-semibold text-lg text-textPrimary leading-tight mb-1 hover:text-neon transition-colors">
            {product.name}
          </h3>
        </button>

        <Stars rating={product.rating} />

        <p className="text-textSecondary text-sm mt-2 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-2xl text-textPrimary">
            <span className="text-muted text-base font-normal">$</span>
            {product.price.toFixed(2).split('.')[0]}
            <span className="text-muted text-base font-normal">.{product.price.toFixed(2).split('.')[1]}</span>
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation()
              addToCart(product)
            }}
            className="flex items-center gap-2 bg-surface hover:bg-neon/10 border border-border hover:border-neon text-textSecondary hover:text-neon font-display font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
