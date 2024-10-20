/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0a0e17',
        'cyber-surface': '#1a1f2e',
        'cyber-primary': '#00ff00',
        'cyber-secondary': '#00ffff',
        'cyber-accent': '#ff00ff',
        'cyber-text': '#e0e0e0',
      },
    },
  },
  plugins: [],
};