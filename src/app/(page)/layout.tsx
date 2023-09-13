
import '@/assets/globals.css';
import { beaufort, markpro } from '@/assets/fonts';
import { Header, Footer } from '@/components/shared';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
