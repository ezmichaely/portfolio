// import {Providers} from "./providers";

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

  const css = ` ${inter.variable} ${beaufort.variable} ${markpro.variable}`;
  return (
    <html lang="en" className={css} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
