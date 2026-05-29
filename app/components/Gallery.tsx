const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
    alt: "Stamped concrete patio",
    label: "Stamped Concrete Patio",
  },
  {
    src: "https://images.unsplash.com/photo-1615529179035-e760f6a45123?auto=format&fit=crop&w=600&q=80",
    alt: "Concrete driveway installation",
    label: "Concrete Driveway",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    alt: "Professional concrete finishing",
    label: "Concrete Finishing",
  },
  {
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80",
    alt: "Decorative concrete walkway",
    label: "Decorative Walkway",
  },
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    alt: "Outdoor living space with concrete",
    label: "Outdoor Living Space",
  },
  {
    src: "https://images.unsplash.com/photo-1615529162924-f5b8e35f2b33?auto=format&fit=crop&w=600&q=80",
    alt: "Concrete pool deck",
    label: "Pool Deck",
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
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
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
