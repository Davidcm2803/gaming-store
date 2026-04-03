export default function CartDrawer({ open, onClose, cart, updateQty, removeFromCart, cartTotal, navigate }) {
  if (!open) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overlay-enter"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md z-50 flex flex-col bg-surface border-l border-border animate-slideIn shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-neon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg tracking-wider">YOUR CART</h2>
              <p className="text-muted text-xs font-mono-game">{cart.length} item{cart.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-muted hover:text-textPrimary hover:bg-card transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
              <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center">
                <svg className="w-9 h-9 text-muted" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-display font-semibold text-lg text-textSecondary">Cart is empty</p>
                <p className="text-muted text-sm mt-1">Add some gear to get started</p>
              </div>
              <button
                onClick={() => { navigate('shop'); onClose() }}
                className="btn-neon text-sm"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 rounded-xl bg-card border border-border">
                {/* Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-semibold text-sm leading-tight line-clamp-2 text-textPrimary">
                    {item.name}
                  </h4>
                  <p className="text-muted text-xs font-mono-game mt-0.5">{item.category}</p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1 bg-surface rounded-lg border border-border">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-muted hover:text-neon transition-colors rounded-l-lg"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      </button>
                      <span className="w-7 text-center font-mono-game text-sm font-bold text-textPrimary">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-muted hover:text-neon transition-colors rounded-r-lg"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    </div>

                    {/* Price */}
                    <span className="font-display font-bold text-textPrimary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="self-start p-1 text-muted hover:text-red-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            {/* Subtotal */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-textSecondary">
                <span>Subtotal</span>
                <span className="font-mono-game">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-textSecondary">
                <span>Shipping</span>
                <span className="text-neonGreen font-mono-game text-xs">FREE</span>
              </div>
              <div className="flex justify-between font-display font-bold text-xl pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-neon">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout button */}
            <button
              onClick={() => { navigate('checkout'); onClose() }}
              className="w-full btn-neon flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <button
              onClick={() => { navigate('shop'); onClose() }}
              className="w-full text-center text-muted text-sm hover:text-textPrimary transition-colors font-display"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
