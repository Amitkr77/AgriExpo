"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

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

const certifications = [
  {
    title: "ISO 22000",
    body: "International Organization for Standardization",
    scope:
      "Food safety management system covering sourcing, processing, packaging and exports.",
    validity: "Valid till Dec 2027",
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "FSSC 22000",
    body: "Foundation FSSC",
    scope:
      "Comprehensive food safety certification aligned with global retail and export standards.",
    validity: "Valid till Sept 2027",
    color: "from-lime-500 to-emerald-700",
  },
  {
    title: "HACCP",
    body: "Hazard Analysis & Critical Control Points",
    scope:
      "Preventive food safety approach ensuring contamination-free processing.",
    validity: "Valid till Aug 2026",
    color: "from-green-500 to-emerald-800",
  },
  {
    title: "GMP",
    body: "Good Manufacturing Practices",
    scope:
      "Controlled hygienic manufacturing environment and operational consistency.",
    validity: "Valid till Jan 2028",
    color: "from-teal-500 to-emerald-700",
  },
  {
    title: "Non-GMO",
    body: "Non GMO Project",
    scope:
      "Ensures products are sourced and processed without genetically modified ingredients.",
    validity: "Valid till Nov 2026",
    color: "from-green-600 to-lime-700",
  },
  {
    title: "FSSAI",
    body: "Food Safety and Standards Authority of India",
    scope:
      "Licensed and compliant food manufacturing and export operations in India.",
    validity: "Active License",
    color: "from-emerald-600 to-teal-800",
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
  {
    market: "UAE & Gulf",
    certs: "FSSC 22000, GMP, FSSAI",
    status: "Approved",
  },
  {
    market: "Australia",
    certs: "ISO 22000, HACCP",
    status: "Ready",
  },
  {
    market: "Singapore",
    certs: "FSSC 22000, GMP",
    status: "Compliant",
  },
  {
    market: "Japan",
    certs: "ISO 22000, Non-GMO",
    status: "Verified",
  },
];

const qualitySteps = [
  {
    icon: Leaf,
    title: "Raw Material Sourcing",
    desc: "We source premium-grade fruits, vegetables, spices and herbs directly from trusted farms and verified agricultural partners.",
  },
  {
    icon: Microscope,
    title: "Lab Testing",
    desc: "Every production batch undergoes microbial and chemical testing before entering the processing cycle.",
  },
  {
    icon: Factory,
    title: "Controlled Manufacturing",
    desc: "Products are manufactured in hygienic facilities with strict SOPs and monitored processing environments.",
  },
  {
    icon: PackageCheck,
    title: "Secure Packaging",
    desc: "Multi-layer export-grade packaging preserves freshness, shelf-life and product integrity during transit.",
  },
];

const stats = [
  { number: "35+", label: "Export Countries" },
  { number: "100%", label: "Batch Tested" },
  { number: "24/7", label: "Quality Monitoring" },
  { number: "99.8%", label: "Shipment Approval Rate" },
];

/* ─── Intersection Observer Hook ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();
  const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = numericPart / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericPart, duration]);

  return (
    <span ref={ref}>
      {numericPart % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

/* ─── Floating Particles ─── */
const particles = Array.from({ length: 20 }, (_, i) => ({
  width: 2 + ((i * 7) % 6),
  height: 2 + ((i * 11) % 6),
  left: (i * 17) % 100,
  top: (i * 23) % 100,
  delay: (i * 0.35) % 6,
  duration: 8 + ((i * 1.7) % 10),
}));

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-float-particle"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function QualityPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [searchParams]);

  const [activeForm, setActiveForm] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  /* Section InView refs */
  const [trustRef, trustInView] = useInView();
  const [certRef, certInView] = useInView();
  const [processRef, processInView] = useInView();
  const [testRef, testInView] = useInView();
  const [exportRef, exportInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const closeForm = () => setActiveForm(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    closeForm();
  };

  return (
    <main className="bg-[#f7fbf5] text-gray-800 overflow-hidden">

      {/* ── GLOBAL KEYFRAMES ── */}
      <style jsx global>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10%       { opacity: 1; }
          90%       { opacity: 1; }
          50%       { transform: translateY(-55px) translateX(18px); }
        }
        .animate-float-particle { animation: float-particle 9s ease-in-out infinite; }

        @keyframes shimmer-sweep {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.09) 50%,transparent 100%);
          background-size: 200% 100%;
          animation: shimmer-sweep 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 20px rgba(34,197,94,0.15); }
          50%      { box-shadow: 0 0 45px rgba(34,197,94,0.35); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }

        @keyframes gradient-shift {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient-shift 7s ease infinite; }

        @keyframes bounce-subtle {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-5px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 2.2s ease-in-out infinite; }

        @keyframes fade-in   { from { opacity:0; } to { opacity:1; } }
        @keyframes scale-in  { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d3b24] via-[#14532d] to-[#1f7a3e] px-6 lg:px-16 py-24">

        {/* Background Image — slow zoom on mount */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2200ms] ease-out"
          style={{
            backgroundImage: `url(${qualityHero.src})`,
            transform: heroLoaded ? "scale(1)" : "scale(1.08)",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e16]/40 via-[#14532d]/30 to-[#166534]/10 animate-gradient" />
        <FloatingParticles />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-100 mb-10 backdrop-blur-md transition-all duration-700 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <ShieldCheck className="w-5 h-5 animate-bounce-subtle" />
              Export Certified Manufacturing
            </div>

            {/* H1 */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white transition-all duration-1000 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "380ms" }}
            >
              Export-Grade
              <span className="block text-green-300 bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                Quality at Every Stage
              </span>
            </h1>

            {/* Para */}
            <p
              className={`mt-8 text-lg md:text-xl text-green-50 leading-relaxed max-w-2xl transition-all duration-1000 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "560ms" }}
            >
              AgriExpo follows internationally recognized food safety and quality
              systems to ensure every product meets the strict import requirements
              of buyers across the US, EU, UAE, Australia and Asian markets.
            </p>

            {/* Buttons */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "740ms" }}
            >
              <button className="group relative px-8 py-4 rounded-2xl bg-white text-green-900 font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 shadow-2xl overflow-hidden">
                <span className="relative z-10">View Certifications</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button className="relative px-8 py-4 rounded-2xl border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-500 overflow-hidden">
                <span className="relative z-10">Download Quality Profile</span>
                <div className="absolute inset-0 animate-shimmer" />
              </button>
            </div>
          </div>

          {/* RIGHT — stat cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`group bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,197,94,0.15)] transition-all duration-700 ease-out cursor-default ${heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"}`}
                style={{ transitionDelay: `${920 + index * 140}ms` }}
              >
                <h3 className="text-5xl font-black text-white group-hover:text-green-200 transition-colors duration-500">
                  <AnimatedCounter target={item.number} />
                </h3>
                <p className="mt-3 text-green-100 group-hover:text-white transition-colors duration-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRUST BAR ═══════════════ */}
      <section ref={trustRef} className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { Icon: Award,         label: "Global Certifications"    },
            { Icon: ClipboardCheck,label: "Strict QC Procedures"     },
            { Icon: Globe2,        label: "Worldwide Export Standards"},
            { Icon: FlaskConical,  label: "Lab-Tested Products"      },
          ].map(({ Icon, label }, i) => (
            <div
              key={i}
              className={`group cursor-default transition-all duration-700 ease-out ${trustInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <Icon className="w-10 h-10 mx-auto text-green-700 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500" />
              <p className="mt-3 font-semibold group-hover:text-green-700 transition-colors duration-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CERTIFICATIONS ═══════════════ */}
      <section id="cert" className="scroll-mt-32 py-28 px-6 lg:px-16">
        <div ref={certRef} className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out ${certInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-green-700 font-semibold uppercase tracking-[0.25em]">Certifications</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#113322] leading-tight">
              International Standards You Can Trust
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our manufacturing, testing and packaging systems are built around internationally recognized food safety standards to ensure consistency, compliance and confidence for global buyers.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out ${certInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-14 scale-95"}`}
                style={{ transitionDelay: `${300 + index * 110}ms` }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg">
                    <BadgeCheck className="w-8 h-8 text-green-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#123524] group-hover:text-green-700 transition-colors duration-400">{cert.title}</h3>
                  <p className="mt-3 text-green-700 font-medium">{cert.body}</p>
                  <p className="mt-6 text-gray-600 leading-relaxed">{cert.scope}</p>
                  <div className="mt-6 flex items-center justify-between border-t pt-5">
                    <span className="text-sm font-semibold text-gray-500 group-hover:text-green-600 transition-colors duration-300">{cert.validity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ QUALITY PROCESS ═══════════════ */}
      <section ref={processRef} className="py-28 bg-[#edf7ec] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ease-out ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-green-700 font-semibold uppercase tracking-[0.25em]">Quality Workflow</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#143523] leading-tight">
              Multi-Level Quality Control From Farm to Export
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We maintain strict inspection systems at every stage of the supply chain to guarantee food safety, consistency and export readiness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT — steps */}
            <div className="space-y-8">
              {qualitySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`group flex gap-5 bg-white p-8 rounded-[32px] shadow-xl border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 ease-out ${processInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                    style={{ transitionDelay: `${400 + index * 180}ms` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-8 h-8 text-green-700 group-hover:text-white transition-all duration-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#163825] group-hover:text-green-700 transition-colors duration-400">{step.title}</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT — integrity card */}
            <div
              className={`relative h-full transition-all duration-1000 ease-out ${processInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl animate-pulse" />

              <div className="relative bg-white rounded-[40px] shadow-2xl p-10 border border-green-100 h-full animate-pulse-glow">

                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#163825]">Product Integrity Assurance</h3>
                    <p className="text-gray-500 mt-1">Every shipment verified before dispatch.</p>
                  </div>
                </div>

                {/* Test items */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {testingItems.slice(0, 8).map((item, index) => (
                    <div
                      key={index}
                      className={`group/item flex items-start gap-3 bg-[#f7fbf5] border border-green-100 rounded-2xl p-5 hover:shadow-lg hover:border-green-300 hover:bg-green-50 transition-all duration-500 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                      style={{ transitionDelay: `${800 + index * 90}ms` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-700 mt-1 shrink-0 group-hover/item:scale-125 transition-all duration-300" />
                      <span className="text-gray-700 font-medium group-hover/item:text-green-800 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[
                    { val: "100%", label: "Batch Tested" },
                    { val: "35+",  label: "Countries"    },
                    { val: "24/7", label: "Monitoring"   },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`group/stat bg-green-50 rounded-2xl p-5 text-center hover:bg-green-100 hover:scale-105 transition-all duration-500 cursor-default ${processInView ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                      style={{ transitionDelay: `${1580 + i * 140}ms` }}
                    >
                      <h4 className="text-2xl font-black text-green-700 group-hover/stat:text-green-800 transition-colors duration-300">{stat.val}</h4>
                      <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTING ═══════════════ */}
      <section ref={testRef} className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ease-out ${testInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-green-700 font-semibold uppercase tracking-[0.25em]">Laboratory Testing</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#113322]">What We Test For</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our quality assurance team performs detailed laboratory analysis to maintain product purity, consistency and compliance with international food regulations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testingItems.map((item, index) => (
              <div
                key={index}
                className={`group bg-[#f7fbf5] border border-green-100 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 hover:border-green-300 hover:bg-green-50/80 transition-all duration-600 ${testInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                style={{ transitionDelay: `${180 + index * 75}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <FileCheck2 className="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#143523] group-hover:text-green-700 transition-colors duration-400">{item}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      Conducted using controlled testing methods and documented batch validation procedures.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPORT TABLE ═══════════════ */}
      <section ref={exportRef} className="py-28 bg-[#0f2f1d] px-6 lg:px-16 text-white overflow-hidden relative">
        <FloatingParticles />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <div className={`max-w-3xl transition-all duration-1000 ease-out ${exportInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-green-300 font-semibold uppercase tracking-[0.25em]">Global Export Compliance</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">Compliance by International Market</h2>
            <p className="mt-6 text-lg text-green-50 leading-relaxed">
              AgriExpo products are prepared according to the documentation, testing and regulatory requirements expected by international importers and distributors.
            </p>
          </div>

          {/* Table */}
          <div
            className={`mt-16 overflow-x-auto rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-1000 ease-out ${exportInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="p-6 text-lg">Market</th>
                  <th className="p-6 text-lg">Required Certifications</th>
                  <th className="p-6 text-lg">AgriExpo Status</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, index) => (
                  <tr
                    key={index}
                    className={`border-b border-white/5 hover:bg-white/10 transition-all duration-500 ${exportInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    style={{ transitionDelay: `${600 + index * 110}ms` }}
                  >
                    <td className="p-6 font-semibold">{region.market}</td>
                    <td className="p-6 text-green-100">{region.certs}</td>
                    <td className="p-6">
                      <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-400/20 hover:bg-green-500/30 hover:scale-105 transition-all duration-300 inline-block">
                        {region.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section ref={ctaRef} className="py-32 px-6 lg:px-16 bg-gradient-to-br from-[#e9f6e7] to-[#f7fbf5] relative overflow-hidden">

        {/* Decorative blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ease-out ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 mb-8 transition-all duration-700 ${ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: "200ms" }}>
            <ShieldCheck className="w-5 h-5 animate-bounce-subtle" />
            Trusted by International Buyers
          </div>

          <h2 className={`text-4xl md:text-6xl font-black text-[#123524] leading-tight transition-all duration-1000 ease-out ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "380ms" }}>
            Built for Reliable Global Food Exports
          </h2>

          <p className={`mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-out ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "560ms" }}>
            From sourcing and manufacturing to testing and documentation, AgriExpo follows premium quality systems that help importers, wholesalers and distributors buy with confidence.
          </p>

          <div className={`mt-12 flex flex-wrap justify-center gap-5 transition-all duration-1000 ease-out ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "740ms" }}>
            <button
              onClick={() => setActiveForm("certification")}
              className="group relative px-8 py-4 rounded-2xl bg-green-700 text-white font-semibold hover:bg-green-800 hover:scale-105 hover:shadow-[0_10px_40px_rgba(21,128,61,0.4)] transition-all duration-500 shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Request Certifications</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => setActiveForm("export")}
              className="px-8 py-4 rounded-2xl border border-green-700 text-green-700 font-semibold hover:bg-green-50 hover:scale-105 hover:shadow-lg transition-all duration-500"
            >
              Contact Export Team
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════ MODAL ═══════════════ */}
      <>
        {activeForm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ animation: "fade-in 300ms ease-out both" }}
            onClick={closeForm}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal box */}
            <div
              className="relative w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl"
              style={{ animation: "scale-in 380ms ease-out both" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeForm}
                className="absolute right-5 top-4 text-3xl text-gray-500 hover:text-black hover:rotate-90 transition-all duration-300"
              >
                ×
              </button>

              <h2 className="text-2xl font-black text-green-900 mb-2">
                {activeForm === "certification" ? "Request Certifications" : "Contact Export Team"}
              </h2>

              <p className="text-gray-600 mb-6">
                {activeForm === "certification"
                  ? "Fill this form to request certification documents."
                  : "Fill this form and our export team will contact you."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-green-400 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-green-400 transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-green-400 transition-all duration-300"
                />

                {activeForm === "certification" ? (
                  <select
                    required
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-green-400 transition-all duration-300"
                  >
                    <option value="">Select Certification</option>
                    <option>ISO 22000</option>
                    <option>FSSC 22000</option>
                    <option>HACCP</option>
                    <option>GMP</option>
                    <option>Non-GMO</option>
                    <option>FSSAI</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="Export Country / Market"
                    required
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-green-400 transition-all duration-300"
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
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-green-400 transition-all duration-300"
                />

                <button
                  type="submit"
                  className="group relative w-full rounded-xl bg-green-700 py-3 text-white font-semibold hover:bg-green-800 hover:shadow-lg hover:shadow-green-700/30 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Submit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    </main>
  );
}