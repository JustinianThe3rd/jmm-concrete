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
  title: "SJ Concrete Pumping, LLC | Haddon Heights, NJ | Concrete Pumping & Construction",
  description:
    "SJ Concrete Pumping, LLC — Haddon Heights' trusted concrete pumping and construction contractor. Foundation pouring, basement deepening, concrete work, demolition, renovations & more. Open 24 hours. Call (856) 534-4386!",
  keywords: [
    "concrete pumping",
    "Haddon Heights NJ",
    "foundation pouring",
    "basement deepening",
    "concrete construction",
    "demolition",
    "home renovations",
    "foundation installation",
    "slab foundation",
    "concrete work",
    "construction site excavation",
  ],
  openGraph: {
    title: "SJ Concrete Pumping, LLC | Haddon Heights, NJ",
    description:
      "Concrete pumping, foundation pouring, basement deepening & more. Serving Haddon Heights and surrounding areas. Open 24 hours.",
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
