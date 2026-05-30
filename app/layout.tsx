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
      <body className="min-h-full flex flex-col">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (!('IntersectionObserver' in window)) return;
                var observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
                var batch = function() {
                  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
                    observer.observe(el);
                  });
                };
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', batch);
                } else {
                  batch();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
