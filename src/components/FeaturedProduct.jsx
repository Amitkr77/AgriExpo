"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import onionimg from "@/assets/onionimg.jpg";
import garlicimg from "@/assets/garlicimg.jpg";
import mangoimg from "@/assets/mangoimg.webp";
import tomatoimg from "@/assets/tomatoimg.webp";
import beetrootimg from "@/assets/beetimg.jpg";
import pomegranateimg from "@/assets/pomegranateimg.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const products = [
  {
    name: "Onion Powder",
    desc: "Fine dehydrated onion powder for seasoning blends.",
    badge: "Mesh 80",
    image:
      onionimg.src,
    href: "/products/vegetable-powders/onion-powder",
    color: "bg-[#eae9da]",
  },
  {
    name: "Garlic Powder",
    desc: "Strong aromatic garlic powder with rich flavor.",
    badge: "Premium Grade",
    image:
      garlicimg.src,
    href: "/products/vegetable-powders/garlic-powder",
    color: "bg-[#f5f4e5]",
  },
  {
    name: "Mango Powder",
    desc: "Alphonso mango powder with natural sweetness.",
    badge: "Spray Dried",
    image:
      mangoimg.src,
    href: "/products/fruit-powders/mango-powder",
    color: "bg-[#fec567]",
  },
  {
    name: "Tomato Powder",
    desc: "Bright red tomato powder for soups and sauces.",
    badge: "Natural Color",
    image:
      tomatoimg.src,
    href: "/products/vegetable-powders/tomato-powder",
    color: "bg-[#e4e3d4]",
  },
  {
    name: "Beetroot Powder",
    desc: "Vibrant beetroot powder rich in natural color.",
    badge: "Fine Mesh",
    image:
      beetrootimg.src,
    href: "/products/vegetable-powders/beetroot-powder",
    color: "bg-[#f5f4e5]",
  },
  {
    name: "Pomegranate Powder",
    desc: "Tangy antioxidant-rich fruit powder for blends.",
    badge: "Export Grade",
    image:
      pomegranateimg.src,
    href: "/products/fruit-powders/pomegranate-powder",
    color: "bg-[#eae9da]",
  },
];

export default function FeaturedProduct() {
  return (
    <section className="relative mb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#fec567]/10 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mb-12 text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f0efe0] px-4 py-2">
          <Sparkles className="h-3.5 w-3.5 text-[#7e5700]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7e5700]">
            Featured Products
          </span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#1b1c13] md:text-5xl">
          Bestselling Export Products
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#414943] md:text-base">
          Premium fruit and vegetable powders crafted for global food,
          nutraceutical, and seasoning industries.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={product.href}
              className={`group relative block overflow-hidden rounded-[2.5rem] bg-[#f5f4e5] p-3 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105 hover:h-full"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Inquiry Button */}
                <div className="absolute bottom-5 left-40 z-20 -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1b1c13] shadow-lg">
                    Send Inquiry
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#2d5a43] px-3 py-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-white" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4 pt-5">
                <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[#1b1c13]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#414943]">
                  {product.desc}
                </p>

                {/* CTA */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d5a43] transition-all duration-300 group-hover:gap-3">
                  View Specs

                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-black/[0.04]" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/products"
          className="group inline-flex items-center gap-3 rounded-full bg-[#1b1c13] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2d2d2d]"
        >
          View All Products

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}