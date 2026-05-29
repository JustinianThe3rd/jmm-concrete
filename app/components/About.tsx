export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Professional concrete work in progress"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-accent text-white rounded-2xl p-5 shadow-xl">
              <div className="text-4xl font-extrabold">4.5</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "text-yellow-300" : "text-yellow-300/50"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm mt-1 font-medium">Google Reviews</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground dark:text-white leading-tight">
              We Breathe Concrete —
              <br />
              It&apos;s All We Do.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              <strong className="text-foreground dark:text-white">
                JJM Concrete and Masonry
              </strong>{" "}
              is Stratford&apos;s trusted local contractor, specializing in transforming
              ordinary spaces into stunning hardscapes. From residential driveways to
              commercial projects, we bring craftsmanship, integrity, and attention to
              detail to every job.
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
                  <div className="w-6 h-6 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground dark:text-white font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8563128923"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light shadow-lg shadow-primary/15"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-100 dark:bg-stone-800 text-foreground dark:text-white font-bold rounded-xl hover:bg-stone-200 dark:hover:bg-stone-700 border border-border"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
