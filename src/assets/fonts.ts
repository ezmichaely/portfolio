import { Poppins, Roboto_Slab } from 'next/font/google'


export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-robotoSlab',
  display: 'swap',
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})