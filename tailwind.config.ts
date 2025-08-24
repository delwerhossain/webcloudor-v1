import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // WebCloudor Brand Colors
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#EBF1F7',
          100: '#D7E4EF',
          200: '#B0C9DF',
          300: '#88ADCF',
          400: '#6092BF',
          500: '#3877AF', // Primary Blue
          600: '#1B365D', // Deep Ocean Blue (Main)
          700: '#152A4A',
          800: '#0F1F37',
          900: '#0A1524',
          950: '#050A12',
        },
        
        // Signal Yellow
        signal: {
          50: '#FFFBEB',
          100: '#FFF7D6',
          200: '#FFEFAD',
          300: '#FFE785',
          400: '#FFDF5C',
          500: '#FFD733',
          600: '#FFC300', // Signal Yellow (Main)
          700: '#CC9C00',
          800: '#997500',
          900: '#664E00',
          950: '#332700',
        },
        
        // Neutral Colors
        slate: {
          50: '#F8FAFC', // Paper Gray
          100: '#F1F5F9',
          200: '#E2E8F0', // Mist Gray
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B', // Slate Gray
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Animation
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      
      // Breakpoints for consistency
      screens: {
        'xs': '475px',
      },
      
      // Box shadows
      boxShadow: {
        'soft': '0 2px 8px 0 rgb(0 0 0 / 0.05)',
        'medium': '0 4px 16px 0 rgb(0 0 0 / 0.08)',
        'hard': '0 8px 32px 0 rgb(0 0 0 / 0.12)',
      },
    },
  },
  plugins: [],
}

export default config