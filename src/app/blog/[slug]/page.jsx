"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { BLOG_DATA } from "@/app/data/blogData";

// ─── Utilities ──────────────────────────────────────────────────────────────

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// ─── Share Icons ─────────────────────────────────────────────────────────────

const SHARE_ICONS = {
  copy: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
      <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 11V3h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
      <path d="M2 2.5l5 5.5-5 5.5h1.5l4.25-4.75L11.5 13.5H14l-5.25-5.75L13.5 2.5H12l-3.75 4.25L4.5 2.5H2z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 7v3.5M5.5 5.5v.25M8 10.5V8.25c0-.83.67-1.5 1.5-1.5S11 7.42 11 8.25v2.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug;
  const router = useRouter();
  const heroRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const article = useMemo(
    () => BLOG_DATA.find((b) => b.slug === slug) || null,
    [slug]
  );

  const relatedMini = useMemo(() => {
    if (!article) return [];
    const related =
      article.relatedSlugs
        ?.map((rs) => BLOG_DATA.find((b) => b.slug === rs))
        .filter(Boolean) || [];
    if (related.length < 3) {
      const others = BLOG_DATA.filter(
        (b) => b.slug !== slug && !related.find((r) => r.slug === b.slug)
      );
      while (related.length < 3 && others.length > 0) {
        related.push(others.shift());
      }
    }
    return related.slice(0, 3);
  }, [article, slug]);

  const relatedCards = useMemo(() => {
    if (!article) return [];
    return BLOG_DATA.filter(
      (b) => b.slug !== slug && !relatedMini.find((r) => r.slug === b.slug)
    ).slice(0, 3);
  }, [article, slug, relatedMini]);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, Math.max(0, (top / total) * 100)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = (type) => {
    if (!mounted) return;
    const url = window.location.href;
    if (type === "copy") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    if (type === "twitter")
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article?.title || "")}`,
        "_blank"
      );
    if (type === "linkedin")
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
  };

  // ── 404 ──
  if (!article) {
    return (
      <div className="min-h-screen bg-[#fbfaeb] flex flex-col items-center justify-center gap-6">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#7e5700] font-bold">
          Not found
        </span>
        <h1 className="text-[9rem] font-black leading-none tracking-tighter text-[#14422d]/[0.06] select-none">
          404
        </h1>
        <button
          onClick={() => router.push("/blog")}
          className="mt-2 inline-flex items-center gap-3 border border-[#e4e3d4] hover:border-[#14422d]/40 px-7 py-3.5 text-[11px] uppercase tracking-[0.35em] text-[#414943] hover:text-[#1b1c13] transition-all rounded-full"
        >
          ← Back to Journal
        </button>
      </div>
    );
  }

  const authorName = article.author.name;
  const authorInitials = getInitials(authorName);
  const readTime = `${article.readingTime} min read`;
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const articleTags = article.tags || [];

  return (
    <div className="bg-[#fbfaeb] min-h-screen font-sans text-[#1b1c13]">

      {/* ── Reading Progress Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[#e4e3d4]">
        <div
          className="h-full bg-[#14422d] transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto font-sans pt-28 sm:pt-32 bg-[#fbfaeb] text-[#1b1c13] overflow-hidden">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-2.5 px-5 sm:px-8 md:px-11 py-4 sm:py-5 border-b border-[#e4e3d4]"
        >
          <span
            onClick={() => router.push("/blog")}
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] cursor-pointer text-[#c0c9c1] hover:text-[#14422d] transition-colors duration-200"
          >
            Blogs
          </span>
          <span className="text-[10px] text-[#c0c9c1]">/</span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#414943] truncate max-w-[200px] sm:max-w-xs">
            {article.title.length > 40
              ? article.title.slice(0, 40) + "…"
              : article.title}
          </span>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          ref={heroRef}
          style={{ y: heroY }}
          className="relative h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden"
        >
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-[#0B2818]/80 via-[#0B2818]/40 to-transparent"
          />
          <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 md:px-11 pb-10 sm:pb-14">

            {/* Tag pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="mb-5 flex flex-wrap items-center gap-2"
            >
              {articleTags.slice(0, 3).map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.35 }}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="rounded-full border border-[#fec567]/40 bg-white/10 px-3.5 py-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl hover:border-[#fec567] hover:bg-[#fec567]/15 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.35 }}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-white/50">
                  <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.19l3.28 1.97a.75.75 0 11-.78 1.28l-3.64-2.18a.75.75 0 01-.36-.64V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm-9 10.5a9 9 0 1118 0 9 9 0 01-18 0z" clipRule="evenodd" />
                </svg>
                {readTime}
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6 max-w-4xl text-[clamp(2rem,5vw,3rem)] font-black leading-[0.95] tracking-[-0.04em] text-white"
            >
              {article.title}
            </motion.h1>

            {/* Author + meta */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-bold border-[#fec567]/30 bg-[#fec567]/20 text-[#fec567]">
                  {authorInitials}
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/60">
                  {authorName}
                </span>
              </div>
              {[formattedDate, readTime].map((item) => (
                <span key={item} className="flex items-center gap-3 sm:gap-4">
                  <span className="h-0.5 w-0.5 rounded-full bg-white/30" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white/50">
                    {item}
                  </span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Main Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_296px] border-b border-[#e4e3d4]">

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="px-6 sm:px-10 lg:px-14 py-14 sm:py-20 lg:border-r border-[#e4e3d4]"
          >
            {/* Excerpt */}
            <div className="flex items-start gap-5 mb-14">
              <span className="text-[5.5rem] leading-[0.5] text-[#14422d]/20 font-serif select-none shrink-0 mt-1">
                &ldquo;
              </span>
              <p className="text-xl sm:text-2xl leading-[1.5] text-[#414943] font-light tracking-tight font-serif italic">
                {article.excerpt}
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-5 mb-14">
              <div className="flex-1 h-px bg-[#14422d]" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-[#c0c9c1] font-bold">
                Article
              </span>
              <div className="flex-1 h-px bg-[#14422d]" />
            </div>

            {/* Markdown Content */}
            <div className="space-y-0">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.04em] leading-[0.9] text-[#1b1c13] mt-20 mb-8 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <div className="flex items-center gap-4 mt-16 mb-6">
                      <span className="w-4 h-4 bg-[#14422d] shrink-0" />
                      <h2 className="text-xl sm:text-2xl font-black tracking-[-0.02em] text-[#1b1c13]">
                        {children}
                      </h2>
                    </div>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-[13px] font-black uppercase tracking-[0.12em] text-[#414943] mt-10 mb-4 flex items-center gap-3">
                      <span className="w-5 h-px bg-[#fec567] shrink-0" />
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-[17px] leading-[1.9] text-[#414943] font-light mt-5 first:mt-0">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[#1b1c13]">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-[#414943]">{children}</em>
                  ),
                  blockquote: ({ children }) => (
                    <div className="my-10 bg-[#14422d] relative overflow-hidden rounded-lg">
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#fec567]" />
                      <div className="px-8 py-7 text-white/70 text-[16px] leading-[1.8] font-light [&_strong]:text-[#fec567] [&_strong]:font-bold [&_p]:mt-0">
                        {children}
                      </div>
                    </div>
                  ),
                  ul: ({ children }) => (
                    <ul className="my-6 space-y-3">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="my-6 space-y-3 list-decimal list-inside">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-3 text-[16px] leading-[1.75] text-[#414943] font-light">
                      <span className="text-[#14422d] font-black text-sm mt-[5px] shrink-0">→</span>
                      <span className="[&_strong]:font-bold [&_strong]:text-[#1b1c13]">{children}</span>
                    </li>
                  ),
                  hr: () => (
                    <div className="py-10 flex items-center gap-4">
                      <div className="flex-1 h-px bg-[#e4e3d4]" />
                      <div className="flex gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#14422d]" />
                        <span className="w-1 h-1 rounded-full bg-[#14422d]/60" />
                        <span className="w-1 h-1 rounded-full bg-[#14422d]/30" />
                      </div>
                      <div className="flex-1 h-px bg-[#e4e3d4]" />
                    </div>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#14422d] font-medium underline underline-offset-2 decoration-[#14422d]/30 hover:decoration-[#14422d] transition-colors"
                    >
                      {children}
                    </a>
                  ),
                  code: ({ children, className }) => {
                    const isBlock = className?.includes("language-");
                    return isBlock ? (
                      <code className={className}>{children}</code>
                    ) : (
                      <code className="bg-[#14422d]/10 text-[#14422d] px-1.5 py-0.5 text-[13px] font-mono rounded border border-[#14422d]/20">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-[#0B2818] border-l-2 border-[#fec567] p-6 my-8 overflow-x-auto text-[13px] leading-relaxed rounded-lg">
                      {children}
                    </pre>
                  ),
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto">
                      <table className="w-full text-sm border-collapse border border-[#e4e3d4]">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-[#f5f4e5]">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="border border-[#e4e3d4] px-4 py-3 text-left text-[11px] uppercase tracking-wider font-bold text-[#414943]">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-[#e4e3d4] px-4 py-3 text-[14px] text-[#414943]">
                      {children}
                    </td>
                  ),
                  img: ({ src, alt }) => (
                    <img src={src} alt={alt} className="w-full my-10 object-cover rounded-2xl" />
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-14 pt-10 border-t border-[#e4e3d4] flex flex-wrap gap-2">
              {articleTags.map((tag) => (
                <button
                  key={tag}
                  className="px-3.5 py-1.5 text-[9px] uppercase tracking-[0.25em] font-bold border border-[#e4e3d4] text-[#c0c9c1] hover:border-[#14422d]/30 hover:text-[#14422d] hover:bg-[#14422d]/5 transition-all rounded-full"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Author card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 border border-[#e4e3d4] bg-[#f5f4e5] p-7 flex items-start gap-5 rounded-2xl"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#14422d]/10 border border-[#14422d]/20 flex items-center justify-center text-sm font-black text-[#14422d]">
                {authorInitials}
              </div>
              <div>
                <p className="text-[15px] font-black text-[#1b1c13] mb-0.5">
                  {authorName}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c0c9c1] mb-3 font-bold">
                  Contributor
                </p>
                <p className="text-[14px] leading-[1.7] text-[#414943] font-light">
                  {article.author.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="px-6 lg:px-7 py-14 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto scrollbar-hide"
          >
            {/* Progress */}
            <div className="mb-8 bg-[#f5f4e5] border border-[#e4e3d4] p-5 rounded-xl">
              <p className="text-[9px] uppercase tracking-[0.45em] text-[#c0c9c1] font-bold mb-3">
                Progress
              </p>
              <div className="h-1 bg-[#e4e3d4] overflow-hidden rounded-full mb-2">
                <div
                  className="h-full bg-[#14422d] transition-none rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-black text-[#14422d]">
                  {Math.round(progress)}%
                </p>
                <p className="text-[10px] text-[#c0c9c1]">{readTime}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="mb-8 border border-[#e4e3d4] p-5 rounded-xl">
              <p className="text-[9px] uppercase tracking-[0.45em] text-[#c0c9c1] font-bold mb-4">
                About
              </p>
              <div className="space-y-3.5">
                {[
                  { label: "Author", val: authorName },
                  { label: "Published", val: formattedDate },
                  { label: "Read time", val: readTime },
                  { label: "Category", val: article.category },
                  { label: "Series", val: article.series },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between items-start gap-3">
                    <span className="text-[10px] text-[#c0c9c1] uppercase tracking-widest shrink-0">
                      {label}
                    </span>
                    <span className="text-[11px] text-[#414943] font-bold text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mb-8">
              <p className="text-[9px] uppercase tracking-[0.45em] text-[#c0c9c1] font-bold mb-3">
                Share
              </p>
              <div className="flex flex-col gap-1.5">
                {["copy", "twitter", "linkedin"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleShare(type)}
                    className="group flex items-center gap-3 px-4 py-2.5 border border-[#e4e3d4] hover:border-[#14422d]/30 hover:bg-[#14422d]/5 transition-all text-left rounded-lg"
                  >
                    <span className="text-[#c0c9c1] group-hover:text-[#14422d] transition-colors">
                      {SHARE_ICONS[type]}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c0c9c1] group-hover:text-[#14422d] font-bold transition-colors">
                      {type === "copy" && copied
                        ? "Copied!"
                        : type === "copy"
                        ? "Copy link"
                        : type === "twitter"
                        ? "Twitter / X"
                        : "LinkedIn"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#e4e3d4] mb-8" />

            {/* Read next */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.45em] text-[#c0c9c1] font-bold mb-4">
                Read Next
              </p>
              <div className="flex flex-col">
                {relatedMini.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => router.push(`/blog/${item.slug}`)}
                    className="group flex items-start gap-3.5 py-4 border-b border-[#e4e3d4] last:border-0 hover:bg-[#f5f4e5] -mx-2 px-2 transition-colors text-left rounded-lg"
                  >
                    <div className="w-14 h-14 shrink-0 overflow-hidden bg-[#e4e3d4] rounded-xl">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-[#7e5700] font-bold mb-1">
                        {item.tags?.[0] || "Article"}
                      </p>
                      <p className="text-[12px] font-bold leading-[1.35] text-[#414943] group-hover:text-[#1b1c13] line-clamp-2 transition-colors">
                        {item.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 bg-[#14422d] p-6 relative overflow-hidden rounded-2xl">
              <div className="absolute -top-8 -right-8 w-24 h-24 border border-[#fec567]/10 rounded-full pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border border-[#fec567]/15 rounded-full pointer-events-none" />
              <p className="text-white/30 text-[9px] uppercase tracking-[0.45em] mb-2 font-bold">
                Explore
              </p>
              <p className="text-white font-black text-base leading-tight mb-5">
                More from the Journal
              </p>
              <button
                onClick={() => router.push("/blog")}
                className="group inline-flex items-center gap-2 bg-[#fec567] hover:bg-[#fec567]/90 text-[#1b1c13] text-[10px] uppercase tracking-[0.3em] font-bold px-5 py-2.5 transition-colors rounded-full"
              >
                View All
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* ── Related Cards ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20"
      >
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#c0c9c1] font-bold mb-2">
              Continue reading
            </p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] text-[#1b1c13]">
              More from the journal
            </h2>
          </div>
          <button
            onClick={() => router.push("/blog")}
            className="group text-[10px] uppercase tracking-[0.3em] font-bold text-[#c0c9c1] hover:text-[#14422d] transition-colors flex items-center gap-2"
          >
            View all
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedCards.map((card) => (
            <motion.button
              key={card.slug}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              onClick={() => router.push(`/blog/${card.slug}`)}
              className="group text-left border border-[#e4e3d4] hover:border-[#14422d]/30 hover:shadow-sm hover:shadow-[#14422d]/5 transition-all overflow-hidden rounded-2xl bg-[#f5f4e5]"
            >
              <div className="relative h-44 overflow-hidden bg-[#e4e3d4]">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#14422d] transition-all duration-500" />
              </div>
              <div className="p-5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#7e5700] font-bold mb-2">
                  {card.tags?.[0] || "Article"}
                </p>
                <p className="text-[15px] font-black leading-[1.25] tracking-tight text-[#414943] group-hover:text-[#14422d] transition-colors line-clamp-2 mb-3">
                  {card.title}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#c0c9c1] font-bold">
                  {card.readingTime} min ·{" "}
                  {new Date(card.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ── Newsletter ── */}
      <div className="bg-[#fbfaeb] border-t border-[#e4e3d4]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-14 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.5em] text-[#7e5700] font-bold mb-3">
              Stay updated
            </p>
            <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] text-[#1b1c13]">
              Industry insights, direct to inbox.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              type="email"
              className="flex-1 sm:w-64 border border-[#c0c9c1] bg-[#f5f4e5] px-4 py-3 text-[14px] text-[#1b1c13] outline-none placeholder:text-[#c0c9c1] focus:border-[#14422d] focus:ring-1 focus:ring-[#14422d]/10 transition-all font-sans rounded-l-full rounded-r-none"
              placeholder="your@email.com"
            />
            <button className="shrink-0 bg-[#14422d] hover:bg-[#0f3122] px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-white font-bold transition-colors rounded-r-full rounded-l-none">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}