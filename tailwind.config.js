/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F172A',
          card: '#111C31',
          surface: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: 'rgba(248, 250, 252, 0.10)',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F8FAFC',
          surface: '#F1F5F9',
          text: '#0F172A',
          muted: '#475569',
          border: 'rgba(15, 23, 42, 0.10)',
        },
        accent: {
          DEFAULT: '#4F46E5',
          secondary: '#6366F1',
          light: '#818CF8',
          dark: '#3730A3',
          glow: 'rgba(79, 70, 229, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
