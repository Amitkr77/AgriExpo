"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  CupSoda,
  Pill,
  PackageCheck,
  Soup,
  ArrowUpRight,
} from "lucide-react";

const applications = [
  {
    title: "Food Manufacturers",
    desc: "Bulk ingredients for sauces, seasonings, and processed foods.",
    href: "/applications/food-manufacturers",
    icon: Factory,
    bg: "bg-[#eae9da]",
    iconBg: "bg-[#d8d7c8]",
  },
  {
    title: "Beverage Brands",
    desc: "Natural fruit powders for smoothies, drinks, and mixes.",
    href: "/applications/beverage-brands",
    icon: CupSoda,
    bg: "bg-[#fec567]",
    iconBg: "bg-[#ffd98f]",
  },
  {
    title: "Nutraceuticals",
    desc: "Functional powders for wellness and supplement products.",
    href: "/applications/nutraceuticals",
    icon: Pill,
    bg: "bg-[#e9965b]",
    iconBg: "bg-[#f4b184]",
  },
  {
    title: "Private Label",
    desc: "Custom manufacturing and export-ready private labeling.",
    href: "/applications/private-label",
    icon: PackageCheck,
    bg: "bg-[#e4e3d4]",
    iconBg: "bg-[#d3d2c4]",
  },
  {
    title: "Instant Foods",
    desc: "Ready-to-mix ingredients for instant food applications.",
    href: "/applications/instant-foods",
    icon: Soup,
    bg: "bg-[#f5f4e5]",
    iconBg: "bg-[#ebe9d9]",
  },
];

export default function Applications() {
  return (
    <section className="mb-20 overflow-hidden">
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
          Applications
        </span>

        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#1b1c13] md:text-5xl">
          Who Uses Our Powders?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#414943] md:text-base">
          Trusted across food, beverage, nutraceutical, and private-label
          industries worldwide.
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden grid-cols-5 gap-5 lg:grid">
        {applications.map((item, index) => {
          const Icon = item.icon;

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
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={item.href}
                className={`group relative flex h-full flex-col rounded-[2.5rem] ${item.bg} p-6 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <Icon className="h-6 w-6 text-[#1b1c13]" strokeWidth={2.1} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[#1b1c13]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#414943]">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d5a43] transition-all duration-300 group-hover:gap-3">
                  Explore

                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 lg:hidden">
        {applications.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className={`group min-w-[280px] rounded-[2rem] ${item.bg} p-5`}
            >
              {/* Icon */}
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg}`}
              >
                <Icon className="h-5 w-5 text-[#1b1c13]" strokeWidth={2.1} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[#1b1c13]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#414943]">
                {item.desc}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2d5a43]">
                Explore

                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}