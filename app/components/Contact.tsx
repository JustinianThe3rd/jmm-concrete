"use client";

const hours = [
  { day: "Monday", time: "7 AM – 5:30 PM" },
  { day: "Tuesday", time: "7 AM – 5:30 PM" },
  { day: "Wednesday", time: "7 AM – 5:30 PM" },
  { day: "Thursday", time: "7 AM – 5:30 PM" },
  { day: "Friday", time: "7 AM – 5:30 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

function getTodayIndex(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

export default function Contact() {
  const todayIndex = getTodayIndex();

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span
            className="text-[var(--accent)] font-bold uppercase tracking-[0.25em] text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get In Touch
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mt-5 animate-hero-line" />
          <p className="mt-5 text-white/50 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Need a plumber you can trust? Call us today — we&apos;d love to
            help with any plumbing needs, big or small.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {/* Phone */}
            <a
              href="tel:8562351386"
              className="flex items-center gap-4 p-5 border-[3px] border-white/10 bg-[#141414] hover:border-[var(--accent)] hover:shadow-brutal hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                  Call Us
                </div>
                <div
                  className="text-xl font-black text-white group-hover:text-[var(--accent)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  (856) 235-1386
                </div>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 p-5 border-[3px] border-white/10 bg-[#141414]">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 border border-white/10">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="square" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="square" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                  Location
                </div>
                <div
                  className="text-lg font-black text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Moorestown, NJ 08057
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 border-[3px] border-white/10 bg-[#141414]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="square" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                    Business Hours
                  </div>
                  <div className="text-xs text-white/40" style={{ fontFamily: "var(--font-body)" }}>
                    Today: {hours[todayIndex].time}
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                {hours.map((entry, i) => {
                  const isToday = i === todayIndex;
                  return (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                        isToday
                          ? "bg-[var(--accent)] text-[#0a0a0a]"
                          : "text-white/60"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="flex items-center gap-2 font-medium uppercase tracking-wide text-xs">
                        {isToday && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
                        )}
                        {entry.day}
                      </span>
                      <span className={isToday ? "font-bold" : ""}>{entry.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:8562351386"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--accent)] text-[#0a0a0a] font-bold uppercase tracking-wider text-lg hover:bg-[var(--accent-hover)] transition-colors shadow-brutal-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now — Free Estimates
            </a>
          </div>

          {/* Map */}
          <div className="border-[3px] border-white/10 shadow-brutal-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.5!2d-74.9583!3d39.9616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU3JzQxLjgiTiA3NcKwNTcnMzAuMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 460 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joe Hitchens Plumbing location map — Moorestown, NJ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
