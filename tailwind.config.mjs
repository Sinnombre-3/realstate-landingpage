/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#252526',
        'brand-black': '#121212',
        'brand-primary': '#BEAF87',
        'brand-bg': '#FFFFFF',
        'brand-secondary': '#727273',
        'ui-hover': '#746649',
        'ui-link': '#517394',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}