/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#c0392b',
        'brand-red-dark': '#a93226',
        'brand-dark': '#0a0a0a',
        'brand-darker': '#111111',
        'brand-card': '#1a1a1a',
        'brand-muted': '#cccccc',
        'brand-yellow': '#e8f54a',
        'brand-gold': '#d4af37',
        'brand-line': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-body)', 'Open Sans', 'sans-serif'],
        display: ['var(--font-display)', 'Playfair Display', 'serif'],
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}
