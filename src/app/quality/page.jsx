"use client";

import { useState } from "react";

import {
  ShieldCheck,
  BadgeCheck,
  FileCheck2,
  Globe2,
  FlaskConical,
  Leaf,
  CheckCircle2,
  Download,
  Factory,
  PackageCheck,
  Microscope,
  ClipboardCheck,
  Award,
} from "lucide-react";
import qualityHero from "@/assets/quality-hero.png";

const certifications = [
  {
    title: "ISO 22000",
    body: "International Organization for Standardization",
    scope:
      "Food safety management system covering sourcing, processing, packaging and exports.",
    validity: "Valid till Dec 2027",
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "FSSC 22000",
    body: "Foundation FSSC",
    scope:
      "Comprehensive food safety certification aligned with global retail and export standards.",
    validity: "Valid till Sept 2027",
    color: "from-lime-500 to-emerald-700",
  },
  {
    title: "HACCP",
    body: "Hazard Analysis & Critical Control Points",
    scope:
      "Preventive food safety approach ensuring contamination-free processing.",
    validity: "Valid till Aug 2026",
    color: "from-green-500 to-emerald-800",
  },
  {
    title: "GMP",
    body: "Good Manufacturing Practices",
    scope:
      "Controlled hygienic manufacturing environment and operational consistency.",
    validity: "Valid till Jan 2028",
    color: "from-teal-500 to-emerald-700",
  },
  {
    title: "Non-GMO",
    body: "Non GMO Project",
    scope:
      "Ensures products are sourced and processed without genetically modified ingredients.",
    validity: "Valid till Nov 2026",
    color: "from-green-600 to-lime-700",
  },
  {
    title: "FSSAI",
    body: "Food Safety and Standards Authority of India",
    scope:
      "Licensed and compliant food manufacturing and export operations in India.",
    validity: "Active License",
    color: "from-emerald-600 to-teal-800",
  },
];

const testingItems = [
  "Microbial contamination testing",
  "Pesticide residue analysis",
  "Heavy metal screening",
  "Moisture content validation",
  "Color consistency checks",
  "Mesh / particle size verification",
  "Shelf-life stability validation",
  "Foreign particle inspection",
  "Aflatoxin testing",
  "Packaging seal integrity",
  "Temperature-controlled storage monitoring",
  "Nutritional consistency analysis",
];

const regions = [
  {
    market: "United States",
    certs: "FDA, HACCP, FSSC 22000",
    status: "Export Ready",
  },
  {
    market: "European Union",
    certs: "ISO 22000, HACCP, Non-GMO",
    status: "Compliant",
  },
  {
    market: "UAE & Gulf",
    certs: "FSSC 22000, GMP, FSSAI",
    status: "Approved",
  },
  {
    market: "Australia",
    certs: "ISO 22000, HACCP",
    status: "Ready",
  },
  {
    market: "Singapore",
    certs: "FSSC 22000, GMP",
    status: "Compliant",
  },
  {
    market: "Japan",
    certs: "ISO 22000, Non-GMO",
    status: "Verified",
  },
];

const qualitySteps = [
  {
    icon: Leaf,
    title: "Raw Material Sourcing",
    desc:
      "We source premium-grade fruits, vegetables, spices and herbs directly from trusted farms and verified agricultural partners.",
  },
  {
    icon: Microscope,
    title: "Lab Testing",
    desc:
      "Every production batch undergoes microbial and chemical testing before entering the processing cycle.",
  },
  {
    icon: Factory,
    title: "Controlled Manufacturing",
    desc:
      "Products are manufactured in hygienic facilities with strict SOPs and monitored processing environments.",
  },
  {
    icon: PackageCheck,
    title: "Secure Packaging",
    desc:
      "Multi-layer export-grade packaging preserves freshness, shelf-life and product integrity during transit.",
  },
];

const stats = [
  {
    number: "35+",
    label: "Export Countries",
  },
  {
    number: "100%",
    label: "Batch Tested",
  },
  {
    number: "24/7",
    label: "Quality Monitoring",
  },
  {
    number: "99.8%",
    label: "Shipment Approval Rate",
  },
];


export default function QualityPage() {
   const [activeForm, setActiveForm] = useState(null);

  const closeForm = () => setActiveForm(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    closeForm();
  };
  return (
    <main className="bg-[#f7fbf5] text-gray-800 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d3b24] via-[#14532d] to-[#1f7a3e] px-6 lg:px-16 py-24">
         {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage: `url(${qualityHero.src})`,
            }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e16]/40 via-[#14532d]/30 to-[#166534]/10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-100 mb-26 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5" />
              Export Certified Manufacturing
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-white">
              Export-Grade
              <span className="block text-green-300">Quality at Every Stage</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-green-50 leading-relaxed max-w-2xl">
              AgriExpo follows internationally recognized food safety and quality
              systems to ensure every product meets the strict import
              requirements of buyers across the US, EU, UAE, Australia and Asian
              markets.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-2xl bg-white text-green-900 font-semibold hover:scale-105 transition duration-300 shadow-2xl">
                View Certifications
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/30 text-white hover:bg-white/10 transition duration-300">
                Download Quality Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl"
              >
                <h3 className="text-5xl font-black text-white">
                  {item.number}
                </h3>
                <p className="mt-3 text-green-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Award className="w-10 h-10 mx-auto text-green-700" />
            <p className="mt-3 font-semibold">Global Certifications</p>
          </div>

          <div>
            <ClipboardCheck className="w-10 h-10 mx-auto text-green-700" />
            <p className="mt-3 font-semibold">Strict QC Procedures</p>
          </div>

          <div>
            <Globe2 className="w-10 h-10 mx-auto text-green-700" />
            <p className="mt-3 font-semibold">Worldwide Export Standards</p>
          </div>

          <div>
            <FlaskConical className="w-10 h-10 mx-auto text-green-700" />
            <p className="mt-3 font-semibold">Lab-Tested Products</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-green-700 font-semibold uppercase tracking-[0.25em]">
              Certifications
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#113322] leading-tight">
              International Standards You Can Trust
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our manufacturing, testing and packaging systems are built around
              internationally recognized food safety standards to ensure
              consistency, compliance and confidence for global buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition duration-500"
              >
                <div
                  className={`h-3 bg-gradient-to-r ${cert.color}`}
                ></div>

                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                    <BadgeCheck className="w-8 h-8 text-green-700" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#123524]">
                    {cert.title}
                  </h3>

                  <p className="mt-3 text-green-700 font-medium">
                    {cert.body}
                  </p>

                  <p className="mt-6 text-gray-600 leading-relaxed">
                    {cert.scope}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t pt-5">
                    <span className="text-sm font-semibold text-gray-500">
                      {cert.validity}
                    </span>

                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-700 text-white hover:bg-green-800 transition">
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section className="py-28 bg-[#edf7ec] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-green-700 font-semibold uppercase tracking-[0.25em]">
                Quality Workflow
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#143523] leading-tight">
                Multi-Level Quality Control From Farm to Export
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We maintain strict inspection systems at every stage of the
                supply chain to guarantee food safety, consistency and export
                readiness.
              </p>

              <div className="mt-12 space-y-8">
                {qualitySteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={index}
                      className="flex gap-5 bg-white p-6 rounded-3xl shadow-lg"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-green-700" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#163825]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl"></div>

              <div className="relative bg-white rounded-[40px] shadow-2xl p-10 border border-green-100">
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-10 h-10 text-green-700" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#163825]">
                      Product Integrity Assurance
                    </h3>
                    <p className="text-gray-500">
                      Every shipment verified before dispatch.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {testingItems.slice(0, 8).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 border-b border-gray-100 pb-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-700 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-green-700 font-semibold uppercase tracking-[0.25em]">
              Laboratory Testing
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#113322]">
              What We Test For
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our quality assurance team performs detailed laboratory analysis to
              maintain product purity, consistency and compliance with
              international food regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testingItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#f7fbf5] border border-green-100 rounded-3xl p-6 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-6 h-6 text-green-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#143523]">
                      {item}
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      Conducted using controlled testing methods and documented
                      batch validation procedures.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT TABLE */}
      <section className="py-28 bg-[#0f2f1d] px-6 lg:px-16 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-green-300 font-semibold uppercase tracking-[0.25em]">
              Global Export Compliance
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
              Compliance by International Market
            </h2>

            <p className="mt-6 text-lg text-green-50 leading-relaxed">
              AgriExpo products are prepared according to the documentation,
              testing and regulatory requirements expected by international
              importers and distributors.
            </p>
          </div>

          <div className="mt-16 overflow-x-auto rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="p-6 text-lg">Market</th>
                  <th className="p-6 text-lg">Required Certifications</th>
                  <th className="p-6 text-lg">AgriExpo Status</th>
                </tr>
              </thead>

              <tbody>
                {regions.map((region, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-6 font-semibold">{region.market}</td>
                    <td className="p-6 text-green-100">{region.certs}</td>
                    <td className="p-6">
                      <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-400/20">
                        {region.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-16 bg-gradient-to-br from-[#e9f6e7] to-[#f7fbf5]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 mb-8">
            <ShieldCheck className="w-5 h-5" />
            Trusted by International Buyers
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#123524] leading-tight">
            Built for Reliable Global Food Exports
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From sourcing and manufacturing to testing and documentation,
            AgriExpo follows premium quality systems that help importers,
            wholesalers and distributors buy with confidence.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button
              onClick={() => setActiveForm("certification")}
              className="px-8 py-4 rounded-2xl bg-green-700 text-white font-semibold hover:bg-green-800 transition shadow-xl"
            >
              Request Certifications
            </button>

            <button
              onClick={() => setActiveForm("export")}
              className="px-8 py-4 rounded-2xl border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition"
            >
              Contact Export Team
            </button>
          </div>
        </div>
      </section>
      {activeForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">
      <button
        onClick={closeForm}
        className="absolute right-5 top-4 text-3xl text-gray-500 hover:text-black"
      >
        ×
      </button>

      <h2 className="text-2xl font-black text-green-900 mb-2">
        {activeForm === "certification"
          ? "Request Certifications"
          : "Contact Export Team"}
      </h2>

      <p className="text-gray-600 mb-6">
        {activeForm === "certification"
          ? "Fill this form to request certification documents."
          : "Fill this form and our export team will contact you."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
        />

        {activeForm === "certification" ? (
          <select
            required
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">Select Certification</option>
            <option>ISO 22000</option>
            <option>FSSC 22000</option>
            <option>HACCP</option>
            <option>GMP</option>
            <option>Non-GMO</option>
            <option>FSSAI</option>
          </select>
        ) : (
          <input
            type="text"
            placeholder="Export Country / Market"
            required
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
          />
        )}

        <textarea
          placeholder={
            activeForm === "certification"
              ? "Which documents do you need?"
              : "Tell us your export requirement"
          }
          rows="4"
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-700 py-3 text-white font-semibold hover:bg-green-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}
    </main>
  );
}
