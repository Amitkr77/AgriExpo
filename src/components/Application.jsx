"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  CupSoda,
  Pill,
  PackageCheck,
  Soup,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";

const applications = [
  {
    title: "Food Manufacturers",
    desc: "Bulk ingredients for sauces, seasonings, and processed foods.",
    href: "/applications/food-manufacturing",
    icon: Factory,
    bg: "bg-[#EAE9DA]",
    iconBg: "bg-[#D8D7C8]",
  },
  {
    title: "Beverage Brands",
    desc: "Natural fruit powders for smoothies, drinks, and beverage mixes.",
    href: "/applications/beverage-brands",
    icon: CupSoda,
    bg: "bg-[#FEC567]",
    iconBg: "bg-[#FFD98F]",
  },
  {
    title: "Nutraceuticals",
    desc: "Functional fruit powders for supplements and wellness products.",
    href: "/applications/nutraceuticals",
    icon: Pill,
    bg: "bg-[#E9965B]",
    iconBg: "bg-[#F4B184]",
  },
  {
    title: "Private Label",
    desc: "Custom formulations and export-ready private labeling services.",
    href: "/applications/private-label",
    icon: PackageCheck,
    bg: "bg-[#DDE8D4]",
    iconBg: "bg-[#C8D8BC]",
  },
  {
    title: "Instant Foods",
    desc: "Ready-to-mix ingredients for soups, desserts, and instant foods.",
    href: "/applications/instant-foods",
    icon: Soup,
    bg: "bg-[#F5F4E5]",
    iconBg: "bg-[#EBE9D9]",
  },
  {
    title: "Hotel Food Service",
    desc: "Bulk ingredients for hotels, restaurants, and catering operations.",
    href: "/applications/hotel-food-services",
    icon: UtensilsCrossed,
    bg: "bg-[#D9EEF5]",
    iconBg: "bg-[#C2E4EE]",
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
        className="mb-12 text-center"
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

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Link
                href={item.href}
                className={`group flex h-full flex-col rounded-[2rem] ${item.bg} p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  <Icon
                    className="h-6 w-6 text-[#1b1c13]"
                    strokeWidth={2.2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold tracking-[-0.03em] text-[#1b1c13]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-grow text-sm leading-relaxed text-[#414943]">
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
    </section>
  );
}