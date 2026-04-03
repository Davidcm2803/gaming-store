export default function Footer({ navigate }) {
  const year = new Date().getFullYear()

  const links = {
    Shop: [
      { label: 'PlayStation', page: 'shop' },
      { label: 'Xbox', page: 'shop' },
      { label: 'Controllers', page: 'shop' },
      { label: 'Accessories', page: 'shop' },
    ],
    Support: [
      { label: 'FAQ', page: 'home' },
      { label: 'Shipping', page: 'home' },
      { label: 'Returns', page: 'home' },
      { label: 'Warranty', page: 'home' },
    ],
    Company: [
      { label: 'About', page: 'home' },
      { label: 'Careers', page: 'home' },
      { label: 'Privacy', page: 'home' },
      { label: 'Terms', page: 'home' },
    ],
  }

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon to-ps flex items-center justify-center shadow-neon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-widest">
                NEXUS<span className="text-gradient-neon">PLAY</span>
              </span>
            </button>
            <p className="text-textSecondary text-sm leading-relaxed max-w-xs">
              Your premier destination for PlayStation, Xbox, and gaming accessories. Level up your gaming experience.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {['twitter', 'instagram', 'youtube', 'discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-neon hover:border-neon transition-all duration-200"
                  aria-label={social}
                >
                  <span className="font-mono-game text-xs capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-display font-bold text-sm tracking-widest text-textPrimary mb-4">{section.toUpperCase()}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => navigate(item.page)}
                      className="text-textSecondary hover:text-neon text-sm transition-colors font-body"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-mono-game">
            © {year} NEXUSPLAY. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((card) => (
              <span key={card} className="font-mono-game text-xs text-muted border border-border px-2 py-0.5 rounded">
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
