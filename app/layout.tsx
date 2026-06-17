import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "DJ & Dior Tradesman | Moorestown, NJ | 24/7 HVAC Contractor",
  description:
    "DJ & Dior Tradesman — Moorestown's trusted HVAC contractor. Open 24 hours. Expert heating, cooling, and ventilation service for homes and businesses. Serving Moorestown, NJ & surrounding areas. Call (856) 723-8448!",
  keywords: [
    "HVAC contractor",
    "Moorestown NJ",
    "heating repair",
    "AC repair",
    "HVAC service",
    "emergency HVAC",
    "air conditioning",
    "furnace repair",
    "ventilation",
    "24 hour HVAC",
    "residential HVAC",
    "commercial HVAC",
  ],
  openGraph: {
    title: "DJ & Dior Tradesman | Moorestown, NJ | 24/7 HVAC",
    description:
      "Moorestown's trusted HVAC contractor. Open 24 hours. Expert heating, cooling, and ventilation service. Call (856) 723-8448!",
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
