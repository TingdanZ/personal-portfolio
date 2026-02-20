import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Your Name] - Personal Portfolio",
  description: "A high-end, minimalist personal portfolio website showcasing unique personal brand through smooth interactions and modern typography.",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-beige`}
      >
        <Navbar />
        <main className="max-w-5xl mx-auto my-12 bg-white shadow-2xl rounded-lg p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
