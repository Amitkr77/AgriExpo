"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  PackageCheck,
  MessageCircle,
} from "lucide-react";
import { HiMiniFire } from "react-icons/hi2";
import { trackEvent } from "@/lib/gtag";

import {
  VEGETABLE_POWDERS,
  FRUIT_POWDERS,
} from "@/lib/products";

export default function BulkInquiryPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    volume: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const premiumInput =
    "w-full bg-[#f8f7ef]/90 border border-[#d9ddd4] rounded-[1.6rem] px-6 py-4 text-sm outline-none transition focus:border-[#14422d] focus:bg-white";

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f6f4e8] flex items-center justify-center px-6">
        <div className="max-w-xl w-full rounded-[3rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-14 text-center">
          <div className="w-24 h-24 rounded-full bg-[#14422d] mx-auto flex items-center justify-center text-white text-5xl">
            ✓
          </div>

          <h1 className="mt-8 text-5xl font-black text-[#14422d]">
            Inquiry Sent
          </h1>

          <p className="mt-5 text-[#5f665f] leading-relaxed text-lg">
            Our export specialists will contact you within 24 hours with MOQ,
            pricing, certifications and logistics support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/products"
              className="bg-[#14422d] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0f3122] transition"
            >
              Browse Products
            </Link>

            <a
              href="https://wa.me/917091323777"
              target="_blank"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[#f6f4e8] min-h-screen">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#14422d]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d7b56d]/20 blur-[140px] rounded-full" />

      <main className="relative z-10 max-w-[1450px] mx-auto px-6 lg:px-10 py-28">
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white px-5 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#14422d] animate-pulse" />

              <span className="text-[11px] font-black tracking-[0.18em] uppercase text-[#14422d]">
                Export Team Response • Within 24 Hours
              </span>
            </div>

            <h1 className="mt-8 text-[52px] md:text-[74px] font-black leading-[0.92] tracking-[-0.05em] text-[#14422d]">
              Check Bulk
              <span className="block text-[#d6a650]">
                Powder Inquiry
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#4d534d]">
              Request pricing, MOQ, samples, certifications and export support
              for premium fruit & vegetable powders supplied worldwide.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certified Manufacturing",
                },
                {
                  icon: Globe2,
                  title: "Worldwide Export Support",
                },
                {
                  icon: PackageCheck,
                  title: "Private Label & OEM",
                },
                {
                  icon: MessageCircle,
                  title: "24hr Response Time",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-5 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#14422d] text-white flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>

                  <p className="mt-4 font-bold text-[#14422d]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d7b56d]/30 rounded-full blur-3xl" />

            <div className="relative bg-white/70 backdrop-blur-2xl border border-white rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 md:p-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] font-black text-[#14422d]/60">
                    Bulk Inquiry Form
                  </p>

                  <h2 className="text-3xl font-black text-[#14422d] mt-2">
                    Start Inquiry
                  </h2>
                </div>

                <div className="bg-[#14422d] text-white w-14 h-14 rounded-2xl flex items-center justify-center">
                  <HiMiniFire className="w-6 h-6" />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        fullName: e.target.value,
                      })
                    }
                    className={premiumInput}
                  />

                  <input
                    required
                    type="text"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        company: e.target.value,
                      })
                    }
                    className={premiumInput}
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className={premiumInput}
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className={premiumInput}
                  />
                </div>

                {/* ROW 3 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <select
                    required
                    value={form.country}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        country: e.target.value,
                      })
                    }
                    className={premiumInput}
                  >
                    <option value="">
                      Select Country
                    </option>

                    {[
                      "United States",
                      "United Kingdom",
                      "Germany",
                      "France",
                      "Netherlands",
                      "UAE",
                      "Saudi Arabia",
                      "Qatar",
                      "Kuwait",
                      "Bahrain",
                      "Oman",
                      "Australia",
                      "New Zealand",
                      "Canada",
                      "Singapore",
                      "Malaysia",
                      "Thailand",
                      "Indonesia",
                      "Vietnam",
                      "Philippines",
                      "Japan",
                      "South Korea",
                      "China",
                      "Bangladesh",
                      "Sri Lanka",
                      "Nepal",
                      "South Africa",
                      "Kenya",
                      "Nigeria",
                      "Egypt",
                      "Turkey",
                      "Poland",
                      "Sweden",
                      "Denmark",
                      "Norway",
                      "Other",
                    ].map((country) => (
                      <option
                        key={country}
                        value={country}
                      >
                        {country}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    value={form.product}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        product: e.target.value,
                      })
                    }
                    className={premiumInput}
                  >
                    <option value="">
                      Select Product
                    </option>

                    <optgroup label="Vegetable Powders">
                      {VEGETABLE_POWDERS.map((p) => (
                        <option
                          key={p.slug}
                          value={p.name}
                        >
                          {p.name}
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="Fruit Powders">
                      {FRUIT_POWDERS.map((p) => (
                        <option
                          key={p.slug}
                          value={p.name}
                        >
                          {p.name}
                        </option>
                      ))}
                    </optgroup>

                    <option value="Multiple Products">
                      Multiple Products
                    </option>

                    <option value="Custom Formulation">
                      Custom Formulation / OEM
                    </option>
                  </select>
                </div>

                {/* ROW 4 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <select
                    required
                    value={form.volume}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        volume: e.target.value,
                      })
                    }
                    className={premiumInput}
                  >
                    <option value="">
                      Monthly Volume
                    </option>

                    <option>
                      Less than 100 kg
                    </option>

                    <option>
                      100 kg – 500 kg
                    </option>

                    <option>
                      500 kg – 2 MT
                    </option>

                    <option>
                      2 MT – 10 MT
                    </option>

                    <option>
                      10 MT+
                    </option>
                  </select>

                  <select
                    required
                    value={form.inquiryType}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        inquiryType:
                          e.target.value,
                      })
                    }
                    className={premiumInput}
                  >
                    <option value="">
                      Inquiry Type
                    </option>

                    <option>
                      Sample Request
                    </option>

                    <option>
                      Bulk Price Quote
                    </option>

                    <option>
                      OEM / Private Label
                    </option>

                    <option>
                      Technical Specifications
                    </option>

                    <option>
                      Certification Documents
                    </option>

                    <option>
                      General Information
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <textarea
                  rows={5}
                  placeholder="Describe your requirements..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="w-full bg-[#f8f7ef]/90 border border-[#d9ddd4] rounded-[2rem] px-6 py-5 outline-none focus:border-[#14422d] transition resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  onClick={() =>
                    trackEvent(
                      "form_submit",
                      "forms",
                      "bulk_inquiry_form"
                    )
                  }
                  className="w-full bg-[#14422d] hover:bg-[#0f3122] text-white rounded-full py-5 font-black tracking-wide transition-all hover:-translate-y-1"
                >
                  Submit Inquiry →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* BOTTOM STRIP */}
        <section className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[#9ccae9]/90  border border-white rounded-[2rem] p-7 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-widest text-[#14422d]/50">
              MOQ Support
            </p>

            <h3 className="text-2xl font-black text-[#14422d] mt-4">
              Flexible Bulk Volumes
            </h3>
          </div>

          <div className="bg-[#14422d] rounded-[2rem] p-7 text-white">
            <p className="text-sm font-black uppercase tracking-widest text-white/50">
              Sample Dispatch
            </p>

            <h3 className="text-2xl font-black mt-4">
              Fast Global Shipping
            </h3>
          </div>

          <div className="bg-[#d6a650] rounded-[2rem] p-7 text-[#14422d]">
            <p className="text-sm font-black uppercase tracking-widest text-[#14422d]/60">
              Certifications
            </p>

            <h3 className="text-2xl font-black mt-4">
              ISO • HACCP • GMP
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}