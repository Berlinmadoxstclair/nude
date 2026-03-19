import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nude: '#E8D5C4',
        blush: '#D4A59A',
        'warm-white': '#FAFAF8',
        ink: '#1A1A1A',
        stone: '#8C8078',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
