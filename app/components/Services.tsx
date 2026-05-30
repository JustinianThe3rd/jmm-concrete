const services = [
  {
    title: "Concrete Driveways",
    description:
      "Durable, expertly poured driveways built to withstand heavy use and New Jersey weather.",
  },
  {
    title: "Patios & Porches",
    description:
      "Beautiful outdoor living spaces customized to your style and home's architecture.",
  },
  {
    title: "Stamped & Stained",
    description:
      "Decorative concrete that mimics stone, brick, or tile at a fraction of the cost.",
  },
  {
    title: "Sidewalks & Walkways",
    description:
      "Smooth, level, and safe walkways that enhance your property's curb appeal.",
  },
  {
    title: "Foundations",
    description:
      "Solid concrete foundations for new construction, additions, and repairs.",
  },
  {
    title: "Steps & Fireplaces",
    description:
      "Custom steps and stunning outdoor fireplaces that become the centerpiece of your yard.",
  },
  {
    title: "Crack Repair",
    description:
      "Fix cracks, spalling, and damaged concrete — restore surfaces to like-new condition.",
  },
  {
    title: "Commercial Concrete",
    description:
      "Light commercial jobs, parking areas, and workspaces built to professional standards.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span
            className="text-[var(--accent)] font-bold uppercase tracking-[0.25em] text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What We Do
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-5 animate-hero-line" />
          <p className="mt-5 text-[var(--muted-foreground)] text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            From driveways to decorative stamped concrete, we handle it all
            with precision and care. Residential and commercial — no job too
            big or small.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group border-[3px] border-[var(--border-brutal)] bg-[var(--surface)] p-6 hover:border-[var(--accent)] hover:shadow-brutal hover:-translate-y-1 transition-all duration-300 cursor-default reveal delay-${Math.min(i + 1, 6)}`}
            >
              <h3
                className="text-lg font-black uppercase text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <div className="w-8 h-0.5 bg-[var(--accent)] mb-3 mt-2" />
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--primary)] font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-brutal-lg text-lg hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request a Free Estimate
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
