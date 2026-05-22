"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Globe2,
  ShieldCheck,
  Clock3,
  PackageCheck,
  RotateCcw,
} from "lucide-react";

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

const regions = ["South Asia", "Middle East", "Europe", "North America", "SE Asia"];

const zoomStyles = {
  "South Asia": "scale-[2.15] translate-x-[-17%] translate-y-[-10%]",
  "Middle East": "scale-[2.1] translate-x-[-8%] translate-y-[-5%]",
  Europe: "scale-[2.2] translate-x-[2%] translate-y-[8%]",
  "North America": "scale-[2] translate-x-[28%] translate-y-[4%]",
  "SE Asia": "scale-[2.2] translate-x-[-25%] translate-y-[-18%]",
};

const mapPoints = [
  {
    name: "India",
    region: "South Asia",
    left: "67%",
    top: "48%",
  },
  {
    name: "Middle East",
    region: "Middle East",
    left: "59%",
    top: "43%",
  },
  {
    name: "Europe",
    region: "Europe",
    left: "50%",
    top: "33%",
  },
  {
    name: "North America",
    region: "North America",
    left: "22%",
    top: "38%",
  },
  {
    name: "SE Asia",
    region: "SE Asia",
    left: "72%",
    top: "55%",
  },
];

export default function ExportPresence() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [mapKey, setMapKey] = useState(0);

  const resetMap = () => {
    setActiveRegion(null);
    setMapKey((prev) => prev + 1);
  };

  return (
    <section className="relative mb-24 overflow-hidden rounded-[3rem] bg-[#14422d] px-6 py-14 md:px-10 md:py-16">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#fec567]/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 h-[360px] w-[360px] rounded-full bg-[#6fd58c]/10 blur-3xl" />

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
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] md:p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#2d5a43] transition duration-300 group-hover:bg-[#fec567]">
                <Icon
                  className="h-5 w-5 text-[#bceecf] transition duration-300 group-hover:text-[#173b2e]"
                  strokeWidth={2.2}
                />
              </div>

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
        className="relative z-10 mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.02] p-5 shadow-2xl sm:p-6 md:rounded-[2.5rem] md:p-10"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#fec567]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#6fd58c]/10 blur-3xl" />

        {/* Regions */}
        <div className="relative z-10 mb-8 flex flex-wrap items-center justify-center gap-3">
          {regions.map((region, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveRegion(region)}
              className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] shadow-lg transition-all duration-300 sm:text-xs ${
                activeRegion === region
                  ? "scale-105 border-[#fec567]/70 bg-[#fec567] text-[#173b2e]"
                  : "border-[#bceecf]/15 bg-[#2d5a43]/80 text-[#bceecf] hover:-translate-y-0.5 hover:bg-[#fec567] hover:text-[#173b2e]"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102f27]/50 px-2 py-6 sm:px-6 md:px-10">
            {/* Reset Button */}
            {activeRegion && (
              <button
                type="button"
                onClick={resetMap}
                className="absolute right-3 top-3 z-30 flex items-center gap-2 rounded-full bg-[#fec567] px-3 py-2 text-[11px] font-bold text-[#173b2e] shadow-lg transition hover:scale-105 sm:right-4 sm:top-4 sm:px-4 sm:text-xs"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            )}

            <motion.div
              key={mapKey}
              drag
              dragMomentum={false}
              dragElastic={0.08}
              whileDrag={{ cursor: "grabbing" }}
              className={`relative origin-center cursor-grab transition-transform duration-700 ease-in-out ${
                activeRegion
                  ? zoomStyles[activeRegion]
                  : "scale-100 translate-x-0 translate-y-0"
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World map"
                draggable="false"
                className="pointer-events-none h-auto w-full select-none opacity-75 invert sepia saturate-[0.7] hue-rotate-[75deg] brightness-[0.8] contrast-[1.1]"
              />

              {mapPoints.map((point, index) => {
                const isActive = activeRegion === point.region;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveRegion(point.region)}
                    className="absolute cursor-pointer"
                    style={{
                      left: point.left,
                      top: point.top,
                    }}
                    aria-label={`Zoom to ${point.name}`}
                  >
                    <span
                      className={`absolute -left-1 -top-1 h-5 w-5 rounded-full bg-[#fec567] opacity-60 ${
                        isActive ? "animate-ping" : "animate-pulse"
                      }`}
                    />

                    <span
                      className={`relative block h-3 w-3 rounded-full ring-4 transition-all duration-300 ${
                        isActive
                          ? "scale-125 bg-[#fec567] ring-[#fec567]/45"
                          : "bg-[#fec567] ring-[#fec567]/25"
                      }`}
                    />

                    <span
                      className={`absolute left-4 top-[-10px] whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold shadow-lg transition-all duration-300 ${
                        isActive
                          ? "scale-110 bg-[#fec567] text-[#173b2e]"
                          : "bg-white/90 text-[#173b2e] hover:bg-[#fec567]"
                      }`}
                    >
                      {point.name}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>

        <p className="relative z-10 mt-5 text-center text-xs text-[#c9dbc9]/80">
          Click any region to zoom, then drag the map to move around.
        </p>
      </motion.div>
    </section>
  );
}