"use client";

import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const GALLERY_ITEMS = [
  {
    title: "AC Unit Installation",
    category: "HVAC",
    image: "/images/gallery-ac-install.png",
    alt: "Professional AC unit installation for a residential home in Marlton, NJ",
  },
  {
    title: "Furnace Replacement",
    category: "Heating",
    image: "/images/gallery-furnace.png",
    alt: "Furnace replacement and heating system upgrade in South Jersey",
  },
  {
    title: "Ductwork & Ventilation",
    category: "HVAC",
    image: "/images/gallery-ductwork.png",
    alt: "Custom ductwork fabrication and ventilation service for improved airflow",
  },
  {
    title: "Commercial HVAC Setup",
    category: "Commercial",
    image: "/images/gallery-commercial.png",
    alt: "Full commercial HVAC system installation at a business property",
  },
  {
    title: "Residential HVAC System",
    category: "Residential",
    image: "/images/gallery-residential.png",
    alt: "Complete residential HVAC installation with indoor and outdoor units",
  },
  {
    title: "HVAC Maintenance",
    category: "Service",
    image: "/images/gallery-maintenance.png",
    alt: "Preventive HVAC maintenance and system tune-up service",
  },
];

function GalleryCard({
  title,
  category,
  image,
  alt,
}: {
  title: string;
  category: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-xl overflow-hidden relative group cursor-pointer">
      {/* Image container — portrait aspect ratio */}
      <div className="relative aspect-[2/1] w-full">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-wider mb-1 text-[var(--accent)]">
          {category}
        </span>
        <h3
          className="text-white font-bold text-base sm:text-lg leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-300 pointer-events-none" />
    </div>
  );
}

export default function Gallery() {
  const doubled = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section id="gallery" className="section-padding bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Work"
          title="Project Gallery"
          description="Browse some of our recent HVAC projects. Every job completed with expert care and precision."
        />
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Two marquee rows */}
        <div className="flex flex-col gap-4">
          {/* Row 1 — left to right */}
          <div>
            <div
              className="marquee-track"
              style={{ "--marquee-duration": "50s" } as React.CSSProperties}
            >
              <div className="marquee-content gap-4 px-2">
                {doubled.map((item, i) => (
                  <GalleryCard
                    key={`r1-${i}`}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    alt={item.alt}
                  />
                ))}
              </div>
              <div className="marquee-content gap-4 px-2" aria-hidden="true">
                {doubled.map((item, i) => (
                  <GalleryCard
                    key={`r1-dup-${i}`}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 — right to left */}
          <div>
            <div
              className="marquee-track"
              style={
                {
                  "--marquee-duration": "45s",
                  animationDirection: "reverse",
                } as React.CSSProperties
              }
            >
              <div className="marquee-content gap-4 px-2">
                {[...doubled].reverse().map((item, i) => (
                  <GalleryCard
                    key={`r2-${i}`}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    alt={item.alt}
                  />
                ))}
              </div>
              <div className="marquee-content gap-4 px-2" aria-hidden="true">
                {[...doubled].reverse().map((item, i) => (
                  <GalleryCard
                    key={`r2-dup-${i}`}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
