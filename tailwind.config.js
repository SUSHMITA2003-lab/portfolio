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
          950: '#030712',
          900: '#090D16',
          850: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        neon: {
          cyan: '#06B6D4',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          indigo: '#6366F1',
          green: '#10B981',
          pink: '#EC4899',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(99,102,241,0.15) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
        'neon-glow': 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(0,0,0,0) 70%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(6, 182, 212, 0.4)',
        'neon-violet': '0 0 25px rgba(139, 92, 246, 0.4)',
        'neon-indigo': '0 0 30px rgba(99, 102, 241, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-rotate': 'glowRotate 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
