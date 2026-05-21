"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Download,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

export default function MegaFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#fbfaeb] text-[#1b1c13]">
      {/* ANIMATED GRAIN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply animate-[grain_8s_linear_infinite]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* SOFT COLOR BLOBS */}
      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#fec567]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2d5a43]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-6">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

          {/* PRODUCTS */}
          <div className="group rounded-[2.5rem] bg-[#f5f4e5] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#f0efe0]">
            <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.16em] text-[#7e5700]">
              Products
            </h3>

            <div className="space-y-3 text-sm font-medium text-[#414943]">
              {["Vegetable Powders", "Fruit Powders", "By Application"].map(
                (item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex items-center justify-between hover:text-[#14422d]"
                  >
                    {item}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* COMPANY */}
          <div className="group rounded-[2.5rem] bg-[#f0efe0] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#eae9da]">
            <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.16em] text-[#7e5700]">
              Company
            </h3>

            <div className="space-y-3 text-sm font-medium text-[#414943]">
              {["About", "Our Process", "Quality & Certs", "Blog", "FAQ"].map(
                (item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex items-center justify-between hover:text-[#14422d]"
                  >
                    {item}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* CONTACT — HERO COLUMN */}
          <div className="group rounded-[2.5rem] bg-[#eae9da] p-7 transition-all duration-500 hover:-translate-y-2">
            <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.16em] text-[#7e5700]">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-[#414943]">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-[#2d5a43]" />
                Gujarat, India
              </div>

              <div className="flex gap-3">
                <Phone className="h-4 w-4 text-[#2d5a43]" />
                +91 70913 23777
              </div>

              <div className="flex gap-3">
                <Mail className="h-4 w-4 text-[#2d5a43]" />
                info@srigreen.com
              </div>

              {/* WHATSAPP PRIMARY CTA */}
              <a
                href="https://wa.me/917091323777"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d5a43] px-5 py-4 text-sm font-bold text-[#fbfaeb] transition-all hover:gap-3 hover:bg-[#14422d]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="group rounded-[2.5rem] bg-[#f5f4e5] p-7 transition-all duration-500 hover:-translate-y-2">
            <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.16em] text-[#7e5700]">
              Certifications
            </h3>

            <div className="flex flex-wrap gap-2">
              {["ISO 22000", "HACCP", "FSSC 22000", "GMP", "Lab Tested"].map(
                (c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full bg-[#e4e3d4] px-3 py-2 text-[11px] font-bold"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-[#2d5a43]" />
                    {c}
                  </span>
                )
              )}
            </div>

            {/* CATALOG */}
            <a
              href="/catalog.pdf"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b1c13] px-5 py-4 text-sm font-bold text-[#fbfaeb] transition-all hover:gap-3"
            >
              <Download className="h-4 w-4" />
              Download Catalog
            </a>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-6 rounded-[2rem] bg-gradient-to-r from-[#eae9da] via-[#f0efe0] to-[#e4e3d4] px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs font-medium text-[#414943] md:flex-row">
            <p>© 2025 SRI GREEN Industries. Export-grade ingredient supplier.</p>

            <div className="flex gap-6">
              <Link className="hover:text-[#14422d]" href="/privacy">
                Privacy
              </Link>
              <Link className="hover:text-[#14422d]" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* KEYFRAME (grain movement) */}
      <style jsx>{`
        @keyframes grain {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-2%, 1%);
          }
          50% {
            transform: translate(2%, -1%);
          }
          75% {
            transform: translate(-1%, -2%);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </footer>
  );
}