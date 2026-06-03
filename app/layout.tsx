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
  title: "Joe Hitchens Plumbing | Moorestown, NJ | Trusted Local Plumber",
  description:
    "Joe Hitchens Plumbing — Moorestown's trusted local plumber. Prompt, efficient, and trustworthy service for all your plumbing needs. Serving Moorestown, NJ & surrounding areas. Call (856) 235-1386!",
  keywords: [
    "plumber",
    "Moorestown NJ",
    "plumbing",
    "emergency plumber",
    "plumbing repair",
    "drain cleaning",
    "water heater",
    "pipe repair",
    "local plumber",
    "residential plumbing",
  ],
  openGraph: {
    title: "Joe Hitchens Plumbing | Moorestown, NJ",
    description:
      "Moorestown's trusted local plumber. Prompt, efficient, and trustworthy plumbing service. Call (856) 235-1386!",
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
