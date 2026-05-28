"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

function InView({ children, className, delay = 0, variants = fadeUp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* individual child — use inside a motion parent with stagger */
const Child = ({ children, className }) => (
  <motion.div className={className} variants={fadeUp}>
    {children}
  </motion.div>
);

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.015,
  },
  transition: {
    type: "spring",
    stiffness: 180,
    damping: 18,
  },
};

export default function Page() {
  return (
    <div className="bg-[#fbfaeb] text-[#1b1c13] font-[Plus_Jakarta_Sans] mt-20">
      <main className="max-w-[1440px] mx-auto px-10 py-10 flex flex-col gap-5">
        {/* ================= HERO ================= */}

          <motion.section
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-12 gap-5"
          >
            <motion.div
              variants={fadeUp}
              {...cardHover}
              className="md:col-span-12 rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] bg-[#2d5a43] min-h-[620px] sm:min-h-[680px] lg:min-h-[680px] relative overflow-hidden flex flex-col justify-between lg:justify-center lg:flex-row items-start lg:items-center p-5 sm:p-8 md:p-12 lg:p-16"
            >
              {/* floating blobs */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-[-70px] right-[-80px] w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] bg-[#fec567]/20 blur-3xl rounded-full"
              />

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-[-100px] left-[10%] sm:left-[20%] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] bg-[#bceecf]/10 blur-3xl rounded-full"
              />

              {/* IMAGE */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute inset-0 lg:right-0 lg:left-auto lg:top-0 w-full lg:w-1/2 h-full opacity-35 sm:opacity-45 lg:opacity-100"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpwoWbt2MCrdEVuZkjVUVBY-TOrsROrqVyaK48ZyIW9B1c5uGLuj7WzZRBq-9w4xwHTSn5dhzqhUlTzqZl3amULNhnG7iDglQn2o3U_b4xZM16xzghlwtNunNYY-RAoaj5TnXbNKKMNaZnk_DtilarQ3rJpcxocuDLoup47pnW2HiEr1Vo5vgj1kCLk12f9qvReI7m_bHTiLZ5t_OV90ZvOByI2SYJoGDNjzY2WNVzM6c0xY1Xoh3DsiQo0IvhnUHp8dHvmMxst2w"
                  className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] lg:rounded-[48px]"
                  alt="Export ready food powder products"
                />

                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#2d5a43] via-[#2d5a43]/70 lg:via-transparent to-[#2d5a43]/40 lg:to-transparent" />
              </motion.div>

              {/* CONTENT WRAPPER */}
              <div className="relative z-10 w-full flex flex-col justify-between min-h-[560px] sm:min-h-[600px] lg:min-h-0">
                {/* TEXT */}
                <div className="max-w-3xl pt-10 sm:pt-14 lg:pt-0">
                  <motion.h1
                    variants={fadeUp}
                    className="text-[38px] sm:text-[54px] md:text-[72px] lg:text-[90px] leading-[0.98] sm:leading-[0.95] tracking-[-0.04em] sm:tracking-[-0.05em] font-extrabold text-[#fbfaeb]"
                  >
                    Farm-Sourced.
                    <br />
                    Lab-Certified.
                    <br />
                    Export-Ready.
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="text-[#d7f0e0] text-sm sm:text-base lg:text-lg mt-6 sm:mt-8 max-w-2xl leading-6 sm:leading-7 lg:leading-8"
                  >
                    SRI GREEN Industries is a premium exporter of dehydrated and
                    spray-dried fruit & vegetable powders trusted across 24+ countries.
                  </motion.p>
                </div>

                {/* CTA */}
                <motion.div
                  variants={fadeUp}
                  className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 lg:mt-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto bg-[#fec567] text-[#765100] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold flex items-center justify-center gap-3"
                  >
                    Explore Quality
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="material-symbols-outlined"
                    >
                      arrow_forward
                    </motion.span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold"
                  >
                    Download Catalog
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

        {/* ── Mission / Vision / Pillars ── */}
        <section className="grid grid-cols-12 gap-5">
          {/* Mission */}
          <InView className="col-span-12 md:col-span-7">
            <div className="bg-[#eae9da] p-8 rounded-[3rem] flex flex-col justify-between min-h-[320px] h-full group transition-shadow duration-300 hover:shadow-lg">
              <div>
                <span className="inline-block bg-[#14422d] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                  Our Mission
                </span>
                <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold text-[#14422d] mb-4 max-md:text-[32px] max-md:leading-[38px]">
                  Precision Sourcing.
                  <br />
                  Global Supply Standards
                </h2>
                <p className="text-[#414943] text-lg font-medium">
                  We source directly from India's premier agricultural regions,
                  applying stringent quality controls at every processing stage.
                  Our HACCP-controlled, GMP-compliant facilities produce
                  ingredient powders that meet the regulatory requirements of
                  the US, EU, UAE, and Southeast Asian markets.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex">
                  {["#ffdead", "#bceecf", "#ffdcc6"].map((c, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-[#eae9da] -mr-3 transition-transform duration-200 hover:scale-110"
                      style={{ background: c, zIndex: 3 - i }}
                    />
                  ))}
                </div>
                <span className="font-bold text-[#14422d] ml-2">
                  500+ Partner Farmers
                </span>
              </div>
            </div>
          </InView>

          {/* Vision */}
          <InView className="col-span-12 md:col-span-5" delay={0.1}>
            <div className="bg-[#7f410b] p-8 rounded-[3rem] text-[#ffb482] flex flex-col justify-center overflow-hidden relative min-h-[320px] h-full group transition-shadow duration-300 hover:shadow-lg">
              <motion.span
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="material-symbols-outlined text-6xl mb-4 opacity-50 cursor-default w-fit"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                visibility
              </motion.span>
              <h3 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold mb-4 max-md:text-[32px] max-md:leading-[38px]">
                The SRI GREEN Vision
              </h3>
              <p className="text-lg opacity-90 font-medium">
                To be the world's most trusted partner in sustainable
                sri green, where quality and ethics swirl together in every
                gram of our produce.
              </p>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#fec567] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
          </InView>

          {/* Pillars — staggered */}
          {[
            {
              bg: "bg-[#e4e3d4]",
              iconBg: "bg-[#14422d]",
              iconColor: "text-white",
              icon: "eco",
              titleColor: "text-[#14422d]",
              title: "Sustainable",
              desc: "Zero-waste processing and eco-friendly packaging for a better planet.",
              descColor: "text-[#414943]",
            },
            {
              bg: "bg-[#ffdead]",
              iconBg: "bg-[#7e5700]",
              iconColor: "text-white",
              icon: "verified",
              titleColor: "text-[#7e5700]",
              title: "Purity",
              desc: "100% natural powders with no additives, fillers, or synthetic colors.",
              descColor: "text-[#604100]",
            },
            {
              bg: "bg-[#bceecf]",
              iconBg: "bg-[#2d5a43]",
              iconColor: "text-[#9fcfb2]",
              icon: "handshake",
              titleColor: "text-[#224f39]",
              title: "Fair Trade",
              desc: "Direct sourcing ensures our farmers receive premium market rates.",
              descColor: "text-[#224f39]",
            },
          ].map(
            (
              {
                bg,
                iconBg,
                iconColor,
                icon,
                titleColor,
                title,
                desc,
                descColor,
              },
              i,
            ) => (
              <InView
                key={title}
                className="col-span-12 md:col-span-4"
                delay={i * 0.1}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className={`${bg} p-8 rounded-[3rem] flex flex-col items-center text-center h-full cursor-default`}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-16 h-16 rounded-full ${iconBg} ${iconColor} flex items-center justify-center mb-6`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {icon}
                    </span>
                  </motion.div>
                  <h4 className={`text-2xl font-bold ${titleColor} mb-2`}>
                    {title}
                  </h4>
                  <p className={`${descColor} font-medium`}>{desc}</p>
                </motion.div>
              </InView>
            ),
          )}
        </section>

        {/* ── Global Reach ── */}
        <InView>
          <div className="bg-[#f0efe0] rounded-[3rem] p-8">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              {/* text */}
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold text-[#14422d] max-md:text-[32px] max-md:leading-[38px]">
                  Global Presence.
                  <br />
                  Local Roots.
                </h2>
                <p className="text-[#414943] text-lg font-medium">
                  From the fertile plains of our home base, we export premium
                  dehydrated powders to discerning industrial and retail clients
                  across three continents.
                </p>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={staggerContainer(0.1, 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    ["🇺🇸", "USA"],
                    ["🇦🇪", "UAE"],
                    ["🇪🇺", "Europe"],
                  ].map(([flag, name]) => (
                    <motion.div
                      key={name}
                      variants={fadeUp}
                      whileHover={{ y: -4, scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="bg-[#fbfaeb] px-6 py-4 rounded-[3rem] border border-[#c0c9c1] text-center flex-1 min-w-[90px] cursor-default"
                    >
                      <span className="text-4xl block mb-2">{flag}</span>
                      <span className="font-bold text-[#14422d]">{name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* map */}
              <div className="md:w-1/2 w-full h-[400px] bg-[#c0c9c1] rounded-[3rem] overflow-hidden relative group">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Wg2rtri6u4oCzaGbWmmKC5ng6lqGD-p-ub0g9uCEK7Zt38Oo9juXmQtD-PvH7s1Ts7_BOGV3FLpBEj9fq9Gt2n1zF84QwY3PS1_W8r4S3UhEiKntH0_Md12v3saioUDnIgnecEU6BDsKXAU_KU4dAcamhymJkx8vinP8ORZ3WNf9r9ZUyh6zedPwqAtIHBK2OhGmpVWHg7J3Tvw4ByyKCwmB6nKxib1LU-gWNOx1yHyBIvWfPH9fmvpJpL7WxJFi0hgoTGSprsE"
                  alt="World map"
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-[#14422d] text-white px-6 py-3 rounded-full flex items-center gap-3 font-bold cursor-default"
                  >
                    <span className="material-symbols-outlined">public</span>
                    24+ Countries Served
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </InView>

        {/* ── Quality Assurance ── */}
        <section className="grid grid-cols-12 gap-5">
          {/* lab image */}
          <InView className="col-span-12 md:col-span-4">
            <div className="rounded-[3rem] overflow-hidden min-h-[420px] h-full group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiBR8wfA8RJg7ZecM5Vnj1HKrLFGTew9jA8khZbvVU1oWDyygnubO6s-oNuksCzi_ZiQTCggLhhDPzWhNpe6XsvUFg0yLmc60UmA9aX5He6LuFOiez6h76yZuhRFLq47VTfryfvv9TaLNzyl6ckCxhLlt7yGrQeITyTc0ifYP7ZKAtzs0DJDecMlS2D3HLluGOJ93tR7Nr8OrKyoiVW8fYzDJEdakufi1twLKuIQT0lOtrtje3uxAExmV-IvCfs4sJfY38V_VsNds"
                alt="Food processing laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </InView>

          {/* certs */}
          <InView className="col-span-12 md:col-span-8" delay={0.1}>
            <div className="bg-[#e4e3d4] p-8 rounded-[3rem] h-full">
              <h2 className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold text-[#14422d] mb-8 max-md:text-[32px] max-md:leading-[38px]">
                Uncompromising Standards.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* cert list */}
                <motion.div
                  variants={staggerContainer(0.12, 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      title: "ISO 22000 Certified",
                      desc: "Globally recognized food safety management systems integrated at every step.",
                    },
                    {
                      title: "GMP Compliance",
                      desc: "Strict adherence to Good Manufacturing Practices for hygiene and consistency.",
                    },
                    {
                      title: "HACCP Controlled",
                      desc: "Hazard Analysis Critical Control Point system to eliminate biological risks.",
                    },
                  ].map(({ title, desc }) => (
                    <motion.div
                      key={title}
                      variants={fadeUp}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-start gap-4 mb-6 cursor-default"
                    >
                      <span
                        className="material-symbols-outlined text-[#14422d] text-[28px] flex-shrink-0"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        check_circle
                      </span>
                      <div>
                        <h5 className="font-bold text-[#14422d] text-lg mb-1">
                          {title}
                        </h5>
                        <p className="text-sm text-[#414943] leading-6">
                          {desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* hygiene pledge sticker */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 32px rgba(20,66,45,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="bg-[#fbfaeb] p-6 rounded-[3rem] border-2 border-[#2d5a43] h-fit cursor-default"
                >
                  <span className="text-xs font-bold tracking-widest uppercase text-[#2d5a43] mb-5 block">
                    The Hygiene Pledge
                  </span>
                  <div className="flex flex-col gap-4">
                    {[
                      "HEPA Filtered Environments",
                      "Stainless Steel 316 Machinery",
                      "Cold-Press Processing",
                      "Batch-to-Farm Traceability",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.1 + i * 0.08,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                        className="flex items-center gap-3 text-sm font-bold text-[#14422d]"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#14422d] flex-shrink-0" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </InView>
        </section>

        {/* ── CTA ── */}
        <InView>
          <div className="bg-[#7e5700] text-white rounded-[3rem] p-8 flex flex-col items-center text-center gap-6 relative overflow-hidden">
            {/* deco circles */}
            <div className="absolute w-72 h-72 rounded-full bg-white opacity-[0.04] -left-20 -top-20 pointer-events-none" />
            <div className="absolute w-48 h-48 rounded-full bg-[#fec567] opacity-[0.12] -right-10 -bottom-16 pointer-events-none" />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[48px] leading-[52px] tracking-[-0.02em] font-extrabold relative z-10 max-md:text-[32px] max-md:leading-[38px]"
            >
              Join the SRI GREEN Supply Chain.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="max-w-2xl text-lg opacity-90 font-medium relative z-10"
            >
              Whether you are scaling production as a food manufacturer,
              building a private label supplement line, or sourcing ingredients
              for bulk distribution — SRI GREEN Industries is equipped to
              supply, certify, and ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap justify-center gap-4 relative z-10"
            >
              <motion.button
                whileHover={{ scale: 1.06, backgroundColor: "#f5b84a" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#fec567] text-[#765100] px-10 py-4 rounded-full font-bold cursor-pointer border-none transition-colors duration-200"
              >
                Request Sample Kit
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="border-2 border-white px-10 py-4 rounded-full font-bold cursor-pointer bg-transparent text-white transition-colors duration-200"
              >
                Download Catalog
              </motion.button>
            </motion.div>
          </div>
        </InView>
      </main>
    </div>
  );
}
