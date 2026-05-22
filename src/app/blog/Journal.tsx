import { useMemo, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

type BlogContent = {
  html: string;
  markdown: string;
  plainText: string;
};

type TOCItem = {
  id: string;
  title: string;
  level: number;
};

type ImageData = {
  url: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

type Author = {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  email: string;
  website: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

type SEO = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  };
  twitterCard: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
};

type Blog = {
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
  tableOfContents: TOCItem[];
  coverImage: ImageData;
  galleryImages: ImageData[];
  video?: {
    url: string;
    thumbnail: string;
    duration: number;
  };
  author: Author;
  coAuthors: Author[];
  category: {
    id: string;
    name: string;
    slug: string;
  };
  tags: string[];
  seo: SEO;
  reading: {
    readingTimeMinutes: number;
    wordCount: number;
    language: string;
  };
  publishing: {
    publishedAt: string;
    scheduledAt: string | null;
    updatedAt: string;
    createdAt: string;
  };
  engagement: {
    likes: number;
    views: number;
    shares: number;
    commentsEnabled: boolean;
  };
  relatedPosts: {
    id: string;
    title: string;
    slug: string;
  }[];
  attachments: {
    name: string;
    url: string;
    type: string;
  }[];
  customFields: {
    difficultyLevel: string;
    estimatedCompletion: string;
    series: string;
  };
  analytics: {
    utmCampaign: string;
    trackingId: string;
  };
  settings: {
    allowComments: boolean;
    allowSharing: boolean;
    showAuthor: boolean;
    showPublishedDate: boolean;
    showReadingTime: boolean;
  };
};

// ─── Static Blog Data ────────────────────────────────────────────────────────

const BLOG_DATA: Blog[] = [
  {
    id: "3f92f2e7-8b6c-4f5a-a6df-71b3e8c2d9f4",
    status: "draft",
    visibility: "public",
    featured: true,
    pinned: false,
    title: "Bulk Onion Powder Supplier in India: What Global Buyers Should Know",
    subtitle: "A complete sourcing guide for importers, food brands, wholesalers, and private label buyers looking for reliable onion powder suppliers in India",
    slug: "bulk-onion-powder-supplier-india-global-buyers-guide",
    excerpt: "Discover how global food buyers can source high-quality bulk onion powder from India. Learn about manufacturing standards, export certifications, pricing factors, packaging, private labeling, and how to choose the right supplier.",
    content: {
      html: "",
      markdown: "# Bulk Onion Powder Supplier in India: What Global Buyers Should Know\n\n## Introduction\n\nIndia has become one of the leading global suppliers of dehydrated onion products...",
      plainText: ""
    },
    tableOfContents: [
      { id: "introduction", title: "Introduction", level: 1 },
      { id: "why-india-is-a-leading-onion-powder-exporter", title: "Why India Is a Leading Onion Powder Exporter", level: 2 }
    ],
    coverImage: {
      url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
      alt: "Bulk onion powder manufacturing and export facility in India",
      caption: "India is one of the leading exporters of dehydrated onion powder worldwide",
      width: 1200,
      height: 630
    },
    galleryImages: [],
    author: {
      id: "author-priya-sharma",
      name: "Priya Sharma",
      username: "priyasharmafoods",
      bio: "Food processing industry analyst and B2B export content strategist.",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      email: "priya@foodexportinsights.com",
      website: "https://foodexportinsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-processing", name: "Food Processing", slug: "food-processing" },
    tags: ["onion powder", "bulk onion powder supplier", "dehydrated onion powder", "food ingredient suppliers"],
    seo: {
      metaTitle: "Bulk Onion Powder Supplier in India: Complete Guide for Global Buyers",
      metaDescription: "Learn how to source premium-quality bulk onion powder from India.",
      keywords: ["bulk onion powder supplier india"],
      canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 11, wordCount: 2320, language: "en" },
    publishing: {
      publishedAt: "2026-05-22T10:00:00Z",
      scheduledAt: null,
      updatedAt: "2026-05-22T10:00:00Z",
      createdAt: "2026-05-22T09:10:00Z"
    },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [],
    attachments: [],
    customFields: { difficultyLevel: "Beginner to Intermediate", estimatedCompletion: "25 minutes", series: "Global Food Ingredient Sourcing Series" },
    analytics: { utmCampaign: "onion-powder-export-guide", trackingId: "GA-FOOD-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "5e2c4f17-6c88-4f1d-a6e7-9c0d1a7b3e25",
    status: "draft",
    visibility: "public",
    featured: true,
    pinned: false,
    title: "Spray Dried vs Dehydrated Fruit Powders: Which Is Better?",
    subtitle: "A complete comparison of manufacturing methods, nutrition, shelf life, applications, and sourcing considerations",
    slug: "spray-dried-vs-dehydrated-fruit-powders",
    excerpt: "Discover the key differences between spray dried and dehydrated fruit powders. Learn how each process affects flavor, nutrition, texture, shelf life, cost, and industrial applications.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1514996937319-344454492b37",
      alt: "Comparison of spray dried and dehydrated fruit powders",
      caption: "Understanding the differences between spray dried and dehydrated fruit powders",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-ananya-mehta", name: "Ananya Mehta", username: "ananyamehtafoods",
      bio: "Food ingredient industry researcher.", avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      email: "ananya@ingredientinsights.com", website: "https://ingredientinsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-ingredients", name: "Food Ingredients", slug: "food-ingredients" },
    tags: ["spray dried fruit powder", "dehydrated fruit powder", "fruit powder manufacturing", "food ingredients"],
    seo: {
      metaTitle: "Spray Dried vs Dehydrated Fruit Powders: Complete Comparison Guide",
      metaDescription: "Learn the differences between spray dried and dehydrated fruit powders.",
      keywords: ["spray dried fruit powder"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 10, wordCount: 2180, language: "en" },
    publishing: { publishedAt: "2026-05-23T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-23T10:00:00Z", createdAt: "2026-05-22T09:45:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Beginner to Intermediate", estimatedCompletion: "22 minutes", series: "Food Ingredient Manufacturing Series" },
    analytics: { utmCampaign: "fruit-powder-comparison-guide", trackingId: "GA-FOODTECH-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "9b1d4c7f-3f2e-48b7-8f1a-c7d6a5e2f914",
    status: "draft",
    visibility: "public",
    featured: false,
    pinned: false,
    title: "How Food Manufacturers Use Tomato Powder in Ready-to-Eat Products",
    subtitle: "Exploring the growing role of tomato powder in instant foods, snack manufacturing, meal kits, soups, sauces, and convenience food innovation",
    slug: "how-food-manufacturers-use-tomato-powder-ready-to-eat-products",
    excerpt: "Learn how food manufacturers use tomato powder in ready-to-eat products for flavor enhancement, natural coloring, shelf stability, cost efficiency, and clean-label formulations.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1547592180-85f173990554",
      alt: "Tomato powder used in ready-to-eat food manufacturing",
      caption: "Tomato powder plays a major role in modern convenience food production",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-rhea-kapoor", name: "Rhea Kapoor", username: "rheakapoorfoods",
      bio: "Food industry content strategist.", avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      email: "rhea@foodmanufacturinginsights.com", website: "https://foodmanufacturinginsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-manufacturing", name: "Food Manufacturing", slug: "food-manufacturing" },
    tags: ["tomato powder", "ready-to-eat foods", "food manufacturing", "clean label ingredients"],
    seo: {
      metaTitle: "How Food Manufacturers Use Tomato Powder in Ready-to-Eat Products",
      metaDescription: "Discover how tomato powder is used in ready-to-eat foods.",
      keywords: ["tomato powder"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 10, wordCount: 2145, language: "en" },
    publishing: { publishedAt: "2026-05-24T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-24T10:00:00Z", createdAt: "2026-05-22T10:05:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Beginner to Intermediate", estimatedCompletion: "20 minutes", series: "Food Ingredient Applications Series" },
    analytics: { utmCampaign: "tomato-powder-rte-foods", trackingId: "GA-FOODMANUFACTURING-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "7c5e3a91-9d44-4a6e-b8f3-2e9a7f1d5c84",
    status: "draft",
    visibility: "public",
    featured: true,
    pinned: false,
    title: "Top Applications of Beetroot Powder in Nutraceutical Products",
    subtitle: "How nutraceutical brands use beetroot powder in supplements, functional foods, sports nutrition, wellness products",
    slug: "top-applications-beetroot-powder-nutraceutical-products",
    excerpt: "Discover the top applications of beetroot powder in nutraceutical products including sports nutrition, heart health supplements, detox blends, functional beverages.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      alt: "Beetroot powder used in nutraceutical supplements",
      caption: "Beetroot powder is widely used in sports nutrition and wellness formulations",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-neha-verma", name: "Neha Verma", username: "nehavermawellness",
      bio: "Nutraceutical industry writer.", avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      email: "neha@wellnessingredientinsights.com", website: "https://wellnessingredientinsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "nutraceuticals", name: "Nutraceuticals", slug: "nutraceuticals" },
    tags: ["beetroot powder", "nutraceutical products", "sports nutrition", "functional beverages"],
    seo: {
      metaTitle: "Top Applications of Beetroot Powder in Nutraceutical Products",
      metaDescription: "Explore how beetroot powder is used in nutraceutical products.",
      keywords: ["beetroot powder"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 11, wordCount: 2285, language: "en" },
    publishing: { publishedAt: "2026-05-25T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-25T10:00:00Z", createdAt: "2026-05-22T10:20:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Beginner to Intermediate", estimatedCompletion: "24 minutes", series: "Nutraceutical Ingredient Applications Series" },
    analytics: { utmCampaign: "beetroot-powder-nutraceuticals", trackingId: "GA-NUTRA-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "2d7f4b18-6a91-4d5c-8c22-9f4a6e1b7c35",
    status: "draft",
    visibility: "public",
    featured: false,
    pinned: false,
    title: "How to Import Fruit Powders from India: Complete Buyer Guide",
    subtitle: "A comprehensive guide for global buyers sourcing spray dried and dehydrated fruit powders from Indian manufacturers",
    slug: "how-to-import-fruit-powders-from-india-complete-buyer-guide",
    excerpt: "Learn how to import fruit powders from India with this complete buyer guide covering supplier selection, certifications, documentation, logistics, quality standards.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
      alt: "Fruit powder export packaging and global shipping from India",
      caption: "India is a major global supplier of spray dried and dehydrated fruit powders",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-aarav-mehta", name: "Aarav Mehta", username: "aaravmehtaexports",
      bio: "Food ingredient export consultant.", avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      email: "aarav@globalfoodexportinsights.com", website: "https://globalfoodexportinsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-ingredient-export", name: "Food Ingredient Export", slug: "food-ingredient-export" },
    tags: ["fruit powder import", "import fruit powders from india", "spray dried fruit powders", "food ingredient sourcing"],
    seo: {
      metaTitle: "How to Import Fruit Powders from India: Complete Buyer Guide",
      metaDescription: "Complete guide to importing fruit powders from India.",
      keywords: ["import fruit powders from india"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 13, wordCount: 2680, language: "en" },
    publishing: { publishedAt: "2026-05-26T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-26T10:00:00Z", createdAt: "2026-05-22T10:40:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Intermediate", estimatedCompletion: "28 minutes", series: "Global Food Ingredient Sourcing Series" },
    analytics: { utmCampaign: "fruit-powder-import-guide", trackingId: "GA-EXPORTS-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "8f2c6a13-3b9e-4f8b-a5d4-6e2f1c9a7b44",
    status: "draft",
    visibility: "public",
    featured: false,
    pinned: false,
    title: "Garlic Powder Manufacturing Process Explained",
    subtitle: "A complete guide to garlic powder production, dehydration methods, quality control, processing equipment",
    slug: "garlic-powder-manufacturing-process-explained",
    excerpt: "Learn how garlic powder is manufactured step by step, including raw material selection, cleaning, slicing, dehydration, grinding, quality testing, packaging.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1615477550927-6ec1d3b0f6e5",
      alt: "Industrial garlic powder manufacturing and dehydration process",
      caption: "Modern garlic powder production involves dehydration, grinding, and quality control",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-raghav-sharma", name: "Raghav Sharma", username: "raghavfoodprocessing",
      bio: "Food processing consultant.", avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      email: "raghav@foodprocessinginsights.com", website: "https://foodprocessinginsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-processing", name: "Food Processing", slug: "food-processing" },
    tags: ["garlic powder manufacturing", "garlic powder process", "dehydrated garlic powder", "food processing"],
    seo: {
      metaTitle: "Garlic Powder Manufacturing Process Explained",
      metaDescription: "Learn the complete garlic powder manufacturing process.",
      keywords: ["garlic powder manufacturing process"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 12, wordCount: 2470, language: "en" },
    publishing: { publishedAt: "2026-05-27T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-27T10:00:00Z", createdAt: "2026-05-22T11:10:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Beginner to Intermediate", estimatedCompletion: "26 minutes", series: "Dehydrated Food Ingredient Manufacturing Series" },
    analytics: { utmCampaign: "garlic-powder-manufacturing-guide", trackingId: "GA-FOODPROC-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "4b8e2d7a-91f5-4c3a-b6d8-2f7e5a1c9d63",
    status: "draft",
    visibility: "public",
    featured: false,
    pinned: false,
    title: "Why Global Beverage Brands Use Spray Dried Mango Powder",
    subtitle: "How spray dried mango powder helps beverage manufacturers improve flavor, stability, scalability",
    slug: "why-global-beverage-brands-use-spray-dried-mango-powder",
    excerpt: "Discover why global beverage brands prefer spray dried mango powder for instant drinks, smoothies, energy beverages, dairy products.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
      alt: "Spray dried mango powder used in beverage manufacturing",
      caption: "Spray dried mango powder is widely used in instant drinks and functional beverages",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-ishita-malhotra", name: "Ishita Malhotra", username: "ishitabeverageinsights",
      bio: "Food ingredient strategist and beverage industry writer.", avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      email: "ishita@beverageingredientinsights.com", website: "https://beverageingredientinsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "beverage-industry", name: "Beverage Industry", slug: "beverage-industry" },
    tags: ["spray dried mango powder", "mango powder beverages", "fruit powder ingredients", "functional beverages"],
    seo: {
      metaTitle: "Why Global Beverage Brands Use Spray Dried Mango Powder",
      metaDescription: "Learn why beverage manufacturers use spray dried mango powder.",
      keywords: ["spray dried mango powder"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 12, wordCount: 2520, language: "en" },
    publishing: { publishedAt: "2026-05-28T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-28T10:00:00Z", createdAt: "2026-05-22T11:35:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Beginner to Intermediate", estimatedCompletion: "25 minutes", series: "Beverage Ingredient Innovation Series" },
    analytics: { utmCampaign: "spray-dried-mango-powder-guide", trackingId: "GA-BEVERAGE-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "f6c2b9a1-7d3f-4e8a-92cb-5a8d4e1f7b20",
    status: "draft",
    visibility: "public",
    featured: false,
    pinned: false,
    title: "Onion Powder vs Fresh Onion: Cost, Shelf Life & Usage",
    subtitle: "A detailed comparison of onion powder and fresh onion for food manufacturers, restaurants, seasoning brands",
    slug: "onion-powder-vs-fresh-onion-cost-shelf-life-usage",
    excerpt: "Compare onion powder and fresh onion based on cost, shelf life, flavor, storage, convenience, food manufacturing applications.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1508747703725-719777637510",
      alt: "Fresh onions and onion powder comparison",
      caption: "Comparing onion powder and fresh onions for industrial food applications",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-neeraj-kapoor", name: "Neeraj Kapoor", username: "neerajfoodindustry",
      bio: "Food ingredient analyst.", avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      email: "neeraj@foodindustryinsights.com", website: "https://foodindustryinsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-ingredients", name: "Food Ingredients", slug: "food-ingredients" },
    tags: ["onion powder vs fresh onion", "onion powder benefits", "dehydrated onion powder", "food manufacturing ingredients"],
    seo: {
      metaTitle: "Onion Powder vs Fresh Onion: Cost, Shelf Life & Usage",
      metaDescription: "Compare onion powder and fresh onion.",
      keywords: ["onion powder vs fresh onion"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 13, wordCount: 2610, language: "en" },
    publishing: { publishedAt: "2026-05-29T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-29T10:00:00Z", createdAt: "2026-05-22T12:05:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Beginner", estimatedCompletion: "28 minutes", series: "Dehydrated Ingredient Comparison Series" },
    analytics: { utmCampaign: "onion-powder-vs-fresh-onion", trackingId: "GA-FOODINGREDIENTS-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "9d1c7f52-3a64-4fbb-9a8e-6c4e2d8a7f11",
    status: "draft",
    visibility: "public",
    featured: true,
    pinned: false,
    title: "Export Certifications Explained: ISO, HACCP & FSSC 22000",
    subtitle: "A complete guide to global food safety certifications for exporters, manufacturers, and international buyers",
    slug: "export-certifications-explained-iso-haccp-fssc-22000",
    excerpt: "Understand the differences between ISO 22000, HACCP, and FSSC 22000 certifications, including their benefits, requirements, audit processes.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      alt: "Food safety certification audit and compliance documentation",
      caption: "Global food safety certifications are essential for international exports",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-raghav-sharma-safety", name: "Raghav Sharma", username: "raghavfoodsafety",
      bio: "Food safety consultant.", avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      email: "raghav@foodsafetyexports.com", website: "https://foodsafetyexports.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-safety-certifications", name: "Food Safety Certifications", slug: "food-safety-certifications" },
    tags: ["ISO 22000", "HACCP", "FSSC 22000", "food safety certification", "export certifications"],
    seo: {
      metaTitle: "Export Certifications Explained: ISO, HACCP & FSSC 22000",
      metaDescription: "Learn the differences between ISO 22000, HACCP, and FSSC 22000.",
      keywords: ["ISO 22000 certification"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 14, wordCount: 2860, language: "en" },
    publishing: { publishedAt: "2026-05-30T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-30T10:00:00Z", createdAt: "2026-05-22T12:25:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Intermediate", estimatedCompletion: "32 minutes", series: "Global Food Export Compliance Series" },
    analytics: { utmCampaign: "food-export-certifications-guide", trackingId: "GA-EXPORTCERT-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  },
  {
    id: "b3d4e6f1-8c72-4f9e-a2b7-5d91c8f4e213",
    status: "draft",
    visibility: "public",
    featured: false,
    pinned: false,
    title: "Best Packaging Options for Exporting Fruit & Vegetable Powders",
    subtitle: "A complete guide to choosing moisture-resistant, food-safe, and export-ready packaging",
    slug: "best-packaging-options-exporting-fruit-vegetable-powders",
    excerpt: "Learn the best packaging solutions for exporting fruit and vegetable powders, including bulk packaging, moisture barriers, food safety compliance.",
    content: { html: "", markdown: "", plainText: "" },
    tableOfContents: [],
    coverImage: {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      alt: "Export packaging for fruit and vegetable powders",
      caption: "Proper packaging protects dehydrated powders during international shipping",
      width: 1200, height: 630
    },
    galleryImages: [],
    author: {
      id: "author-ananya-verma", name: "Ananya Verma", username: "ananyaexportpackaging",
      bio: "Food export packaging consultant.", avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      email: "ananya@exportpackaginginsights.com", website: "https://exportpackaginginsights.com",
      socials: { twitter: "", linkedin: "" }
    },
    coAuthors: [],
    category: { id: "food-export-packaging", name: "Food Export Packaging", slug: "food-export-packaging" },
    tags: ["fruit powder packaging", "vegetable powder packaging", "export packaging", "food grade packaging"],
    seo: {
      metaTitle: "Best Packaging Options for Exporting Fruit & Vegetable Powders",
      metaDescription: "Discover the best packaging solutions for exporting fruit and vegetable powders.",
      keywords: ["fruit powder packaging"], canonicalUrl: "",
      openGraph: { title: "", description: "", image: "", url: "", type: "article" },
      twitterCard: { card: "summary_large_image", title: "", description: "", image: "" },
      robots: { index: true, follow: true }
    },
    reading: { readingTimeMinutes: 15, wordCount: 3050, language: "en" },
    publishing: { publishedAt: "2026-05-31T10:00:00Z", scheduledAt: null, updatedAt: "2026-05-31T10:00:00Z", createdAt: "2026-05-22T12:40:00Z" },
    engagement: { likes: 0, views: 0, shares: 0, commentsEnabled: true },
    relatedPosts: [], attachments: [],
    customFields: { difficultyLevel: "Intermediate", estimatedCompletion: "35 minutes", series: "Global Food Export Packaging Series" },
    analytics: { utmCampaign: "powder-export-packaging-guide", trackingId: "GA-PACKAGING-2026" },
    settings: { allowComments: true, allowSharing: true, showAuthor: true, showPublishedDate: true, showReadingTime: true }
  }
];

// ─── Constants ───────────────────────────────────────────────────────────────

const CARDS_PER_PAGE = 6;

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Utilities ───────────────────────────────────────────────────────────────

const formatDate = (dateStr: string, options?: Intl.DateTimeFormatOptions) =>
  new Date(dateStr).toLocaleDateString("en-US", options ?? { month: "short", day: "numeric", year: "numeric" });

// ─── Sub-components ──────────────────────────────────────────────────────────

const Dot = () => <span className="h-0.5 w-0.5 rounded-full bg-neutral-300" />;

const ArrowUpRight = () => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
    <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-neutral-400 group-hover:text-orange-600 transition-colors" />
  </svg>
);

const BlogFeedItem = memo(({ item, index }: { item: Blog; index: number }) => (
  <motion.a
    href={`/blog/${item.slug}`}
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 + index * 0.06, duration: 0.5 }}
    className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 border-b border-neutral-100 hover:bg-white transition-all duration-200"
  >
    <span className="min-w-6 font-mono text-[10px] md:text-[11px] text-neutral-300 group-hover:text-orange-600 transition-colors duration-300">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="flex-1 min-w-0">
      <p className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-neutral-400 group-hover:text-neutral-900 truncate transition-colors duration-300">
        {item.title}
      </p>
    </div>
    <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.12em] text-orange-600 bg-orange-50 border border-orange-500/20 px-1.5 py-0.5 rounded-[1px]">
        {item.category.name}
      </span>
      <svg className="w-2.5 h-2.5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </motion.a>
));
BlogFeedItem.displayName = "BlogFeedItem";

const FeaturedCard = memo(({ blog, onClick }: { blog: Blog; onClick: (slug: string) => void }) => (
  <motion.div
    variants={scaleIn}
    onClick={() => onClick(blog.slug)}
    className="group relative h-[400px] md:h-[440px] cursor-pointer overflow-hidden border-r border-neutral-200 last:border-r-0"
  >
    <img
      src={blog.coverImage.url}
      alt={blog.coverImage.alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/80 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {blog.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mb-2 text-xl sm:text-[22px] md:text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-neutral-100 group-hover:text-orange-600 transition-colors duration-300">
        {blog.title}
      </h2>
      <p className="mb-3 text-[12px] sm:text-[13px] md:text-sm text-neutral-100 line-clamp-2">{blog.excerpt}</p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">{blog.author.name}</span>
        <Dot />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">{blog.reading.readingTimeMinutes} min read</span>
        <Dot />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-300">{formatDate(blog.publishing.publishedAt)}</span>
        <div className="ml-auto flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-neutral-200 group-hover:border-orange-500/30 group-hover:bg-orange-50 transition-all duration-300">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  </motion.div>
));
FeaturedCard.displayName = "FeaturedCard";

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Journal() {
  const [gridPage, setGridPage] = useState(0);

  const blogs = BLOG_DATA;
  const featuredBlogs = useMemo(() => blogs.filter((b) => b.featured), [blogs]);
  const nonFeaturedBlogs = useMemo(() => blogs.filter((b) => !b.featured), [blogs]);

  const allGridCards = useMemo(() => {
    const grouped = blogs.reduce<Record<string, Blog[]>>((acc, blog) => {
      const tag = blog.category.name;
      (acc[tag] ??= []).push(blog);
      return acc;
    }, {});
    return Object.entries(grouped).flatMap(([tag, items]) =>
      items.map((item) => ({ ...item, groupTag: tag }))
    );
  }, [blogs]);

  const totalPages = Math.ceil(allGridCards.length / CARDS_PER_PAGE);
  const gridCards = allGridCards.slice(gridPage * CARDS_PER_PAGE, gridPage * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const navigateToBlog = useCallback((slug: string) => {
    window.location.href = `/blog/${slug}`;
  }, []);

  // Unique categories for topics
  const categories = useMemo(() => {
    const catMap = new Map<string, number>();
    blogs.forEach((b) => {
      catMap.set(b.category.name, (catMap.get(b.category.name) ?? 0) + 1);
    });
    return Array.from(catMap.entries()).map(([name, count]) => ({ name, count }));
  }, [blogs]);

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-white font-sans text-neutral-900 pt-20 sm:pt-28 md:pt-32">

      {/* ── Hero ── */}
      <section className="flex flex-col lg:flex-row overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-b border-neutral-200">

        {/* Left Panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start relative lg:border-r border-neutral-200 px-4 sm:px-6 md:px-8 lg:px-10"
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
                className="h-px w-7 md:w-8 bg-orange-600 origin-left block"
              />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-neutral-400">
                The Journal
              </span>
            </motion.div>

            <div className="space-y-[-0.04em]">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-900"
                >
                  Food industry
                </motion.h1>
              </div>

              <div className="overflow-hidden flex items-center gap-3 md:gap-6">
                {(["&", "sourcing"] as const).map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                    className={`relative text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-300 ${word === "sourcing" ? "italic" : ""}`}
                  >
                    {word === "&" ? "& " : word}
                    {word === "sourcing" && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute left-0 top-3/4 w-full h-[2px] sm:h-[3px] md:h-1 bg-orange-500/60 origin-left -rotate-2"
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
                  className="text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-900"
                >
                  insights.
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 border-t border-neutral-200 pt-6 md:pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.8] text-neutral-500 font-light max-w-md"
            >
              Expert guides on dehydrated food ingredients, manufacturing processes, export certifications, and global sourcing strategies for food industry professionals.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Panel: Data Feed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-neutral-50 border-t lg:border-t-0 border-neutral-200 mt-8 lg:mt-0"
        >
          <div className="px-6 md:px-8 py-4 md:py-5 border-b border-neutral-200 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-neutral-400">
              Latest Articles
            </span>
            <span className="font-mono text-[10px] text-neutral-300">{blogs.length} posts</span>
          </div>

          <div className="flex-1 max-h-[320px] md:max-h-[400px] overflow-y-auto scrollbar-hide" role="feed" aria-label="Latest articles">
            {blogs.slice(0, 7).map((item, i) => (
              <BlogFeedItem key={item.id} item={item} index={i} />
            ))}
          </div>

          <div className="h-10 sm:h-12 border-t border-neutral-200 bg-white flex items-center px-6 md:px-8">
            <div className="flex items-center gap-2 text-neutral-400">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-[9px] md:text-[10px] tracking-wider">UPDATED REGULARLY</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Featured Photo Grid ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-200"
      >
        {featuredBlogs.slice(0, 2).map((blog) => (
          <FeaturedCard key={blog.id} blog={blog} onClick={navigateToBlog} />
        ))}
      </motion.div>

      {/* ── Wide Non-Featured Card ── */}
      {nonFeaturedBlogs.slice(0, 1).map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={() => navigateToBlog(item.slug)}
          className="group relative h-60 sm:h-64 md:h-72 lg:h-80 cursor-pointer overflow-hidden border-b border-neutral-200"
        >
          <img
            src={item.coverImage.url}
            alt={item.coverImage.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex w-full sm:w-[55%] flex-col justify-center px-6 sm:px-11 py-8 sm:py-10">
            <p className="mb-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-600">
              {item.category.name}
            </p>
            <h2 className="mb-4 text-xl sm:text-[28px] md:text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-100 group-hover:text-orange-600 transition-colors duration-300">
              {item.title}
            </h2>
            <p className="mb-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-neutral-200 line-clamp-2">
              {item.excerpt}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">{item.author.name}</span>
              <Dot />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-300">{item.reading.readingTimeMinutes} min read</span>
              <Dot />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-300">
                {formatDate(item.publishing.publishedAt, { month: "short", year: "numeric" })}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* ── Recent Articles Grid ── */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="border-b border-neutral-200">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-7 md:py-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-neutral-400">
            Recent articles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {blogs.slice(0, 6).map((item) => (
            <motion.div
              key={item.slug}
              variants={fadeUp}
              onClick={() => navigateToBlog(item.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigateToBlog(item.slug)}
              className="group flex cursor-pointer items-start gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-11 py-5 md:py-7 transition-colors duration-200 hover:bg-neutral-50 border-b border-neutral-100 sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0"
            >
              <img
                src={item.coverImage.url}
                alt={item.coverImage.alt}
                loading="lazy"
                className="h-16 w-16 shrink-0 rounded-sm object-cover transition-opacity duration-300"
              />
              <div className="flex-1">
                <p className="mb-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-600">
                  {item.category.name}
                </p>
                <p className="mb-1.5 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold leading-[1.28] sm:leading-[1.3] tracking-[-0.01em] text-neutral-500 transition-colors duration-200 group-hover:text-neutral-900">
                  {item.title}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                  {item.author.name} · {item.reading.readingTimeMinutes} min read
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Quote Band ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 lg:gap-12 border-y border-neutral-200 bg-neutral-50 px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-10 md:py-12 lg:py-14"
      >
        <div className="shrink-0 text-[60px] sm:text-[70px] md:text-[80px] font-black leading-[0.7] text-orange-500/10 -mt-2 font-serif" aria-hidden="true">
          &ldquo;
        </div>
        <p className="flex-1 font-serif text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px] italic leading-normal text-neutral-400">
          Sourcing the right ingredients from the right supplier makes all the difference{" "}
          <em className="text-neutral-700">in product quality and profitability</em> — that's what separates good brands from great ones.
        </p>
        <div className="min-w-0 sm:min-w-36 md:min-w-40 text-left md:text-right">
          <p className="mb-1 text-[12px] sm:text-[13px] font-bold text-neutral-900">Industry Expert</p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-neutral-400">
            Food Processing · 2026
          </p>
        </div>
      </motion.div>

      {/* ── Three Grid ── */}
      <div className="border-b border-neutral-200">
        <motion.div
          key={`grid-${gridPage}`}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {gridCards.length === 0 ? (
            <div className="col-span-3 py-20 text-center text-[13px] text-neutral-400">No articles found.</div>
          ) : (
            gridCards.map((card) => (
              <motion.div
                key={card.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => navigateToBlog(card.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigateToBlog(card.slug)}
                className="group cursor-pointer border-t-2 border-transparent bg-neutral-50 p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-t-orange-500 hover:bg-white hover:shadow-lg hover:shadow-orange-500/[0.04] border-r border-neutral-200 last:border-r-0"
              >
                <img
                  src={card.coverImage.url}
                  alt={card.coverImage.alt}
                  loading="lazy"
                  className="mb-4 sm:mb-5 h-32 md:h-36 w-full rounded-sm object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                />
                <p className="mb-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-orange-600">
                  {card.groupTag}
                </p>
                <p className="mb-2.5 text-[14px] sm:text-[15px] md:text-base font-extrabold tracking-[-0.015em] leading-[1.28] sm:leading-[1.3] text-neutral-700 group-hover:text-orange-600 transition-colors duration-300">
                  {card.title}
                </p>
                <p className="mb-4 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.68] sm:leading-[1.7] text-neutral-400 line-clamp-3">
                  {card.excerpt}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                  {card.reading.readingTimeMinutes} min read
                </p>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-11 py-4 sm:py-5 border-t border-neutral-100">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage((p) => Math.max(0, p - 1))}
              disabled={gridPage === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-neutral-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:border-neutral-300 hover:text-neutral-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
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
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setGridPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === gridPage ? "bg-orange-500 scale-125" : "bg-neutral-300 hover:bg-neutral-400"}`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={gridPage === totalPages - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-neutral-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:border-neutral-300 hover:text-neutral-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>

      {/* ── Topics ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="border-y border-neutral-200 px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-9 md:py-10 lg:py-12"
      >
        <p className="mb-5 md:mb-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-neutral-500">
          Browse by category
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((t) => (
            <motion.button
              key={t.name}
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-sm border border-neutral-200 bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-neutral-400 transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600 hover:bg-orange-50/30"
            >
              {t.name}
              <span className="text-[8px] sm:text-[9px] text-neutral-300">{t.count}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ── Newsletter ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 border-t border-neutral-200 bg-white px-4 sm:px-6 md:px-8 lg:px-11 py-10 sm:py-12 md:py-14 lg:py-16 items-center"
      >
        <div>
          <p className="mb-3 sm:mb-3.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-neutral-500">
            Stay informed
          </p>
          <h3 className="mb-3 text-[26px] sm:text-[28px] md:text-[31px] lg:text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-900">
            Industry insights,<br />direct to inbox.
          </h3>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-neutral-500">
            Weekly updates on food processing, ingredient sourcing, export certifications, and manufacturing best practices for global food industry professionals.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-0">
            <input
              type="email"
              aria-label="Email address"
              className="flex-1 border border-neutral-200 bg-neutral-50 px-4 py-3 sm:py-3.5 text-[13px] sm:text-[14px] text-neutral-900 outline-none font-sans placeholder:text-neutral-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 transition-all rounded-sm"
              placeholder="your@email.com"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 bg-neutral-900 px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white hover:bg-orange-600 transition-colors rounded-sm"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-[9px] sm:text-[10px] tracking-wider text-neutral-400">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </motion.div>
    </div>
  );
}