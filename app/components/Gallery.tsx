"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const galleryItems = [
  { src: "/images/download (2).png", label: "Stamped Concrete Patio" },
  { src: "/images/download (3).png", label: "Concrete Driveway" },
  { src: "/images/download (7).png", label: "Pool Deck" },
  { src: "/images/download (5).png", label: "Decorative Walkway" },
  { src: "/images/download (6).png", label: "Outdoor Living Space" },
  { src: "/images/download (4).png", label: "Concrete Finishing" },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll with requestAnimationFrame for buttery smoothness
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let speed = 0.8; // pixels per frame — smooth and readable

    const step = () => {
      if (!isPaused && track) {
        track.scrollLeft += speed;

        // When we've scrolled through the first set, reset seamlessly
        const halfWidth = track.scrollWidth / 3;
        if (track.scrollLeft >= halfWidth * 2) {
          track.scrollLeft = halfWidth;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Pause on touch/click
  const handlePointerDown = () => setIsPaused(true);
  const handlePointerUp = () => setIsPaused(false);
  const handlePointerLeave = () => setIsPaused(false);

  // Triple the items for seamless loop
  const looped = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <section
      id="gallery"
      className="section-padding bg-[var(--primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
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
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-5 animate-hero-line" />
          <p className="mt-5 text-white/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Browse some of our recent concrete and masonry projects.
            Every job completed with care and precision.
          </p>
        </div>
      </div>

      {/* Auto-scrolling track */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUp}
          className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {looped.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw]"
            >
              <div className="relative border-[3px] border-white/20 hover:border-[var(--accent)] transition-all duration-500 bg-[var(--primary-light)] group overflow-hidden">
                {/* Image container — offset parent for fill */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, (min-width: 640px) 60vw, 80vw"
                    className="object-cover object-center transition-transform duration-700 var(--ease-out-expo) group-hover:scale-105"
                    style={{ objectPosition: "50% 50%" }}
                    draggable={false}
                  />
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-10">
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
      </div>

      {/* Controls row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between">
        <span
          className="text-white/30 text-xs font-medium uppercase tracking-widest"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {isPaused ? "▶ Tap to resume" : "Pause to explore →"}
        </span>
        <div className="flex gap-1.5">
          {galleryItems.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-white/20 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
