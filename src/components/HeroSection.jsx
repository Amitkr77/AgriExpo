"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  CheckCircle,
  Award,
  Globe,
  Leaf,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { trackEvent } from "@/lib/gtag";
import heroimg from "@/assets/hero1.png";
import RequestSample from "@/components/RequestSample";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const cardRef = useRef(null);

  /* -------------------------------------------------------------------------- */
  /* PARALLAX + 3D TILT                                                         */
  /* -------------------------------------------------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });

  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), {
    stiffness: 80,
    damping: 18,
  });

  function handleMouseMove(e) {
    if (!cardRef.current || reduceMotion) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
  }

  /* -------------------------------------------------------------------------- */
  /* NOISE BACKGROUND                                                           */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (reduceMotion) return;

    const style = document.createElement("style");

    style.innerHTML = `
      @keyframes grain {
        0%, 100% { transform: translate(0, 0); }
        20% { transform: translate(-2%, 1%); }
        40% { transform: translate(2%, -1%); }
        60% { transform: translate(-1%, 2%); }
        80% { transform: translate(1%, -2%); }
      }

      @keyframes floatSlow {
        0%, 100% {
          transform: translate3d(0px, 0px, 0px);
        }
        50% {
          transform: translate3d(0px, -12px, 0px);
        }
      }

      @keyframes glowShift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [reduceMotion]);

  /* -------------------------------------------------------------------------- */
  /* ANIMATION VARIANTS                                                         */
  /* -------------------------------------------------------------------------- */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-4">
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-[#fbfaeb]" />

      {/* Animated Gradient */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        animate={
          reduceMotion
            ? {}
            : {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle at top left, rgba(254,197,103,0.20), transparent 30%), radial-gradient(circle at bottom right, rgba(45,90,67,0.18), transparent 35%)",
          backgroundSize: "200% 200%",
        }}
      />


      {/* Grain Overlay */}
      {!reduceMotion && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: "url('/noise.svg')",
            animation: "grain 8s steps(10) infinite",
          }}
        />
      )}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-5 my-12 md:my-20"
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          className="relative md:col-span-6 overflow-hidden rounded-[48px] bg-[#2d5a43] p-8 md:p-10 min-h-[520px] flex flex-col justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />

          {/* Floating Gradient Orb */}
          {!reduceMotion && (
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 12, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[-100px] right-[-80px] h-[260px] w-[260px] rounded-full bg-[#fec567]/20 blur-3xl"
            />
          )}

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 flex flex-wrap items-center gap-3 text-xs font-extrabold tracking-[0.18em] uppercase text-[#dce8df]"
          >
            <div className="rounded-full bg-[#3b6b52] px-4 py-2 flex items-center gap-2 backdrop-blur-xl">
              <Award className="w-3.5 h-3.5" />
              ISO 22000
            </div>

            <span className="w-1.5 h-1.5 rounded-full bg-[#b8d3c2]" />

            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              24+ Countries
            </div>

            <span className="w-1.5 h-1.5 rounded-full bg-[#b8d3c2]" />

            <span>27 SKUs</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="relative z-10 mt-8 max-w-4xl text-[42px] sm:text-[56px] md:text-[68px] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#fbfaeb]"
          >
            India&apos;s Trusted
            <br className="hidden sm:block" />
            Bulk Supplier of
            <br />
            <span className="text-[#fec567]">Fruit & Vegetable Powders</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="relative z-10 mt-6 max-w-2xl text-base md:text-lg leading-8 font-medium text-[#d7e3db]"
          >
            Export-grade dehydrated and spray-dried ingredient powders for food
            manufacturers, beverage brands, and importers worldwide. Consistent
            quality. Reliable logistics.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4"
          >
            {/* PRIMARY BUTTON */}
            <motion.div
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      scale: 1.04,
                      y: -2,
                    }
              }
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1a1a1a] px-8 py-4 text-sm md:text-base font-bold text-[#fbfaeb]"
              >
                {/* Animated Gradient */}
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg,#1a1a1a,#2d5a43,#1a1a1a)",
                    backgroundSize: "200% 200%",
                    animation: "glowShift 4s ease infinite",
                  }}
                />

                {/* Glow */}
                <span className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(254,197,103,0.15)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10">Explore Products</span>

                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* SECONDARY BUTTON */}
            <motion.div
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      scale: 1.03,
                      y: -2,
                    }
              }
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => {
                  setOpen(true);

                  trackEvent(
                    "quote_click",
                    "conversion",
                    "request_sample_button"
                  );
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-8 py-4 text-sm md:text-base font-bold text-[#fbfaeb]"
              >
                <span className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/10" />

                <span className="relative z-10">Request a Sample</span>
              </button>
            </motion.div>
          </motion.div>

          {/* TRUST FOOTER */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 mt-8 flex items-center gap-3"
          >
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fec567] text-[#14422d]"
            >
              <Clock className="w-4 h-4" />
            </motion.div>

            <p className="text-sm font-semibold text-[#d7e3db]">
              Average response time:
              <span className="ml-1 text-[#fec567]">&lt; 24 hours</span>
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          ref={cardRef}
          variants={fadeUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          style={
            reduceMotion
              ? {}
              : {
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  perspective: 1200,
                }
          }
          className="relative md:col-span-6 overflow-hidden rounded-[48px]  min-h-[420px] will-change-transform"
        >
          {/* Floating Image */}
          <motion.img
            src={heroimg.src}
            alt="Fruit and vegetable powder"
            className="h-full w-full object-top"
            style={
              reduceMotion
                ? {}
                : {
                    y: imageY,
                    transform: "translateZ(40px)",
                  }
            }
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Shadow Overlay */}
          <motion.div
            className="absolute inset-0"
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: [0.15, 0.25, 0.15],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.22), transparent 40%)",
            }}
          />

          {/* Floating Badge */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: "translateZ(60px)",
            }}
            className="absolute left-6 right-6 bottom-6 rounded-[28px] border border-white/40 bg-[#fbfaeb]/85 backdrop-blur-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14422d] text-white">
                  <Leaf className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-extrabold text-[#7d847e]">
                    Quality Standard
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-[#14422d]">
                    100% Pure & Natural
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fec567] text-[#14422d]">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <RequestSample open={open} setOpen={setOpen} />
    </section>
  );
}
