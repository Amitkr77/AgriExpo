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
  Leaf,
} from "lucide-react";

export default function MegaFooter() {
  const products = ["Vegetable Powders", "Fruit Powders", "By Application"];
  const company = ["About", "Our Process", "Quality & Certs", "Blog", "FAQ"];
  const certs = ["ISO 22000", "HACCP", "FSSC 22000", "GMP", "Lab Tested"];

  return (
    <footer className="relative overflow-hidden bg-[#fbfaeb] text-[#1b1c13]">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        
        {/* TOP BRAND LINE */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d5a43] text-[#fbfaeb]">
                <Leaf className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                  SRI GREEN Industries
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7e5700]">
                  Natural Ingredient Supplier
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#414943] sm:text-base">
              Export-grade vegetable and fruit powders crafted for food,
              nutraceutical and industrial applications.
            </p>
          </div>

          <a
            href="/catalog.pdf"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1b1c13] px-6 py-3 text-sm font-bold text-[#fbfaeb] transition hover:gap-3 sm:w-fit"
          >
            <Download className="h-4 w-4" />
            Download Catalog
          </a>
        </div>

        {/* MAIN UNIQUE GRID */}
        <div className="grid grid-cols-1 gap-8 border-y border-[#2d5a43]/15 py-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* PRODUCTS */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7e5700]">
              Products
            </h3>

            <div className="space-y-1">
              {products.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className="group flex items-center justify-between py-2 text-sm font-semibold text-[#414943] transition hover:text-[#14422d]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-[#7e5700]/70">
                      0{index + 1}
                    </span>
                    {item}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7e5700]">
              Company
            </h3>

            <div className="space-y-1">
              {company.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className="group flex items-center justify-between py-2 text-sm font-semibold text-[#414943] transition hover:text-[#14422d]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-[#7e5700]/70">
                      0{index + 1}
                    </span>
                    {item}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7e5700]">
              Contact
            </h3>

            <div className="space-y-4 text-sm font-medium text-[#414943]">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2d5a43]" />
                <span>Gujarat, India</span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2d5a43]" />
                <span>+91 70913 23777</span>
              </div>

              <div className="flex gap-3 break-all">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2d5a43]" />
                <span>info@srigreen.com</span>
              </div>

              <a
                href="https://wa.me/917091323777"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d5a43] px-5 py-3 text-sm font-bold text-[#fbfaeb] transition hover:bg-[#14422d] sm:w-fit lg:w-full"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#7e5700]">
              Certifications
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {certs.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 text-sm font-semibold text-[#414943]"
                >
                  <BadgeCheck className="h-4 w-4 shrink-0 text-[#2d5a43]" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs font-medium text-[#414943] md:flex-row">
          <p>© 2025 SRI GREEN Industries. Export-grade ingredient supplier.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#14422d]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#14422d]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}