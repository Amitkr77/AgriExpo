"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { VEGETABLE_POWDERS, FRUIT_POWDERS } from "@/lib/products";
import { trackEvent } from "@/lib/gtag";

const ALL_PRODUCTS = [
  ...VEGETABLE_POWDERS.map((p) => p.name),
  ...FRUIT_POWDERS.map((p) => p.name),
];

const COUNTRIES = [
  "United States", "United Kingdom", "Germany", "France", "Netherlands",
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
  "Australia", "New Zealand", "Canada", "Singapore", "Malaysia",
  "Thailand", "Indonesia", "Vietnam", "Philippines", "Japan", "South Korea",
  "China", "Bangladesh", "Sri Lanka", "Nepal", "South Africa", "Kenya",
  "Nigeria", "Egypt", "Turkey", "Poland", "Sweden", "Denmark", "Norway",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", company: "", email: "", phone: "",
    country: "", product: "", volume: "", inquiryType: "", message: "",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls = "w-full bg-[#fbfaeb] border border-[#c0c9c1] rounded-full px-6 py-4 focus:ring-2 focus:ring-[#14422d] focus:border-[#14422d] transition-all placeholder:text-[#717973]/50 outline-none text-sm";
  const labelCls = "ml-4 text-[11px] leading-4 tracking-[0.12em] font-bold text-[#414943] uppercase block mb-2";
  const selectCls = "w-full bg-[#fbfaeb] border border-[#c0c9c1] rounded-full px-6 py-4 focus:ring-2 focus:ring-[#14422d] outline-none text-sm appearance-none";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      const productName = params.get("product");

      if (productName) {
        setForm((prev) => ({
          ...prev,
          product: productName,
        }));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#fbfaeb] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-extrabold text-[#14422d] mb-4">Inquiry Received!</h1>
          <p className="text-[#414943] text-lg mb-8">
            Our export team will respond within <strong>24 hours</strong> with product specifications, MOQ details, and a custom quotes.
          </p>
          <div className="bg-[#f5f4e5] rounded-[2rem] p-6 mb-8 text-left space-y-3">
            <p className="text-sm font-bold text-[#14422d]">What happens next?</p>
            <p className="text-sm text-[#414943]">✓ Export specialist reviews your inquiry</p>
            <p className="text-sm text-[#414943]">✓ You receive product specs & pricing within 24 hours</p>
            <p className="text-sm text-[#414943]">✓ Sample kit dispatched on requests</p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              onClick={() =>
                trackEvent(
                  "product_view",
                  "products",
                  "browse_products_button"
                )
              }
              className="bg-[#14422d] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0f3122] transition"
            >
              Browse Products
            </Link>

            <a
              href="https://wa.me/917091323777"
              onClick={() =>
                trackEvent(
                  "whatsapp_click",
                  "conversion",
                  "whatsapp_button"
                )
              }
              className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fbfaeb] text-[#1b1c13] font-sans">
      <main className="max-w-[1440px] mx-auto px-6 md:px-10 py-12">
        {/* HEADER */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#14422d]/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#14422d] rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-[#14422d] uppercase">Export Team Response: Within 24 Hours</span>
          </div>
          <h1 className="text-[42px] md:text-[56px] leading-tight tracking-[-0.02em] font-extrabold text-[#14422d] max-w-2xl mb-4">
            Start Your journey with SRI GREEN
          </h1>
          <p className="text-[#414943] max-w-xl text-base leading-relaxed">
            Fill in the form below. Our export team responds within 24 hours with product specifications, pricing, and MOQ details. Samples available on request — no commitment required.
          </p>
          <div className="mt-4 flex gap-3 flex-wrap text-xs">
            <span className="bg-[#f5f4e5] border border-[#c0c9c1] px-3 py-2 rounded-full font-bold">🔒 Confidential</span>
            <span className="bg-[#f5f4e5] border border-[#c0c9c1] px-3 py-2 rounded-full font-bold">📦 Samples Available</span>
            <span className="bg-[#f5f4e5] border border-[#c0c9c1] px-3 py-2 rounded-full font-bold">⏱ 24hr Response</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* FORM */}
          <div className="md:col-span-8 bg-[#f5f4e5] p-8 rounded-[2rem] border border-[#c0c9c1]/30">
            <h2 className="text-xl font-bold text-[#14422d] mb-8">Inquiry Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input required type="text" placeholder="John Smith" className={inputCls}
                    value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                </div>
                <div>
                  <label className={labelCls}>Company Name *</label>
                  <input required type="text" placeholder="Global Foods Ltd." className={inputCls}
                    value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input required type="email" placeholder="john@company.com" className={inputCls}
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className={labelCls}>Phone / WhatsApp *</label>
                  <input required type="tel" placeholder="+1 234 567 8900" className={inputCls}
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>

              {/* Row 3: Country + Product */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Country *</label>
                  <select required className={selectCls}
                    value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}>
                    <option value="">Select your country</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Product of Interest *</label>
                  <select required className={selectCls}
                    value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
                    <option value="">Select a product</option>
                    <optgroup label="Vegetable Powders">
                      {VEGETABLE_POWDERS.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
                    </optgroup>
                    <optgroup label="Fruit Powders">
                      {FRUIT_POWDERS.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
                    </optgroup>
                    <option value="Multiple Products">Multiple Products</option>
                    <option value="Custom Formulation">Custom Formulation / OEM</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Volume + Inquiry Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls}>Estimated Monthly Volume *</label>
                  <select required className={selectCls}
                    value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}>
                    <option value="">Select volume range</option>
                    <option>Less than 100 kg</option>
                    <option>100 kg – 500 kg</option>
                    <option>500 kg – 2 MT</option>
                    <option>2 MT – 10 MT</option>
                    <option>10 MT+</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Inquiry Type *</label>
                  <select required className={selectCls}
                    value={form.inquiryType} onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}>
                    <option value="">Select inquiry type</option>
                    <option>Sample Request</option>
                    <option>Bulk Price Quote</option>
                    <option>OEM / Private Label</option>
                    <option>Technical Specifications</option>
                    <option>Certification Documents</option>
                    <option>General Information</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelCls}>Additional Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Describe your specific requirements, custom mesh size, moisture level, packaging preferences, or any other details..."
                  className="w-full bg-[#fbfaeb] border border-[#c0c9c1] rounded-[2rem] px-6 py-4 focus:ring-2 focus:ring-[#14422d] outline-none text-sm placeholder:text-[#717973]/50 resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                onClick={() =>
                  trackEvent(
                    "form_submit",
                    "forms",
                    "submit_inquiry_button"
                  )
                }
                className="w-full md:w-auto bg-[#14422d] text-white px-12 py-4 rounded-full text-base font-bold hover:bg-[#0f3122] transition shadow-lg"
              >
                Submit Inquiry →
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* HQ */}
            <div className="bg-[#fec567] p-8 rounded-[2rem] relative overflow-hidden">
              <h2 className="text-xl font-bold text-[#765100] mb-6">Contact Details</h2>
              <div className="space-y-5 text-sm">
                <div className="flex gap-3 items-start">
                  <span className="bg-[#fbfaeb] text-[#765100] p-2 rounded-full text-lg">🏢</span>
                  <div>
                    <p className="font-bold text-[#765100] text-xs uppercase tracking-widest mb-1">Corporate Office</p>
                    <p className="text-[#765100]">Sri Green, Munirka Village,<br />Opposite JNU Campus,<br />New Delhi – 110067, India</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-[#fbfaeb] text-[#765100] p-2 rounded-full text-lg">🏭</span>
                  <div>
                    <p className="font-bold text-[#765100] text-xs uppercase tracking-widest mb-1">Warehouse</p>
                    <p className="text-[#765100]">Mahavir Colony, Beur<br />Patna – 800002, Bihar, India</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-[#fbfaeb] text-[#765100] p-2 rounded-full text-lg">📞</span>
                  <div>
                    <p className="font-bold text-[#765100] text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+917091323777" className="text-[#765100] font-bold">+91 70913 23777</a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-[#fbfaeb] text-[#765100] p-2 rounded-full text-lg">✉️</span>
                  <div>
                    <p className="font-bold text-[#765100] text-xs uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@srigreen.com" className="text-[#765100] font-bold">info@srigreen.com</a>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 text-[120px]">🌾</div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917091323777?text=Hi%2C%20I%27m%20interested%20in%20a%20bulk%20powder%20inquiry%20from%20SRI%20GREEN."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(
                  "whatsapp_click",
                  "conversion",
                  "bulk_powder_whatsapp_inquiry"
                )
              }
              className="bg-[#25D366] text-white p-6 rounded-[2rem] flex items-center gap-4 hover:brightness-95 transition group"
            >
              <span className="text-3xl">💬</span>

              <div>
                <p className="font-extrabold text-lg">WhatsApp Inquiry</p>

                <p className="text-white/80 text-sm">
                  Instant response for international buyers
                </p>
              </div>

              <span className="ml-auto text-2xl group-hover:translate-x-1 transition">
                →
              </span>
            </a>

            {/* Certifications */}
            <div className="bg-[#2d5a43] p-6 rounded-[2rem]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9fcfb2] mb-4">Our Certifications</p>
              <div className="flex flex-wrap gap-2">
                {["ISO 22000", "FSSC 22000", "HACCP", "GMP Certified", "Non-GMO", "Lab Tested"].map((cert) => (
                  <span key={cert} className="bg-white/10 text-white text-xs px-3 py-2 rounded-full font-bold">{cert}</span>
                ))}
              </div>
              <p className="text-[#9fcfb2] text-xs mt-4">Certificate documents available on request for regulatory compliance.</p>
            </div>

            {/* Response promise */}
            <div className="bg-[#1b1c13] text-white p-6 rounded-[2rem]">
              <p className="font-extrabold text-lg mb-2">Our Promise</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>⏱ Response within 24 hours</p>
                <p>📋 Full product specs provided</p>
                <p>📦 Free samples on request</p>
                <p>💼 No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
