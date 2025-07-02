import type { Metadata } from "next";
import { Geist, Geist_Mono, Young_Serif } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: ['400'], // Especifica los pesos que necesitas
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musa Media",
  description: "Musa Media Design Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${youngSerif.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
