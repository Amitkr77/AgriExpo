"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function InlineInquiryCTA() {
  return (
    <section className="relative mb-24 overflow-hidden rounded-[3rem] bg-[#7f410b] px-6 py-14 md:px-10">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#fec567]/10 blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5f2d00] opacity-20 rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ffb786] opacity-10 rounded-full -ml-10 -mb-10" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/noise.svg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#bceecf]">
            Quick Inquiry
          </span>

          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
            Get a Bulk Quote in 24 Hours
          </h2>

          {/* Form */}
<form className="mt-8 space-y-4">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md"
    />

    <input
      type="text"
      placeholder="Company Name"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md"
    />

    <select
      defaultValue=""
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-md"
    >
      <option value="" disabled className="text-gray-400">
        Product Interest
      </option>
      <option className="text-black">Onion Powder</option>
      <option className="text-black">Garlic Powder</option>
      <option className="text-black">Mango Powder</option>
      <option className="text-black">Tomato Powder</option>
      <option className="text-black">Beetroot Powder</option>
      <option className="text-black">Pomegranate Powder</option>
    </select>

    <select
      defaultValue=""
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-md"
    >
      <option value="" disabled className="text-gray-400">
        Inquiry Type
      </option>
      <option className="text-black">Bulk Purchase</option>
      <option className="text-black">Private Label</option>
      <option className="text-black">Sample Request</option>
      <option className="text-black">Export Inquiry</option>
      <option className="text-black">Custom Formulation</option>
    </select>

    <input
      type="text"
      placeholder="Required Volume / MOQ"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md"
    />

    <input
      type="text"
      placeholder="Country / Market"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md"
    />

    <input
      type="email"
      placeholder="Email Address"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-md sm:col-span-2"
    />
  </div>

  <button
    type="submit"
    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fec567] px-6 py-4 text-sm font-bold text-[#1b1c13] transition-all duration-300 hover:gap-3"
  >
    Submit Inquiry
    <Send className="h-4 w-4" />
  </button>
</form>
        </motion.div>

        {/* RIGHT - TRUST COPY */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-extrabold text-white">
            Why buyers trust us
          </h3>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#c9dbc9]">
            <p>✔ We respond within 24 hours</p>
            <p>✔ Samples available on request</p>
            <p>✔ No commitment required for inquiry</p>
            <p>✔ Export documentation support included</p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#2d5a43] p-5">
            <p className="text-sm font-bold text-[#bceecf]">
              Fast response. Clear pricing. Export-ready supply.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
