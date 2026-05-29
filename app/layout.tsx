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
  title: "JJM Concrete & Masonry | Stratford, NJ | Driveways, Patios & More",
  description:
    "Professional concrete contractor serving Stratford, NJ and surrounding areas. Specializing in driveways, patios, stamped concrete, foundations, walkways, and repairs. Free estimates — call (856) 312-8923!",
  keywords: [
    "concrete contractor",
    "Stratford NJ",
    "driveway",
    "patio",
    "stamped concrete",
    "masonry",
    "concrete repair",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
