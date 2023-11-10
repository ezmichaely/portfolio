import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '360': '360px'
      },
      width: {
        '360': '360px'
      },
      fontFamily: {
        beaufort: ['var(--font-beaufort)'],
        markpro: ['var(--font-markpro)'],
        inter: ['var(--font-inter)'],
      },
      screens: {
        '3xl': '1920px',
      },
      colors: {
        blues: {
          light: '#3163C4',
          dark: '#193263',
        },
        accent: '#D9D9D9',
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
        footer: 'linear-gradient(-264deg, #4C16BF 0%, #C213EE 160%)',
        submit: 'linear-gradient(90deg, #C213EE 0%, #4C16BF 101.7%)',
        reverse: 'linear-gradient(90deg, #4C16BF 0%, #C213EE 101.7%)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    // nextui(),
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
  ],
}
