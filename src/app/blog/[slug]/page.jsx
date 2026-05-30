// app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import blogDataJson from '@/app/data/blogData.json';

export async function generateStaticParams() {
  return blogDataJson.blogPosts.map(p => ({
    slug: p.blogPost.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = blogDataJson.blogPosts.map(p => p.blogPost);
  const post = posts.find(p => p.slug === slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.join(', '),
    openGraph: {
      title: post.seo?.openGraph?.title || post.title,
      description: post.seo?.openGraph?.description || post.excerpt,
      images: post.seo?.openGraph?.image ? [post.seo.openGraph.image] : [post.coverImage?.url],
      url: post.seo?.openGraph?.url,
      type: 'article',
    },
    twitter: {
      card: post.seo?.twitterCard?.card || 'summary_large_image',
      title: post.seo?.twitterCard?.title || post.title,
      description: post.seo?.twitterCard?.description || post.excerpt,
      images: post.seo?.twitterCard?.image ? [post.seo.twitterCard.image] : [post.coverImage?.url],
    },
  };
}

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const getInitials = (name) =>
  name?.split(' ').map(w => w[0] || '').join('').slice(0, 2).toUpperCase() || 'SG';

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const posts = blogDataJson.blogPosts.map(p => p.blogPost);
  const post = posts.find(p => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map(rp => posts.find(p => p.slug === rp.slug)).filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-[#fbfaeb] font-sans text-[#1b1c13] pt-20 sm:pt-10 md:pt-15 lg:pt-20">

      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden">
        {/* Background Image Layer */}
        {post.coverImage?.url && (
          <div className="absolute inset-0">
            <img
              src={post.coverImage.url}
              alt={post.coverImage.alt || post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2818]/90 via-[#0B2818]/60 to-[#0B2818]/30" />
          </div>
        )}

        {/* If no cover image, use solid gradient */}
        {!post.coverImage?.url && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#14422d] via-[#1a5438] to-[#0B2818]" />
        )}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20">



          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mb-4 sm:mb-5 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="inline-block rounded-full border border-[#fec567]/30 bg-[#fec567]/10 px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-[#fec567]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="mb-4 sm:mb-5 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-black leading-[1.05] tracking-[-0.03em] text-white">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="mb-6 sm:mb-8 text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-white/60 max-w-2xl font-light">
              {post.subtitle}
            </p>
          )}

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {/* Author Avatar */}
            {post.author && (
              <div className="flex items-center gap-2.5">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-white/20 object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#fec567]/20 border border-[#fec567]/30 text-[10px] font-bold text-[#fec567]">
                    {getInitials(post.author.name)}
                  </div>
                )}
                <span className="text-[11px] sm:text-[12px] font-bold text-white/80">
                  {post.author.name}
                </span>
              </div>
            )}

            <span className="h-0.5 w-0.5 rounded-full bg-white/30" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
              {formatDate(post.publishing?.publishedAt)}
            </span>

            <span className="h-0.5 w-0.5 rounded-full bg-white/30" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
              {post.reading?.readingTimeMinutes} min read
            </span>

            {post.category?.name && (
              <>
                <span className="h-0.5 w-0.5 rounded-full bg-white/30" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                  {post.category.name}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 bg-[#fbfaeb] rounded-t-[2.5rem] sm:rounded-t-[3rem]" />
        
      </header>

      {/* ══════════════════════════════════════════════════════════════
          MAIN CONTENT LAYOUT
      ══════════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 pb-16 sm:pb-20 md:pb-24">
                  {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8 flex items-center gap-2 flex-wrap">
            <Link
              href="/"
              className="text-[12px] sm:text-[16px] font-bold uppercase tracking-[0.2em] text-blue-600/50 hover:text-blue-700/70 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-blue-700/50 text-[12px]">/</span>
            <Link
              href="/blog"
              className="text-[12px] sm:text-[16px] font-bold uppercase tracking-[0.2em] text-blue-600/50 hover:text-blue-700/70 transition-colors duration-200"
            >
              Blog
            </Link>
            <span className="text-blue-700/50 text-[12px]">/</span>
            <span className="text-[12px] sm:text-[16px] font-bold uppercase tracking-[0.2em] text-blue-600/50 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 -mt-2">

          {/* ── SIDEBAR ── */}
          <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Table of Contents */}
              {post.tableOfContents?.length > 0 && (
                <div className="rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-6">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="h-px w-5 bg-[#14422d]" />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                      Contents
                    </h3>
                  </div>
                  <nav>
                    <ul className="space-y-1">
                      {post.tableOfContents.map(item => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="group flex items-start gap-2 rounded-xl px-3 py-2 text-[12px] sm:text-[13px] font-medium text-[#414943] transition-all duration-200 hover:bg-[#fbfaeb] hover:text-[#14422d]"
                            style={{ paddingLeft: `${12 + (item.level - 1) * 12}px` }}
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#c0c9c1] group-hover:bg-[#14422d] transition-colors" />
                            <span className="leading-[1.4]">{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Category & Meta */}
              <div className="rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-6 space-y-4">
                {post.category?.name && (
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c0c9c1] mb-1">Category</p>
                    <p className="text-[13px] font-bold text-[#14422d]">{post.category.name}</p>
                  </div>
                )}

                {post.reading?.wordCount && (
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c0c9c1] mb-1">Word Count</p>
                    <p className="text-[13px] font-bold text-[#414943]">{post.reading.wordCount.toLocaleString()}</p>
                  </div>
                )}

                {post.reading?.language && (
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#c0c9c1] mb-1">Language</p>
                    <p className="text-[13px] font-bold text-[#414943]">{post.reading.language.toUpperCase()}</p>
                  </div>
                )}

                {post.featured && (
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#fec567] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7e5700]">Featured Post</span>
                  </div>
                )}
              </div>

              {/* Back to Blog */}
              <Link
                href="/blog"
                className="group flex items-center gap-2.5 rounded-full border border-[#e4e3d4] bg-[#f5f4e5] px-5 py-3 transition-all duration-200 hover:border-[#14422d]/30 hover:bg-white"
              >
                <svg className="h-3.5 w-3.5 text-[#c0c9c1] group-hover:text-[#14422d] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#414943] group-hover:text-[#14422d] transition-colors">
                  All Articles
                </span>
              </Link>
            </div>
          </aside>

          {/* ── ARTICLE BODY ── */}
          <article className="flex-1 order-1 lg:order-2 min-w-0">

            {/* Cover Image (if not already shown in hero) */}
            {post.coverImage?.url && (
              <figure className="mb-8 sm:mb-10 overflow-hidden rounded-[2rem] border border-[#e4e3d4]">
                <img
                  src={post.coverImage.url}
                  alt={post.coverImage.alt || post.title}
                  className="w-full object-cover max-h-[480px]"
                />
                {post.coverImage.caption && (
                  <figcaption className="border-t border-[#e4e3d4] bg-[#f5f4e5] px-5 py-3 text-[11px] font-medium text-[#414943]">
                    {post.coverImage.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <div className="mb-8 sm:mb-10 rounded-[1.5rem] border-l-4 border-[#14422d] bg-[#f5f4e5] px-5 sm:px-6 py-4 sm:py-5">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] text-[#414943] font-medium italic">
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* ── HTML Content ── */}
            {post.content?.html && (
              <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
                className="blog-content prose-custom"
              />
            )}

            {/* ── Video Section ── */}
            {/* {post.video?.url && (
              <section className="mt-10 sm:mt-12 rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Featured Video
                  </h2>
                </div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <iframe
                    src={post.video.url.replace('watch?v=', 'embed/')}
                    className="w-full aspect-video border-0"
                    allowFullScreen
                  />
                </div>
              </section>
            )} */}

            {/* ── Gallery ── */}
            {post.galleryImages?.length > 0 && (
              <section className="mt-10 sm:mt-12">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Gallery
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {post.galleryImages.map((img, i) => (
                    <figure
                      key={i}
                      className="group overflow-hidden rounded-[1.5rem] border border-[#e4e3d4] bg-[#f5f4e5]"
                    >
                      <img
                        src={img.url}
                        alt={img.alt || `Gallery image ${i + 1}`}
                        className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {img.caption && (
                        <figcaption className="border-t border-[#e4e3d4] px-4 py-2.5 text-[11px] font-medium text-[#414943]">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* ── Author Card ── */}
            {post.author && (
              <section className="mt-10 sm:mt-12 rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-5 sm:p-7">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Written by
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full border-2 border-[#e4e3d4] object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-[#14422d] text-[18px] sm:text-[20px] font-black text-white/60">
                      {getInitials(post.author.name)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="mb-1.5 text-[16px] sm:text-[18px] font-extrabold tracking-[-0.01em] text-[#1b1c13]">
                      {post.author.name}
                    </h3>
                    {post.author.bio && (
                      <p className="mb-3 text-[13px] sm:text-[14px] leading-[1.7] text-[#414943]">
                        {post.author.bio}
                      </p>
                    )}
                    {post.author.email && (
                      <p className="mb-2 text-[12px] text-[#414943]">
                        <span className="font-bold text-[#c0c9c1]">Email: </span>
                        <a href={`mailto:${post.author.email}`} className="text-[#14422d] hover:underline">
                          {post.author.email}
                        </a>
                      </p>
                    )}
                    {/* <div className="flex flex-wrap gap-2 mt-3">
                      {post.author.website && (
                        <a
                          href={post.author.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#e4e3d4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#414943] hover:border-[#14422d]/30 hover:text-[#14422d] transition-all"
                        >
                          Website
                        </a>
                      )}
                      {post.author.socials?.twitter && (
                        <a
                          href={post.author.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#e4e3d4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#414943] hover:border-[#14422d]/30 hover:text-[#14422d] transition-all"
                        >
                          Twitter
                        </a>
                      )}
                      {post.author.socials?.linkedin && (
                        <a
                          href={post.author.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#e4e3d4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#414943] hover:border-[#14422d]/30 hover:text-[#14422d] transition-all"
                        >
                          LinkedIn
                        </a>
                      )}
                      {post.author.socials?.github && (
                        <a
                          href={post.author.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#e4e3d4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#414943] hover:border-[#14422d]/30 hover:text-[#14422d] transition-all"
                        >
                          GitHub
                        </a>
                      )}
                    </div> */}
                  </div>
                </div>
              </section>
            )}

            {/* ── Tags ── */}
            {post.tags?.length > 0 && (
              <section className="mt-10 sm:mt-12 rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Tags
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#fec567]/30 bg-[#fec567]/10 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#7e5700] transition-colors hover:bg-[#fec567]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* ── Attachments ── 
            {post.attachments?.length > 0 && (
              <section className="mt-10 sm:mt-12 rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Attachments
                  </h2>
                </div>
                <div className="space-y-2">
                  {post.attachments.map((att, i) => (
                    <a
                      key={i}
                      href={att.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-[#e4e3d4] bg-[#fbfaeb] px-4 py-3 transition-all hover:border-[#14422d]/30 hover:bg-white"
                    >
                      <svg className="h-4 w-4 text-[#c0c9c1] group-hover:text-[#14422d] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-[12px] sm:text-[13px] font-medium text-[#414943] group-hover:text-[#14422d] transition-colors">
                        {att.name}
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            )}*/}

            {/* ── Custom Fields ── */}
            {post.customFields && (
              <section className="mt-10 sm:mt-12 rounded-[2rem] border border-[#e4e3d4] bg-[#f5f4e5] p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Additional Info
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {post.customFields.difficultyLevel && (
                    <div className="rounded-xl border border-[#e4e3d4] bg-[#fbfaeb] px-4 py-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c0c9c1] mb-0.5">Difficulty</p>
                      <p className="text-[13px] font-bold text-[#414943]">{post.customFields.difficultyLevel}</p>
                    </div>
                  )}
                  {post.customFields.estimatedCompletion && (
                    <div className="rounded-xl border border-[#e4e3d4] bg-[#fbfaeb] px-4 py-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c0c9c1] mb-0.5">Est. Completion</p>
                      <p className="text-[13px] font-bold text-[#414943]">{post.customFields.estimatedCompletion}</p>
                    </div>
                  )}
                  {post.customFields.series && (
                    <div className="rounded-xl border border-[#e4e3d4] bg-[#fbfaeb] px-4 py-3 sm:col-span-2">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c0c9c1] mb-0.5">Series</p>
                      <p className="text-[13px] font-bold text-[#414943]">{post.customFields.series}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ── Related Posts ── */}
            {relatedPosts.length > 0 && (
              <section className="mt-10 sm:mt-12">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="h-px w-5 bg-[#14422d]" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#414943]">
                    Related Articles
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedPosts.map(rp => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="group flex items-start gap-4 rounded-[1.5rem] border border-[#e4e3d4] bg-[#f5f4e5] p-4 sm:p-5 transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-[#14422d]/[0.04]"
                    >
                      {rp.coverImage?.url && (
                        <img
                          src={rp.coverImage.url}
                          alt={rp.title}
                          className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-xl object-cover"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        {rp.tags?.[0] && (
                          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7e5700]">
                            {rp.tags[0]}
                          </p>
                        )}
                        <p className="text-[13px] sm:text-[14px] font-extrabold leading-[1.3] tracking-[-0.01em] text-[#414943] group-hover:text-[#14422d] transition-colors line-clamp-2">
                          {rp.title}
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#c0c9c1]">
                          {rp.reading?.readingTimeMinutes} min read
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </article>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM CTA BAR
      ══════════════════════════════════════════════════════════════ */}
      <div className="border-t border-[#e4e3d4] bg-[#14422d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#fec567]/60">
                Keep Reading
              </p>
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-black tracking-[-0.02em] text-white leading-[1.15]">
                Explore more industry insights.
              </h3>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-2.5 rounded-full bg-white px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#14422d] transition-all hover:bg-[#fec567] hover:text-[#281900]"
            >
              Browse All Articles
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          GLOBAL STYLES FOR blog-content HTML
      ══════════════════════════════════════════════════════════════ */}
      <style>{`
        .blog-content {
          line-height: 1.85;
          color: #414943;
          font-size: 15px;
        }

        @media (min-width: 640px) {
          .blog-content {
            font-size: 16px;
          }
        }

        .blog-content h1 {
          font-size: 2rem;
          font-weight: 900;
          color: #1b1c13;
          margin-top: 2.5em;
          margin-bottom: 0.6em;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .blog-content h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #14422d;
          margin-top: 2.2em;
          margin-bottom: 0.5em;
          letter-spacing: -0.02em;
          line-height: 1.2;
          padding-bottom: 0.4em;
          border-bottom: 1px solid #e4e3d4;
        }

        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1b1c13;
          margin-top: 1.8em;
          margin-bottom: 0.4em;
          letter-spacing: -0.015em;
          line-height: 1.3;
        }

        .blog-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #414943;
          margin-top: 1.5em;
          margin-bottom: 0.3em;
        }

        .blog-content p {
          margin-bottom: 1.4em;
          color: #414943;
        }

        .blog-content a {
          color: #14422d;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: #14422d40;
          text-underline-offset: 3px;
          transition: all 0.2s;
        }

        .blog-content a:hover {
          color: #0f3122;
          text-decoration-color: #14422d;
        }

        .blog-content strong {
          font-weight: 700;
          color: #1b1c13;
        }

        .blog-content em {
          color: #414943;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1.4em;
          padding-left: 1.5em;
        }

        .blog-content ul {
          list-style: none;
        }

        .blog-content ul li {
          position: relative;
          padding-left: 1em;
          margin-bottom: 0.5em;
        }

        .blog-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #14422d;
        }

        .blog-content ol li {
          margin-bottom: 0.5em;
        }

        .blog-content ol li::marker {
          color: #14422d;
          font-weight: 700;
        }

        .blog-content blockquote {
          border-left: 4px solid #14422d;
          background: #f5f4e5;
          padding: 1.2em 1.5em;
          margin: 1.8em 0;
          border-radius: 0 1rem 1rem 0;
          font-style: italic;
          color: #414943;
        }

        .blog-content blockquote p {
          margin-bottom: 0;
        }

        .blog-content img {
          max-width: 100%;
          border-radius: 1.5rem;
          border: 1px solid #e4e3d4;
          margin: 1.5em 0;
        }

        .blog-content pre {
          background: #1b1c13;
          color: #e4e3d4;
          padding: 1.2em 1.5em;
          border-radius: 1rem;
          overflow-x: auto;
          margin: 1.5em 0;
          font-size: 0.88em;
          line-height: 1.6;
        }

        .blog-content code {
          background: #f5f4e5;
          border: 1px solid #e4e3d4;
          padding: 0.15em 0.4em;
          border-radius: 0.4em;
          font-size: 0.88em;
          color: #14422d;
          font-weight: 600;
        }

        .blog-content pre code {
          background: none;
          border: none;
          padding: 0;
          color: inherit;
          font-weight: 400;
        }

        .blog-content hr {
          border: none;
          border-top: 1px solid #e4e3d4;
          margin: 2.5em 0;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5em 0;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e4e3d4;
        }

        .blog-content th {
          background: #14422d;
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.8em 1em;
          text-align: left;
        }

        .blog-content td {
          padding: 0.7em 1em;
          border-bottom: 1px solid #e4e3d4;
          font-size: 0.92rem;
          color: #414943;
        }

        .blog-content tr:nth-child(even) {
          background: #f5f4e5;
        }

        .blog-content tr:last-child td {
          border-bottom: none;
        }

        .blog-content figure {
          margin: 1.8em 0;
        }

        .blog-content figcaption {
          margin-top: 0.5em;
          font-size: 0.85rem;
          color: #c0c9c1;
          text-align: center;
        }

        /* Smooth scroll for TOC links */
        html {
          scroll-behavior: smooth;
        }

        /* Scrollbar for sidebar TOC area */
        .blog-content::-webkit-scrollbar {
          width: 4px;
        }
        .blog-content::-webkit-scrollbar-thumb {
          background: #e4e3d4;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}