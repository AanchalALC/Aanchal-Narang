/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2F4F8',      // page background
        ink: '#17232E',        // calm near-black text / headings
        muted: '#5C6B79',      // secondary text
        line: '#E4EAF1',       // hairline borders
        brand: {
          light: '#8FE0F7',
          DEFAULT: '#25AEE8',  // primary blue
          dark: '#0E82B5',
          deep: '#0B6E9C',
        },
        bubble: '#57C9EE',     // review accent blue
        sunshine: '#F6DE23',   // yellow CTA
        cloud: '#FAFBFD',      // subtle card tint
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        display: ['"Fraunces"', 'Georgia', 'serif'], // warm modern serif (replaces Anton)
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,35,46,.06), 0 4px 14px rgba(23,35,46,.05)',
        card: '0 8px 30px rgba(23,35,46,.09)',
        lift: '0 18px 48px rgba(23,35,46,.14)',
      },
      borderRadius: {
        pill: '999px',
      },
      spacing: {
        4.5: '1.125rem',  // 18px
        5.5: '1.375rem',  // 22px
        13: '3.25rem',    // 52px
        15: '3.75rem',    // 60px
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