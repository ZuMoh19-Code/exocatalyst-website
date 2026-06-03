import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ExO Catalyst Brand Colors
        navy: {
          950: '#0A192F',
          900: '#0F1B3C',
          800: '#142849',
          700: '#1a3556',
        },
        cyan: {
          bright: '#00B4D8',
          accent: '#0EA5E9',
          dim: '#00A8C8',
        },
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(0, 180, 216, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 180, 216, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-80': '80px 80px',
      },
      animation: {
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 180, 216, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 180, 216, 0.8)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 180, 216, 0.5)',
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 180, 216, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    // Custom plugin for fancy borders
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.border-glow-cyan': {
          borderColor: '#00B4D8',
          boxShadow: 'inset 0 0 10px rgba(0, 180, 216, 0.2)',
        },
        '.text-glow': {
          textShadow: '0 0 20px rgba(0, 180, 216, 0.5)',
        },
        '.backdrop-blur-xl': {
          backdropFilter: 'blur(80px)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
