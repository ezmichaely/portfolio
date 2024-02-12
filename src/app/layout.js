import {Providers} from "./providers";

import '@/assets/globals.css';
import { beaufort, markpro, inter } from '@/assets/fonts';

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
      className={`
        ${inter.variable}
        ${beaufort.variable}
        ${markpro.variable}
      `} >

      <body >
        {/* <Providers>
          {children}
        </Providers> */}

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
