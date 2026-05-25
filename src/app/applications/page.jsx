"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import apphero1 from "@/assets/apphero1.png";
import apphero2 from "@/assets/apphero2.png";

import {
  Factory,
  GlassWater,
  Pill,
  Package,
  Soup,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  Truck,
  Settings2,
  Leaf,
  Wheat,
  Microscope,
  Store,
} from "lucide-react";
import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

/* ══════════════════════════════════════════════════
   DESIGN TOKENS — Artisanal Confectionary System
   ══════════════════════════════════════════════════

   Colors:
     Cream          #fbfaeb  (surface)
     Cream-Canvas   #f5f4e5  (surface-container-low)
     Cream-Mid      #f0efe0  (surface-container)
     Cream-Deep     #eae9da  (surface-container-high)
     Cream-Deeper   #e4e3d4  (surface-container-highest)
     Sage           #14422d  (primary)
     Sage-Container #2d5a43  (primary-container)
     Sage-Soft      #9fcfb2  (on-primary-container)
     Honey          #fec567  (secondary-container)
     Honey-Deep     #7e5700  (secondary)
     Honey-On       #765100  (on-secondary-container)
     Terra          #e9965b  (narrative accent)
     Terra-Deep     #5f2d00  (tertiary)
     Terra-Container#7f410b  (tertiary-container)
     Terra-Soft     #ffb482  (on-tertiary-container)
     Sky            #89c2e8  (narrative accent)
     Chocolate      #1b1c13  (on-surface)
     Inverse-Surface#303127  (inverse-surface)
     Inverse-On     #f2f1e2  (inverse-on-surface)
     Outline        #717973  (outline)
     Outline-Var    #c0c9c1  (outline-variant)
     Muted          #414943  (on-surface-variant)
     Surface-Tint   #3a674f

   Typography (Plus Jakarta Sans):
     display-xl:    80px / 800 / 90px / -0.04em
     headline-lg:   48px / 800 / 52px / -0.02em
     headline-mob:  32px / 800 / 36px
     title-md:      24px / 700 / 28px
     body-rg:       16px / 500 / 24px
     label-caps:    12px / 700 / 16px / 0.1em

   Spacing:
     unit: 8px  |  container-padding: 32px
     gutter: 20px  |  margin-page: 40px

   Rounded:
     sm: 0.5rem | DEFAULT: 1rem | md: 1.5rem
     lg: 2rem   | xl: 3rem      | full: 9999px
   ══════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────
   MAGNET HOOK
   ────────────────────────────────────────────── */
function useMagnet() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.08);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.08);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, onMouseMove, reset };
}

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const applications = [
  {
    title: "Food Manufacturing",
    icon: Factory,
    desc: "Dehydrated and spray-dried ingredient powders for sauces, seasoning blends, snack coatings, frozen food formulations, bakery fillings and ready-to-eat meal production. Optimized for industrial mixing, batching and automated processing lines.",
    large: true,
    bg: "bg-[#2d5a43]",
    text: "text-[#f2f1e2]",
    iconBg: "bg-white/20",
    iconColor: "text-[#9fcfb2]",
    ctaBg: "bg-[#fec567] hover:bg-[#f5bd5f]",
    ctaText: "text-[#281900]",
    hoverSheen:
      "bg-[radial-gradient(circle_at_top_right,rgba(159,207,178,0.25),transparent_50%)]",
  },
  {
    title: "Beverage Brands",
    icon: GlassWater,
    desc: "Fruit and vegetable powders for smoothies, instant drink mixes, functional beverages, energy drinks, juice concentrates and wellness shots. Engineered for rapid solubility and consistent flavor delivery across production batches.",
    bg: "bg-[#fec567]",
    text: "text-[#281900]",
    iconBg: "bg-[#7e5700]/15",
    iconColor: "text-[#7e5700]",
    ctaBg: "bg-[#7e5700] hover:bg-[#5f3b00]",
    ctaText: "text-white",
    hoverSheen:
      "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_50%)]",
  },
  {
    title: "Nutraceuticals & Supplements",
    icon: Pill,
    desc: "Functional powders for protein blends, encapsulated supplements, sachets, superfood mixes, herbal formulations and clinical nutrition products. Available in controlled particle sizes for precise dosing and tablet compression.",
    bg: "bg-[#e9965b]",
    text: "text-[#311300]",
    iconBg: "bg-[#5f2d00]/15",
    iconColor: "text-[#5f2d00]",
    ctaBg: "bg-[#5f2d00] hover:bg-[#311300]",
    ctaText: "text-white",
    hoverSheen:
      "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_50%)]",
  },
  {
    title: "Private Label Manufacturing",
    icon: Package,
    desc: "End-to-end custom formulation services including white-label ingredient sourcing, bespoke blend development, retail-ready packaging and regulatory documentation for brands entering new markets.",
    large: true,
    bg: "bg-[#7f410b]",
    text: "text-[#ffb482]",
    iconBg: "bg-white/15",
    iconColor: "text-[#ffb482]",
    ctaBg: "bg-[#fec567] hover:bg-[#f5bd5f]",
    ctaText: "text-[#281900]",
    hoverSheen:
      "bg-[radial-gradient(circle_at_top_right,rgba(255,180,130,0.25),transparent_50%)]",
  },
  {
    title: "Instant & Packaged Foods",
    icon: Soup,
    desc: "Specialized ingredients for instant soups, noodle seasonings, premix bases, dehydrated meal kits and convenience food lines. Designed for long shelf stability and rapid reconstitution in consumer applications.",
    bg: "bg-[#89c2e8]",
    text: "text-[#0c3a5e]",
    iconBg: "bg-white/30",
    iconColor: "text-[#0c3a5e]",
    ctaBg: "bg-[#0c3a5e] hover:bg-[#082a47]",
    ctaText: "text-white",
    hoverSheen:
      "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_50%)]",
  },
  {
    title: "Hotel & Food Service",
    icon: Globe2,
    desc: "Bulk ingredient solutions for hotel kitchens, restaurant chains, catering operations and institutional food service. Consistent quality at volume with simplified procurement and logistics support.",
    bg: "bg-[#f0efe0]",
    text: "text-[#1b1c13]",
    iconBg: "bg-[#2d5a43]/12",
    iconColor: "text-[#2d5a43]",
    ctaBg: "bg-[#2d5a43] hover:bg-[#14422d]",
    ctaText: "text-white",
    hoverSheen:
      "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6),transparent_50%)]",
  },
];

const features = [
  { label: "Export-ready ingredient quality", color: "bg-[#2d5a43]" },
  { label: "FSSC 22000 & HACCP certified", color: "bg-[#7f410b]" },
  { label: "Consistent batch uniformity", color: "bg-[#7e5700]" },
  { label: "Controlled processing standards", color: "bg-[#5f2d00]" },
  { label: "Global export logistics", color: "bg-[#0c3a5e]" },
  { label: "Flexible packaging formats", color: "bg-[#2d5a43]" },
  { label: "Bulk supply capabilities", color: "bg-[#7f410b]" },
  { label: "Custom mesh size support", color: "bg-[#7e5700]" },
  { label: "Reliable industrial lead times", color: "bg-[#5f2d00]" },
  { label: "Private label & co-packing", color: "bg-[#0c3a5e]" },
];

const heroStats = [
  {
    title: "Food Processing",
    value: "20+",
    bg: "bg-[#fec567]",
    text: "text-[#281900]",
  },
  {
    title: "Global Buyers",
    value: "35+",
    bg: "bg-[#e9965b]",
    text: "text-[#311300]",
  },
  {
    title: "Export Markets",
    value: "20+",
    bg: "bg-[#89c2e8]",
    text: "text-[#0c3a5e]",
  },
  {
    title: "Ingredient Variants",
    value: "100+",
    bg: "bg-[#9fcfb2]",
    text: "text-[#002112]",
  },
];

const qualityStats = [
  {
    value: "99.2%",
    label: "Batch Consistency",
    bg: "bg-[#2d5a43]",
    text: "text-[#9fcfb2]",
  },
  {
    value: "48hr",
    label: "Sample Dispatch",
    bg: "bg-[#7e5700]",
    text: "text-[#ffdead]",
  },
  {
    value: "15+",
    label: "Certifications",
    bg: "bg-[#7f410b]",
    text: "text-[#ffb482]",
  },
];

const supportCards = [
  {
    title: "Certified Quality Systems",
    desc: "FSSC 22000 and HACCP compliant production with real-time monitoring, batch traceability and documented quality control at every stage of processing.",
    icon: ShieldCheck,
    bg: "bg-[#2d5a43]",
    text: "text-[#f2f1e2]",
    iconWrap: "bg-white/15",
    iconColor: "text-[#9fcfb2]",
    accent: "#9fcfb2",
    tag: "Certified",
  },
  {
    title: "Global Export Capability",
    desc: "End-to-end international logistics with multi-modal shipping, customs documentation support and temperature-controlled transit for sensitive ingredients.",
    icon: Truck,
    bg: "bg-[#fec567]",
    text: "text-[#281900]",
    iconWrap: "bg-[#7e5700]/15",
    iconColor: "text-[#7e5700]",
    accent: "#7e5700",
    tag: "Global Reach",
  },
  {
    title: "Flexible Customization",
    desc: "Tailored mesh sizes, proprietary blends, custom formulations and multiple packaging formats designed around your production requirements and market specifications.",
    icon: Settings2,
    bg: "bg-[#e9965b]",
    text: "text-[#311300]",
    iconWrap: "bg-[#5f2d00]/15",
    iconColor: "text-[#5f2d00]",
    accent: "#5f2d00",
    tag: "Custom Fit",
  },
];

const industrySegments = [
  {
    title: "Food Manufacturing",
    desc: "Bulk ingredient supply for processed food production, seasoning systems and industrial blending operations with guaranteed consistency.",
    icon: Leaf,
    bg: "bg-[#9fcfb2]",
    text: "text-[#002112]",
    iconBg: "bg-[#2d5a43]",
    iconColor: "text-white",
    tag: "Production",
  },
  {
    title: "Beverage Brands",
    desc: "Rapid-solubility fruit and vegetable powders for beverage formulation, from craft brands to high-volume commercial production.",
    icon: Wheat,
    bg: "bg-[#fec567]",
    text: "text-[#281900]",
    iconBg: "bg-[#7e5700]",
    iconColor: "text-white",
    tag: "Formulation",
  },
  {
    title: "Nutraceutical Companies",
    desc: "Precision-grade functional powders for supplements, clinical nutrition and wellness products with full analytical documentation.",
    icon: Microscope,
    bg: "bg-[#ffb482]",
    text: "text-[#311300]",
    iconBg: "bg-[#7f410b]",
    iconColor: "text-white",
    tag: "Clinical Grade",
  },
  {
    title: "Private Label Businesses",
    desc: "Turnkey formulation and packaging services for brands launching or expanding their product lines across global retail markets.",
    icon: Store,
    bg: "bg-[#89c2e8]",
    text: "text-[#0c3a5e]",
    iconBg: "bg-[#0c3a5e]",
    iconColor: "text-white",
    tag: "Retail Ready",
  },
];

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export default function ApplicationsPage() {
  return (
    <main
      className="overflow-hidden bg-[#fbfaeb] text-[#1b1c13]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ═══════════════════════════════════════════
          HERO — Bento Grid: 2/3 + 1/3
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-5 py-8 md:px-10 lg:px-[40px] lg:py-12 lg:pt-24">
        {/* DOT GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#717973_1px,transparent_1px)] bg-[size:20px_20px]" />

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.7fr_0.75fr] lg:gap-5">
          {/* LEFT HERO BENTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[3rem] bg-[#2d5a43] min-h-180"
          >
            {/* IMAGE LAYER */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${apphero1.src})` }}
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(20,66,45,0.97)_0%,rgba(45,90,67,0.92)_50%,rgba(127,65,11,0.35)_100%)]" />

            {/* CONTENT */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12 lg:p-[32px]">
              <div>
                {/* BADGE — pill-shaped */}
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-sm">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#fec567]" />
                  <span
                    className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#f2f1e2]"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    Premium Ingredient Solutions
                  </span>
                </div>

                {/* DISPLAY TITLE */}
                <h1
                  className="mt-8 max-w-5xl text-[52px] font-extrabold leading-[0.9] tracking-[-0.04em] text-white md:text-[80px]"
                  style={{ lineHeight: "0.9", letterSpacing: "-0.04em" }}
                >
                  Bulk Fruit &
                  <span className="block text-[#fec567]">
                    Vegetable Powders
                  </span>
                </h1>

                {/* BODY */}
                <p className="mt-8 max-w-2xl text-[16px] font-medium leading-[1.5] text-[#9fcfb2] md:text-[16px]">
                  SRI GREEN manufactures export-grade dehydrated and spray-dried
                  fruit and vegetable powders for food brands, beverage
                  companies, nutraceutical manufacturers and private label
                  businesses worldwide.
                </p>
              </div>

              {/* BUTTONS — pill-shaped, high-contrast */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 rounded-full bg-[#fec567] px-7 py-3.5 text-[14px] font-bold text-[#281900] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5bd5f]"
                >
                  Explore Catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button className="rounded-full border border-[#9fcfb2]/30 bg-[#9fcfb2]/10 px-7 py-3.5 text-[14px] font-bold text-[#9fcfb2] backdrop-blur-sm transition-all duration-300 hover:bg-[#9fcfb2]/20">
                  Request Samples
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-5 lg:gap-5">
            {/* IMAGE CARD — breathing parallax */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[3rem] min-h-[280px] md:min-h-[340px] group"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${apphero2.src})`,
                  scale: 1.1,
                }}
                animate={{ scale: [1.1, 1.13, 1.1], y: [0, -6, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#7f410b]/10 via-transparent to-[#7f410b]/40" />

              {/* hover highlight */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]" />

              {/* BADGE — sticker style */}
              <div className="absolute bottom-4 left-4">
                <div className="rounded-full bg-[#fec567] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#281900]">
                  Export Ready &bull; Food Grade
                </div>
              </div>
            </motion.div>

            {/* MAGNETIC STATS — each a different color */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {heroStats.map((item, index) => {
                const magnet = useMagnet();

                return (
                  <motion.div
                    key={index}
                    ref={magnet.ref}
                    onMouseMove={magnet.onMouseMove}
                    onMouseLeave={magnet.reset}
                    style={{ x: magnet.springX, y: magnet.springY }}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileTap={{ scale: 0.96 }}
                    className={`
                      ${item.bg} ${item.text}
                      group relative cursor-pointer
                      rounded-[2rem]
                      p-4 md:p-5
                      text-center
                      overflow-hidden
                      transition-all duration-300
                    `}
                  >
                    {/* light bloom */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_65%)]" />

                    <div className="relative z-10">
                      <h3 className="text-[2rem] font-extrabold tracking-[-0.04em] md:text-[2.4rem]">
                        {item.value}
                      </h3>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] opacity-70 md:text-[11px]">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTRO — Sky Blue bento card (informative)
          ═══════════════════════════════════════════ */}
      <section className="px-5 py-24 lg:px-[40px] lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] bg-[#89c2e8] px-8 py-12 text-center md:px-14 md:py-16"
          >
            <span
              className="text-[12px] font-bold uppercase text-[#0c3a5e] opacity-70"
              style={{ letterSpacing: "0.1em" }}
            >
              Industrial Ingredient Solutions
            </span>

            <h2
              className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0c3a5e] md:text-[48px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Designed for Modern
              <span className="block">Food Manufacturing</span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-[16px] font-medium leading-[1.5] text-[#0c3a5e]/75 md:text-[16px]">
              Our export-grade ingredient powders are engineered for commercial
              food production, industrial blending, beverage formulation,
              seasoning systems and nutritional applications — with consistent
              quality, batch-to-batch uniformity and scalable supply
              capabilities backed by certified processing standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          APPLICATIONS — Colorful Bento Grid
          ═══════════════════════════════════════════ */}
      <section className="px-5 pb-24 lg:px-[40px] lg:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="text-[12px] font-bold uppercase text-[#7e5700]"
              style={{ letterSpacing: "0.1em" }}
            >
              Explore Applications
            </span>

            <h2
              className="mt-5 text-[32px] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#1b1c13] md:text-[48px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Industrial Applications
              <span className="block text-[#717973]">
                Across Food Industries
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] font-medium leading-[1.5] text-[#414943] md:text-[16px]">
              Purpose-built ingredient systems for every stage of food and
              beverage manufacturing — from raw material processing to finished
              product formulation.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={item.large ? "md:col-span-2" : ""}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.005 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      ${item.bg} ${item.text}
                      group relative overflow-hidden
                      rounded-[3rem]
                      h-full
                      p-6 md:p-8 lg:p-10
                      transition-all duration-300
                    `}
                  >
                    {/* HOVER SHEEN */}
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${item.hoverSheen}`}
                    />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-10">
                        {/* LEFT CONTENT */}
                        <div className="max-w-2xl">
                          {/* ICON — squircle backdrop */}
                          <div
                            className={`
                              ${item.iconBg}
                              flex h-14 w-14 items-center justify-center
                              rounded-[1.5rem]
                              backdrop-blur-sm
                              transition-transform duration-300
                              group-hover:scale-110
                            `}
                          >
                            <Icon className={`h-6 w-6 ${item.iconColor}`} />
                          </div>

                          {/* TITLE */}
                          <h3
                            className="mt-5 text-[24px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[28px]"
                            style={{
                              fontWeight: 700,
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {item.title}
                          </h3>

                          {/* DESC */}
                          <p className="mt-4 max-w-xl text-[14px] font-medium leading-[1.7] opacity-75 md:text-[15px]">
                            {item.desc}
                          </p>
                        </div>

                        {/* RIGHT CTA — pill button */}
                        <div className="flex items-end shrink-0">
                          <button
                            className={`
                              ${item.ctaBg} ${item.ctaText}
                              group/button inline-flex items-center gap-2
                              rounded-full
                              px-5 py-3
                              text-[12px] font-bold uppercase
                              transition-all duration-300
                            `}
                            style={{ letterSpacing: "0.1em" }}
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </button>
                        </div>
                      </div>

                      {/* BOTTOM DIVIDER */}
                      <div className="mt-6 h-[1px] w-full bg-current/10" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE — Cream canvas + colored pills + colored stats
          ═══════════════════════════════════════════ */}
      <section className="px-5 py-24 lg:px-[40px] lg:py-32">
        <div className="relative overflow-hidden mx-auto max-w-7xl rounded-[3rem] bg-[#f0efe0] p-6 md:p-10 lg:p-[32px]">
          {/* DECORATIVE BLOBS */}
          <div className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#fec567]/15 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#89c2e8]/15 blur-3xl" />

          {/* DOT TEXTURE */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#717973_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div>
              <span
                className="text-[12px] font-bold uppercase text-[#7e5700]"
                style={{ letterSpacing: "0.1em" }}
              >
                Why Manufacturers Choose SRI GREEN
              </span>

              <h2
                className="mt-5 text-[32px] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#1b1c13] md:text-[48px]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Reliable Ingredient
                <span className="block text-[#717973]">Supply Systems</span>
              </h2>

              <p className="mt-6 max-w-xl text-[16px] font-medium leading-[1.5] text-[#414943]">
                We help manufacturers scale production with export-grade fruit
                and vegetable powders supported by rigorous quality systems,
                industrial consistency and dependable global supply chains —
                from raw material sourcing to final delivery.
              </p>

              {/* QUALITY STATS — each a different color */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {qualityStats.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bg} ${item.text} rounded-[1.5rem] px-4 py-5`}
                  >
                    <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                      {item.value}
                    </h3>
                    <p
                      className="mt-1 text-[10px] font-bold uppercase opacity-70"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FEATURES — multicolor pills */}
            <div className="flex flex-wrap items-start gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-white/70 px-5 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]" />

                  <div className="relative z-10 flex items-center gap-3">
                    <div
                      className={`${feature.color} flex h-8 w-8 items-center justify-center rounded-full`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[13px] font-bold text-[#414943] transition-colors duration-300 group-hover:text-[#1b1c13]">
                      {feature.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SUPPORT — Three colorful bento cards
          ═══════════════════════════════════════════ */}
      <section className="px-5 py-24 lg:px-[40px] lg:py-32">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="max-w-4xl">
            <span
              className="text-[12px] font-bold uppercase text-[#7e5700]"
              style={{ letterSpacing: "0.1em" }}
            >
              Enterprise Support Systems
            </span>

            <h2
              className="mt-5 text-[32px] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#1b1c13] md:text-[48px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Built for Industrial
              <span className="block text-[#717973]">Manufacturing Scale</span>
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] font-medium leading-[1.5] text-[#414943]">
              Certified production systems, global export capability and
              flexible ingredient customization — everything your manufacturing
              operation needs from a single ingredient partner.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="my-12 h-[1px] w-full bg-[#c0c9c1]" />

          {/* GRID */}
          <div className="grid gap-5 md:grid-cols-3">
            {supportCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className={`
                    ${item.bg} ${item.text}
                    group relative overflow-hidden
                    rounded-[3rem]
                    p-6 md:p-8
                    transition-all duration-300
                  `}
                >
                  {/* subtle inner glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />

                  {/* ICON + TITLE */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`
                        ${item.iconWrap}
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        transition-transform duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <h3
                      className="text-[20px] font-bold tracking-[-0.02em]"
                      style={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="relative z-10 mt-4 pl-16 text-[14px] font-medium leading-[1.7] opacity-75">
                    {item.desc}
                  </p>

                  {/* MICRO TAG */}
                  <div className="relative z-10 ml-16 mt-5 flex items-center gap-3">
                    <div
                      className="h-[1px] w-10 transition-all duration-300 group-hover:w-16"
                      style={{ backgroundColor: `${item.accent}33` }}
                    />
                    <span
                      className="text-[10px] font-bold uppercase opacity-60 transition-opacity group-hover:opacity-100"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INDUSTRIES — Four colorful bento cards
          ═══════════════════════════════════════════ */}
      <section className="px-5 py-24 lg:px-[40px] lg:py-32">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="max-w-4xl">
            <span
              className="text-[12px] font-bold uppercase text-[#7e5700]"
              style={{ letterSpacing: "0.1em" }}
            >
              Industries We Serve
            </span>

            <h2
              className="mt-5 text-[32px] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#1b1c13] md:text-[48px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Trusted Across Global
              <span className="block text-[#717973]">
                Manufacturing Segments
              </span>
            </h2>
          </div>

          {/* GRID */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industrySegments.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`
                    ${item.bg} ${item.text}
                    group relative overflow-hidden
                    rounded-[3rem]
                    p-7 md:p-8
                    transition-all duration-300
                  `}
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]" />

                  {/* ICON — solid circle */}
                  <div
                    className={`
                      ${item.iconBg} ${item.iconColor}
                      relative z-10
                      flex h-12 w-12 items-center justify-center
                      rounded-full
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="relative z-10 mt-5 text-[20px] font-bold tracking-[-0.02em]"
                    style={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative z-10 mt-3 text-[13px] font-medium leading-[1.7] opacity-70">
                    {item.desc}
                  </p>

                  {/* MICRO TAG */}
                  <div className="relative z-10 mt-5 flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-current/15 transition-all duration-300 group-hover:w-14 group-hover:bg-current/30" />
                    <span
                      className="text-[10px] font-bold uppercase opacity-50 transition-opacity group-hover:opacity-100"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Dark chocolate panel + honey gold panel
          ═══════════════════════════════════════════ */}
      <section className="px-5 py-24 lg:px-[40px] lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          {/* LEFT — Dark Chocolate editorial panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center rounded-[3rem] bg-[#303127] p-8 md:p-10 lg:p-[32px]"
          >
            <span
              className="text-[12px] font-bold uppercase text-[#9fcfb2]"
              style={{ letterSpacing: "0.1em" }}
            >
              Partner With SRI GREEN
            </span>

            <h2
              className="mt-5 text-[32px] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#f2f1e2] md:text-[48px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Industrial Ingredient
              <span className="block text-[#9fcfb2]">Supply Partner</span>
            </h2>

            <p className="mt-6 max-w-xl text-[16px] font-medium leading-[1.5] text-[#c0c9c1]">
              We support global manufacturers with consistent, export-grade
              fruit and vegetable powders engineered for scalable production
              systems. From initial specification to bulk delivery, our team
              ensures every batch meets your quality and timeline requirements.
            </p>

            {/* TRUST LINE */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-[1px] w-10 bg-[#9fcfb2]/30" />
              <p
                className="text-[11px] font-bold uppercase text-[#717973]"
                style={{ letterSpacing: "0.15em" }}
              >
                Export &bull; Certified &bull; Scalable Supply
              </p>
            </div>

            {/* MINI STATS */}
            <div className="mt-8 flex gap-3">
              {[
                {
                  value: "20+",
                  label: "Markets",
                  bg: "bg-[#2d5a43]",
                  text: "text-[#9fcfb2]",
                },
                {
                  value: "100+",
                  label: "Variants",
                  bg: "bg-[#7e5700]",
                  text: "text-[#ffdead]",
                },
                {
                  value: "35+",
                  label: "Buyers",
                  bg: "bg-[#7f410b]",
                  text: "text-[#ffb482]",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`${s.bg} ${s.text} rounded-[1.5rem] px-4 py-4`}
                >
                  <h3 className="text-xl font-extrabold tracking-[-0.04em]">
                    {s.value}
                  </h3>
                  <p
                    className="mt-0.5 text-[9px] font-bold uppercase opacity-60"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Honey Gold action panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-[3rem] bg-[#fec567] p-8 flex flex-col justify-between md:p-10"
          >
            {/* SOFT GLOW */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#7e5700]/10 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#e9965b]/15 blur-3xl" />

            {/* HEADER */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#281900] px-4 py-2 text-[#fec567]">
                <BadgeCheck className="h-4 w-4 text-[#fec567]" />
                <span
                  className="text-[10px] font-bold uppercase"
                  style={{ letterSpacing: "0.15em" }}
                >
                  Quick Actions
                </span>
              </div>

              <p className="mt-5 text-[15px] font-medium leading-[1.7] text-[#281900]/70">
                Get technical details, pricing or sample support within 24–48
                hours. Our team responds to every inquiry with detailed
                specifications and competitive quotations.
              </p>
            </div>

            {/* ACTIONS */}
            <div className="relative z-10 mt-8 space-y-3">
              <button className="w-full rounded-full bg-[#281900] px-6 py-4 text-[13px] font-bold text-[#fec567] transition-all duration-300 hover:bg-[#0c1a00] hover:-translate-y-0.5">
                Request Technical Specs
              </button>

              <button className="w-full rounded-full border-2 border-[#281900]/20 bg-[#281900]/5 px-6 py-4 text-[13px] font-bold text-[#281900] backdrop-blur-sm transition-all duration-300 hover:bg-[#281900]/10 hover:-translate-y-0.5">
                Get Bulk Quote
              </button>
            </div>

            {/* FOOT NOTE */}
            <div className="relative z-10 mt-8 border-t border-[#281900]/15 pt-5">
              <p className="text-[11px] leading-[1.6] text-[#281900]/60">
                Response time:{" "}
                <span className="font-bold text-[#281900]">under 24 hours</span>
                <br />
                MOQ:{" "}
                <span className="font-bold text-[#281900]">
                  industrial scale only
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
