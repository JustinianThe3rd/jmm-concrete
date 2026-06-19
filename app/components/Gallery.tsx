"use client";

import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const GALLERY_ITEMS = [
  {
    title: "AC Unit Installation",
    category: "HVAC",
    image: "/images/download (2).png",
    alt: "Professional AC unit installation for a residential home in Marlton, NJ",
  },
  {
    title: "Furnace Replacement",
    category: "Heating",
    image: "/images/download (3).png",
    alt: "Furnace replacement and heating system upgrade in South Jersey",
  },
  {
    title: "Ductwork & Ventilation",
    category: "HVAC",
    image: "/images/download (7).png",
    alt: "Custom ductwork fabrication and ventilation service for improved airflow",
  },
  {
    title: "Commercial HVAC Setup",
    category: "Commercial",
    image: "/images/download (5).png",
    alt: "Full commercial HVAC system installation at a business property",
  },
  {
    title: "Residential HVAC System",
    category: "Residential",
    image: "/images/download (6).png",
    alt: "Complete residential HVAC installation with indoor and outdoor units",
  },
  {
    title: "HVAC Maintenance",
    category: "Service",
    image: "/images/download (4).png",
    alt: "Preventive HVAC maintenance and system tune-up service",
  },
];

export default function Gallery() {
  const looped = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section id="gallery" className="section-padding bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Work"
          title="Project Gallery"
          description="Browse some of our recent HVAC projects. Every job completed with expert care and precision."
        />
      </div>

      {/* Single scrolling row */}
      <div className="flex gap-4 animate-marquee">
        {looped.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 sm:w-72 lg:w-80"
          >
            <div className="relative rounded-xl overflow-hidden group">
              {/* Image — portrait card, always centered */}
              <div className="relative w-full aspect-[3/4] bg-[#141414]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Label overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3
                  className="text-white font-bold text-base sm:text-lg leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
