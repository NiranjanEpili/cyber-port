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
        'cyber-border': '#00ff00', // Added for borders
      },
      fontFamily: {
        'cyber': ['"Share Tech Mono"', 'monospace'], // A tech-inspired font family
      },
      screens: {
        '2xl': '1536px',
      },
      keyframes: {
        pulsePrimary: {
          '0%, 100%': { boxShadow: '0 0 10px #00ff00' },
          '50%': { boxShadow: '0 0 20px #00ff00' },
        },
      },
      animation: {
        pulsePrimary: 'pulsePrimary 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'media', // Dark mode based on user preferences
};
