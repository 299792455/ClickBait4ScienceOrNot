import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clickbait costs you...",
  description: "Dumbest thing ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className="h-full">
  <body className={`grid grid-rows-[auto_1fr_auto] h-full ${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Header/>
    <main className="flex items-center justify-center">
      {children}
    </main>
    <Footer/>
  </body>
</html>

  );
}
