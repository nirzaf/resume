/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Gradient classes for cards
    {
      pattern: /from-(blue|indigo|purple|cyan)-(400|500|600|700)/,
      variants: ['hover', 'dark'],
    },
    {
      pattern: /to-(blue|indigo|purple|cyan)-(400|500|600|700)/,
      variants: ['hover', 'dark'],
    },
    {
      pattern: /via-(blue|indigo|purple|cyan)-(400|500|600|700)/,
      variants: ['hover', 'dark'],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1920px',
      },
    },
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#66ccff',
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#3d3d3d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'gradient': 'gradient 3s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'tilt': 'tilt 10s infinite linear',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-spin': 'gradient-spin 3s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-spin': {
          '0%, 100%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          }
        },
        'shimmer': {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'tilt': {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '.5',
          },
          '50%': {
            opacity: '.15',
          },
        },
        },
        boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        },
        backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)',
        }
      },
      },
      plugins: [],
    }
