
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
      className={`${beaufort.variable} ${markpro.variable}`}>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
