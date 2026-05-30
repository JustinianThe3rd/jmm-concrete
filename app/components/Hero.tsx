export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-8 animate-hero-up hero-stagger-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? "text-[var(--accent)]" : "text-[var(--accent)]/40"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
            4.5 Stars — 15+ Happy Customers
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white animate-hero-up hero-stagger-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Stratford&apos;s
          <br />
          <span className="text-[var(--accent)]">Premier</span>
          <br />
          Concrete &amp; Masonry
        </h1>

        {/* Gold accent bar — animated width draw */}
        <div className="mx-auto mt-6 mb-6 h-1 bg-[var(--accent)] animate-hero-line" />

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed animate-hero-up hero-stagger-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Driveways, patios, stamped concrete, foundations &amp; more.
          Residential and commercial — built to last. Serving Stratford, NJ
          &amp; surrounding areas.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-up hero-stagger-4">
          <a
            href="tel:8563128923"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[#0a0a0a] text-lg font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-brutal-lg hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.4)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call (856) 312-8923
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white text-lg font-bold uppercase tracking-wider border-[3px] border-white/30 hover:border-white hover:bg-white/5 transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Free Estimate
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-hero-up hero-stagger-4">
          {[
            { value: "15+", label: "5-Star Reviews" },
            { value: "100%", label: "Satisfaction" },
            { value: "Free", label: "Estimates" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-hero-up"
              style={{ animationDelay: `${0.7 + i * 0.1}s` }}
            >
              <div
                className="text-3xl sm:text-4xl font-black text-white uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm text-white/40 mt-1 font-medium uppercase tracking-wider"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/30"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="square" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
