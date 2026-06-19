"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const galleryItems = [
  { src: "/images/download (2).png", label: "AC Unit Installation" },
  { src: "/images/download (3).png", label: "Furnace Replacement" },
  { src: "/images/download (7).png", label: "Ductwork & Ventilation" },
  { src: "/images/download (5).png", label: "Commercial HVAC Setup" },
  { src: "/images/download (6).png", label: "Residential HVAC System" },
  { src: "/images/download (4).png", label: "HVAC Maintenance" },
];

export default function Gallery() {
  const looped = [...galleryItems, ...galleryItems];

  return (
    <section
      id="gallery"
      className="section-padding bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Work"
          title="Project Gallery"
          description="Browse some of our recent HVAC projects. Every job completed with expert care and precision."
        />
      </div>

      {/* Scrolling track — CSS animation, no JS needed */}
      <div className="relative">
        <div
          className="flex gap-5 animate-marquee"
          style={{ width: "max-content" }}
        >
          {looped.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-[40vw] lg:w-[28vw]"
            >
              <div className="relative border-2 border-white/10 hover:border-[var(--accent)] bg-[#141414] group overflow-hidden transition-colors duration-500">
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, (min-width: 640px) 55vw, 75vw"
                    style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                    className="transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 pt-14">
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

      {/* Hint */}
      <div className="text-center mt-8">
        <span
          className="text-white/20 text-xs font-medium uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Auto-scrolling · Hover to pause
        </span>
      </div>
    </section>
  );
}
