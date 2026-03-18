/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#13151A',
          muted: '#555555',
          accent: '#C4A77D',
        },
      },
      letterSpacing: {
        tighter: '-.05em',
        tight: '-.03em',
        widest: '.15em',
      },
    },
  },
  plugins: [],
};
