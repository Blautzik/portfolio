/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        '0%, 100%': {opacity: 0.7, transform: 'scale(2), rotate(5deg)'},
        
            '50%': {
              opacity: 1,
              transform: 'scale(800), rotate(-150deg)'
            }
        
      },
      animation:{
        'pulse-grow-slow':  'pulse 10s linear infinite'
      },

    },
  },
  plugins: [require('tailwindcss-no-scrollbar')],
}
