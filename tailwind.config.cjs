/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          'display': ['Montserrat', 'sans-serif'],
          'serif': ['Playfair Display', 'serif'],
        },
      },
    },
    plugins: [],
  }