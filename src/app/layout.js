// import { Inter } from 'next/font/google'
// import './globals.css'
import {Providers} from "./providers";

// const inter = Inter({ subsets: ['latin'] })


import '@/assets/globals.css';

import { beaufort, markpro } from '@/assets/fonts';
import {
  Header,
  Footer
} from '@/components/shared'

export const metadata = {
  title: 'Portfolio | EZ MICHAEL',
  description: 'A personal portfolio of EZ MICHAEL YUCOR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={
        `dark'
        ${beaufort.variable}
        ${markpro.variable}`}
    >

      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>

    </html>
  )
}
