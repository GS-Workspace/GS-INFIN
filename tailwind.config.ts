import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '992px',
      xl: '1180px',
      '2xl': '1380px'
    },

    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      cursor: {
        better: 'url("/images/cursor_1.svg"), default',
        hover: 'url("/images/cursor_2.svg"), pointer'
      }
    }
  },
  plugins: []
}
export default config
