/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Swiggy: {
          orange: '#FC8019',
          dark: '#C75100',
          light: '#FFE5D0',
        },
        surface: '#F8F8F8',
        charcoal: '#1F1F1F',
      },
      fontFamily: {
        display: ['"Poppins"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 30px rgba(0,0,0,0.08)',
      },
      keyframes: {
        pulseCart: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.9 },
        },
        fadeSlideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '33%': { transform: 'scale(1.05) translate(10px, -10px)' },
          '66%': { transform: 'scale(0.95) translate(-6px, 12px)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        pulseCart: 'pulseCart 1.4s ease-in-out infinite',
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FC8019 0%, #FF4B2B 70%)',
        'pattern-food': "url('/patterns/food-doodles.svg')",
      },
    },
  },
  plugins: [],
}

