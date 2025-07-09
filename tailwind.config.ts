import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#141414', // Primary
          2: '#1a1a1a', // Secondary
          3: '#000000', // Tertiary
          4: '#4c4c4c', // Accent
        },
        blue: {
          1: '#4c4c4c', // Accent (replacing blue with accent)
        },
        sky: {
          1: '#4c4c4c', // Accent (if used for highlights)
          2: '#1a1a1a', // Secondary (if used for backgrounds)
          3: '#141414', // Primary (if used for backgrounds)
        },
        orange: {
          1: '#4c4c4c', // Accent (if used for highlights)
        },
        purple: {
          1: '#4c4c4c', // Accent (if used for highlights)
        },
        yellow: {
          1: '#4c4c4c', // Accent (if used for highlights)
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
