"use client";

import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
} from "lucide-react";

import { motion } from "framer-motion";

const trustItems = [
  {
    label: "ISO 22000",
    hash: "iso-22000",
    icon: ShieldCheck,
    bg: "bg-[#fec567]",
    iconBg: "bg-[#fff4dc]",
    text: "text-[#281900]",
  },
  {
    label: "FSSC 22000",
    hash: "fssc-22000",
    icon: BadgeCheck,
    bg: "bg-[#2d5a43]",
    iconBg: "bg-[#3d7157]",
    text: "text-white",
  },
  {
    label: "HACCP",
    hash: "haccp",
    icon: FlaskConical,
    bg: "bg-[#e9965b]",
    iconBg: "bg-[#f4b184]",
    text: "text-[#311300]",
  },
  {
    label: "GMP",
    hash: "gmp",
    icon: Factory,
    bg: "bg-[#2d5a43]",
    iconBg: "bg-[#3d7157]",
    text: "text-white",
  },
  {
    label: "Non-GMO",
    hash: "non-gmo",
    icon: Leaf,
    bg: "bg-[#fec567]",
    iconBg: "bg-[#fff4dc]",
    text: "text-[#281900]",
  },
  {
    label: "24+ Countries",
    hash: "export-section",
    icon: Globe2,
    bg: "bg-[#e4e3d4]",
    iconBg: "bg-white",
    text: "text-[#1b1c13]",
  },
];

export default function TrustBar() {
  
  return (
    <section className="relative ">
      {/* TOP LABEL */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[#f0efe0] px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-[#2d5a43]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#414943]">
            Global Quality Standards
          </span>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-6">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
            >
              <Link
                href={{
                  pathname: "/quality",
                  hash: item.hash,
                }}
                className={`${item.bg} group flex h-full flex-col items-center justify-center rounded-[2rem] p-4 transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* ICON */}
                <div
                  className={`${item.iconBg} mb-3 flex h-11 w-11 items-center justify-center rounded-full`}
                >
                  <Icon className={`h-5 w-5 ${item.text}`} strokeWidth={2.3} />
                </div>

                {/* TEXT */}
                <span
                  className={`text-center text-sm font-extrabold tracking-[-0.02em] ${item.text}`}
                >
                  {item.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
