"use client";

import Image from "next/image";
import { useRef } from "react";

const galleryItems = [
  { src: "/images/download (2).png", label: "Stamped Concrete Patio" },
  { src: "/images/download (3).png", label: "Concrete Driveway" },
  { src: "/images/download (7).png", label: "Pool Deck" },
  { src: "/images/download (5).png", label: "Decorative Walkway" },
  { src: "/images/download (6).png", label: "Outdoor Living Space" },
  { src: "/images/download (4).png", label: "Concrete Finishing" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="section-padding bg-[var(--primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="text-[var(--accent)] font-bold uppercase tracking-[0.25em] text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Work
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Project Gallery
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-5" />
          <p className="mt-5 text-white/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Browse some of our recent concrete and masonry projects.
            Every job completed with care and precision.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto carousel-touch pb-4 px-4 snap-x snap-mandatory md:snap-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" as unknown as undefined }}
      >
        {/* Double the items for infinite scroll illusion */}
        {[...galleryItems, ...galleryItems, ...galleryItems].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw]"
          >
            <div className="relative border-[3px] border-white/20 hover:border-[var(--accent)] transition-colors duration-300 bg-[var(--primary-light)] group">
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 768px) 45vw, (min-width: 640px) 70vw, 85vw"
                  className="object-contain"
                />
              </div>
              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                <span
                  className="text-white font-black uppercase text-sm sm:text-base tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint on mobile */}
      <div className="text-center mt-6 md:hidden">
        <span
          className="text-white/40 text-xs font-medium uppercase tracking-widest"
          style={{ fontFamily: "var(--font-body)" }}
        >
          ← Swipe to explore →
        </span>
      </div>

      {/* Desktop: scroll indicator dots */}
      <div className="hidden md:flex justify-center gap-2 mt-8">
        {galleryItems.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white/30"
            style={{ fontFamily: "var(--font-body)" }}
          />
        ))}
      </div>
    </section>
  );
}
