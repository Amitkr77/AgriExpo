// blogData.ts — Shared blog data for both Journal and BlogDetail components
// Export the BLOG_DATA array so both components can import it

export type BlogContent = {
  html: string;
  markdown: string;
  plainText: string;
};

export type ImageData = {
  url: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type Author = {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  email: string;
  website: string;
  socials: { twitter?: string; linkedin?: string; github?: string };
};

export type Blog = {
  id: string;
  status: string;
  visibility: string;
  featured: boolean;
  pinned: boolean;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  content: BlogContent;
  tableOfContents: { id: string; title: string; level: number }[];
  coverImage: ImageData;
  galleryImages: ImageData[];
  video?: { url: string; thumbnail: string; duration: number };
  author: Author;
  coAuthors: Author[];
  category: { id: string; name: string; slug: string };
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl: string;
    openGraph: { title: string; description: string; image: string; url: string; type: string };
    twitterCard: { card: string; title: string; description: string; image: string };
    robots: { index: boolean; follow: boolean };
  };
  reading: { readingTimeMinutes: number; wordCount: number; language: string };
  publishing: { publishedAt: string; scheduledAt: string | null; updatedAt: string; createdAt: string };
  engagement: { likes: number; views: number; shares: number; commentsEnabled: boolean };
  relatedPosts: { id: string; title: string; slug: string }[];
  attachments: { name: string; url: string; type: string }[];
  customFields: { difficultyLevel: string; estimatedCompletion: string; series: string };
  analytics: { utmCampaign: string; trackingId: string };
  settings: {
    allowComments: boolean;
    allowSharing: boolean;
    showAuthor: boolean;
    showPublishedDate: boolean;
    showReadingTime: boolean;
  };
};

// ─── Paste the full BLOG_DATA array from Journal.tsx here ────────────────────
// This keeps data in one place, both components import from here

export const BLOG_DATA: Blog[] = [
  // ... paste all 10 blog objects here (same as in Journal.tsx BLOG_DATA)
  // This avoids duplication across files
];