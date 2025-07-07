import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HamburgerMenu from '../components/hamburger_menu';
import ParallaxBackground from '../components/parallax';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "therk.no",
  description: "Einars website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParallaxBackground>
          <HamburgerMenu />
          {children}
        </ParallaxBackground>
      </body>
    </html>
  );
}