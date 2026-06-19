"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { EASE } from "./ui/motion";

const services = [
  {
    title: "AC Repair",
    description:
      "Fast, reliable air conditioning repair to keep your home or business cool when it matters most.",
  },
  {
    title: "Heating Repair",
    description:
      "Expert furnace and heating system repairs — we get your heat back on fast.",
  },
  {
    title: "HVAC Installation",
    description:
      "New system installation, replacements, and upgrades for homes and businesses of any size.",
  },
  {
    title: "Ductwork Services",
    description:
      "Duct cleaning, repair, and sealing to improve airflow and indoor air quality.",
  },
  {
    title: "Emergency HVAC",
    description:
      "HVAC emergencies don&apos;t wait — and neither do we. Open 24 hours for urgent repairs.",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Seasonal tune-ups and maintenance plans to keep your system running efficiently.",
  },
  {
    title: "Indoor Air Quality",
    description:
      "Air purifiers, humidifiers, and ventilation solutions for healthier indoor air.",
  },
  {
    title: "Commercial HVAC",
    description:
      "Full-service heating and cooling for offices, retail, and commercial properties.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="From emergency repairs to new installations, we handle all your heating, cooling, and ventilation needs with prompt, expert service."
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group border-2 border-white/10 bg-[#141414] p-6 hover:border-[var(--accent)] hover:bg-[#1a1a1a] transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: EASE,
                delay: i * 0.08,
              }}
            >
              <h3
                className="text-lg font-black uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-300 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <div className="w-8 h-0.5 bg-[var(--accent)] mb-3 mt-3 group-hover:w-16 transition-all duration-500" />
              <p
                className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--accent)] text-[#0a0a0a] font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all duration-300 text-lg hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request a Free Estimate
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
