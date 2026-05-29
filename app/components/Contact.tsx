"use client";

const hours = [
  { day: "Monday", time: "7 AM – 5:30 PM" },
  { day: "Tuesday", time: "7 AM – 5:30 PM" },
  { day: "Wednesday", time: "7 AM – 5:30 PM" },
  { day: "Thursday", time: "7 AM – 5:30 PM" },
  { day: "Friday", time: "7 AM – 5:30 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

function getTodayIndex(): number {
  const day = new Date().getDay(); // 0=Sun … 6=Sat
  // Map to our array: Mon=0 … Sun=6
  return day === 0 ? 6 : day - 1;
}

export default function Contact() {
  const todayIndex = getTodayIndex();

  return (
    <section id="contact" className="section-padding bg-white dark:bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground dark:text-white">
            Free Estimate &amp; Consultation
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ready to start your project? Call us today or stop by — we&apos;d love to
            discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-5">
            {/* Phone */}
            <a
              href="tel:8563128923"
              className="flex items-center gap-4 p-5 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-border hover:border-primary/30 group transition-colors"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-medium">
                  Call Us
                </div>
                <div className="text-xl font-bold text-foreground dark:text-white">
                  (856) 312-8923
                </div>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 p-5 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-medium">
                  Location
                </div>
                <div className="text-lg font-bold text-foreground dark:text-white">
                  106 Hillside Rd, Stratford, NJ 08084
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Business Hours
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    Today: {hours[todayIndex].time}
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                {hours.map((entry, i) => {
                  const isToday = i === todayIndex;
                  return (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                        isToday
                          ? "bg-primary/10 dark:bg-accent/15 font-semibold text-primary dark:text-accent"
                          : "text-foreground dark:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                        {entry.day}
                      </span>
                        {entry.time}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-2">
              <a
                href="tel:8563128923"
                className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover shadow-lg shadow-accent/20 text-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now — Free Estimates
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.5!2d-75.0183!3d39.8016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzA1LjgiTiA3NcKwMDEnMDUuOSJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 460 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JJM Concrete and Masonry location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
