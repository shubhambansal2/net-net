import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Script from "next/script";


const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Blueberry AI",
  description: "Blueberry AI",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SDF5CRC3VJ"></Script>
        <Script id="google-analytics">
            {
                `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SDF5CRC3VJ');
           `
            }
        </Script>
    </head>
      <body>
        {/*<div className={cn("relative w-full flex flex-col items-center justify-center", fontSans.variable) }>*/}
            <Navbar/>
        {/*</div>*/}
        {children}

      </body>
    </html>
  );
}

// new changes to be merged 