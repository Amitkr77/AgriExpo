"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Globe2, ShieldCheck, Clock3, PackageCheck } from "lucide-react";

const stats = [
  {
    value: 27,
    suffix: "",
    label: "SKUs Available",
    icon: PackageCheck,
  },
  {
    value: 24,
    suffix: "+",
    label: "Countries Served",
    icon: Globe2,
  },
  {
    value: 24,
    suffix: "hr",
    prefix: "<",
    label: "Inquiry Response",
    icon: Clock3,
  },
  {
    value: 22000,
    suffix: "",
    prefix: "ISO ",
    label: "Certified Facility",
    icon: ShieldCheck,
  },
];

export default function ExportPresence() {
  return (
    <section className="relative mb-24 overflow-hidden rounded-[3rem] bg-[#14422d] px-6 py-14 md:px-10 md:py-16">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#fec567]/10 blur-3xl" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mb-12 text-center"
      >
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#bceecf]">
          Export Presence
        </span>

        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
          Trusted Global Supply Partner
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#c9dbc9] md:text-base">
          Export-ready powders supplied to food and nutraceutical brands across
          multiple international markets.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#2d5a43]">
                <Icon className="h-5 w-5 text-[#bceecf]" strokeWidth={2.2} />
              </div>

              {/* Counter */}
              <div className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
                {stat.prefix}

                <CountUp
                  end={stat.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {stat.suffix}
              </div>

              {/* Label */}
              <p className="mt-3 text-sm leading-relaxed text-[#c9dbc9]">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* World Map */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="relative z-10 mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-10"
      >
        {/* Regions */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {[
            "South Asia",
            "Middle East",
            "Europe",
            "North America",
            "SE Asia",
          ].map((region, index) => (
            <div
              key={index}
              className="rounded-full bg-[#2d5a43] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#bceecf]"
            >
              {region}
            </div>
          ))}
        </div>

        {/* SVG Map */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 1000 450"
            className="h-auto w-full max-w-5xl opacity-90"
            fill="none"
          >
            {/* Base Map */}
            <path
              d="M142 180L180 150L240 155L270 190L255 230L200 245L160 225L142 180Z"
              fill="#315743"
            />
            <path
              d="M320 120L420 110L520 140L560 190L530 240L450 255L360 230L310 180L320 120Z"
              fill="#315743"
            />
            <path
              d="M610 145L710 150L760 180L740 230L660 240L610 210L590 175L610 145Z"
              fill="#315743"
            />
            <path
              d="M790 160L860 175L900 210L880 250L820 260L780 225L790 160Z"
              fill="#315743"
            />

            {/* Highlight Regions */}
            <circle cx="530" cy="205" r="10" fill="#fec567">
              <animate
                attributeName="r"
                values="10;16;10"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="640" cy="190" r="10" fill="#fec567">
              <animate
                attributeName="r"
                values="10;16;10"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="430" cy="175" r="10" fill="#fec567">
              <animate
                attributeName="r"
                values="10;16;10"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="820" cy="215" r="10" fill="#fec567">
              <animate
                attributeName="r"
                values="10;16;10"
                dur="2.3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="720" cy="250" r="10" fill="#fec567">
              <animate
                attributeName="r"
                values="10;16;10"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}