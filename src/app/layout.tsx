import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HamburgerMenu from '../components/hamburger_menu';

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
        <HamburgerMenu />
        {children}
      </body>
    </html>
  );
}