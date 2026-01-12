/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: "#0a0a0f",        // Deep dark blue-black
        darkCard: "#1a1a2e",         // Dark blue-gray
        darkCardHover: "#252545",    // Lighter on hover
        darkText: "#e8e8f0",         // Cool white
        accent: "#3b82f6",           // Clean blue
        accentHover: "#1d4ed8",      // Deeper blue
        secondary: "#f59e0b",
        accentLight: "#e6f7ff",
        secondaryHover: "#ff8787",
      },
      fontFamily: {
        Outfit: ["var(--font-outfit)", "sans-serif"],
        Ovo: ["var(--font-ovo)", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
        "skills-auto": "repeat(auto-fit, minmax(180px, 1fr))",
      },
      /* ─── ADDED ANIMATIONS ─── */
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      /* ─── ADDED GRID BACKGROUND UTILITY ─── */
      backgroundImage: {
        'grid-black': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")",
        'grid-white': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};