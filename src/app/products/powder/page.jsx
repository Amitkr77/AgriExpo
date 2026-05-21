import React from "react";

export default function Page() {
  return (
    <main className="max-w-360 mx-auto px-6 md:px-10 py-8 mt-20">
      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        {/* Image */}
        <div className="md:col-span-7 bg-gray-100 rounded-4xl overflow-hidden relative group min-h-[500px] flex items-center justify-center shadow-inner">
          <img
            alt="Premium Ginger Powder"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUhXoVWnEECk9AeQu8ZRsP54L4Q3FP9yjeVzvLj0jYeTIAxaPvXrr6nJDWxxhG-V2nF5jFG6CP_mK8IgD1QNuSRQL7qYadQlcv9UtUKEjpAf6hGEyreWUCfH3utPg68Ahy93NoIzLU4NWBNjW0MEGaW6tJVFTaVl84Jumx84hXajwFwpwX-fizGKP4YjeMp1OXQ88yui3EmOdK6egK9Ea-aOZeJb41HvlPr9l7eyBMboDhuQtGPHgQbvuip00VaHcrzTozPit1dhU"
          />

          <div className="absolute top-8 left-8 bg-black/70 backdrop-blur-sm px-6 py-2 rounded-full text-white text-xs tracking-widest flex items-center gap-2 shadow-lg">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            EXPORT GRADE
          </div>
        </div>

        {/* Identity */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-green-900 text-white p-8 rounded-4xl flex flex-col justify-center flex-grow relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />

            <p className="text-xs tracking-widest uppercase text-green-200 mb-4">
              Spices & Aromatics
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Sun-Dried Ginger Powder
            </h1>

            <p className="text-sm text-green-100 mb-8 max-w-md">
              Our Ginger Powder is sourced directly from artisanal farmers using
              sustainable cold-grinding techniques that preserve essential oils
              and piquancy.
            </p>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xs tracking-widest flex items-center gap-2 hover:scale-105 transition">
              REQUEST EXPORT QUOTE
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* SPEC + PROCESS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        {/* TABLE */}
        <div className="md:col-span-8 bg-white rounded-4xl p-8 shadow">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-green-700 text-3xl">
              biotech
            </span>
            <h2 className="text-xl font-bold">Technical Specifications</h2>
          </div>

          <div className="overflow-hidden rounded-4xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-5 text-xs tracking-widest uppercase">
                    Parameter
                  </th>
                  <th className="p-5 text-xs tracking-widest uppercase">
                    Standard Value
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Moisture Content", "Max 10.0%"],
                  ["Shelf Life", "24 Months from Manufacture"],
                  ["Packaging", "25kg HDPE / Custom"],
                  ["Mesh Size", "60 - 80 Mesh"],
                ].map((row, i) => (
                  <tr key={i} className="border-t hover:bg-green-50">
                    <td className="p-5 text-xs uppercase font-semibold">
                      {row[0]}
                    </td>
                    <td className="p-5 text-sm">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PROCESS */}
        <div className="md:col-span-4 bg-orange-100 rounded-4xl p-8 flex flex-col justify-between shadow">
          <div>
            <h3 className="text-xl font-bold mb-4">Artisanal Processing</h3>
            <p className="text-sm text-gray-700 mb-6">
              We avoid high-heat friction which destroys flavor. Our process
              involves shadow-drying and low-temperature pulverization.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["NON-GMO", "TRACEABLE", "COLD-GROUND", "ZERO FILLERS"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="bg-orange-200 text-orange-900 text-xs px-3 py-1 rounded-full font-bold"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          Explore More Agricultural Powders
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Roasted Garlic" },
            { title: "White Onion" },
            { title: "Amchur Mango" },
            { title: "Turmeric" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-4xl p-6 shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 rounded-4xl mb-4" />

              <p className="text-xs tracking-widest uppercase text-gray-500">
                Product
              </p>

              <h4 className="text-lg font-bold">{item.title}</h4>

              <div className="mt-4 flex justify-end">
                <span className="bg-green-700 text-white p-2 rounded-full">
                  <span className="material-symbols-outlined text-[20px]">
                    add
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
