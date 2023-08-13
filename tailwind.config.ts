import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
      roboto_slab: ['var(--font-roboto_slab)'],
    },
    extend: {
      colors: {
        newPurple: {
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
        header: 'linear-gradient(212deg, #723BE5 0%, #4C16BF 51.04%)',
        footer: 'linear-gradient(-264deg, #4C16BF 0%, #C213EE 160%)'
      },
    },
  },
  plugins: [],
}
export default config
