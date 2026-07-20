/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F4F8',      // page background
        ink: '#141414',        // near-black text
        brand: {
          light: '#8FE0F7',
          DEFAULT: '#25AEE8',  // primary blue (buttons/wave/social)
          dark: '#0E82B5',
          deep: '#0B6E9C',
        },
        bubble: '#57C9EE',     // review speech-bubble blue
        sunshine: '#F6DE23',   // yellow CTA buttons
        cloud: '#FAFBFD',      // card background
      },
      fontFamily: {
        script: ['"Pacifico"', 'cursive'],
        display: ['"Anton"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20, 20, 20, 0.18)',
        soft: '0 6px 20px -8px rgba(20, 20, 20, 0.12)',
      },
      borderRadius: {
        pill: '999px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
