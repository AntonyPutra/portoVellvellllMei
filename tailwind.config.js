/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#37192C',
          dark: '#24101D',
          light: '#4D253F',
          tint: 'rgba(55, 25, 44, 0.08)',
        },
        vanilla: {
          DEFAULT: '#FFF3E5',
          light: '#FFF9F2',
          sheet: '#FDFBF7',
        },
        manila: {
          DEFAULT: '#EAD7B5',
          dark: '#D4BD99',
          deep: '#C7AE87',
          tan: '#D8C3A5',
        },
        kraft: {
          DEFAULT: '#CBB493',
          dark: '#B59B78',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D06F',
          dark: '#A48325',
        },
        stampRed: {
          DEFAULT: '#B33939',
          dark: '#8E2B2B',
        },
        charcoal: '#1F191D',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        editorial: ['Cormorant Garamond', 'Garamond', 'serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        hand: ['Caveat', 'Pinyon Script', 'cursive'],
      },
      boxShadow: {
        'plum-sm': '0 2px 8px rgba(55, 25, 44, 0.08)',
        'plum-md': '0 8px 24px rgba(55, 25, 44, 0.14)',
        'plum-lg': '0 16px 40px rgba(55, 25, 44, 0.18), 0 4px 12px rgba(55, 25, 44, 0.1)',
        'plum-elevated': '0 24px 60px rgba(55, 25, 44, 0.24), 0 8px 20px rgba(55, 25, 44, 0.12)',
      },
      backgroundImage: {
        'paper-grid': "linear-gradient(rgba(55, 25, 44, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 25, 44, 0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '20px 20px',
      }
    },
  },
  plugins: [],
}
