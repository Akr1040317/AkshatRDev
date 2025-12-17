import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: 'var(--bg-0)',
          1: 'var(--bg-1)',
        },
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        pink: 'var(--pink)',
        orange: 'var(--orange)',
      },
    },
  },
  plugins: [],
}
export default config

