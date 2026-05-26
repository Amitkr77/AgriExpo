"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  Globe2,
  FlaskConical,
  Leaf,
  CheckCircle2,
  Factory,
  PackageCheck,
  Microscope,
  ClipboardCheck,
  Award,
} from "lucide-react";
import qualityHero from "@/assets/quality-hero.png";

/* ─────────────────────────────────────────
   DESIGN SYSTEM TOKENS  (design.md)
───────────────────────────────────────── */
/* Colors pulled from design.md palette */
const DS = {
  surface: "#fbfaeb",
  surfaceDim: "#dbdbcc",
  surfaceContainer: "#f0efe0",
  surfaceContHigh: "#eae9da",
  surfaceContHighest: "#e4e3d4",
  onSurface: "#1b1c13",
  onSurfaceVariant: "#414943",
  outlineVariant: "#c0c9c1",
  primary: "#14422d",
  onPrimary: "#ffffff",
  primaryContainer: "#2d5a43",
  onPrimaryContainer: "#9fcfb2",
  secondary: "#7e5700",
  onSecondary: "#ffffff",
  secondaryContainer: "#fec567",
  onSecondaryContainer: "#765100",
  tertiaryContainer: "#7f410b",
  onTertiaryContainer: "#ffb482",
  primaryFixed: "#bceecf",
  onPrimaryFixedVar: "#224f39",
  secondaryFixed: "#ffdead",
  onSecondaryFixed: "#604100",
  tertiaryFixed: "#ffdcc6",
};

/* ── animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = (d = 0.1, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: d, delayChildren: delay } },
});

/* ── data ── */
const certifications = [
  {
    title: "ISO 22000",
    body: "International Organization for Standardization",
    scope:
      "Food safety management system covering sourcing, processing, packaging and exports.",
    validity: "Valid till Dec 2027",
    bg: DS.primaryFixed,
    titleColor: DS.primary,
    bodyColor: DS.onPrimaryFixedVar,
  },
  {
    title: "FSSC 22000",
    body: "Foundation FSSC",
    scope:
      "Comprehensive food safety certification aligned with global retail and export standards.",
    validity: "Valid till Sept 2027",
    bg: DS.secondaryFixed,
    titleColor: DS.secondary,
    bodyColor: DS.onSecondaryFixed,
  },
  {
    title: "HACCP",
    body: "Hazard Analysis & Critical Control Points",
    scope:
      "Preventive food safety approach ensuring contamination-free processing.",
    validity: "Valid till Aug 2026",
    bg: DS.tertiaryFixed,
    titleColor: DS.tertiaryContainer,
    bodyColor: "#5f2d00",
  },
  {
    title: "GMP",
    body: "Good Manufacturing Practices",
    scope:
      "Controlled hygienic manufacturing environment and operational consistency.",
    validity: "Valid till Jan 2028",
    bg: DS.surfaceContHigh,
    titleColor: DS.primary,
    bodyColor: DS.onSurfaceVariant,
  },
  {
    title: "Non-GMO",
    body: "Non GMO Project",
    scope:
      "Ensures products are sourced and processed without genetically modified ingredients.",
    validity: "Valid till Nov 2026",
    bg: DS.primaryFixed,
    titleColor: DS.primary,
    bodyColor: DS.onPrimaryFixedVar,
  },
  {
    title: "FSSAI",
    body: "Food Safety and Standards Authority of India",
    scope:
      "Licensed and compliant food manufacturing and export operations in India.",
    validity: "Active License",
    bg: DS.secondaryFixed,
    titleColor: DS.secondary,
    bodyColor: DS.onSecondaryFixed,
  },
];

const testingItems = [
  "Microbial contamination testing",
  "Pesticide residue analysis",
  "Heavy metal screening",
  "Moisture content validation",
  "Color consistency checks",
  "Mesh / particle size verification",
  "Shelf-life stability validation",
  "Foreign particle inspection",
  "Aflatoxin testing",
  "Packaging seal integrity",
  "Temperature-controlled storage monitoring",
  "Nutritional consistency analysis",
];

const regions = [
  {
    market: "United States",
    certs: "FDA, HACCP, FSSC 22000",
    status: "Export Ready",
  },
  {
    market: "European Union",
    certs: "ISO 22000, HACCP, Non-GMO",
    status: "Compliant",
  },
  { market: "UAE & Gulf", certs: "FSSC 22000, GMP, FSSAI", status: "Approved" },
  { market: "Australia", certs: "ISO 22000, HACCP", status: "Ready" },
  { market: "Singapore", certs: "FSSC 22000, GMP", status: "Compliant" },
  { market: "Japan", certs: "ISO 22000, Non-GMO", status: "Verified" },
];

const qualitySteps = [
  {
    icon: Leaf,
    title: "Raw Material Sourcing",
    desc: "We source premium-grade fruits, vegetables, spices and herbs directly from trusted farms and verified agricultural partners.",
    bg: DS.primaryFixed,
    iconBg: DS.primary,
    iconColor: DS.onPrimary,
  },
  {
    icon: Microscope,
    title: "Lab Testing",
    desc: "Every production batch undergoes microbial and chemical testing before entering the processing cycle.",
    bg: DS.secondaryFixed,
    iconBg: DS.secondary,
    iconColor: DS.onSecondary,
  },
  {
    icon: Factory,
    title: "Controlled Manufacturing",
    desc: "Products are manufactured in hygienic facilities with strict SOPs and monitored processing environments.",
    bg: DS.tertiaryFixed,
    iconBg: DS.tertiaryContainer,
    iconColor: DS.onTertiaryContainer,
  },
  {
    icon: PackageCheck,
    title: "Secure Packaging",
    desc: "Multi-layer export-grade packaging preserves freshness, shelf-life and product integrity during transit.",
    bg: DS.surfaceContHigh,
    iconBg: DS.primary,
    iconColor: DS.onPrimary,
  },
];

const stats = [
  { number: "35+", label: "Export Countries" },
  { number: "100%", label: "Batch Tested" },
  { number: "24/7", label: "Quality Monitoring" },
  { number: "99.8%", label: "Shipment Approval Rate" },
];

/* ── AnimatedCounter ── */

function AnimatedCounter({ target, duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const [display, setDisplay] = useState(target);
  const running = useRef(false);

  useEffect(() => {
    if (!inView) {
      setDisplay(target);
      running.current = false;
      return;
    }

    if (running.current) return;
    running.current = true;

    // ✅ Extract first number only
    const match = target.match(/-?\d+(\.\d+)?/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const numeric = parseFloat(match[0]);

    // ✅ preserve EVERYTHING after the number (IMPORTANT FIX)
    const suffix = target.slice(match.index + match[0].length);

    const isDecimal = match[0].includes(".");

    let current = 0;
    const step = numeric / (duration / 16);

    const interval = setInterval(() => {
      current += step;

      if (current >= numeric) {
        setDisplay(
          (isDecimal ? numeric.toFixed(1) : Math.floor(numeric)) + suffix,
        );
        clearInterval(interval);
      } else {
        setDisplay(
          (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix,
        );
      }
    }, 16);

    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ── FloatingParticles ── */
function FloatingParticles({ count = 16 }) {
  const [mounted, setMounted] = useState(false);
  const particles = useRef([]);
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      w: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      dur: Math.random() * 10 + 8,
    }));
    setMounted(true);
  }, [count]);
  if (!mounted)
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" />
    );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.current.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/10 qp-particle"
          style={{
            width: `${p.w}px`,
            height: `${p.w}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ════ MAIN ════ */
export default function QualityPage() {
  // useEffect(() => {
  //   const go = () => {
  //     const el = document.querySelector(window.location.hash);
  //     if (el)
  //       setTimeout(
  //         () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
  //         100,
  //       );
  //   };
  //   go();
  //   window.addEventListener("hashchange", go);
  //   return () => window.removeEventListener("hashchange", go);
  // }, []);

  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const [activeForm, setActiveForm] = useState(null);
  const closeForm = () => setActiveForm(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    closeForm();
  };

  return (
    <main
      style={{
        background: DS.surface,
        color: DS.onSurface,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      className="overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
        @keyframes qpFloat{0%,100%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:.7}90%{opacity:.7}50%{transform:translateY(-50px) translateX(12px)}}
        .qp-particle{animation:qpFloat 9s ease-in-out infinite;}
        @keyframes qpBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        .qp-bounce{animation:qpBounce 2.2s ease-in-out infinite;}
        @keyframes qpShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        .qp-shimmer{background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);background-size:200% 100%;animation:qpShimmer 3s ease-in-out infinite;}
        @keyframes qpGlow{0%,100%{box-shadow:0 0 20px rgba(20,66,45,.12)}50%{box-shadow:0 0 48px rgba(20,66,45,.28)}}
        .qp-glow{animation:qpGlow 3s ease-in-out infinite;}
      `}</style>

      {/* ════ HERO ════
          Dark forest green hero — primary-container is the darkest brand green,
          headline in surface (cream), body in on-primary-container (sage)         */}     
        <section
          className="relative overflow-hidden px-6 lg:px-16 py-10 lg:py-16"
          style={{
            background:
              "linear-gradient(135deg, #d3e5dd 0%, #c7ddd3 50%, #b9d2c6 100%)",
          }}
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            // style={{
            //   backgroundImage: `url(${qualityHero.src})`,
            // }}
          />

          <FloatingParticles count={16} />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.5fr_0.8fr]">
            
            {/* ═════════ LEFT CONTENT CARD ═════════ */}
            <motion.div
                variants={stagger(0.15, 0.2)}
                initial="hidden"
                animate={heroReady ? "show" : "hidden"}
                className="relative overflow-hidden rounded-[3rem]"
              >
                {/* BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${qualityHero.src})`,
                  }}
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(17,52,35,0.88) 0%, rgba(28,77,52,0.78) 55%, rgba(211,229,221,0.35) 100%)",
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10 p-8 md:p-12 lg:p-14 flex flex-col justify-between h-full">
                                           
                <div>
                  {/* BADGE */}
                  <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10"
                    style={{
                      background: "rgba(255,255,255,.12)",
                      border: "1px solid rgba(255,255,255,.2)",
                      color: DS.onPrimaryContainer,
                      backdropFilter: "blur(12px)",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                    // style={{
                    //    backgroundImage: `url(${qualityHero.src})`,
                    //    backgroundSize: "cover",}}
                  >
                    <ShieldCheck size={18} className="qp-bounce" />
                    Export Certified Manufacturing
                  </motion.div>

                  {/* HEADING */}
                  <motion.h1
                    variants={fadeUp}
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "clamp(42px,7vw,82px)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.05em",
                      color: DS.surface,
                    }}
                  >
                    Export-Grade
                    <span
                      style={{
                        display: "block",
                        color: DS.secondaryContainer,
                      }}
                    >
                      Quality at Every Stage
                    </span>
                  </motion.h1>

                  {/* DESCRIPTION */}
                  <motion.p
                    variants={fadeUp}
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 18,
                      fontWeight: 500,
                      lineHeight: "30px",
                      color: DS.onPrimaryContainer,
                      maxWidth: 620,
                      marginTop: 28,
                    }}
                  >
                    AgriExpo follows internationally recognized food safety and
                    quality systems to ensure every product meets strict import
                    requirements of buyers across the US, EU, UAE, Australia and
                    Asian markets.
                  </motion.p>
                </div>

                {/* BUTTONS */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 mt-10"
                >
                  {/* PRIMARY BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#f5b84a" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      background: DS.secondaryContainer,
                      color: DS.onSecondaryContainer,
                      padding: "16px 32px",
                      borderRadius: 9999,
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    View Certifications
                  </motion.button>

                  {/* OUTLINE BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: "rgba(255,255,255,.08)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative overflow-hidden"
                    style={{
                      background: "transparent",
                      color: DS.surface,
                      border: `2px solid rgba(255,255,255,.35)`,
                      padding: "16px 32px",
                      borderRadius: 9999,
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    <span className="relative z-10">
                      Download Quality Profile
                    </span>
                    <div className="absolute inset-0 qp-shimmer" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* ═════════ RIGHT COLUMN ═════════ */}
            <div className="grid gap-5">
              
              {/* IMAGE CARD */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[3rem] min-h-[280px]"
              >
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${qualityHero.src})`,
                    scale: 1.08,
                  }}
                  animate={{ scale: [1.08, 1.12, 1.08] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

                <div className="absolute bottom-5 left-5">
                  <div
                    className="rounded-full px-4 py-2"
                    style={{
                      background: DS.secondaryContainer,
                      color: DS.onSecondaryContainer,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Export Ready • Global Standards
                  </div>
                </div>
              </motion.div>

              {/* STATS GRID */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={stagger(0.13, 0.55)}
                initial="hidden"
                animate={heroReady ? "show" : "hidden"}
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    style={{
                      background:
                        i === 0
                          ? "#fec567"
                          : i === 1
                          ? "#e9965b"
                          : i === 2
                          ? "#89c2e8"
                          : "#9fcfb2",

                      border: "1px solid rgba(255,255,255,.12)",
                      backdropFilter: "blur(14px)",
                      borderRadius: "2rem",
                      padding: "28px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: 42,
                        fontWeight: 800,
                        color: "#fffefe",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      <AnimatedCounter target={s.number} />
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginTop: 6,
                        color: "#e8e8e8",
                      }}
                    >
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      {/* ════ TRUST BAR — surface-container bg, label-caps icons ════ */}
      <section
        style={{
          background: DS.surfaceContainer,
          borderBottom: `1px solid ${DS.outlineVariant}`,
        }}
        className="py-10"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-60px" }}
        >
          {[
            { Icon: Award, label: "Global Certifications" },
            { Icon: ClipboardCheck, label: "Strict QC Procedures" },
            { Icon: Globe2, label: "Worldwide Export Standards" },
            { Icon: FlaskConical, label: "Lab-Tested Products" },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="cursor-default group"
            >
              {/* icon in circle — design.md icon pattern */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: DS.primaryFixed }}
              >
                <Icon size={28} style={{ color: DS.primary }} />
              </div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: DS.onSurfaceVariant,
                }}
                className="group-hover:text-[#14422d] transition-colors duration-300"
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════ CERTIFICATIONS — bento grid ════ */}
      <section
        id="cert"
        className="scroll-mt-32 py-28 px-6 lg:px-16"
        style={{ background: DS.surface }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: DS.primary,
              }}
            >
              Certifications
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: DS.primary,
                marginTop: 16,
              }}
            >
              International Standards You Can Trust
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: DS.onSurfaceVariant,
                marginTop: 16,
              }}
            >
              Our manufacturing, testing and packaging systems are built around
              internationally recognized food safety standards.
            </p>
          </motion.div>

          {/* bento grid — 12 col, cards alternate palette */}
          <motion.div
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
            variants={stagger(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group cursor-default"
                style={{
                  background: cert.bg,
                  borderRadius: "3rem",
                  padding: 32,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* icon circle — design.md icon pattern */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: DS.primary }}
                >
                  <BadgeCheck size={28} style={{ color: DS.onPrimary }} />
                </motion.div>

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    lineHeight: "28px",
                    color: cert.titleColor,
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: cert.bodyColor,
                    marginTop: 8,
                  }}
                >
                  {cert.body}
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    lineHeight: "22px",
                    color: DS.onSurfaceVariant,
                    marginTop: 16,
                  }}
                >
                  {cert.scope}
                </p>

                <div
                  style={{
                    borderTop: `1px solid rgba(0,0,0,.08)`,
                    marginTop: 24,
                    paddingTop: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: cert.titleColor,
                    }}
                  >
                    {cert.validity}
                  </span>
                </div>

                {/* deco circle — design.md decorative accent */}
                <div
                  className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: cert.titleColor }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ QUALITY PROCESS — surface-container-high bg ════ */}
      <section
        className="py-28 px-6 lg:px-16"
        style={{ background: DS.surfaceContHigh }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: DS.primary,
              }}
            >
              Quality Workflow
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: DS.primary,
                marginTop: 16,
              }}
            >
              Multi-Level Quality Control From Farm to Export
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: DS.onSurfaceVariant,
                marginTop: 16,
              }}
            >
              We maintain strict inspection systems at every stage of the supply
              chain.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5 items-start">
            {/* step cards — each a bento card with palette colour */}
            <motion.div
              className="space-y-5"
              variants={stagger(0.13, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-60px" }}
            >
              {qualitySteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    variants={slideLeft}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="flex gap-5 cursor-default"
                    style={{
                      background: step.bg,
                      borderRadius: "3rem",
                      padding: 32,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: step.iconBg }}
                    >
                      <Icon size={28} style={{ color: step.iconColor }} />
                    </motion.div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 24,
                          fontWeight: 700,
                          lineHeight: "28px",
                          color: DS.primary,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 15,
                          fontWeight: 500,
                          lineHeight: "22px",
                          color: DS.onSurfaceVariant,
                          marginTop: 8,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* integrity card — surface bg, primary border (sticker effect) */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-60px" }}
              className="relative"
            >
              <div
                className="absolute -top-8 -left-8 w-36 h-36 rounded-4xl blur-3xl animate-pulse pointer-events-none"
                style={{ background: DS.primaryFixed, opacity: 0.4 }}
              />
              <div
                className="relative qp-glow"
                style={{
                  background: DS.surface,
                  borderRadius: "3rem",
                  padding: 40,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* sticker header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: DS.primaryFixed }}
                  >
                    <ShieldCheck size={28} style={{ color: DS.primary }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: "28px",
                        color: DS.primary,
                      }}
                    >
                      Product Integrity Assurance
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: DS.onSurfaceVariant,
                        marginTop: 4,
                      }}
                    >
                      Every shipment verified before dispatch.
                    </p>
                  </div>
                </div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-4"
                  variants={stagger(0.07, 0.35)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, margin: "-40px" }}
                >
                  {testingItems.slice(0, 8).map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{
                        scale: 1.03,
                        borderColor: DS.primaryContainer,
                        backgroundColor: DS.primaryFixed,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className="flex items-start gap-3 cursor-default"
                      style={{
                        background: DS.surfaceContainer,
                        border: `1px solid ${DS.outlineVariant}`,
                        borderRadius: "1.5rem",
                        padding: 16,
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        style={{
                          color: DS.primary,
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                        className="group-hover:scale-125 transition-transform duration-300"
                      />
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 14,
                          fontWeight: 500,
                          color: DS.onSurface,
                        }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* mini stat pills */}
                <motion.div
                  className="mt-8 grid grid-cols-3 gap-4"
                  variants={stagger(0.1, 0.7)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, margin: "-40px" }}
                >
                  {[
                    { val: "100%", label: "Batch Tested" },
                    { val: "35+", label: "Countries" },
                    { val: "24/7", label: "Monitoring" },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      variants={scaleIn}
                      whileHover={{
                        scale: 1.07,
                        backgroundColor: DS.primaryFixed,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className="text-center cursor-default"
                      style={{
                        background: DS.surfaceContHigh,
                        borderRadius: "9999px",
                        padding: "16px 8px",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 22,
                          fontWeight: 800,
                          color: DS.primary,
                        }}
                      >
                        {s.val}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: DS.onSurfaceVariant,
                          marginTop: 4,
                        }}
                      >
                        {s.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ TESTING — surface bg, bento cards ════ */}
      <section
        className="py-28 px-6 lg:px-16"
        style={{ background: DS.surface }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: DS.secondary,
              }}
            >
              Laboratory Testing
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: DS.primary,
                marginTop: 16,
              }}
            >
              What We Test For
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: DS.onSurfaceVariant,
                marginTop: 16,
              }}
            >
              Our quality assurance team performs detailed laboratory analysis
              to maintain product purity, consistency and compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
          >
            {testingItems.map((item, i) => {
              /* alternate palette: primary-fixed, secondary-fixed, tertiary-fixed */
              const palettes = [
                {
                  bg: DS.primaryFixed,
                  iconBg: DS.primary,
                  iconColor: DS.onPrimary,
                  titleColor: DS.primary,
                },
                {
                  bg: DS.secondaryFixed,
                  iconBg: DS.secondary,
                  iconColor: DS.onSecondary,
                  titleColor: DS.secondary,
                },
                {
                  bg: DS.tertiaryFixed,
                  iconBg: DS.tertiaryContainer,
                  iconColor: DS.onTertiaryContainer,
                  titleColor: "#5f2d00",
                },
              ];
              const p = palettes[i % 3];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group cursor-default"
                  style={{
                    background: p.bg,
                    borderRadius: "3rem",
                    padding: 28,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: p.iconBg }}
                    >
                      <FileCheck2 size={20} style={{ color: p.iconColor }} />
                    </motion.div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 16,
                          fontWeight: 700,
                          color: p.titleColor,
                        }}
                      >
                        {item}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: "20px",
                          color: DS.onSurfaceVariant,
                          marginTop: 6,
                        }}
                      >
                        Conducted using controlled testing methods and
                        documented batch validation procedures.
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════ EXPORT TABLE — primary-container dark bg ════ */}
      <section
        className="py-28 px-6 lg:px-16 relative overflow-hidden"
        style={{ background: DS.primaryContainer }}
      >
        <FloatingParticles count={12} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: DS.secondaryContainer,
              }}
            >
              Global Export Compliance
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(32px,5vw,48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: DS.surface,
                marginTop: 16,
              }}
            >
              Compliance by International Market
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: DS.onPrimaryContainer,
                marginTop: 16,
              }}
            >
              AgriExpo products are prepared according to documentation, testing
              and regulatory requirements expected by international importers.
            </p>
          </motion.div>

          <motion.div
            className="mt-16"
            style={{
              background: "rgba(255,255,255,.07)",
              border: `1px solid rgba(255,255,255,.12)`,
              borderRadius: "3rem",
              backdropFilter: "blur(16px)",
            }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.25 }}
          >
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
                  {["Market", "Required Certifications", "AgriExpo Status"].map(
                    (h) => (
                      <th
                        key={h}
                        className="p-6 text-left"
                        style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: DS.onPrimaryContainer,
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <motion.tbody
                variants={stagger(0.09, 0.35)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-60px" }}
              >
                {regions.map((r, i) => (
                  <motion.tr
                    key={i}
                    variants={fadeUp}
                    whileHover={{ backgroundColor: "rgba(255,255,255,.07)" }}
                    className="transition-colors duration-300"
                    style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
                  >
                    <td
                      className="p-6"
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontWeight: 700,
                        color: DS.surface,
                      }}
                    >
                      {r.market}
                    </td>
                    <td
                      className="p-6"
                      style={{
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontWeight: 500,
                        color: DS.onPrimaryContainer,
                      }}
                    >
                      {r.certs}
                    </td>
                    <td className="p-6">
                      {/* pill status badge — design.md pill chip */}
                      <motion.span
                        whileHover={{ scale: 1.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                        }}
                        className="inline-flex items-center justify-center cursor-default"
                        style={{
                          background: DS.secondaryContainer,
                          color: DS.onSecondaryContainer,
                          borderRadius: 9999,
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.08em",

                          width: 140,
                          height: 34,

                          textAlign: "center",
                        }}
                      >
                        {r.status}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ════ CTA — secondary (warm brown) bg ════ */}
      <section
        className="py-32 px-6 lg:px-16 relative overflow-hidden"
        style={{ background: DS.secondary }}
      >
        {/* deco circles — design.md decorative tonal overlay */}
        <div
          className="absolute w-80 h-80 rounded-full pointer-events-none -left-24 -top-24 opacity-10"
          style={{ background: DS.secondaryContainer }}
        />
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none -right-16 -bottom-20 opacity-[.08]"
          style={{ background: DS.tertiaryFixed }}
        />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          variants={stagger(0.14, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
        >
          {/* label-caps badge */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,.12)",
              color: DS.secondaryContainer,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <ShieldCheck size={16} className="qp-bounce" />
            Trusted by International Buyers
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(32px,5vw,48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: DS.surface,
            }}
          >
            Built for Reliable Global Food Exports
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: "28px",
              color: "rgba(251,250,235,.8)",
              maxWidth: 640,
              margin: "24px auto 0",
            }}
          >
            From sourcing and manufacturing to testing and documentation,
            AgriExpo follows premium quality systems that help importers,
            wholesalers and distributors buy with confidence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            {/* primary pill */}
            <motion.button
              whileHover={{ scale: 1.06, backgroundColor: "#f5b84a" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setActiveForm("certification")}
              style={{
                background: DS.secondaryContainer,
                color: DS.onSecondaryContainer,
                padding: "16px 40px",
                borderRadius: 9999,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 700,
                fontSize: 16,
                border: "none",
                cursor: "pointer",
              }}
            >
              Request Certifications
            </motion.button>
            {/* outline pill */}
            <motion.button
              whileHover={{
                scale: 1.06,
                backgroundColor: "rgba(255,255,255,.1)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setActiveForm("export")}
              style={{
                background: "transparent",
                color: DS.surface,
                border: `2px solid rgba(255,255,255,.4)`,
                padding: "16px 40px",
                borderRadius: 9999,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Contact Export Team
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ════ MODAL ════ */}
      <AnimatePresence>
        {activeForm && (
          <motion.div
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
              background: "rgba(20,66,45,.55)",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeForm}
          >
            <motion.div
              key="box"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl shadow-2xl"
              style={{
                background: DS.surface,
                borderRadius: "3rem",
                padding: 40,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* close × */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                onClick={closeForm}
                className="absolute right-6 top-5 text-3xl leading-none cursor-pointer"
                style={{
                  background: "none",
                  border: "none",
                  color: DS.onSurfaceVariant,
                }}
              >
                ×
              </motion.button>

              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: DS.primary,
                  marginBottom: 8,
                }}
              >
                {activeForm === "certification"
                  ? "Request Certifications"
                  : "Contact Export Team"}
              </h2>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: DS.onSurfaceVariant,
                  marginBottom: 24,
                }}
              >
                {activeForm === "certification"
                  ? "Fill this form to request certification documents."
                  : "Fill this form and our export team will contact you."}
              </p>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  ["text", "Full Name"],
                  ["email", "Email Address"],
                  ["tel", "Phone Number"],
                ].map(([type, ph]) => (
                  <input
                    key={ph}
                    type={type}
                    placeholder={ph}
                    required
                    style={{
                      borderRadius: "1.5rem",
                      border: `1.5px solid ${DS.outlineVariant}`,
                      padding: "14px 20px",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      outline: "none",
                      background: DS.surfaceContainer,
                      color: DS.onSurface,
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = DS.primary)}
                    onBlur={(e) =>
                      (e.target.style.borderColor = DS.outlineVariant)
                    }
                  />
                ))}

                {activeForm === "certification" ? (
                  <select
                    required
                    style={{
                      borderRadius: "1.5rem",
                      border: `1.5px solid ${DS.outlineVariant}`,
                      padding: "14px 20px",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      outline: "none",
                      background: DS.surfaceContainer,
                      color: DS.onSurface,
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Select Certification</option>
                    {[
                      "ISO 22000",
                      "FSSC 22000",
                      "HACCP",
                      "GMP",
                      "Non-GMO",
                      "FSSAI",
                    ].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="Export Country / Market"
                    required
                    style={{
                      borderRadius: "1.5rem",
                      border: `1.5px solid ${DS.outlineVariant}`,
                      padding: "14px 20px",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      outline: "none",
                      background: DS.surfaceContainer,
                      color: DS.onSurface,
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                )}

                <textarea
                  placeholder={
                    activeForm === "certification"
                      ? "Which documents do you need?"
                      : "Tell us your export requirement"
                  }
                  rows="4"
                  required
                  style={{
                    borderRadius: "1.5rem",
                    border: `1.5px solid ${DS.outlineVariant}`,
                    padding: "14px 20px",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    outline: "none",
                    background: DS.surfaceContainer,
                    color: DS.onSurface,
                    width: "100%",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: DS.primaryContainer,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: DS.primary,
                    color: DS.onPrimary,
                    padding: "16px",
                    borderRadius: 9999,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    border: "none",
                    cursor: "pointer",
                    marginTop: 4,
                  }}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
