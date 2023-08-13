import type { Metadata } from 'next'
import './globals.css';
import { inter, roboto_slab } from '@/constants/fonts';
import { Header, Footer } from '@/components/shared';

export const metadata: Metadata = {
  title: 'Portfolio | EZ MICHAEL',
  description: 'A personal portfolio of EZ MICHAEL YUCOR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
      className={`${inter.variable} ${roboto_slab.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
