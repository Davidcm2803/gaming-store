/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        surface: '#131929',
        card: '#1A2235',
        border: '#1E2D47',
        ps: '#0070CC',
        psLight: '#00A8FF',
        xbox: '#107C10',
        xboxLight: '#52B043',
        neon: '#00D4FF',
        neonGreen: '#39FF14',
        muted: '#6B7A99',
        textPrimary: '#E8EDF5',
        textSecondary: '#8A9BBB',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Syne', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        ps: '0 0 20px rgba(0, 112, 204, 0.4)',
        xbox: '0 0 20px rgba(16, 124, 16, 0.4)',
        neon: '0 0 20px rgba(0, 212, 255, 0.4)',
        card: '0 4px 24px rgba(0,0,0,0.5)',
      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_neon: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0,212,255,0.8)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        fadeIn: 'fadeIn 0.5s ease forwards',
        pulse_neon: 'pulse_neon 2s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
