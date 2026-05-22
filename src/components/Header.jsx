"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, FileText, Sprout } from "lucide-react";
import { clsx } from "clsx";

// ── Configuration ──
const navLinks = [
  { href: "/products", label: "Our Powders" },
  // { href: "/applications", label: "Applications" },
  { href: "/quality", label: "Quality" },
  // { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  // { href: "/blog", label: "Blog" },
];

// ── Internal Sub-Components ──

// 1. Logo Component
const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-3 group"
    aria-label="SRI GREEN – Home"
  >
    <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#14422d]/10 group-hover:bg-[#14422d]/20 transition-colors duration-500">
      <Sprout className="w-5 h-5 text-[#14422d]" />
    </span>
    <div className="flex flex-col">
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#14422d] leading-none group-hover:text-[#1a5c3d] transition-colors duration-300">
        SRI GREEN
      </span>
      <span className="text-[9px] sm:text-[10px] tracking-[0.15em] font-medium text-[#414943]/70 uppercase mt-1">
        Premium Fruit & Vegetable Powders
      </span>
    </div>
  </Link>
);

// 2. Mobile Navigation Component
const MobileNav = ({ isOpen, onClose, pathname }) => {
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
                <Logo />
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
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full border-2 border-[#14422d] text-[#14422d] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all hover:bg-[#14422d]/5 active:scale-95"
              >
                <FileText className="w-4 h-4" /> Request Sample
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-[#14422d] hover:bg-[#0f3122] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all hover:shadow-[0_4px_20px_rgba(20,66,45,0.25)] active:scale-95"
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
  const pathname = usePathname();

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
          "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <div
            className={clsx(
              "transition-all duration-500",
              scrolled ? "scale-95" : "scale-100",
            )}
          >
            <Logo />
          </div>

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
                      ? "text-[#14422d] font-bold"
                      : "text-gray-600 hover:text-[#14422d]",
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
              <Link
                href="/contact"
                className="flex items-center gap-2 border-2 border-[#14422d] hover:bg-[#14422d]/5 text-[#14422d] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" /> Request Sample
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#14422d] hover:bg-[#0f3122] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(20,66,45,0.25)] active:scale-95"
              >
                <Send className="w-3.5 h-3.5" /> Bulk Inquiry
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 rounded-full text-[#14422d] hover:bg-[#14422d]/5 transition-colors"
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
      />
    </>
  );
}
