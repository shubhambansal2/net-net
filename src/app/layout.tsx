
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
// import {Providers} from "@/app/providers";


import { cn } from "@/lib/utils"
import Footer from "@/components/Footer";

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