import Hero from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import React from "react";
import Link from "next/link";
import FeaturedProduct from "@/components/FeaturedProduct";
import Applications from "@/components/Application";
import ExportPresence from "@/components/ExportPresence";
import WhyChooseSriGreen from "@/components/WhyChoose";
import InlineInquiryCTA from "@/components/InlineInquiryCTA";
import vegimage from "@/assets/vegimage.webp";
import fruitimage from "@/assets/fruitimg1.png";

export default function Page() {
  return (
    <div className="bg-[#fbfaeb] text-[#1b1c13] font-sans overflow-x-hidden">
      <main className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 py-5">
        {/* Hero Section */}
        <Hero />

        {/* Trust Bar */}
        <TrustBar />

        {/* Product Categories */}
        <section className="my-24 ">
          {/* Heading */}
          <div className="mb-16 flex items-end justify-center text-center">
            <div className="">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#7e5700] ">
                Product Categories
              </span>

              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[#1b1c13] md:text-4xl">
                Export-Ready Powders
              </h2>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Vegetable */}
            <Link
              href="/products/vegetable-powders"
              className="group relative overflow-hidden rounded-[3rem] bg-[#2d5a43] p-7 transition-all duration-500 hover:bg-[#2d5a43]/90"
            >
              {/* Badge */}
              <div className="mb-5 inline-flex rounded-full bg-white/20 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-white">
                  17 Export-Ready SKUs
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-sm">
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-white">
                  Vegetable Powders
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Onion, tomato, garlic, beetroot, spinach and more processed
                  for global food manufacturing.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1b1c13] transition-all duration-300 group-hover:gap-3">
                  Browse Vegetable Powders
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative mt-8 overflow-hidden rounded-[2rem]">
                <img
                  src={vegimage.src}
                  alt="Vegetable Powders"
                  className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Fruit */}
            <Link
              href="/products/fruit-powders"
              className="group relative overflow-hidden rounded-[3rem] bg-[#fec567] p-7 transition-all duration-500 hover:brightness-[0.98]"
            >
              {/* Badge */}
              <div className="mb-5 inline-flex rounded-full bg-[#765100] px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#fff7e8]">
                  10 Export-Ready SKUs
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-sm">
                <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-[#281900]">
                  Fruit Powders
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#765100]">
                  Alphonso mango, banana, pineapple and exotic fruit powders
                  with vibrant natural flavor.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#281900] px-5 py-3 text-sm font-bold text-[#fff7e8] transition-all duration-300 group-hover:gap-3">
                  Browse Fruit Powders
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative mt-8 overflow-hidden rounded-[2rem]">
                <img
                  src={fruitimage.src}
                  alt="Fruit Powders"
                  className="h-[450px] w-full object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Product */}
        <FeaturedProduct />
        <Applications />
        <ExportPresence />
        <WhyChooseSriGreen />
        <section className="text-center mb-16">
          <span className="text-xs tracking-[0.1em] font-bold text-[#7e5700] mb-4 inline bg-black/10 px-5 py-2 rounded-4xl">
            OUR PHILOSOPHY
          </span>

          <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-extrabold text-[#14422d] mb-6">
            Pure. Natural. Export Grade.
          </h3>

          <p className="text-[#414943] text-base leading-relaxed font-medium mb-6 max-w-4xl mx-auto">
            At SRI GREEN, we believe in the integrity of the harvest. Our
            farm-to-powder process ensures every gram meets rigorous global
            standards while supporting agricultural communities.
          </p>

          <div className="flex gap-4 items-center justify-center">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#bceecf]" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#ffdead]" />
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#ffdcc6]" />
            </div>

            <span className="text-[#414943] text-xs tracking-[0.1em] font-bold">
              Trusted by 500+ Global Partners
            </span>
          </div>
        </section>
        <InlineInquiryCTA />
      </main>
    </div>
  );
}
