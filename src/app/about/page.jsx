import React from "react";

export default function Page() {
  return (
    <div className="bg-[#fbfaeb] text-[#1b1c13] font-sans mt-20">
      <main className="max-w-360 mx-auto px-10 py-10 space-y-5">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-12 rounded-[24px] bg-[#2d5a43] p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[500px]">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-[80px] leading-[90px] tracking-[-0.04em] font-extrabold text-[#fbfaeb] mb-6">
                Farm-Sourced. Lab-Certified. Export-Ready.
              </h1>

              <p className="text-[#9fcfb2] text-lg max-w-lg mb-8">
                SRI GREEN Industries is a dedicated exporter of premium
                dehydrated and spray-dried fruit and vegetable powders. From
                sourcing at India's finest agri belts to delivering to food
                manufacturers across 24+ countries — we are your reliable B2B
                ingredient supply partner.
              </p>

              <div className="flex gap-4">
                <button className="bg-[#fec567] text-[#765100] px-8 py-4 rounded-full font-bold flex items-center gap-2">
                  Explore Quality
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="md:absolute md:right-0 md:top-0 h-full w-full md:w-1/2 mt-8 md:mt-0 opacity-80 md:opacity-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpwoWbt2MCrdEVuZkjVUVBY-TOrsROrqVyaK48ZyIW9B1c5uGLuj7WzZRBq-9w4xwHTSn5dhzqhUlTzqZl3amULNhnG7iDglQn2o3U_b4xZM16xzghlwtNunNYY-RAoaj5TnXbNKKMNaZnk_DtilarQ3rJpcxocuDLoup47pnW2HiEr1Vo5vgj1kCLk12f9qvReI7m_bHTiLZ5t_OV90ZvOByI2SYJoGDNjzY2WNVzM6c0xY1Xoh3DsiQo0IvhnUHp8dHvmMxst2w"
                alt="Farm fields"
                className="h-full w-full object-cover rounded-4xl"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Mission */}
          <div className="md:col-span-7 bg-[#eae9da] p-8 rounded-4xl flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="bg-[#14422d] text-white px-4 py-1 rounded-full text-[12px] leading-4 tracking-[0.1em] font-bold inline-block mb-6">
                OUR MISSION
              </span>

              <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold text-[#14422d] mb-4">
                Precision Sourcing. Global Supply Standards
              </h2>

              <p className="text-[#414943] text-lg">
                We source directly from India's premier agricultural regions,
                applying stringent quality controls at every processing stage.
                Our HACCP-controlled, GMP-compliant facilities produce
                ingredient powders that meet the regulatory requirements of the
                US, EU, UAE, and Southeast Asian markets.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-4 border-[#eae9da] bg-[#ffdead]" />
                <div className="w-12 h-12 rounded-full border-4 border-[#eae9da] bg-[#bceecf]" />
                <div className="w-12 h-12 rounded-full border-4 border-[#eae9da] bg-[#ffdcc6]" />
              </div>

              <span className="font-bold text-[#14422d]">
                500+ Partner Farmers
              </span>
            </div>
          </div>

          {/* Vision */}
          <div className="md:col-span-5 bg-[#7f410b] p-8 rounded-4xl text-[#ffb482] flex flex-col justify-center overflow-hidden relative">
            <span
              className="material-symbols-outlined text-6xl mb-4 opacity-50"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              visibility
            </span>

            <h3 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold mb-4">
              The SRI GREEN Vision
            </h3>

            <p className="text-lg opacity-90">
              To be the world's most trusted partner in sustainable
              agri-exports, where quality and ethics swirl together in every
              gram of our produce.
            </p>

            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#fec567] rounded-full opacity-20" />
          </div>

          {/* Sustainable */}
          <div className="md:col-span-4 bg-[#e4e3d4] p-8 rounded-4xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#14422d] text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>

            <h4 className="text-[24px] leading-7 font-bold text-[#14422d] mb-2">
              Sustainable
            </h4>

            <p className="text-[#414943]">
              Zero-waste processing and eco-friendly packaging for a better
              planet.
            </p>
          </div>

          {/* Purity */}
          <div className="md:col-span-4 bg-[#ffdead] p-8 rounded-4xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#7e5700] text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">
                verified
              </span>
            </div>

            <h4 className="text-[24px] leading-7 font-bold text-[#7e5700] mb-2">
              Purity
            </h4>

            <p className="text-[#604100]">
              100% natural powders with no additives, fillers, or synthetic
              colors.
            </p>
          </div>

          {/* Fair Trade */}
          <div className="md:col-span-4 bg-[#bceecf] p-8 rounded-4xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#2d5a43] text-[#9fcfb2] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">
                handshake
              </span>
            </div>

            <h4 className="text-[24px] leading-7 font-bold text-[#224f39] mb-2">
              Fair Trade
            </h4>

            <p className="text-[#224f39]">
              Direct sourcing ensures our farmers receive premium market rates.
            </p>
          </div>
        </section>

        {/* Reach Section */}
        <section className="bg-[#f0efe0] rounded-4xl p-8">
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold text-[#14422d]">
                Global Presence. Local Roots.
              </h2>

              <p className="text-[#414943] text-lg">
                From the fertile plains of our home base, we export premium
                dehydrated powders to discerning industrial and retail clients
                across three continents.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["🇺🇸 USA", "🇦🇪 UAE", "🇪🇺 Europe"].map((item) => (
                  <div
                    key={item}
                    className="bg-[#fbfaeb] p-6 rounded-4xl border border-[#c0c9c1] text-center"
                  >
                    <span className="text-4xl block mb-2">
                      {item.split(" ")[0]}
                    </span>
                    <span className="font-bold text-[#14422d]">
                      {item.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 w-full h-[400px] bg-[#c0c9c1] rounded-4xl overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Wg2rtri6u4oCzaGbWmmKC5ng6lqGD-p-ub0g9uCEK7Zt38Oo9juXmQtD-PvH7s1Ts7_BOGV3FLpBEj9fq9Gt2n1zF84QwY3PS1_W8r4S3UhEiKntH0_Md12v3saioUDnIgnecEU6BDsKXAU_KU4dAcamhymJkx8vinP8ORZ3WNf9r9ZUyh6zedPwqAtIHBK2OhGmpVWHg7J3Tvw4ByyKCwmB6nKxib1LU-gWNOx1yHyBIvWfPH9fmvpJpL7WxJFi0hgoTGSprsE"
                alt="World map"
                className="w-full h-full object-cover grayscale opacity-60"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#14422d] text-white px-6 py-3 rounded-full flex items-center gap-3">
                  <span className="material-symbols-outlined">public</span>
                  <span className="font-bold">24+ Countries Served</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Left Image */}
          <div className="md:col-span-4 rounded-4xl overflow-hidden min-h-[420px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiBR8wfA8RJg7ZecM5Vnj1HKrLFGTew9jA8khZbvVU1oWDyygnubO6s-oNuksCzi_ZiQTCggLhhDPzWhNpe6XsvUFg0yLmc60UmA9aX5He6LuFOiez6h76yZuhRFLq47VTfryfvv9TaLNzyl6ckCxhLlt7yGrQeITyTc0ifYP7ZKAtzs0DJDecMlS2D3HLluGOJ93tR7Nr8OrKyoiVW8fYzDJEdakufi1twLKuIQT0lOtrtje3uxAExmV-IvCfs4sJfY38V_VsNds"
              alt="Food processing laboratory"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:col-span-8 bg-[#e4e3d4] p-8 rounded-4xl">
            <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold text-[#14422d] mb-8">
              Uncompromising Standards.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications */}
              <div className="space-y-6">
                {/* Item */}
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-[#14422d] text-[28px]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check_circle
                  </span>

                  <div>
                    <h5 className="font-bold text-[#14422d] text-lg mb-1">
                      ISO 22000 Certified
                    </h5>

                    <p className="text-sm text-[#414943] leading-6">
                      Globally recognized food safety management systems
                      integrated at every step.
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-[#14422d] text-[28px]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check_circle
                  </span>

                  <div>
                    <h5 className="font-bold text-[#14422d] text-lg mb-1">
                      GMP Compliance
                    </h5>

                    <p className="text-sm text-[#414943] leading-6">
                      Strict adherence to Good Manufacturing Practices for
                      hygiene and consistency.
                    </p>
                  </div>
                </div>

                {/* Item */}
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-[#14422d] text-[28px]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check_circle
                  </span>

                  <div>
                    <h5 className="font-bold text-[#14422d] text-lg mb-1">
                      HACCP Controlled
                    </h5>

                    <p className="text-sm text-[#414943] leading-6">
                      Hazard Analysis Critical Control Point system to eliminate
                      biological risks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hygiene Pledge Card */}
              <div className="bg-[#fbfaeb] p-6 rounded-4xl border-2 border-[#2d5a43] h-fit">
                <h5 className="text-[12px] leading-4 tracking-[0.1em] font-bold text-[#2d5a43] mb-5">
                  THE HYGIENE PLEDGE
                </h5>

                <ul className="space-y-4">
                  {[
                    "HEPA Filtered Environments",
                    "Stainless Steel 316 Machinery",
                    "Cold-Press Processing",
                    "Batch-to-Farm Traceability",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold text-[#14422d]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#14422d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#7e5700] text-white rounded-4xl p-8 flex flex-col items-center text-center space-y-6">
          <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold">
            Join the SRI GREEN Supply Chain.
          </h2>

          <p className="max-w-2xl text-lg opacity-90">
            Whether you are scaling production as a food manufacturer, building
            a private label supplement line, or sourcing ingredients for bulk
            distribution — SRI GREEN Industries is equipped to supply, certify,
            and ship.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#fec567] text-[#765100] px-10 py-4 rounded-full font-bold">
              Request Sample Kit
            </button>

            <button className="border-2 border-white px-10 py-4 rounded-full font-bold">
              Download Catalog
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
