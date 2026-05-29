import Image from "next/image";

const galleryItems = [
  {
    src: "/images/download (2).png",
    alt: "Stamped concrete patio",
    label: "Stamped Concrete Patio",
  },
  {
    src: "/images/download (3).png",
    alt: "Concrete driveway installation",
    label: "Concrete Driveway",
  },
  {
    src: "/images/download (7).png",
    alt: "Concrete pool deck",
    label: "Pool Deck",
  },
  {
    src: "/images/download (5).png",
    alt: "Decorative concrete walkway",
    label: "Decorative Walkway",
  },
  {
    src: "/images/download (6).png",
    alt: "Outdoor living space with concrete",
    label: "Outdoor Living Space",
  },
  {
    src: "/images/download (4).png",
    alt: "Professional concrete finishing",
    label: "Concrete Finishing",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-stone-50 dark:bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground dark:text-white">
            Project Gallery
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Browse some of our recent concrete and masonry projects. Every job is
            completed with care and precision.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-stone-100 dark:bg-stone-800"
            >
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-white font-bold text-lg drop-shadow-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
