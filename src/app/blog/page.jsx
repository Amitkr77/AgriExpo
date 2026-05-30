"use client";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import blogData from "@/app/data/blogData.json"; 
import { trackEvent } from "@/lib/gtag";

// ─── Animation Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

// ─── Helper Functions ────────────────────────────────────────────────────────
const getReadTime = (wordCount) => `${Math.ceil((wordCount || 0) / 200)} min read`;

const formatDate = (dateStr, options) =>
  new Date(dateStr).toLocaleDateString("en-US", options || { month: "long", year: "numeric" });

const getInitials = (name) =>
  name.split(" ").map(w => w[0] || "").join("").slice(0, 2).toUpperCase();

// ─── Sub Components ─────────────────────────────────────────────────────────
const Skeleton = memo(({ className }) => (
  <div className={`rounded-2xl animate-pulse bg-[#e4e3d4] ${className || ""}`} />
));

const Dot = () => <span className="h-0.5 w-0.5 rounded-full bg-[#c0c9c1]" />;

const ArrowUpRight = () => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
    <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-[#c0c9c1] group-hover:text-[#14422d] transition-colors" />
  </svg>
);

const BlogFeedItem = memo(({ item, index, onClick }) => (
  <motion.button
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 + index * 0.06, duration: 0.5 }}
    onClick={() => onClick(item.slug)}
    className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 border-b border-[#e4e3d4] transition-all duration-200 w-full text-left"
  >
    <span className="min-w-6 font-mono text-[10px] md:text-[11px] text-[#c0c9c1] group-hover:text-[#14422d] transition-colors duration-300">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="flex-1 min-w-0">
      <p className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-[#414943] group-hover:text-[#1b1c13] truncate transition-colors duration-300">
        {item.title}
      </p>
    </div>
    <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.12em] text-[#7e5700] bg-[#fec567]/20 border border-[#fec567]/30 px-1.5 py-0.5 rounded-full">
        {item.tags?.[0] || "Blog"}
      </span>
      <svg className="w-2.5 h-2.5 text-[#c0c9c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </motion.button>
));

const FeaturedCard = memo(({ blog, onClick }) => (
  <motion.div
    variants={scaleIn}
    onClick={() => onClick(blog.slug)}
    className="group relative h-[400px] md:h-[440px] cursor-pointer overflow-hidden rounded-[2.5rem] border-r border-[#e4e3d4] last:border-r-0"
  >
    <img src={blog.image} alt={blog.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2818]/80 via-[#0B2818]/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {blog.tags?.slice(0, 2).map(tag => (
          <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">{tag}</span>
        ))}
      </div>
      <h2 className="mb-2 text-xl sm:text-[22px] md:text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-white whitespace-pre-line group-hover:text-[#fec567] transition-colors duration-300">
        {blog.title}
      </h2>
      <p className="mb-3 text-[12px] sm:text-[13px] md:text-sm text-white/70 line-clamp-2">{blog.excerpt}</p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{blog.author.name}</span>
        <Dot />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{getReadTime(blog.wordCount)}</span>
        <Dot />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">{formatDate(blog.publishedAt)}</span>
        <div className="ml-auto flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 group-hover:border-[#fec567]/40 group-hover:bg-[#fec567]/10 transition-all duration-300">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  </motion.div>
));

// ─── Skeleton Blocks ────────────────────────────────────────────────────────
const FeedSkeleton = () => (
  <div className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-[#f5f4e5] border-t lg:border-t-0 border-[#e4e3d4] flex flex-col justify-end mt-8 lg:mt-0">
    <div className="px-6 md:px-8 py-4 md:py-5 border-b border-[#e4e3d4]"><Skeleton className="h-3 w-24" /></div>
    <div className="flex-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3.5 md:py-4 border-b border-[#e4e3d4]">
          <Skeleton className="h-4 w-4 shrink-0" />
          <Skeleton className="h-3.5 w-full max-w-[80%]" />
        </div>
      ))}
    </div>
    <div className="h-10 sm:h-12 border-t border-[#e4e3d4] bg-[#fbfaeb] flex items-center px-6 md:px-8"><Skeleton className="h-3.5 w-28" /></div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#e4e3d4]">
    {[0, 1].map(i => (
      <div key={i} className="relative h-[400px] md:h-[440px] bg-[#f5f4e5] p-6 md:p-8 flex flex-col justify-end rounded-[2.5rem] border-r border-[#e4e3d4] last:border-r-0">
        <div className="flex gap-2 mb-3"><Skeleton className="h-3 w-12" /><Skeleton className="h-3 w-9" /></div>
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-5" />
        <div className="flex items-center gap-2"><Skeleton className="h-3 w-14" /><Skeleton className="h-1.5 w-1.5 rounded-full" /><Skeleton className="h-3 w-12" /></div>
      </div>
    ))}
  </div>
);

const GridSkeleton = () => (
  <>
    {[0, 1, 2].map(i => (
      <div key={i} className="bg-[#f5f4e5] p-6 md:p-8 rounded-[2.5rem] border-r border-[#e4e3d4] last:border-r-0">
        <Skeleton className="h-32 md:h-36 w-full rounded-[1.5rem] mb-5" />
        <Skeleton className="h-3 w-16 mb-3" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-5" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-5" />
        <Skeleton className="h-3 w-16" />
      </div>
    ))}
  </>
);

const CARDS_PER_PAGE = 6;

// ─── Main Component ─────────────────────────────────────────────────────────
export default function Blog() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [gridPage, setGridPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // ✅ FIXED: Transform your JSON format to component format
  const blogs = useMemo(() => {
    // Check if data exists and has blogPosts array
    if (!blogData || !blogData.blogPosts || !Array.isArray(blogData.blogPosts)) {
      console.error("Invalid blog data structure:", blogData);
      return [];
    }

    // Transform each blogPost to the format your component expects
    return blogData.blogPosts.map((item) => {
      const bp = item.blogPost;
      return {
        id: bp.id,
        slug: bp.slug,
        title: bp.title,
        excerpt: bp.excerpt,
        image: bp.coverImage?.url || "/BlogImg/default.jpg",
        author: {
          name: bp.author?.name || "Unknown Author"
        },
        publishedAt: bp.publishing?.publishedAt || new Date().toISOString(),
        wordCount: bp.reading?.wordCount || 0,
        featured: bp.featured || false,
        tags: bp.tags || [],
        // Additional fields that might be useful
        subtitle: bp.subtitle,
        category: bp.category,
        coverImage: bp.coverImage,
        readingTime: bp.reading?.readingTimeMinutes || 0
      };
    });
  }, []);

  const featuredBlogs = useMemo(() => blogs.filter(b => b.featured), [blogs]);
  const nonFeaturedBlogs = useMemo(() => blogs.filter(b => !b.featured), [blogs]);

  const allGridCards = useMemo(() => {
    const grouped = blogs.reduce((acc, blog) => {
      const tag = blog.tags?.[0] || "General";
      (acc[tag] = acc[tag] || []).push(blog);
      return acc;
    }, {});
    return Object.entries(grouped).flatMap(([tag, items]) =>
      items.map(item => ({ ...item, tag }))
    );
  }, [blogs]);

  const totalPages = Math.ceil(allGridCards.length / CARDS_PER_PAGE);
  const gridCards = allGridCards.slice(gridPage * CARDS_PER_PAGE, gridPage * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const navigateToBlog = useCallback((slug) => {
    router.push(`/blog/${slug}`);
  }, [router]);

      const blogGradients = [
        "from-[#fff1c9] via-[#e8bd62] to-[#b87518]",
        "from-[#dff3e5] via-[#8fc99f] to-[#3f8f5a]",
        "from-[#dce9f7] via-[#8fb7df] to-[#3f72a8]",
        "from-[#efe1f6] via-[#b891d0] to-[#7a4fa0]",
        "from-[#f6dfe3] via-[#d88a96] to-[#a83f52]",
        "from-[#d9f1ee] via-[#7fc8bd] to-[#3c8a80]",
      ];
      const gridGradients = [
        "from-[#fff1c9] via-[#e8bd62] to-[#b87518]",
        "from-[#dff3e5] via-[#8fc99f] to-[#3f8f5a]",
        "from-[#dce9f7] via-[#8fb7df] to-[#3f72a8]",
        "from-[#efe1f6] via-[#b891d0] to-[#7a4fa0]",
        "from-[#f6dfe3] via-[#d88a96] to-[#a83f52]",
        "from-[#d9f1ee] via-[#7fc8bd] to-[#3c8a80]",
      ];
      

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-[#fbfaeb] font-sans text-[#1b1c13] pt-30 sm:pt-38 md:pt-42">

      {/* ── Hero Section ── */}
      <section className="flex flex-col lg:flex-row overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-b border-[#e4e3d4]">

        {/* Left Panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start relative lg:border-r border-[#e4e3d4] px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="space-y-5 sm:space-y-6 mb-7 sm:mb-8 md:mb-10">
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 md:gap-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px w-7 md:w-8 bg-[#14422d] origin-left block"
              />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#414943]">The Journal</span>
            </motion.div>

            <div className="space-y-[-0.04em]">
              {[{ text: "Ingredient", delay: 0.3 }].map(({ text, delay }) => (
                <div key={text} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-[#1b1c13]"
                  >
                    {text}
                  </motion.h1>
                </div>
              ))}

              <div className="overflow-hidden flex items-center gap-3 md:gap-6">
                {["&", "industry"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                    className={`relative text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-[#c0c9c1] ${word === "industry" ? "italic" : ""}`}
                  >
                    {word === "&" ? "& " : word}
                    {word === "industry" && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute left-0 top-3/4 w-full h-[2px] sm:h-[3px] md:h-1 bg-[#fec567]/60 origin-left -rotate-2"
                      />
                    )}
                  </motion.span>
                ))}
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-[#14422d]"
                >
                  insights.
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 border-t border-[#e4e3d4] pt-6 md:pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.8] text-[#414943] font-light max-w-md"
            >
              Expert knowledge on dehydrated food ingredients, fruit powders, vegetable powders, export certifications, packaging solutions, and global food manufacturing trends.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Panel: Feed */}
        {loading ? (
          <FeedSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-[#f5f4e5] border-t lg:border-t-0 border-[#e4e3d4] mt-8 lg:mt-0"
          >
            <div className="px-6 md:px-8 py-4 md:py-5 border-b border-[#e4e3d4] flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-[#414943]">
                Active Feed
              </span>
              <span className="font-mono text-[10px] text-[#c0c9c1]">// Latest</span>
            </div>

            <div className="flex-1 max-h-[320px] md:max-h-[400px] overflow-y-auto scrollbar-hide p-2">
              {blogs.slice(0, 7).map((item, i) => {
                const feedHoverColors = [
                  "hover:bg-[#fff1c9]",
                  "hover:bg-[#dff3e5]",
                  "hover:bg-[#dce9f7]",
                  "hover:bg-[#efe1f6]",
                  "hover:bg-[#f6dfe3]",
                  "hover:bg-[#d9f1ee]",
                  "hover:bg-[#ffe4d6]",
                ];

                return (
                  <div
                    key={item.id}
                    className={`
                      rounded-3xl overflow-hidden transition-all duration-300
                      ${feedHoverColors[i % feedHoverColors.length]}
                      hover:shadow-[0_10px_25px_rgba(20,66,45,0.10)]
                    `}
                  >
                    <BlogFeedItem item={item} index={i} onClick={navigateToBlog} />
                  </div>
                );
              })}
            </div>

            <div className="h-10 sm:h-12 border-t border-[#e4e3d4] bg-[#fbfaeb] flex items-center px-6 md:px-8">
              <div className="flex items-center gap-2 text-[#414943]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#14422d] animate-pulse" />
                <span className="font-mono text-[9px] md:text-[10px] tracking-wider text-[#c0c9c1]">
                  UPDATED REGULARLY
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── Featured Grid ── */}
      {loading ? (
        <FeaturedSkeleton />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 m-2 sm:grid-cols-2 gap-3 border-b border-[#e4e3d4]"
        >
          {featuredBlogs.slice(0, 2).map(blog => (
            <FeaturedCard key={blog.id} blog={blog} onClick={navigateToBlog} />
          ))}
        </motion.div>
      )}

      {/* ── Wide Card ── */}
      {!loading && nonFeaturedBlogs.slice(0, 1).map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => navigateToBlog(item.slug)}
          className="group relative rounded-4xl m-2 h-60 sm:h-64 md:h-72 lg:h-80 cursor-pointer overflow-hidden border-b border-[#e4e3d4]"
        >
          <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2818]/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex w-full sm:w-[55%] flex-col justify-center px-6 sm:px-11 py-8 sm:py-10">
            <p className="mb-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#fec567]">
              {item.tags?.[0] || "Featured"}
            </p>
            <h2 className="mb-4 text-xl sm:text-[28px] md:text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-white group-hover:text-[#fec567] transition-colors duration-300">
              {item.title}
            </h2>
            <p className="mb-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-white/70 line-clamp-2">
              {item.excerpt}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">{item.author.name}</span>
              <Dot />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">{getReadTime(item.wordCount)}</span>
              <Dot />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">{formatDate(item.publishedAt, { month: "short", year: "numeric" })}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* ── Recent Articles ── */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="border-b border-[#e4e3d4]">
        <div className="flex items-center justify-between border-b border-[#e4e3d4] px-4 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-7 md:py-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-[#414943]">Recent articles</span>
        </div>
        <div className="grid grid-cols-1 rounded-4xl sm:grid-cols-2">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex  rounded-4xl items-start gap-4 md:gap-5 px-6 md:px-11 py-5 md:py-7 border-b border-[#e4e3d4] sm:border-r border-[#e4e3d4]">
                <Skeleton className="h-16 w-16 shrink-0 rounded-2xl" />
                <div className="flex-1 flex flex-col gap-2 mt-1">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))
          ) : (
            blogs.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.slug}
                variants={fadeUp}
                onClick={() => navigateToBlog(item.slug)}
                className={`
                  group relative flex cursor-pointer items-start gap-4 md:gap-5
                  px-4 m-2 sm:px-6 md:px-8 lg:px-11 py-5 md:py-7
                  border border-[#e4e3d4] rounded-4xl overflow-hidden
                  transition-all duration-500
                  hover:bg-gradient-to-br ${blogGradients[index % blogGradients.length]}/10
                  hover:scale-[1.015] hover:shadow-[0_18px_45px_rgba(65,73,67,0.16)]
                `}

              >
                <img src={item.image} alt={item.title} loading="lazy" className="h-16 w-16 shrink-0 rounded-2xl object-cover transition-opacity duration-300" />
                <div className="flex-1">
                  <p className="mb-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#7e5700]">{item.tags?.[0] || "Blog"}</p>
                  <p className="mb-1.5 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold leading-[1.28] sm:leading-[1.3] tracking-[-0.01em] text-[#414943] transition-colors duration-200 group-hover:text-[#1b1c13]">
                    {item.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-[#c0c9c1] transition-colors duration-300 group-hover:text-white">
                    {item.author.name} · {getReadTime(item.wordCount)}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* ── Quote Band ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center rounded-4xl gap-6 md:gap-10 lg:gap-12 border-y border-[#e4e3d4] bg-[#14422d] px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-10 md:py-12 lg:py-14"
      >
        <div className="shrink-0 text-[60px] sm:text-[70px] md:text-[80px] font-black leading-[0.7] text-[#fec567]/10 -mt-2 font-serif">&ldquo;</div>
        <p className="flex-1 font-serif text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px] italic leading-normal text-white/60">
          Quality ingredients are the foundation of every great food product. We source with <em className="text-[#fec567] not-italic font-bold">precision, certify with rigor</em>, and deliver with consistency — worldwide.
        </p>
        <div className="min-w-0 sm:min-w-36 md:min-w-40 text-left md:text-right">
          <p className="mb-1 text-[12px] sm:text-[13px] font-bold text-white">Industry Expert</p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/40">Food Processing · 2026</p>
        </div>
      </motion.div>

      {/* ── Grid Cards with Pagination ── */}
      <div className="border-b border-[#e4e3d4]">
        <motion.div
          key={`grid-${gridPage}`}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 "
        >
          {loading ? (
            <GridSkeleton />
          ) : gridCards.length === 0 ? (
            <div className="col-span-3 py-20 text-center text-[13px] text-[#414943]">No articles found.</div>
          ) : (
            gridCards.map((card, index) => (
              <motion.div
                key={card.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => navigateToBlog(card.slug)}
                className={`
                  group cursor-pointer border-transparent rounded-4xl m-4
                  p-6 sm:p-7 md:p-8 transition-all duration-500
                  bg-[#f5f4e5] hover:bg-gradient-to-br ${gridGradients[index % gridGradients.length]}
                  hover:shadow-lg hover:shadow-[#14422d]/[0.08]
                  border-r border-[#e4e3d4] last:border-r-0
                `}              
                >
                <img src={card.image} alt={card.title} loading="lazy" className="mb-4 sm:mb-5 h-32 md:h-36 w-full rounded-[1.5rem] object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <p className="mb-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#7e5700]">{card.tag}</p>
                <p className="mb-2.5 text-[14px] sm:text-[15px] md:text-base font-extrabold tracking-[-0.015em] leading-[1.28] sm:leading-[1.3] text-[#414943] group-hover:text-[#14422d] transition-colors duration-300">{card.title}</p>
                <p className="mb-4 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.68] sm:leading-[1.7] text-[#414943] line-clamp-3">{card.excerpt}</p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-[#c0c9c1] transition-colors duration-300 group-hover:text-white/85">
                  {getReadTime(card.wordCount)}
                </p>              
              </motion.div>
            ))
          )} 
        </motion.div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-11 py-4 sm:py-5 border-t border-[#e4e3d4]">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage(p => Math.max(0, p - 1))}
              disabled={gridPage === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e4e3d4] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[#414943] hover:border-[#14422d]/30 hover:text-[#14422d] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </motion.button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setGridPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === gridPage ? "bg-[#14422d] scale-125" : "bg-[#e4e3d4] hover:bg-[#c0c9c1]"}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={gridPage === totalPages - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e4e3d4] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[#414943] hover:border-[#14422d]/30 hover:text-[#14422d] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
      {/* ── Newsletter ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 border-t border-[#e4e3d4] bg-[#fbfaeb] px-4 sm:px-6 md:px-8 lg:px-11 py-10 sm:py-12 md:py-14 lg:py-16 items-center"
      >
        <div>
          <p className="mb-3 sm:mb-3.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-[#7e5700]">Stay updated</p>
          <h3 className="mb-3 text-[26px] sm:text-[28px] md:text-[31px] lg:text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-[#1b1c13]">
            Industry insights,<br />direct to inbox.
          </h3>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-[#414943]">
            Expert updates on food processing, ingredient sourcing, export certifications, packaging innovations, and global market trends — delivered weekly.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-0">
            <input
              type="email"
              className="flex-1 border border-[#c0c9c1] bg-[#f5f4e5] px-4 py-3 sm:py-3.5 text-[13px] sm:text-[14px] text-[#1b1c13] outline-none font-sans placeholder:text-[#c0c9c1] focus:border-[#14422d] focus:ring-1 focus:ring-[#14422d]/10 transition-all rounded-4xl"
              placeholder="your@email.com"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                trackEvent(
                  "form_submit",
                  "newsletter",
                  "subscribe_button"
                )
              }
              className="shrink-0 bg-[#14422d] px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white hover:bg-[#0f3122] transition-colors rounded-4xl"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-[9px] sm:text-[10px] tracking-wider text-[#c0c9c1]">No spam. Unsubscribe any time.</p>
        </div>
      </motion.div>
    </div>
  );
}