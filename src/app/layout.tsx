import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const simplonNorm = localFont({
  src: '../../public/fonts/SimplonNorm-Regular-WebS.woff',
  variable: '--font-simplon-norm',
  display: 'block'
})
export const metadata: Metadata = {
  title: "Scrip Store",
  description: "Your own store",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={simplonNorm.variable}>
        {children}
      </body>
    </html>
  );
}
