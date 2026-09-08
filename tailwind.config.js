/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#060b1a',
        surface: '#111827',
        line: '#1f2937',
        accent: '#60a5fa',
        accent2: '#22d3ee',
        accent3: '#a78bfa',
        text: '#e5edf7',
        muted: '#9aa8ba',
      },
      boxShadow: {
        glow: '0 0 30px rgba(96,165,250,0.25)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
