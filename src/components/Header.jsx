"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, FileText, Sprout } from "lucide-react";
import { clsx } from "clsx";
import Request from "@/components/RequestSample";


// ── Configuration ──
const navLinks = [
  { href: "/products", label: "Our Powders" },
  { href: "/applications", label: "Applications" },
  { href: "/quality", label: "Quality" },
  // { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

// ── Internal Sub-Components ──

// 1. Logo Component
const Logo = ({ textBlack = false }) => (
  <Link
    href="/"
    className="flex items-center gap-3 group"
    aria-label="SRI GREEN – Home"
  >
    <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#14422d]/10 group-hover:bg-[#14422d]/20 transition-colors duration-500">
      <Sprout className={clsx("w-5 h-5", textBlack ? "text-green" : "text-[#14422d]")} />
    </span>
    <div className="flex flex-col">
      <span
        className={clsx(
          "text-xl sm:text-2xl font-extrabold tracking-tight leading-none transition-colors duration-300",
          textBlack ? "text-green" : "text-[#14422d] group-hover:text-[#1a5c3d]"
        )}
      >
        SRI GREEN
      </span>
      <span
        className={clsx(
          "text-[9px] sm:text-[10px] tracking-widest font-medium uppercase mt-1",
          textBlack ? "text-green/70" : "text-[#414943]/70"
        )}
      >
        Premium Fruit & Vegetable Powders
      </span>
    </div>
  </Link>
);

// 2. Mobile Navigation Component
const MobileNav = ({ isOpen, onClose, pathname, setOpen }) => {
  // Animation Variants
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05 + 0.2 }, // Stagger effect
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#14422d]/20 backdrop-blur-sm md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
              <div className="scale-90 origin-left">
                {/* <Logo /> */}
                <Link href="/">
                  <img
                    src="/new_logo.png"
                    alt="SRI GREEN Logo"
                    className="h-20 cursor-pointer"
                  />
                </Link>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#14422d]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      variants={linkVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={clsx(
                          "flex items-center gap-3 px-5 py-4 rounded-2xl text-[15px] font-medium tracking-wide transition-all duration-300",
                          isActive
                            ? "bg-[#14422d]/5 text-[#14422d] font-bold"
                            : "text-gray-600 hover:text-[#14422d] hover:bg-gray-50",
                        )}
                      >
                        <span
                          className={clsx(
                            "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                            isActive ? "bg-[#cfa145]" : "bg-transparent",
                          )}
                        />
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
              <div
                onClick={() => {
                  onClose();
                  setOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full border-2 border-[#14422d] text-[#14422d] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-[#14422d]/5 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Request Sample
              </div>
              <Link
                href="/inquiry"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-[#14422d] hover:bg-[#0f3122] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_4px_20px_rgba(20,66,45,0.25)] active:scale-95"
              >
                <Send />
                Bulk Inquiry
              </Link>
              <p className="text-center text-[10px] text-gray-400 tracking-widest uppercase mt-4">
                © {new Date().getFullYear()} Sri Green Industries
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ── Main Header Component ──
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isBlogSlugPage = pathname?.startsWith("/blog/") && pathname !== "/blog";
  const textBlack =
  typeof window !== "undefined"
    ? isBlogSlugPage && !scrolled
    : false;

  // Scroll Effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body Lock on Mobile Open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close Mobile on Route Change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Header */}
          <header
            className={clsx(
              "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out",
             scrolled
              ? "bg-[#F6F1D8]/90 backdrop-blur-md shadow-sm "
              : isBlogSlugPage
                ? "bg-[#F6F1D8]/80 backdrop-blur-sm shadow-sm "
                : "bg-[#F6F1D8]/85 backdrop-blur-sm py-1"
            )}
          >
        <div className="max-w-360 mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={clsx(
              "transition-all duration-500 cursor-pointer",
              scrolled ? "scale-95" : "scale-100",
            )}
          >
            <img
              src="/new_logo.png"
              alt="SRI GREEN Logo"
              className="h-20 cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg hover:bg-gray-50",
                    isActive
                      ? textBlack
                        ? "text-green font-bold"
                        : "text-[#14422d] font-bold"
                      : textBlack
                        ? "text-[#1F2A1F] hover:text-[#6B8E23]"
                        : "text-[#1F2A1F] hover:text-[#6B8E23]",
                  )}
                >
                  {label}
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#cfa145]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions (Desktop + Mobile Toggle) */}
          <div className="flex items-center gap-3">
            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <div
                onClick={() => setOpen(true)}
                className={clsx(
                  "flex items-center gap-2 border-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 cursor-pointer",
                  textBlack
                    ? "border-black hover:bg-black/5 text-green"
                    : "border-[#14422d] hover:bg-[#14422d]/5 text-[#14422d]"
                )}
              >
                <FileText className="w-3.5 h-3.5" />
                Request Sample
              </div>
              <Link
                href="/inquiry"
                className="flex items-center gap-2 bg-[#14422d] hover:bg-[#0f3122] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_4px_20px_rgba(20,66,45,0.25)] active:scale-95"
              >
                <Send className="w-3.5 h-3.5" /> Bulk Inquiry
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={clsx(
                "lg:hidden p-2 -mr-2 rounded-full transition-colors",
                textBlack
                  ? "text-green hover:bg-green/5"
                  : "text-[#14422d] hover:bg-[#14422d]/5"
              )}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
        setOpen={setOpen}
      />
      <Request open={open} setOpen={setOpen} />
    </>
  );
}