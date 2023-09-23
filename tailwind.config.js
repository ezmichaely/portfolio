/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '3rem',
      center: true,
    },
    extend: {
      fontFamily: {
        beaufort: ['var(--font-beaufort)'],
        markpro: ['var(--font-markpro)'],
      },
      screens: {
        '3xl': '1920px',
      },
      colors: {
        plum: {
          neon: '#C213EE',
          bluish: '#723BE5',
          blue: '#4C16BF'
        },
        mirage: {
          light: '#1C1C27',
          dark: '#191924',
        },
      },
      backgroundImage: {
        body: 'url("/images/bg/bg_body2.jpg")',
        profile: 'url("/images/bg/profile.jpg")',
        header: 'linear-gradient(212deg, #723BE5 0%, #4C16BF 51.04%)',
        footer: 'linear-gradient(-264deg, #4C16BF 0%, #C213EE 160%)'
      },
    },
  },
  plugins: [],
}
