import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

// 1. Import your custom Client Provider wrapper

import { Providers } from "@/components/Providers";



const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter"

});



const playfair = Playfair_Display({

  subsets: ["latin"],

  variable: "--font-playfair"

});



export const metadata: Metadata = {

  title: "PropMate | Premium Real Estate",

  description: "Discover premium listings tailored to your lifestyle.",

};



export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en" className="scroll-smooth">

      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>

        {/* 2. Wrap children with Providers to enable Auth state globally */}

        <Providers>

          {children}

        </Providers>

      </body>

    </html>

  );

}