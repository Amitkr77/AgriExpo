"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, ShieldCheck, Sparkles } from "lucide-react";
import { VEGETABLE_POWDERS } from "@/lib/products";

const FILTERS = {
  category: ["all", "allium", "root", "leafy", "spice", "spice-root", "herb", "gourd", "fungi", "ayurvedic", "superfood", "fruit-veg"],
  cert: ["all", "organic", "natural", "fssc22000", "haccp"],
};

function Pill({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-bold transition-all capitalize ${
        active ? "bg-[#2d5a43] text-white" : "bg-[#e4e3d4] text-[#1b1c13] hover:bg-[#dbdbcc]"
      }`}
    >
      {label}
    </button>
  );
}

function FeaturedHero({ product }) {
  if (!product) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[3rem] bg-[#2d5a43]/10 border border-[#2d5a43]/20 p-6 md:p-8 mb-8 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-[#2d5a43]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d5a43]">Bestselling Vegetable Powder</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b1c13] leading-tight">{product.name}</h2>
          <p className="mt-4 text-[#414943] max-w-lg leading-relaxed">{product.desc}</p>
          <div className="mt-4 flex gap-3 flex-wrap text-sm">
            <span className="bg-[#2d5a43]/10 text-[#2d5a43] px-3 py-1 rounded-full font-bold">{product.meshSize}</span>
            <span className="bg-[#2d5a43]/10 text-[#2d5a43] px-3 py-1 rounded-full font-bold">Shelf Life: {product.shelfLife}</span>
            <span className="bg-[#2d5a43]/10 text-[#2d5a43] px-3 py-1 rounded-full font-bold">MOQ: 25kg</span>
          </div>
          <Link
            href={`/products/vegetable-powders/${product.slug}`}
            className="mt-6 inline-flex items-center gap-2 bg-[#1b1c13] text-white px-5 py-3 rounded-full font-bold hover:opacity-90 transition"
          >
            View Full Specs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex-1 w-full">
          <div className="relative h-[280px] rounded-[2rem] overflow-hidden bg-[#eae9da]">
            <img src={product.image?.src || product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" onError={(e)=>{e.target.style.display='none'}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl">🧅</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VegetablePowdersPage() {
  const [category, setCategory] = useState("all");
  const [cert, setCert] = useState("all");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filtered = useMemo(() => {
    return VEGETABLE_POWDERS.filter((p) => {
      return (
        (category === "all" || p.category === category) &&
        (cert === "all" || p.cert.includes(cert)) &&
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [category, cert, search]);

  const featured = VEGETABLE_POWDERS.find((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#fbfaeb] px-4 md:px-10 py-10 mt-20">
      {/* BREADCRUMB */}
      <nav className="text-xs text-[#414943] mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-[#14422d]">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#14422d]">Products</Link>
        <span>/</span>
        <span className="text-[#14422d] font-bold">Vegetable Powders</span>
      </nav>

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1b1c13]">Vegetable Powders</h1>
        <p className="text-[#414943] mt-3 text-lg max-w-2xl">
          17 export-grade dehydrated vegetable powders. ISO 22000 certified. Bulk supply to 24+ countries. Each product available with full technical specs and samples.
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <span className="bg-[#2d5a43] text-white text-xs px-3 py-1 rounded-full font-bold">17 SKUs Available</span>
          <span className="bg-[#eae9da] text-[#1b1c13] text-xs px-3 py-1 rounded-full font-bold">ISO 22000 Certified</span>
          <span className="bg-[#eae9da] text-[#1b1c13] text-xs px-3 py-1 rounded-full font-bold">MOQ: 25kg Bags</span>
          <span className="bg-[#eae9da] text-[#1b1c13] text-xs px-3 py-1 rounded-full font-bold">Samples Available</span>
        </div>
      </div>

      {/* FEATURED */}
      <FeaturedHero product={featured} />

      <div className="grid grid-cols-12 gap-6">
        {/* FILTER SIDEBAR */}
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-24 rounded-[3rem] bg-[#f0efe0] p-6 space-y-6">
            {/* Search */}
            <div>
              <p className="text-xs font-bold uppercase mb-3">Search</p>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vegetable powders..."
                className="w-full bg-white border border-[#c0c9c1] rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2d5a43]"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <p className="text-xs font-bold uppercase mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {["all", "allium", "root", "leafy", "spice-root", "herb", "superfood", "ayurvedic"].map((c) => (
                  <Pill key={c} label={c === "spice-root" ? "spice & root" : c} active={category === c} onClick={() => setCategory(c)} />
                ))}
              </div>
            </div>

            {/* CERT */}
            <div>
              <p className="text-xs font-bold uppercase mb-3">Certification</p>
              <div className="flex flex-wrap gap-2">
                {FILTERS.cert.map((c) => (
                  <Pill key={c} label={c === "fssc22000" ? "FSSC 22000" : c === "haccp" ? "HACCP" : c} active={cert === c} onClick={() => setCert(c)} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="block w-full bg-[#14422d] text-white text-center py-3 rounded-full font-bold text-sm hover:bg-[#0f3122] transition"
            >
              Request Bulk Quote
            </Link>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="col-span-12 md:col-span-9">
          <p className="text-sm text-[#414943] mb-4 font-medium">{filtered.length} products found</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <div className="group relative rounded-[2.5rem] bg-[#f5f4e5] p-3 overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-all duration-500 border border-black/[0.04]">
                    <Link href={`/products/vegetable-powders/${product.slug}`} className="absolute inset-0 z-20" />

                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-[2rem] h-[260px] bg-[#eae9da] flex items-center justify-center">
                      <span className="text-6xl opacity-40">🥬</span>
                      <img
                        src={product.image?.src || product.image}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#2d5a43] px-3 py-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-white" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white">{product.badge}</span>
                      </div>
                      <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition duration-500">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                          <ArrowUpRight className="h-4 w-4 text-[#1b1c13]" />
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-xl font-extrabold text-[#1b1c13] tracking-[-0.02em]">{product.name}</h3>
                      <p className="text-sm text-[#414943] mt-2 leading-relaxed line-clamp-2">{product.desc}</p>
                      <div className="mt-3 flex gap-2 flex-wrap">
                        <span className="text-[10px] bg-[#eae9da] px-2 py-1 rounded-full font-bold">{product.meshSize}</span>
                        <span className="text-[10px] bg-[#eae9da] px-2 py-1 rounded-full font-bold">{product.moistureContent}</span>
                      </div>
                      <div className="mt-auto pt-4 text-[#2d5a43] font-bold text-sm flex items-center gap-2">
                        View Specs <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-20 text-[#414943]">
                <p className="text-2xl mb-2">No products found</p>
                <button onClick={() => { setCategory("all"); setCert("all"); setSearch(""); }} className="text-[#2d5a43] font-bold underline">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-16 rounded-[3rem] bg-[#2d5a43] p-8 text-center">
        <h3 className="text-2xl font-extrabold text-white mb-2">Need Custom Specifications?</h3>
        <p className="text-[#9fcfb2] mb-6">Our R&D team handles custom mesh sizes, moisture levels, and blending for industrial clients.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#fec567] text-[#765100] px-8 py-4 rounded-full font-bold hover:brightness-95 transition">
          Contact Export Team <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
