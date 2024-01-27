import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import { poppins, robotoSlab } from "@/assets/fonts";
import { Analytics } from '@vercel/analytics/react';
import "@/assets/globals.css";


export const metadata: Metadata = {
  title: "EZ Michael Yucor | Portfolio",
  description: "Portfolio of EZ Michael Yucor",
  authors: {
    name: 'EZ Michael Yucor',
    url: 'https://ezmichaely.vercel.app'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const cssFonts = `${poppins.variable} ${robotoSlab.variable}`;

  return (
    <html lang="en" className={cssFonts} suppressHydrationWarning>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
