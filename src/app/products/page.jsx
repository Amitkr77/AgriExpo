"use client";

import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  ChevronRightCircle,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import vegetableimg from "@/assets/veg.png";
import { trackEvent } from "@/lib/gtag";
import { FRUIT_POWDERS, VEGETABLE_POWDERS } from "@/lib/products";

const makeSlug = (name = "") =>
  name
    .toLowerCase()
    .trim()
    .replaceAll("&", "and")
    .replaceAll("/", "-")
    .replaceAll(" ", "-");

const getImageSrc = (image) => {
  if (!image) return vegetableimg.src;
  if (typeof image === "string") return image;
  return image.src || vegetableimg.src;
};

const ProductCard = ({ product, index, type }) => {
  const basePath =
    type === "fruit" ? "/products/fruit-powders" : "/products/vegetable-powders";

  const productHref =
    product.href || `${basePath}/${product.slug || makeSlug(product.name)}`;

  const router = useRouter();  

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={productHref}
        className="group relative block overflow-hidden rounded-[2.5rem] bg-[#f5f4e5] p-3 transition-all duration-500 hover:-translate-y-2"
      >
        <div className="relative overflow-hidden rounded-4xl">
          <img
            src={getImageSrc(product.image)}
            alt={product.name}
            className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                trackEvent(
                  "quote_click",
                  "conversion",
                  "send_inquiry_button"
                );
                router.push("/inquiry");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#1b1c13] shadow-lg"
            >
              Send Inquiry
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#2d5a43] px-3 py-2">
            <ShieldCheck className="h-3.5 w-3.5 text-white" />
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              {product.badge || "Export Grade"}
            </span>
          </div>
        </div>

        <div className="px-4 pb-4 pt-5">
          <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-[#1b1c13]">
            {product.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#414943]">
            {product.desc ||
              "Export-ready powder for industrial food, beverage, seasoning, and bulk manufacturing applications."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["FSSC 22000", "Lab Tested", "Traceable", "Non-GMO"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase text-[#2d5a43]"
                >
                  {badge}
                </span>
              )
            )}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2d5a43] transition-all duration-300 group-hover:gap-3">
            View Specs
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="absolute inset-0 rounded-[2.5rem] border border-black/[0.04]" />
      </Link>
    </motion.div>
  );
};

export default function Page() {
  return (
    <div>
      <main className="px-10 py-10 max-w-360 mx-auto mt-20">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-green-900 text-white rounded-4xl p-8 flex flex-col justify-center min-h-[400px] relative overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 z-10">
                Our Export Product Range
              </h1>

              <p className="text-base text-green-100 max-w-xl z-10">
                27 dehydrated and spray-dried fruit and vegetable powders,
                export-certified and available for bulk supply. Each product
                includes full specifications, compliance documentation, and
                sample availability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 z-10">
                {["FSSC 22000", "Lab Tested", "Traceable", "Non-GMO"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>

              <div className="absolute -right-12 -bottom-12 opacity-20">
                <span className="material-symbols-outlined text-[320px] text-green-200">
                  eco
                </span>
              </div>
            </div>

            <div className="md:col-span-4 bg-yellow-200 rounded-4xl p-8 flex flex-col justify-end relative overflow-hidden group">
              <img
                src={vegetableimg.src}
                alt="Fruit and vegetable powders for export"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="bg-black/20 backdrop-blur-lg p-6 rounded-4xl relative z-10">
                <span className="text-xs tracking-widest uppercase text-white mb-2 block">
                  Quality Assured
                </span>
                <p className="text-lg font-bold text-white">
                  Sustainable Sourcing. Global Delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-14">
          <div className="flex flex-wrap gap-3">
            {[
              "All Products",
              "Fruit Powders",
              "Vegetable Powders",
              "Beverage",
              "Bakery",
              "Seasoning",
              "FSSC 22000",
              "Non-GMO",
            ].map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-full border border-green-900/10 bg-[#f5f4e5] px-5 py-3 text-sm font-bold text-[#14422d] transition-all hover:bg-[#14422d] hover:text-white"
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Fruit Powders */}
        <section id="fruit-powders" className="my-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-900">
              Fruit Powders
            </h2>

            <Link
              href="/products/fruit-powders"
              className="flex gap-2 items-center bg-black/20 px-4 py-2 rounded-4xl font-bold"
            >
              <p>View all</p>
              <ChevronRightCircle />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRUIT_POWDERS.slice(0, 4).map((product, index) => (
                <ProductCard
                  key={product.name || index}
                  product={product}
                  index={index}
                  type="fruit"
                />
              ))}
          </div>
        </section>

        {/* Vegetable Powders */}
        <section id="vegetable-powders" className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-900">
              Vegetable Powders
            </h2>

            <Link
              href="/products/vegetable-powders"
              className="flex gap-2 items-center bg-black/20 px-4 py-2 rounded-4xl font-bold"
            >
              <p>View all</p>
              <ChevronRightCircle />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEGETABLE_POWDERS.slice(0, 4).map((product, index) => (
              <ProductCard
                key={product.name || index}
                product={product}
                index={index}
                type="vegetable"
              />
            ))}
          </div>
        </section>

        {/* Quality Section */}
        <section className="mt-24">
          <h2 className="text-[48px] leading-[52px] font-extrabold text-[#14422d] mb-12">
            Export-Ready Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                ["verified_user", "FSSC 22000", "Global food safety certification for premium industrial supply."],
                ["biotech", "Lab Tested", "Batch-wise lab testing for industrial buyers and export supply."],
                ["public", "Traceable", "Farm-to-fork traceability for every export batch."],
                ["eco", "Non-GMO", "Non-GMO ingredients suitable for clean-label food manufacturing."],
              ].map(([icon, title, text]) => (
                <div key={title} className="bg-[#f0efe0] p-8 rounded-4xl">
                  <span className="material-symbols-outlined text-[#14422d] text-[40px] mb-4 block">
                    {icon}
                  </span>
                  <h4 className="text-[16px] leading-[24px] font-bold text-[#1b1c13] mb-2">
                    {title}
                  </h4>
                  <p className="text-sm text-[#414943]">{text}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#7f410b] rounded-4xl p-8 flex flex-col justify-center items-center text-center group">
              <span className="material-symbols-outlined text-[#ffdcc6] text-[60px] mb-6 transition-transform group-hover:rotate-12">
                package_2
              </span>

              <h3 className="text-[24px] leading-[28px] font-bold text-[#ffdcc6] mb-4">
                Need Custom Specifications?
              </h3>

              <p className="text-[16px] leading-[24px] text-[#ffb786] mb-8 max-w-md">
                We offer custom mesh sizes, moisture levels, and blending for
                industrial clients.
              </p>

              <Link
                href="/contact"
                onClick={() =>
                  trackEvent(
                    "contact_click",
                    "engagement",
                    "rd_team_button"
                  )
                }  
                className="bg-[#ffdcc6] text-[#7f410b] px-8 py-4 rounded-full font-bold tracking-[0.1em] hover:bg-white transition-colors"
              >
                CONTACT OUR R&amp;D TEAM
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}