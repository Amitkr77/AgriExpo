"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowLeft, BadgeCheck } from "lucide-react";
import { trackEvent } from "@/lib/gtag";
import Request from "@/components/RequestSample";
import { useState, useEffect } from "react"; // ✅ Added useEffect

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const ALL_APPLICATIONS = [
  { label: "Food Manufacturing", href: "/applications/food-manufacturing" },
  { label: "Beverage Brands", href: "/applications/beverage-brands" },
  { label: "Nutraceuticals", href: "/applications/nutraceuticals" },
  { label: "Private Label", href: "/applications/private-label" },
  { label: "Instant Foods", href: "/applications/instant-foods" },
  { label: "Hotel & Food Service", href: "/applications/hotel-food-services" },
];

export default function ApplicationSubPage({ data }) {
  const [open, setOpen] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false); // ✅ Track history
  const router = useRouter();

  // ✅ Check browser history on mount
  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  if (!data) return null;

  // ---- Safe helpers ----
  const hasArray = (arr) => Array.isArray(arr) && arr.length > 0;

  const breadcrumb = hasArray(data.breadcrumb) ? data.breadcrumb : [];

  const breadcrumbLd =
    breadcrumb.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.item,
          })),
        }
      : null;

  // ✅ SMART BACK HANDLER
  const handleBackClick = () => {
    try {
      if (canGoBack) {
        router.back();
        trackEvent("navigation", "back_button_history", data.slug || "application");
      } else {
        router.push("/applications");
        trackEvent("navigation", "back_button_fallback", data.slug || "application");
      }
    } catch (error) {
      console.error("Navigation error:", error);
      router.push("/applications");
    }
  };

  const openRequest = (label) => {
    setOpen(true);
    trackEvent("quote_click", "conversion", label);
  };

  // ---- Other applications (filter current) ----
  const otherApps = ALL_APPLICATIONS.filter(
    (a) => !data.slug || !a.href.includes(data.slug)
  );

  return (
    <main
      className="overflow-hidden bg-[#fbfaeb] text-[#1b1c13]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* JSON-LD */}
      {data.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
        />
      )}
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      {data.hero && (
        <section className="relative overflow-hidden px-5 mt-20 py-8 md:px-10 lg:px-[40px] lg:py-12">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#717973_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-20 mx-auto max-w-7xl">
            {/* MAIN GRID */}
            <div className="grid gap-5 lg:gap-6 lg:grid-cols-[0.85fr_1.7fr]">
              
              {/* LEFT COLUMN - BREADCRUMB + STATS */}
              <div className="flex flex-col gap-4 lg:gap-5">
                
                {/* BREADCRUMB CARD */}
                {breadcrumb.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[2rem] bg-[#f0efe0] p-5 lg:p-6"
                  >
                    <p className="text-[11px] font-bold uppercase text-[#717973] tracking-[0.15em] mb-2">
                      You are here
                    </p>
                    <nav className="flex flex-wrap items-center gap-2 text-[13px] text-[#414943]">
                      <Link
                        href="/"
                        className="hover:text-[#14422d] transition-colors"
                      >
                        Home
                      </Link>
                      <span className="text-[#717973]">/</span>
                      <Link
                        href="/applications"
                        className="hover:text-[#14422d] transition-colors"
                      >
                        Applications
                      </Link>
                      <span className="text-[#717973]">/</span>
                      <span className="font-bold text-[#14422d]">
                        {data.hero.heading}
                      </span>
                    </nav>
                  </motion.div>
                )}

                {/* STATS GRID - 2x2 */}
                {hasArray(data.stats) && (
                  <div className="grid grid-cols-2 gap-4 lg:gap-5 flex-1">
                    {data.stats.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className={`${item.bg} ${item.text} rounded-[2rem] p-5 text-center flex flex-col justify-center items-center min-h-[130px] lg:min-h-[150px]`}
                      >
                        <h3 className="text-[2rem] lg:text-[2.2rem] font-extrabold tracking-[-0.04em] leading-none">
                          {item.value}
                        </h3>
                        <p
                          className="mt-2 text-[10px] font-bold uppercase opacity-70 leading-tight"
                          style={{ letterSpacing: "0.1em" }}
                        >
                          {item.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN - HERO CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`relative overflow-hidden rounded-[3rem] ${
                  data.hero.color?.bg ?? "bg-gradient-to-br from-orange-400 to-orange-500"
                } min-h-[500px] lg:min-h-[580px]`}
              >
                {/* BACKGROUND PATTERN */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-center p-6 md:p-8 lg:p-10">
                  
                  {/* BADGE */}
                  {data.hero.badge && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className={`inline-flex items-center gap-3 rounded-full ${
                        data.hero.color?.badge ?? "bg-white/15 backdrop-blur-sm"
                      } px-5 py-2.5 w-fit border border-white/20`}
                    >
                      <div className="h-2 w-2 rounded-full bg-white" />
                      <span
                        className={`text-[11px] font-bold uppercase tracking-[0.15em] ${
                          data.hero.color?.badgeText ?? "text-[#5a3a00]"
                        }`}
                      >
                        {data.hero.badge}
                      </span>
                    </motion.div>
                  )}

                  {/* HEADING */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white"
                  >
                    {data.hero.heading}
                    {data.hero.headingAccent && (
                      <span
                        className={`block mt-1 ${
                          data.hero.color?.accent ?? "text-[#5a3a00]"
                        }`}
                      >
                        {data.hero.headingAccent}
                      </span>
                    )}
                  </motion.h1>

                  {/* SUBHEADING */}
                  {data.hero.subheading && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className={`mt-6 max-w-2xl text-[14px] lg:text-[15px] font-medium leading-[1.6] ${
                        data.hero.color?.body ?? "text-white/90"
                      }`}
                    >
                      {data.hero.subheading}
                    </motion.p>
                  )}

                  {/* CTA BUTTONS */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex flex-wrap gap-3"
                  >
                    <button
                      type="button"
                      onClick={() => openRequest("request_samples_hero")}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fec567] px-6 py-3 text-[13px] font-bold text-[#281900] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Request Sample
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <Link
                      href="/inquiry"
                      className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-[13px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/25 hover:border-white/60"
                    >
                      Get Bulk Quote
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          USE CASES
          ═══════════════════════════════════════════ */}
      {data.useCases && hasArray(data.useCases.items) && (
        <section className="px-5 py-5 lg:px-[40px] lg:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start"
            >
              {/* LEFT */}
              <div>
                <span
                  className="text-[12px] font-bold uppercase text-[#7e5700]"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Applications
                </span>
                {data.useCases.heading && (
                  <h2 className="mt-5 text-[32px] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#1b1c13] md:text-[44px]">
                    {data.useCases.heading}
                  </h2>
                )}
                {data.useCases.subheading && (
                  <p className="mt-5 text-[16px] font-medium leading-[1.6] text-[#414943]">
                    {data.useCases.subheading}
                  </p>
                )}
                {data.useCases.note && (
                  <p className="mt-4 text-[14px] font-medium leading-[1.7] text-[#717973] italic">
                    {data.useCases.note}
                  </p>
                )}
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.useCases.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-[1.5rem] bg-[#f0efe0] px-5 py-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2d5a43]">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[14px] font-medium text-[#1b1c13]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          QUALITY POINTS
          ═══════════════════════════════════════════ */}
      {data.qualityPoints && hasArray(data.qualityPoints.items) && (
        <section className="px-5 pb-5 lg:px-[40px] lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[3rem] bg-[#2d5a43] p-8 md:p-12 lg:p-[48px]">
              <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
                {/* LEFT */}
                <div>
                  <span
                    className="text-[12px] font-bold uppercase text-[#9fcfb2]"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    Quality Standards
                  </span>
                  {data.qualityPoints.heading && (
                    <h2 className="mt-5 text-[32px] font-extrabold leading-[0.95] tracking-[-0.02em] text-white md:text-[40px]">
                      {data.qualityPoints.heading}
                    </h2>
                  )}
                </div>

                {/* RIGHT */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {data.qualityPoints.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="flex items-center gap-3 rounded-[1.5rem] bg-white/10 px-5 py-4 backdrop-blur-sm"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fec567]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#281900]" />
                      </div>
                      <span className="text-[13px] font-medium text-[#f2f1e2]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          FLEXIBILITY
          ═══════════════════════════════════════════ */}
      {data.flexibility && hasArray(data.flexibility.items) && (
        <section className="px-5 pb-5 lg:px-[40px] lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
              {/* LEFT */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <span
                  className="text-[12px] font-bold uppercase text-[#7e5700]"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Formulation Support
                </span>
                {data.flexibility.heading && (
                  <h2 className="mt-5 text-[32px] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#1b1c13] md:text-[40px]">
                    {data.flexibility.heading}
                  </h2>
                )}
                {data.flexibility.subheading && (
                  <p className="mt-5 text-[16px] font-medium leading-[1.6] text-[#414943]">
                    {data.flexibility.subheading}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openRequest("request_samples_flexibility")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#14422d] px-6 py-3 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d5a43] active:translate-y-0"
                  >
                    Request Samples
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#c0c9c1] px-6 py-3 text-[13px] font-bold text-[#414943] transition-all hover:border-[#14422d] hover:text-[#14422d]"
                  >
                    Discuss Requirements
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT */}
              <div className="grid grid-cols-1 gap-3">
                {data.flexibility.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-center gap-4 rounded-[1.5rem] bg-[#f0efe0] px-6 py-4"
                  >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#fec567]" />
                    <span className="text-[14px] font-medium text-[#1b1c13]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          BUYERS + WHY US
          ═══════════════════════════════════════════ */}
      {((data.buyers && hasArray(data.buyers.items)) ||
        hasArray(data.whyUs)) && (
        <section className="px-5 pb-5 lg:px-[40px] lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[3rem] bg-[#f0efe0] p-8 md:p-12 lg:p-[48px]">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* BUYERS */}
                {data.buyers && hasArray(data.buyers.items) && (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                  >
                    <span
                      className="text-[12px] font-bold uppercase text-[#7e5700]"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      Who We Work With
                    </span>
                    {data.buyers.heading && (
                      <h2 className="mt-4 text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#1b1c13]">
                        {data.buyers.heading}
                      </h2>
                    )}
                    <div className="mt-6 space-y-3">
                      {data.buyers.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-2 w-2 shrink-0 rounded-full bg-[#2d5a43]" />
                          <span className="text-[15px] font-medium text-[#414943]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* WHY US */}
                {hasArray(data.whyUs) && (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span
                      className="text-[12px] font-bold uppercase text-[#7e5700]"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      Why Choose SRI GREEN
                    </span>
                    <h2 className="mt-4 text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#1b1c13]">
                      Our Advantage
                    </h2>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {data.whyUs.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#414943]"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#2d5a43]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <section className="px-5 pb-5 lg:px-[40px] lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center rounded-[3rem] bg-[#303127] p-8 md:p-10 lg:p-[40px]"
            >
              <span
                className="text-[12px] font-bold uppercase text-[#9fcfb2]"
                style={{ letterSpacing: "0.1em" }}
              >
                Ready to Source?
              </span>
              <h2 className="mt-5 text-[32px] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#f2f1e2] md:text-[44px]">
                Partner With
                <span className="block text-[#9fcfb2]">SRI GREEN Industries</span>
              </h2>
              <p className="mt-6 text-[15px] font-medium leading-[1.6] text-[#c0c9c1]">
                Get export-grade fruit and vegetable powders with certified
                quality, reliable supply, and complete documentation — tailored
                for your production requirements.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] w-10 bg-[#9fcfb2]/30" />
                <p
                  className="text-[11px] font-bold uppercase text-[#717973]"
                  style={{ letterSpacing: "0.15em" }}
                >
                  Export · Certified · Scalable
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[3rem] bg-[#fec567] p-8 flex flex-col justify-between md:p-10"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#281900] px-4 py-2">
                  <BadgeCheck className="h-4 w-4 text-[#fec567]" />
                  <span
                    className="text-[10px] font-bold uppercase text-[#fec567]"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Quick Actions
                  </span>
                </div>
                <p className="mt-5 text-[14px] font-medium leading-[1.7] text-[#281900]/70">
                  Our export team responds within 24 hours with specifications,
                  samples, and pricing.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => openRequest("request_sample_cta")}
                  className="w-full rounded-full bg-[#281900] px-6 py-4 text-[13px] font-bold text-[#fec567] transition-all hover:bg-[#0c1a00] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Request Samples
                </button>
                <Link
                  href="/inquiry"
                  className="block w-full rounded-full border-2 border-[#281900]/20 bg-[#281900]/5 px-6 py-4 text-center text-[13px] font-bold text-[#281900] transition-all hover:bg-[#281900]/10 hover:-translate-y-0.5"
                >
                  Get Bulk Quote
                </Link>
              </div>

              <div className="mt-8 border-t border-[#281900]/15 pt-5">
                <p className="text-[11px] leading-[1.6] text-[#281900]/60">
                  Response time:{" "}
                  <span className="font-bold text-[#281900]">under 24 hours</span>
                  <br />
                  Minimum order:{" "}
                  <span className="font-bold text-[#281900]">
                    industrial scale
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* OTHER APPLICATIONS */}
          {otherApps.length > 0 && (
            <div className="mt-8">
              <p className="text-[13px] font-bold text-[#717973] uppercase tracking-[0.1em] mb-4">
                Explore Other Applications
              </p>
              <div className="flex flex-wrap gap-3">
                {otherApps.map((app, i) => (
                  <Link
                    key={i}
                    href={app.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[#c0c9c1] bg-white px-5 py-2.5 text-[13px] font-medium text-[#414943] transition-all hover:border-[#14422d] hover:text-[#14422d]"
                  >
                    {app.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Request open={open} setOpen={setOpen} />
    </main>
  );
}