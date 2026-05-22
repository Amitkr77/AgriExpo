"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import appimg from "@/assets/application-hero.png";

import {
  Factory,
  GlassWater,
  Pill,
  Package,
  Soup,
  Globe2,
  ShieldCheck,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  Truck,
  Settings2,
} from "lucide-react";

const applications = [
  {
    title: "Food Manufacturing",
    icon: Factory,
    desc: "Ingredient powders for sauces, seasoning blends, snacks, frozen foods, bakery fillings, processed foods and industrial formulations.",
    color: "from-[#285943] to-[#1e3f31]",
  },
  {
    title: "Beverage Brands",
    icon: GlassWater,
    desc: "Fruit powders for smoothies, instant drink mixes, flavored beverages, wellness drinks, energy drinks and juice concentrates.",
    color: "from-[#f5a35c] to-[#d97b2f]",
  },
  {
    title: "Nutraceuticals & Supplements",
    icon: Pill,
    desc: "Functional powders for protein blends, capsules, sachets, superfood mixes, herbal supplements and wellness products.",
    color: "from-[#4f7c65] to-[#285943]",
  },
  {
    title: "Private Label Manufacturing",
    icon: Package,
    desc: "Custom formulations, white-label ingredient sourcing, retail packaging and custom blend development for global brands.",
    color: "from-[#f2c15c] to-[#d9a32d]",
  },
  {
    title: "Instant & Packaged Foods",
    icon: Soup,
    desc: "Ingredients for soups, noodles, premixes, dehydrated foods, ready meals and convenience food production.",
    color: "from-[#2f4738] to-[#17261d]",
  },
];

const features = [
  "Export-ready ingredient quality",
  "Controlled processing standards",
  "Consistent batch uniformity",
  "FSSC 22000 & HACCP systems",
  "Global export support",
  "Flexible packaging solutions",
  "Bulk supply capabilities",
  "Custom mesh size support",
  "Reliable industrial lead times",
  "Private label manufacturing",
];

const industries = [
  {
    title: "Food Processing",
    value: "250+",
  },
  {
    title: "Global Buyers",
    value: "35+",
  },
  {
    title: "Export Markets",
    value: "24+",
  },
  {
    title: "Ingredient Variants",
    value: "100+",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ApplicationsPage() {
  return (
    <main className="overflow-hidden bg-[#f7fbf5] text-gray-800">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#0d2d1f] px-6 py-24 lg:px-16">

        {/* BACKGROUND IMAGE */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
            backgroundImage: `url(${appimg.src})`,
            }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* PREMIUM GREEN GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041b10]/40 via-[#0d3b24]/25 to-[#166534]/10"></div>

        {/* SOFT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168, 239, 184, 0.12),transparent_30%)]"></div>

        {/* GRID TEXTURE */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(142, 190, 163, 0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(129, 196, 117, 0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-green-300" />

              <span className="text-sm font-semibold tracking-[0.15em] text-green-100 uppercase">
                Export-Grade Ingredient Solutions
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.05] text-white md:text-6xl">
              Bulk Fruit &
              <span className="block text-[#f5c66d]">
                Vegetable Powders
              </span>
              for Global Food Industries
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-green-50 md:text-xl">
              SRI GREEN supplies dehydrated and spray-dried fruit and vegetable powders for food manufacturers, beverage brands, nutraceutical companies, private label businesses and instant food producers worldwide.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#123524] transition duration-300 hover:scale-105"
              >
                Explore Product Catalog

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                Request Bulk Samples
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {industries.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
              >
                <h3 className="text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-green-100">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-28 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="font-semibold uppercase tracking-[0.25em] text-green-700">
              Industrial Ingredient Solutions
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#143523] md:text-6xl">
              Designed for Modern Food Manufacturing
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              Our export-grade ingredient powders are engineered for commercial food production, industrial blending, beverage formulation, seasoning systems and nutritional applications with consistent quality and scalable supply capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#edf7ec] px-6 py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-green-700">
              Explore Applications
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#143523] md:text-5xl">
              Industrial Applications Across Food Industries
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group"
                >
                  <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

                    {/* <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.color}`}></div> */}

                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-700">
                      <Icon className="h-8 w-8 text-green-700 transition group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-black text-[#143523]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-relaxed text-gray-600">
                      {item.desc}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-bold text-green-700">
                      Learn More

                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
     <section className="px-6 py-28 lg:px-16 bg-[#f7fbf5]">

  <div className="mx-auto max-w-7xl">

    {/* CENTER HEADING */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-20 max-w-4xl text-center"
    >
      <span className="font-semibold uppercase tracking-[0.25em] text-green-700">
        Why Manufacturers Choose SRI GREEN
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-[#143523] md:text-6xl">
        Reliable Ingredient Supply for Industrial Buyers
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-gray-600 md:text-xl">
        We help manufacturers scale production with export-grade fruit and vegetable powders supported by quality systems, reliable supply chains and global logistics capabilities.
      </p>
    </motion.div>

    {/* TWO GRID LAYOUT */}
    <div className="grid items-stretch gap-10 lg:grid-cols-2">

      {/* LEFT GRID */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="h-full rounded-[3rem] bg-white p-8 shadow-2xl border border-green-100"
      >
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-700" />
          </div>

          <div>
            <h3 className="text-3xl font-black text-[#143523]">
              Industrial Supply Advantages
            </h3>

            <p className="mt-1 text-gray-500">
              Trusted by global food manufacturers
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="group flex items-start gap-3 rounded-2xl border border-green-100 bg-[#f7fbf5] p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-green-700" />

              <span className="font-medium leading-relaxed text-gray-700">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT GRID */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >

        {/* GLOW */}
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-green-300/20 blur-3xl"></div>

        <div className="relative h-full overflow-hidden rounded-[3rem] bg-[#123524] p-8 text-white shadow-2xl">

          <div className="mb-10">
            <h3 className="text-3xl font-black">
              Enterprise Manufacturing Support
            </h3>

            <p className="mt-3 text-green-100">
              Export-grade systems designed for scalable industrial production.
            </p>
          </div>

          <div className="grid gap-6">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-start gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-md transition"
            >
              <ShieldCheck className="h-10 w-10 text-[#f5c66d]" />

              <div>
                <h3 className="text-2xl font-black">
                  Certified Quality Systems
                </h3>

                <p className="mt-2 leading-relaxed text-green-100">
                  FSSC 22000 and HACCP compliant manufacturing and processing systems.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-start gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-md transition"
            >
              <Truck className="h-10 w-10 text-[#f5c66d]" />

              <div>
                <h3 className="text-2xl font-black">
                  Global Export Capability
                </h3>

                <p className="mt-2 leading-relaxed text-green-100">
                  Bulk supply and export logistics support for international industrial buyers.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-start gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-md transition"
            >
              <Settings2 className="h-10 w-10 text-[#f5c66d]" />

              <div>
                <h3 className="text-2xl font-black">
                  Flexible Customization
                </h3>

                <p className="mt-2 leading-relaxed text-green-100">
                  Custom mesh sizes, packaging options and formulation support.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* INDUSTRIES */}
      <section className="bg-[#0d2d1f] px-6 py-28 text-white lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">
            <span className="font-semibold uppercase tracking-[0.25em] text-green-300">
              Industries We Serve
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Trusted Across Global Manufacturing Segments
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Food Manufacturing",
              "Beverage Brands",
              "Nutraceutical Companies",
              "Private Label Businesses",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2"
              >
                <Globe2 className="h-10 w-10 text-[#f5c66d]" />

                <h3 className="mt-6 text-2xl font-black">
                  {item}
                </h3>

                <p className="mt-4 leading-relaxed text-green-100">
                  Export-quality ingredient powders tailored for industrial-scale production and global distribution.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#edf7ec] to-[#f7fbf5] px-6 py-32 lg:px-16">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700">
            <BadgeCheck className="h-5 w-5" />

            Trusted Industrial Ingredient Supplier
          </div>

          <h2 className="text-4xl font-black leading-tight text-[#143523] md:text-6xl">
            Looking for Reliable Bulk Ingredient Supply?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Partner with SRI GREEN for export-grade fruit and vegetable powders tailored for industrial manufacturing and global distribution.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button className="rounded-2xl bg-green-700 px-8 py-4 font-bold text-white transition hover:bg-green-800 hover:scale-105">
              Request Technical Specifications
            </button>

            <button className="rounded-2xl border border-green-700 px-8 py-4 font-bold text-green-700 transition hover:bg-green-50">
              Get a Bulk Quote
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}