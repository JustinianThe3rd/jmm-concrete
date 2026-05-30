import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JJM Concrete & Masonry | Stratford, NJ | Driveways, Patios & More",
  description:
    "Stratford's premier concrete contractor. Driveways, patios, stamped concrete, foundations, walkways, and repairs. Licensed & insured. Free estimates — call (856) 312-8923!",
  keywords: [
    "concrete contractor",
    "Stratford NJ",
    "driveway",
    "patio",
    "stamped concrete",
    "masonry",
    "concrete repair",
    "pool deck",
    "sidewalk",
    "foundation",
  ],
  openGraph: {
    title: "JJM Concrete & Masonry | Stratford, NJ",
    description:
      "Stratford's premier concrete contractor. Driveways, patios, stamped concrete & more. Free estimates.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
