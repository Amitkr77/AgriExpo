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
    bg: "bg-[#fec567]",
    iconBg: "bg-[#d9d8c8]",
  },
  {
    title: "Strict QA at Every Stage",
    desc: "HACCP processes, lab-tested batches, and strict quality checks across production cycles.",
    icon: ShieldCheck,
    bg: "bg-[#e9965b]",
    iconBg: "bg-[#ffd98f]",
  },
  {
    title: "Flexible Packaging",
    desc: "Packaging solutions from 25kg export bags to large-scale industrial bulk container formats.",
    icon: Package,
    bg: "bg-[#89c2e8]",
    iconBg: "bg-[#ffd98f]",
  },
  {
    title: "Export Compliance Ready",
    desc: "Documentation and export support aligned with US, EU, UAE, and global import standards.",
    icon: Globe2,
    bg: "bg-[#9fcfb2]",
    iconBg: "bg-[#d4d3c5]",
  },
];

export default function WhyChooseSriGreen() {
  return (
    <section className="mb-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-4 text-center"
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
                y: 40,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[2.5rem] ${feature.bg}
                p-5 md:p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                hover:shadow-[0_25px_60px_rgba(20,66,45,0.12)]
                transition-all duration-100
                
                before:absolute
                before:inset-0
                before:rounded-[2.5rem]
                before:bg-gradient-to-br
                before:from-white/30
                before:via-white/10
                before:to-transparent
                before:opacity-0
                hover:before:opacity-100
                before:transition-all
                before:duration-700`
                }
            >
              {/* Soft Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
              >
                <div
                  className="
                    absolute -left-1/2 top-0 h-full w-1/3
                    rotate-12 bg-white/20 blur-xl
                    transition-all duration-1500
                    group-hover:left-[120%]
                  "
                />
              </motion.div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Top */}
                <div className="mb-6 flex items-start justify-between">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 12,
                    }}
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${feature.iconBg}`}
                  >
                    <Icon
                      className="h-6 w-6 text-[#1b1c13]"
                      strokeWidth={2.1}
                    />
                  </motion.div>

                  {/* Arrow 
                  <motion.div
                    initial={{ opacity: 0.7 }}
                    whileHover={{
                      rotate: 45,
                      scale: 1.08,
                    }}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-white/70
                      shadow-sm
                    "
                  >
                    <ArrowUpRight
                      className="h-4 w-4 text-[#1b1c13]"
                      strokeWidth={2.3}
                    />
                  </motion.div>*/}
                </div>

                {/* Content */}
                <motion.h3
                  className="max-w-sm text-2xl font-extrabold tracking-[-0.03em] text-[#1b1c13]"
                  whileHover={{
                    x: 4,
                  }}
                >
                  {feature.title}
                </motion.h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#414943] md:text-[15px]">
                  {feature.desc}
                </p>
              </div>

              {/* Border */}
              <div
                className="
                  absolute inset-0 rounded-[2.5rem]
                  border border-black/[0.04]
                  group-hover:border-[#14422d]/20
                  transition-all duration-500
                "
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}