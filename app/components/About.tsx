import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="border-[3px] border-[var(--border-brutal)] shadow-brutal-lg overflow-hidden bg-[var(--muted)]">
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src="/images/download (1).png"
                  alt="Professional concrete work by JJM"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-[var(--accent)] text-[var(--primary)] p-4 shadow-brutal-lg border-[3px] border-[var(--border-brutal)]">
              <div
                className="text-4xl font-black leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                4.5
              </div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i < 4 ? "text-[var(--primary)]" : "text-[var(--primary)]/40"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ fontFamily: "var(--font-body)" }}>
                Google Reviews
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span
              className="text-[var(--accent)] font-bold uppercase tracking-[0.25em] text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              About Us
            </span>
            <h2
              className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] text-[var(--foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why JJM?
            </h2>
            <div className="w-16 h-1 bg-[var(--accent)] mt-5 mb-6" />
            <p className="text-lg leading-relaxed text-[var(--foreground-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
              <strong className="text-[var(--foreground)]">
                JJM Concrete and Masonry
              </strong>{" "}
              is Stratford&apos;s trusted local contractor, specializing in
              transforming ordinary spaces into stunning hardscapes. From
              residential driveways to commercial projects, we bring
              craftsmanship, integrity, and attention to detail to every job.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Residential & Commercial Concrete",
                "Free Consultations & Estimates",
                "Stamped, Stained & Decorative Concrete",
                "Driveways, Patios, Sidewalks & More",
                "Fully Licensed & Insured",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="square" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    className="text-[var(--foreground)] font-medium uppercase tracking-wide text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8563128923"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-[var(--primary)] font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors shadow-brutal"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-[var(--foreground)] font-bold uppercase tracking-wider border-[3px] border-[var(--border-brutal)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
