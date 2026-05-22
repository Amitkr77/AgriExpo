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
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const stats = [
  { value: 27, suffix: "", label: "SKUs Available", icon: PackageCheck },
  { value: 24, suffix: "+", label: "Countries Served", icon: Globe2 },
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

const mapPoints = [
  { name: "India", region: "South Asia", left: "70%", top: "45%" },
  { name: "Middle East", region: "Middle East", left: "60%", top: "43%" },
  { name: "Europe", region: "Europe", left: "50%", top: "30%" },
  { name: "North America", region: "North America", left: "22%", top: "36%" },
  { name: "SE Asia", region: "SE Asia", left: "80%", top: "55%" },
];

const mapUrl =
  "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

export default function ExportPresence() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [dragKey, setDragKey] = useState(0);

  const isZoomed = zoom > 1;

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.3, 2.5));
  };

  const zoomOut = () => {
    setZoom((prev) => {
      const nextZoom = Math.max(prev - 0.3, 1);

      if (nextZoom === 1) {
        setActiveRegion(null);
        setDragKey((key) => key + 1);
      }

      return nextZoom;
    });
  };

  const handleRegionClick = (region) => {
    setActiveRegion(region);
    setZoom(1.7);
    setDragKey((key) => key + 1);
  };

  const resetMap = () => {
    setActiveRegion(null);
    setZoom(1);
    setDragKey((key) => key + 1);
  };

  return (
    <section className="relative mb-24 overflow-hidden rounded-[3rem] bg-[#14422d] px-6 py-14 md:px-10 md:py-16">
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#fec567]/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 h-[360px] w-[360px] rounded-full bg-[#6fd58c]/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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

      <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
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
                <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#c9dbc9]">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.02] p-5 shadow-2xl sm:p-6 md:rounded-[2.5rem] md:p-10"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#fec567]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#6fd58c]/10 blur-3xl" />

        <div className="relative z-10 mb-8 flex flex-wrap items-center justify-center gap-3">
          {regions.map((region, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleRegionClick(region)}
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

        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102f27]/50 px-2 py-6 sm:px-6 md:px-10">
            <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2 sm:right-4 sm:top-4">
              <button
                type="button"
                onClick={zoomIn}
                className="flex items-center gap-1 rounded-full bg-[#fec567] px-3 py-2 text-[11px] font-bold text-[#173b2e] shadow-lg transition hover:scale-105 sm:px-4 sm:text-xs"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                Zoom In
              </button>

              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom === 1}
                className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 text-[11px] font-bold text-[#173b2e] shadow-lg transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-xs"
              >
                <ZoomOut className="h-3.5 w-3.5" />
                Zoom Out
              </button>

              {isZoomed && (
                <button
                  type="button"
                  onClick={resetMap}
                  className="flex items-center gap-1 rounded-full bg-[#2d5a43] px-3 py-2 text-[11px] font-bold text-[#bceecf] shadow-lg transition hover:scale-105 sm:px-4 sm:text-xs"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset
                </button>
              )}
            </div>

            <div className="relative overflow-hidden pt-16">
              <motion.div
                key={dragKey}
                drag={isZoomed ? true : false}
                dragMomentum={false}
                dragElastic={0.12}
                dragConstraints={{
                  left: -500,
                  right: 500,
                  top: -320,
                  bottom: 320,
                }}
                whileDrag={isZoomed ? { cursor: "grabbing" } : {}}
                initial={false}
                animate={{
                  scale: zoom,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`relative origin-center touch-none ${
                  isZoomed ? "cursor-grab" : "cursor-default"
                }`}
              >
                <img
                  src={mapUrl}
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
                      onClick={() => handleRegionClick(point.region)}
                      className="absolute z-20 cursor-pointer"
                      style={{ left: point.left, top: point.top }}
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
        </div>

        <p className="relative z-10 mt-5 text-center text-xs text-[#c9dbc9]/80">
          Zoom in first, then drag the map to move around.
        </p>
      </motion.div>
    </section>
  );
}