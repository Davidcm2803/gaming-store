import { useState } from 'react'

export default function Navbar({ navigate, cartCount, openCart, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Shop', page: 'shop' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon to-ps flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform duration-200">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-textPrimary">
              NEXUS<span className="text-gradient-neon">PLAY</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => navigate(link.page)}
                className={`font-display font-semibold tracking-wider text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === link.page
                    ? 'text-neon bg-neon/10'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-surface'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-lg text-textSecondary hover:text-neon hover:bg-neon/10 transition-all duration-200"
              aria-label="Open cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-neon text-bg text-xs font-bold font-mono-game flex items-center justify-center animate-pulse_neon">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-textSecondary hover:text-textPrimary hover:bg-surface transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-border">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => { navigate(link.page); setMenuOpen(false) }}
                className={`w-full text-left font-display font-semibold tracking-wider text-sm px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentPage === link.page
                    ? 'text-neon bg-neon/10'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-surface'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
