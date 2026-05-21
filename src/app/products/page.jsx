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
import alphansoimg from "@/assets/alpmangoimg.jpg";
import bananaimg from "@/assets/bananaimg.webp";
import pomeimg from "@/assets/pomegranateimg.jpg";
import lemonimg from "@/assets/lemonimg.webp";
import beetrootimg from "@/assets/beetimg.jpg";
import onionimg from "@/assets/onionimg.jpg";
import garlicimg from "@/assets/garlicimg1.webp";
import tomatoimg from "@/assets/tomatoimg.webp";
import {
  FRUIT_POWDERS,
  VEGETABLE_POWDERS,
} from "@/lib/products";



export default function page() {
  const Vegetable = [
    {
      name: "Onion Powder",
      desc: "Fine dehydrated onion powder for seasoning blends.",
      badge: "Mesh 80",
      image: onionimg.src,
      href: "/products/vegetable-powders/onion-powder",
      color: "bg-[#eae9da]",
    },
    {
      name: "Garlic Powder",
      desc: "Strong aromatic garlic powder with rich flavor.",
      badge: "Premium Grade",
      image: garlicimg.src,
      href: "/products/vegetable-powders/garlic-powder",
      color: "bg-[#f5f4e5]",
    },
    {
      name: "Tomato Powder",
      desc: "Bright red tomato powder for soups and sauces.",
      badge: "Natural Color",
      image: tomatoimg.src,
      href: "/products/vegetable-powders/tomato-powder",
      color: "bg-[#e4e3d4]",
    },
    {
      name: "Beetroot Powder",
      desc: "Vibrant beetroot powder rich in natural color.",
      badge: "Fine Mesh",
      image: beetrootimg.src,
      href: "/products/vegetable-powders/beetroot-powder",
      color: "bg-[#f5f4e5]",
    },
  ];
  const fruit = [
    {
      name: "Mango Powder",
      desc: "Premium spray-dried Alphonso mango for desserts and beverages.",
      badge: "Bestseller",
      image: alphansoimg.src,
      href: "/products/fruit-powders/mango-powder",
      color: "bg-[#eae9da]",
    },
    {
      name: "Banana Powder",
      desc: "Creamy banana powder ideal for baby food and shakes.",
      badge: "Energy Rich",
      image: bananaimg.src,
      href: "/products/fruit-powders/banana-powder",
      color: "bg-[#f5f4e5]",
    },
    {
      name: "Pomegranate Powder",
      desc: "Antioxidant-rich spray-dried fruit powder for wellness drinks.",
      badge: "Antioxidant",
      image: pomeimg.src,
      href: "/products/fruit-powders/pomegranate-powder",
      color: "bg-[#fec567]",
    },
    {
      name: "Lemon Powder",
      desc: "Zesty natural citrus powder for beverages and seasoning.",
      badge: "Natural Citrus",
      image: lemonimg.src,
      href: "/products/fruit-powders/lemon-powder",
      color: "bg-[#e4e3d4]",
    },
  ];
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

              <div className="absolute -right-12 -bottom-12 opacity-20">
                <span className="material-symbols-outlined text-[320px] text-green-200">
                  eco
                </span>
              </div>
            </div>

            <div className="md:col-span-4 bg-yellow-200 rounded-4xl p-8 flex flex-col justify-end relative overflow-hidden group">
              <img
                alt="Harvested Produce"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZh2AcDYv4yhEMbI8KwIMh_fCPPhmbci_imXLJHl7OlBkPAf1HsAu4I9Zdf_t9MUN75g8HrEE4TeHTrb7LkDhH6FpsVj2YSUySxXYCoNXJhRkp2_HSf_XwHbT7U3uQKKlDV0fyZ1uGmj19tHEtDPKttPUJu4oZp63DeNswIl2GYdBinVwb_U7aMCIFAIAUana85GyFHgLtHAnjPewy6aAzAm7v-2Pkuzxaru7jlJIIzyo8kQg_Ev9F4IuTAvLdSoKWoR-NqO6JizM"
              />

              <div className="bg-transparent backdrop-blur-lg p-6 rounded-4xl relative z-10">
                <span className="text-xs tracking-widest uppercase text-white mb-2 block">
                  Quality Assured
                </span>
                <p className="text-lg font-bold text-gray-300">
                  Sustainable Sourcing. Global Delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <main className="">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-[48px] leading-13 font-extrabold tracking-[-0.02em] text-[#14422d] mb-4">
              Our Product Portfolio
            </h1>

            <p className="text-[16px] leading-6 font-medium text-[#414943] max-w-2xl">
              Explore our meticulously crafted range of dehydrated vegetable and
              fruit powders, where artisanal care meets industrial scale to
              deliver the purest essence of nature.
            </p>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Onion Powders */}
            <div className="md:col-span-8 bg-[#eae9da] rounded-4xl p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              <div className="flex-1 order-2 md:order-1">
                <span className="inline-block bg-[#fec567] text-[#765100] px-3 py-1 rounded-full text-[12px] leading-4 tracking-[0.1em] font-bold mb-4">
                  MOST POPULAR
                </span>

                <h2 className="text-[48px] leading-[52px] font-extrabold tracking-[-0.02em] text-[#14422d] mb-3">
                  Onion Powders
                </h2>

                <p className="text-[16px] leading-6 font-medium text-[#414943] mb-6">
                  Premium dehydrated white, red, and pink onion powders designed
                  for culinary excellence and seasoning perfection.
                </p>

                <button className="bg-[#14422d] text-white px-8 py-4 rounded-full text-[16px] font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  View Varieties
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>

              <div className="flex-1 order-1 md:order-2 relative w-full h-75 md:h-full ">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnHqV9TcKg9y1g5JHPbf4Umy89sp8oNQw1XXWcI7bdM20GEy0ZkYkQZKmzBw1MA_Qp1_Rd_m82nZXvHXykRhr0abeHPbMqwCD4sQDjDzHD1oF_0fACBPZByAs83VLGjRK4HQMpBHNspsRaRWuNruiJnYLj6rYwFBlZkXFqsYfftsYWpWEArz5FwJX5HqbTik94Rbs9EG2rrlly-yIGrc7B5d1OUHLszzP-IUKtxwkXHkVn3DEjYPl5fMc51kvXp51sUALRCVhvVpk"
                  alt="Onion varieties"
                  className="absolute inset-0 w-full h-full object-cover rounded-4xl rotate-3  "
                />
              </div>
            </div>

            {/* Garlic Powders */}
            <div className="md:col-span-4 bg-[#f0efe0] rounded-4xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[24px] leading-7 font-bold text-[#14422d] mb-2">
                  Garlic Powders
                </h3>

                <p className="text-[16px] leading-6 font-medium text-[#414943] mb-6">
                  Robust and aromatic garlic powders crafted from the finest
                  locally sourced cloves.
                </p>
              </div>

              <div className="relative h-48 overflow-visible">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABQJEIzgXkf-7Sj7XwgAH7oFxTpPD3YlppVs8RRkBBTaSfnDjLp971ko0ML76QR5XrRUfCnsDFoj6fvy9IQg2uQZc11x2Bpc_kv99Li-CGXLxQesYI4V_ChH9XDgu5gg9vTufFgxQ-vIrFhA9wOVtiafWg-ZGzcs5ER3SgTooOIF3r0LpY82ANsfqfNqsGdl4QU1NzHdgXuqpzE_a_541CjYgYDFhxl-I1OVdNcaifV56MC1qKujzUj71u9G_e4NC7idZe_1UOrfE"
                  alt="Garlic powder"
                  className="w-full h-full object-cover rounded-4xl -mb-8 -rotate-2"
                />
              </div>
            </div>

            {/* Ginger */}
            <div className="md:col-span-4 bg-[#fec567] rounded-4xl p-8 flex flex-col">
              <h3 className="text-[24px] leading-7 font-bold text-[#765100] mb-2">
                Ginger & Spices
              </h3>

              <p className="text-[16px] leading-6 font-medium text-[#765100] opacity-80 mb-6">
                Intense, zesty ginger powders that retain the powerful bioactive
                compounds of the raw root.
              </p>

              <div className="mt-auto flex justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLb6WD_3Oa0vE9hI5OmDwUdNuUbrN7CGH5PmEVjofI8wTg33BrgBa_sxobagW08IQoFCu2cvyxReUmWG6JsKTr2r0VeEUt8XnFGYeFTX7n8LjWxGV1SLmeGGpPMDdyoVtZfMkI6nXd6Zfjj9xXX1md46lJEpg3jIIRhYpQ8zN2Qkq-4M1OjdIT6D5jbrwIOGbFWUY-S0znIvndgsjpwaldWNJBJAJZQ8OgJ_Z9b_T3cbhiTRi1ln5HhY6eZuEWpxYOFNQh1DiAmFU"
                  alt="Ginger root"
                  className="w-4/5 h-40 object-cover rounded-full border-4 border-[#fbfaeb]"
                />
              </div>
            </div>

            {/* Vegetable Blends */}
            <div className="md:col-span-4 bg-[#2d5a43] rounded-4xl p-8 flex flex-col text-[#9fcfb2]">
              <h3 className="text-[24px] leading-7 font-bold mb-2">
                Vegetable Blends
              </h3>

              <p className="text-[16px] leading-6 font-medium opacity-90 mb-6">
                Customized dehydrated vegetable mixes for soups, sauces, and
                industrial food applications.
              </p>

              <div className="mt-auto relative h-40">
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <span className="w-16 h-16 rounded-full bg-[#ffdcc6] flex items-center justify-center text-[#5f2d00] shadow-sm">
                    <span className="material-symbols-outlined">eco</span>
                  </span>

                  <span className="w-16 h-16 rounded-full bg-[#ffdead] flex items-center justify-center text-[#7e5700] shadow-sm translate-y-4">
                    <span className="material-symbols-outlined">
                      psychology_alt
                    </span>
                  </span>

                  <span className="w-16 h-16 rounded-full bg-[#bceecf] flex items-center justify-center text-[#14422d] shadow-sm">
                    <span className="material-symbols-outlined">
                      local_shipping
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Fruit Powders */}
            <div className="md:col-span-4 bg-[#eae9da] rounded-4xl p-8 flex flex-col justify-between ">
              <div>
                <h3 className="text-[24px] leading-7 font-bold text-[#14422d] mb-2">
                  Exotic Fruit Powders
                </h3>

                <p className="text-[16px] leading-6 font-medium text-[#414943] mb-6">
                  Spray-dried fruit concentrates that preserve the natural
                  vitamins and vibrant flavors of tropical fruits.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="h-24 bg-[#ffdcc6] rounded-4xl overflow-hidden shadow">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZi-UggcmuARAkhNwJqaZHWP0NRwuntdoVC5WrEcADJz5T6b6gwDV4gme7UJQGLIYK95ESSVWV-gdoLuP1YWhUCUlz5stKvgqBVNi1OnEiyTkIECP9j2DL__qGU-vBbe6fkHzItJo1Brjotu3bHH_jYHJTZOOG9weq2xwPxd2bSspmzS2QcGvjrzfF8GLMgeo7ZDQVM0NCxqy-PVfS0XgLubUhA4OEHfcvM-ykpj3_pz6_dZiczRqd46wZ9CqtVtz34S15gpi6VU"
                    alt="Mango"
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="h-24 bg-[#bceecf] rounded-[16px] overflow-hidden shadow">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZYH8fWQfHXAWCO5NIKfYuTRtZgoPJ9EToOuaTapdc2mPnxLHRUUAsffMZ9rIlOWuDa6ePL4HtnbyQqin4EOASvFbsK_1Ypp0BZzD5CDFlo-2abFgreMhYXy-YBSz9lpgm1qg-9QYw9Albskh4qaTmwEObZaxlTvLRt5f8bCcrQBiZmHgWALu_HxmZxsvJdW0wYPYA0IZjrlOw7Ia_X40ZXBkCjTOVW0K7o_lC--joG8feBOkD6pcdHnNP09Fw1Xg_yDtYrputa-s"
                    alt="Lemon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Fruit Powders */}
        <section className="my-24">
          <div className="flex items-center justify-between  mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-900">
              Fruit Powders
            </h2>

            <Link href="/products/fruit-powders" className="flex gap-2 items-center bg-black/20 px-4 py-2 rounded-4xl font-bold">
              <p>View all</p>
              <ChevronRightCircle />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card */}
            {fruit.map((product, index) => (
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
                  className={`group relative block overflow-hidden rounded-[2.5rem] ${product.color} p-3 transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-4xl">
                    <img
                      src={product.image?.src || product.image}
                      alt={product.name}
                      className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105 hover:h-full"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Inquiry Button */}
                    <div className="absolute bottom-5 left-40 z-20 -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#1b1c13] shadow-lg">
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
        </section>

        {/* Vegetable Powders */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-green-900">
              Vegetable Powders
            </h2>
            <Link href="/products/vegetable-powders" className="flex gap-2 items-center bg-black/20 px-4 py-2 rounded-4xl font-bold">
              <p>View all</p>
              <ChevronRightCircle />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Vegetable.map((product, index) => (
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
                  className={`group relative block overflow-hidden rounded-[2.5rem] ${product.color} p-3 transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-4xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-87.5 w-full object-cover transition-transform duration-700 group-hover:scale-105 hover:h-full"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Inquiry Button */}
                    <div className="absolute bottom-5 left-40 z-20 -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#1b1c13] shadow-lg">
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
        </section>

        {/* Quality Metrics Section (Bento Style) */}
        <section className="mt-24">
          <h2 className="text-[48px] leading-[52px] font-extrabold text-[#14422d] mb-12">
            Export-Ready Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-orange-500/20 p-8 rounded-4xl">
                <span className="material-symbols-outlined text-[#14422d] text-[40px] mb-4 block">
                  verified_user
                </span>
                <h4 className="text-[16px] leading-[24px] font-bold text-[#1b1c13] mb-2">
                  FSSC 22000
                </h4>
                <p className="text-sm text-[#414943]">
                  Global food safety certification for premium industrial
                  supply.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f0efe0] p-8 rounded-4xl">
                <span className="material-symbols-outlined text-[#14422d] text-[40px] mb-4 block">
                  biotech
                </span>
                <h4 className="text-[16px] leading-[24px] font-bold text-[#1b1c13] mb-2">
                  Lab Tested
                </h4>
                <p className="text-sm text-[#414943]">
                  Zero microbial contamination and pesticide residue guaranteed.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-green-950 p-8 rounded-4xl">
                <span className="material-symbols-outlined text-white text-[40px] mb-4 block">
                  public
                </span>
                <h4 className="text-[16px] leading-[24px] font-bold text-white mb-2">
                  Traceable
                </h4>
                <p className="text-sm text-white">
                  Farm-to-fork digital tracking for every export batch.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-yellow-500 p-8 rounded-4xl">
                <span className="material-symbols-outlined text-[#14422d] text-[40px] mb-4 block">
                  eco
                </span>
                <h4 className="text-[16px] leading-[24px] font-bold text-[#1b1c13] mb-2">
                  Non-GMO
                </h4>
                <p className="text-sm text-[#414943]">
                  100% natural fruit heritage preserved without modification.
                </p>
              </div>
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

              <button className="bg-[#ffdcc6] text-[#7f410b] px-8 py-4 rounded-full font-bold tracking-[0.1em] hover:bg-white transition-colors">
                CONTACT OUR R&amp;D TEAM
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
