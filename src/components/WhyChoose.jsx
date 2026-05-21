"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  ShieldCheck,
  Package,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Farm-Direct Sourcing",
    desc: "Direct procurement from India's major agricultural belts for consistent quality and traceability.",
    icon: Wheat,
    bg: "bg-[#eae9da]",
    iconBg: "bg-[#d9d8c8]",
  },
  {
    title: "Strict QA at Every Stage",
    desc: "HACCP processes, lab-tested batches, and strict quality checks across production cycles.",
    icon: ShieldCheck,
    bg: "bg-[#fec567]",
    iconBg: "bg-[#ffd98f]",
  },
  {
    title: "Flexible Packaging",
    desc: "Packaging solutions from 25kg export bags to large-scale industrial bulk container formats.",
    icon: Package,
    bg: "bg-[#f5f4e5]",
    iconBg: "bg-[#e8e6d6]",
  },
  {
    title: "Export Compliance Ready",
    desc: "Documentation and export support aligned with US, EU, UAE, and global import standards.",
    icon: Globe2,
    bg: "bg-[#e4e3d4]",
    iconBg: "bg-[#d4d3c5]",
  },
];

export default function WhyChooseSriGreen() {
  return (
    <section className="mb-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-10 text-center"
      >
        <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7e5700]">
          Why Choose Us
        </span>

        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#1b1c13] md:text-5xl">
          Why Choose SRI GREEN
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#414943] md:text-base">
          Reliable sourcing, export-ready quality systems, and scalable supply
          capabilities trusted by international buyers.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

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
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2.5rem] ${feature.bg} p-7 md:p-8`}
            >
              {/* Soft Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="mb-6 flex items-start justify-between">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${feature.iconBg}`}
                  >
                    <Icon
                      className="h-6 w-6 text-[#1b1c13]"
                      strokeWidth={2.1}
                    />
                  </div>

                  {/* Arrow */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 transition-transform duration-300 group-hover:rotate-12">
                    <ArrowUpRight
                      className="h-4 w-4 text-[#1b1c13]"
                      strokeWidth={2.3}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="max-w-sm text-2xl font-extrabold tracking-[-0.03em] text-[#1b1c13]">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#414943] md:text-[15px]">
                  {feature.desc}
                </p>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-black/[0.04]" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}