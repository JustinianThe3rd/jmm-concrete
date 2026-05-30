"use client";

import { useRef } from "react";

const reviews = [
  {
    name: "Verified Customer",
    rating: 5,
    text: "Not only that, but he treated my neighbors with respect around the noise and equipment that was adjacent to their property. Would highly recommend Joe for concrete work.",
  },
  {
    name: "Verified Customer",
    rating: 5,
    text: "Great price and excellent work.",
  },
  {
    name: "Verified Customer",
    rating: 5,
    text: "Great customer service and professional work!",
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Triple for infinite scroll illusion
  const allReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="section-padding bg-[var(--accent-light)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span
            className="text-[var(--accent)] font-bold uppercase tracking-[0.25em] text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Testimonials
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] text-[var(--foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Customers Say
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-5 animate-hero-line" />
          <p className="mt-5 text-[var(--muted-foreground)] text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Don&apos;t just take our word for it — hear from homeowners and
            businesses we&apos;ve worked with.
          </p>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto carousel-touch pb-4 px-4 snap-x snap-mandatory md:snap-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" as unknown as undefined }}
      >
        {allReviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw] reveal-scale"
          >
            <div className="border-[3px] border-[var(--border-brutal)] bg-[var(--surface)] p-6 h-full flex flex-col shadow-brutal transition-transform duration-300 hover:-translate-y-1">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "text-[var(--accent)]" : "text-[var(--border)]"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[var(--foreground)] text-lg leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t-[3px] border-[var(--border-brutal)]">
                <span
                  className="text-[var(--foreground)] font-black uppercase text-sm tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {review.name}
                </span>
                <span
                  className="text-[var(--muted-foreground)] text-xs block mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Google Review
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Badge */}
      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 border-[3px] border-[var(--border-brutal)] bg-[var(--surface)] shadow-brutal">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span
            className="text-[var(--foreground)] font-black uppercase tracking-wider text-sm"
            style={{ fontFamily: "var(--font-display)" }}
          >
            4.5 out of 5 on Google
          </span>
        </div>
      </div>
    </section>
  );
}
