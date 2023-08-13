import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'body': 'url("/images/bg/bg_body.jpg")',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      roboto_slab: ['Roboto_Slab', 'serif'],
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
    },
  },
  plugins: [],
}
export default config
