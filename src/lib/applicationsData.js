/**
 * applicationsData.js
 * Central data file for all /applications/[slug] sub-pages.
 * Import from any page: import { getApplication } from "@/lib/applicationsData";
 */

export const applicationsData = {
  "food-manufacturing": {
    slug: "food-manufacturing",
    meta: {
      title: "Food Manufacturing Ingredients | Export-Grade Fruit & Vegetable Powders",
      description:
        "High-quality fruit and vegetable powders for food manufacturing. Ideal for soups, noodles, snacks, ready meals, and industrial food production. HACCP & FSSC certified export supply.",
      canonical: "https://www.srigreen.com/applications/food-manufacturing",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Food Manufacturing Ingredients",
      description:
        "Export-grade fruit and vegetable powders for industrial food manufacturing including soups, noodles, snacks, and ready meals.",
      url: "https://www.srigreen.com/applications/food-manufacturing",
      publisher: { "@type": "Organization", name: "SRI GREEN Industries" },
      about: { "@type": "Thing", name: "Food Manufacturing Ingredients" },
    },
    breadcrumb: [
      { name: "Home", item: "https://www.srigreen.com" },
      { name: "Applications", item: "https://www.srigreen.com/applications" },
      { name: "Food Manufacturing", item: "https://www.srigreen.com/applications/food-manufacturing" },
    ],
    hero: {
      badge: "Industrial Food Ingredients",
      heading: "High-Performance Ingredients",
      headingAccent: "for Modern Food Production",
      subheading:
        "We supply export-grade fruit and vegetable powders engineered for large-scale food manufacturing. Consistent performance, clean-label compliance, and reliable global supply chains.",
      color: {
        bg: "bg-[#2d5a43]",
        badge: "bg-white/10",
        badgeText: "text-[#f2f1e2]",
        accent: "text-[#fec567]",
        body: "text-[#9fcfb2]",
      },
    },
    stats: [
      { value: "27+", label: "Product SKUs", bg: "bg-[#fec567]", text: "text-[#281900]" },
      { value: "FSSC", label: "22000 Certified", bg: "bg-[#e9965b]", text: "text-[#311300]" },
      { value: "48hr", label: "Sample Dispatch", bg: "bg-[#89c2e8]", text: "text-[#0c3a5e]" },
      { value: "100%", label: "Batch Tested", bg: "bg-[#9fcfb2]", text: "text-[#002112]" },
    ],
    useCases: {
      heading: "Built for Industrial Food Manufacturing",
      subheading:
        "Our ingredient solutions support a wide range of manufacturing needs across the global food industry.",
      items: [
        "Instant soups, noodles, and ready meal formulations",
        "Snack seasonings and flavor systems",
        "Bakery mixes and dry blends",
        "Sauces, gravies, and culinary bases",
        "Dehydrated food systems and meal kits",
        "Processed food manufacturing and FMCG production",
      ],
      note: "Each powder is engineered for high solubility, uniform dispersion, and stable shelf life — ideal for automated and semi-automated production lines.",
    },
    qualityPoints: {
      heading: "Export-Grade Quality You Can Depend On",
      items: [
        "FSSC 22000 & HACCP certified processing systems",
        "Controlled moisture content for extended shelf stability",
        "Custom mesh size options for formulation precision",
        "Batch-to-batch consistency for industrial reliability",
        "Food-safe, export-compliant packaging systems",
        "Traceable sourcing and standardized processing protocols",
      ],
    },
    flexibility: {
      heading: "Ingredient Flexibility for Product Innovation",
      subheading:
        "Modern food manufacturers need adaptable ingredient systems. Our powders are designed for formulation flexibility across multiple applications.",
      items: [
        "Custom flavor development and blending support",
        "Private label manufacturing solutions",
        "Functional ingredient customization",
        "Clean-label formulation compatibility",
        "Reduced prep time in industrial production",
        "Stable integration into dry and wet systems",
      ],
    },
    buyers: {
      heading: "Perfect for Global Food Brands & OEM Manufacturers",
      items: [
        "FMCG food brands",
        "Contract manufacturers (OEM/ODM)",
        "Industrial food processors",
        "Export food companies",
        "Private label product developers",
      ],
    },
    whyUs: [
      "Consistent flavor profile across batches",
      "High compatibility with automated production systems",
      "Strong dispersibility and solubility performance",
      "Export-ready documentation and compliance support",
      "Flexible packaging options (bulk, retail, custom OEM)",
      "Reliable lead times and global delivery capability",
    ],
    colorScheme: {
      primary: "#2d5a43",
      accent: "#fec567",
      accentText: "#281900",
      sectionBg: "bg-[#f0efe0]",
      tagBg: "bg-[#fec567]/20",
      tagText: "text-[#7e5700]",
    },
  },

  "beverage-brands": {
    slug: "beverage-brands",
    meta: {
      title: "Fruit & Vegetable Powders for Beverage Brands | Natural Ingredient Solutions",
      description:
        "Premium fruit and vegetable powders for beverage brands. Perfect for smoothies, instant drinks, energy beverages, and functional wellness formulations with high solubility and consistent flavor.",
      canonical: "https://www.srigreen.com/applications/beverage-brands",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Beverage Brand Ingredients",
      description:
        "High-solubility fruit and vegetable powders for beverage brands including smoothies, instant drinks, and functional beverages.",
      url: "https://www.srigreen.com/applications/beverage-brands",
      publisher: { "@type": "Organization", name: "SRI GREEN Industries" },
      about: { "@type": "Thing", name: "Beverage Ingredients" },
    },
    breadcrumb: [
      { name: "Home", item: "https://www.srigreen.com" },
      { name: "Applications", item: "https://www.srigreen.com/applications" },
      { name: "Beverage Brands", item: "https://www.srigreen.com/applications/beverage-brands" },
    ],
    hero: {
      badge: "Beverage Ingredient Solutions",
      heading: "Fruit & Vegetable Powders",
      headingAccent: "for Beverage Brands",
      subheading:
        "We supply high-solubility fruit and vegetable powders designed for modern beverage innovation — from instant drinks to functional wellness beverages.",
      color: {
        bg: "bg-[#fec567]",
        badge: "bg-[#7e5700]/15",
        badgeText: "text-[#281900]",
        accent: "text-[#7e5700]",
        body: "text-[#281900]/70",
      },
    },
    stats: [
      { value: "100%", label: "Instant Solubility", bg: "bg-[#2d5a43]", text: "text-[#9fcfb2]" },
      { value: "10+", label: "Fruit Powders", bg: "bg-[#e9965b]", text: "text-[#311300]" },
      { value: "HACCP", label: "Certified", bg: "bg-[#89c2e8]", text: "text-[#0c3a5e]" },
      { value: "48hr", label: "Sample Dispatch", bg: "bg-[#9fcfb2]", text: "text-[#002112]" },
    ],
    useCases: {
      heading: "Engineered for Beverage Innovation",
      subheading: "Our powders are ideal for a wide range of beverage applications.",
      items: [
        "Instant drink mixes",
        "Smoothies & juice blends",
        "Energy & functional beverages",
        "Flavored water systems",
        "RTD beverage formulations",
        "Powdered drink sachets",
      ],
      note: "They deliver strong flavor intensity, fast dispersion, and smooth consistency in liquid systems.",
    },
    qualityPoints: {
      heading: "Designed for High-Performance Liquid Integration",
      items: [
        "Instant solubility in water and milk systems",
        "Stable flavor retention in processing",
        "Controlled particle size for smooth blending",
        "No clumping in automated mixing systems",
        "High color and taste consistency",
        "HACCP & FSSC certified production",
      ],
    },
    flexibility: {
      heading: "Functional Beverage Development Support",
      subheading: "We help beverage brands create innovative, market-ready formulations.",
      items: [
        "Clean-label drinks",
        "Vitamin & mineral fortified beverages",
        "Superfood drink blends",
        "Herbal wellness formulations",
        "Low-sugar natural beverages",
        "Custom flavor & color profiles",
      ],
    },
    buyers: {
      heading: "For Beverage Brands That Scale Globally",
      items: [
        "Startup beverage brands",
        "Global FMCG beverage companies",
        "Contract beverage manufacturers",
        "Functional drink brands",
        "Private label beverage businesses",
      ],
    },
    whyUs: [
      "Batch-to-batch flavor consistency",
      "Bulk packaging for industrial production",
      "Global export supply capability",
      "Custom formulation & flavor development",
      "Rapid solubility in cold and hot systems",
      "No artificial additives or fillers",
    ],
    colorScheme: {
      primary: "#7e5700",
      accent: "#281900",
      accentText: "#fec567",
      sectionBg: "bg-[#fec567]/10",
      tagBg: "bg-[#7e5700]/10",
      tagText: "text-[#7e5700]",
    },
  },

  nutraceuticals: {
    slug: "nutraceuticals",
    meta: {
      title: "Nutraceutical Ingredients | Clean Label Fruit & Vegetable Powders",
      description:
        "Clean-label fruit and vegetable powders for nutraceuticals, supplements, capsules, and wellness products. Functional, export-grade ingredients with consistent quality and global supply capability.",
      canonical: "https://www.srigreen.com/applications/nutraceuticals",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Nutraceutical Ingredients",
      description:
        "Functional fruit and vegetable powders for nutraceuticals, supplements, capsules, and wellness products.",
      url: "https://www.srigreen.com/applications/nutraceuticals",
      publisher: { "@type": "Organization", name: "SRI GREEN Industries" },
      about: { "@type": "Thing", name: "Nutraceutical Ingredients" },
    },
    breadcrumb: [
      { name: "Home", item: "https://www.srigreen.com" },
      { name: "Applications", item: "https://www.srigreen.com/applications" },
      { name: "Nutraceuticals", item: "https://www.srigreen.com/applications/nutraceuticals" },
    ],
    hero: {
      badge: "Nutraceutical & Wellness Ingredients",
      heading: "Clean-Label Ingredients",
      headingAccent: "for Nutraceutical Brands",
      subheading:
        "We supply functional fruit and vegetable powders designed for the nutraceutical industry — supporting capsules, sachets, powders, and wellness formulations worldwide.",
      color: {
        bg: "bg-[#e9965b]",
        badge: "bg-[#5f2d00]/15",
        badgeText: "text-[#311300]",
        accent: "text-[#5f2d00]",
        body: "text-[#311300]/70",
      },
    },
    stats: [
      { value: "Clean", label: "Label Certified", bg: "bg-[#2d5a43]", text: "text-[#9fcfb2]" },
      { value: "Fine", label: "Mesh Options", bg: "bg-[#fec567]", text: "text-[#281900]" },
      { value: "FSSC", label: "22000 & HACCP", bg: "bg-[#89c2e8]", text: "text-[#0c3a5e]" },
      { value: "100%", label: "Traceable", bg: "bg-[#9fcfb2]", text: "text-[#002112]" },
    ],
    useCases: {
      heading: "Functional Ingredient Systems for Health Products",
      subheading: "Our powders are widely used across the nutraceutical and wellness industry.",
      items: [
        "Dietary supplements",
        "Superfood blends",
        "Protein & wellness powders",
        "Herbal formulations",
        "Capsule & tablet fillers",
        "Functional sachet drinks",
      ],
      note: "Designed for fine mesh customization and high bioactive retention in clinical and consumer wellness applications.",
    },
    qualityPoints: {
      heading: "Designed for Nutritional Performance",
      items: [
        "Retains natural nutrients and bioactive compounds",
        "Clean-label, additive-free processing",
        "High stability for long shelf-life products",
        "Fine mesh customization for capsule compatibility",
        "Easy blending with functional ingredients",
        "FSSC 22000 & HACCP certified facilities",
      ],
    },
    flexibility: {
      heading: "Perfect for Modern Wellness Brands",
      subheading: "Supports formulation across immunity, performance, and plant-based nutrition segments.",
      items: [
        "Immunity-boosting blends",
        "Detox & digestive health products",
        "Energy & performance supplements",
        "Plant-based nutrition systems",
        "Ayurvedic & herbal wellness products",
        "Custom nutraceutical formulations",
      ],
    },
    buyers: {
      heading: "Built for Global Nutraceutical Manufacturers",
      items: [
        "Supplement brands",
        "Contract manufacturers",
        "Wellness startups",
        "Private label nutraceutical companies",
        "Global health product exporters",
      ],
    },
    whyUs: [
      "Controlled drying & moisture systems",
      "Export-compliant documentation",
      "Traceable sourcing systems",
      "Consistent batch standardization",
      "Fine particle size customization",
      "Clean nutrition with no fillers",
    ],
    colorScheme: {
      primary: "#7f410b",
      accent: "#e9965b",
      accentText: "#311300",
      sectionBg: "bg-[#e9965b]/10",
      tagBg: "bg-[#7f410b]/10",
      tagText: "text-[#7f410b]",
    },
  },

  "private-label": {
    slug: "private-label",
    meta: {
      title: "Private Label Fruit & Vegetable Powders | Custom Manufacturing | SRI GREEN",
      description:
        "End-to-end private label manufacturing of fruit and vegetable powders. Custom formulations, white-label sourcing, retail packaging, and regulatory documentation for global brands.",
      canonical: "https://www.srigreen.com/applications/private-label",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Private Label Manufacturing",
      description:
        "Custom formulations and white-label ingredient sourcing for private label brands worldwide.",
      url: "https://www.srigreen.com/applications/private-label",
      publisher: { "@type": "Organization", name: "SRI GREEN Industries" },
      about: { "@type": "Thing", name: "Private Label Manufacturing" },
    },
    breadcrumb: [
      { name: "Home", item: "https://www.srigreen.com" },
      { name: "Applications", item: "https://www.srigreen.com/applications" },
      { name: "Private Label", item: "https://www.srigreen.com/applications/private-label" },
    ],
    hero: {
      badge: "Private Label & Co-Packing",
      heading: "Custom Formulations",
      headingAccent: "for Private Label Brands",
      subheading:
        "End-to-end private label manufacturing — from custom formulation and white-label sourcing to retail-ready packaging and regulatory documentation for international markets.",
      color: {
        bg: "bg-[#7f410b]",
        badge: "bg-white/15",
        badgeText: "text-[#ffb482]",
        accent: "text-[#ffb482]",
        body: "text-[#ffb482]/70",
      },
    },
    stats: [
      { value: "MOQ", label: "500 kg+", bg: "bg-[#fec567]", text: "text-[#281900]" },
      { value: "OEM", label: "& ODM Support", bg: "bg-[#2d5a43]", text: "text-[#9fcfb2]" },
      { value: "Full", label: "Label Support", bg: "bg-[#89c2e8]", text: "text-[#0c3a5e]" },
      { value: "35+", label: "Export Countries", bg: "bg-[#9fcfb2]", text: "text-[#002112]" },
    ],
    useCases: {
      heading: "Private Label Services We Offer",
      subheading:
        "Complete turnkey solutions for brands launching or expanding their product lines.",
      items: [
        "White-label ingredient sourcing",
        "Custom blend development",
        "Retail packaging design support",
        "Regulatory documentation for global markets",
        "Custom mesh size and moisture specifications",
        "Co-packing and contract manufacturing",
      ],
      note: "From MOQ 500 kg to full industrial-scale volumes — we support brands at every stage of growth.",
    },
    qualityPoints: {
      heading: "Quality Standards for Private Label Products",
      items: [
        "FSSC 22000 & HACCP certified production",
        "Batch-to-batch consistency guaranteed",
        "Full traceability from farm to finished product",
        "Export-compliant documentation package",
        "Custom label printing and packaging",
        "Shelf-life validation and testing",
      ],
    },
    flexibility: {
      heading: "Customization at Every Level",
      subheading: "We adapt to your specifications — not the other way around.",
      items: [
        "Custom flavor and color profiles",
        "Particle size and mesh customization",
        "Moisture content specification",
        "Packaging format: bags, pouches, bulk drums",
        "Private label artwork and branding",
        "Multiple certification options",
      ],
    },
    buyers: {
      heading: "Who We Work With",
      items: [
        "International FMCG brands",
        "Retail private label buyers",
        "E-commerce food brands",
        "Health & wellness startups",
        "Supermarket chains and distributors",
      ],
    },
    whyUs: [
      "End-to-end manufacturing support",
      "Flexible MOQ from 500 kg",
      "Custom packaging and branding",
      "Export documentation included",
      "Fast turnaround — 7–14 days standard",
      "Dedicated account manager",
    ],
    colorScheme: {
      primary: "#7f410b",
      accent: "#fec567",
      accentText: "#281900",
      sectionBg: "bg-[#7f410b]/5",
      tagBg: "bg-[#7f410b]/10",
      tagText: "text-[#7f410b]",
    },
  },

  "instant-foods": {
    slug: "instant-foods",
    meta: {
      title: "Ingredients for Instant & Packaged Foods | Dehydrated Powders | SRI GREEN",
      description:
        "Specialized fruit and vegetable powders for instant soups, noodles, premixes, ready meals, and convenience food production. Long shelf life, rapid reconstitution, export-grade quality.",
      canonical: "https://www.srigreen.com/applications/instant-foods",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Instant & Packaged Food Ingredients",
      description:
        "Dehydrated fruit and vegetable powders for instant soups, noodles, premixes, ready meals, and convenience food production.",
      url: "https://www.srigreen.com/applications/instant-foods",
      publisher: { "@type": "Organization", name: "SRI GREEN Industries" },
      about: { "@type": "Thing", name: "Instant Food Ingredients" },
    },
    breadcrumb: [
      { name: "Home", item: "https://www.srigreen.com" },
      { name: "Applications", item: "https://www.srigreen.com/applications" },
      { name: "Instant Foods", item: "https://www.srigreen.com/applications/instant-foods" },
    ],
    hero: {
      badge: "Instant & Packaged Food Ingredients",
      heading: "Specialized Powders",
      headingAccent: "for Instant & Packaged Foods",
      subheading:
        "Ingredients for instant soups, noodle seasonings, premix bases, dehydrated meal kits, and convenience food lines — designed for long shelf stability and rapid reconstitution.",
      color: {
        bg: "bg-[#89c2e8]",
        badge: "bg-white/30",
        badgeText: "text-[#0c3a5e]",
        accent: "text-[#0c3a5e]",
        body: "text-[#0c3a5e]/70",
      },
    },
    stats: [
      { value: "24month", label: "Shelf Life", bg: "bg-[#2d5a43]", text: "text-[#9fcfb2]" },
      { value: "Rapid", label: "Reconstitution", bg: "bg-[#fec567]", text: "text-[#281900]" },
      { value: "HACCP", label: "Certified", bg: "bg-[#e9965b]", text: "text-[#311300]" },
      { value: "Bulk", label: "Supply Ready", bg: "bg-[#9fcfb2]", text: "text-[#002112]" },
    ],
    useCases: {
      heading: "Designed for Instant & Packaged Food Production",
      subheading: "Our powders power the world's fastest-growing convenience food categories.",
      items: [
        "Instant soups and cup noodles",
        "Seasoning sachets and flavor bases",
        "Premix and dry-blend formulations",
        "Ready-to-eat meal kits",
        "Dehydrated vegetable flakes and powders",
        "Convenience snack seasonings",
      ],
      note: "Engineered for rapid reconstitution and consistent flavor delivery — even after long transit and storage periods.",
    },
    qualityPoints: {
      heading: "Built for Long Shelf Life & Stability",
      items: [
        "Low moisture content for extended shelf stability",
        "Controlled water activity for microbial safety",
        "Uniform particle size for consistent reconstitution",
        "Hermetically sealed export packaging",
        "HACCP-controlled processing at every step",
        "Full batch documentation for retail compliance",
      ],
    },
    flexibility: {
      heading: "Formulation Flexibility for Convenience Foods",
      subheading: "We supply in formats that fit your production line — from powder to flake.",
      items: [
        "Fine powder for seasoning systems",
        "Coarse granules for visible vegetable pieces",
        "Custom moisture and mesh specifications",
        "Flavored and unflavored variants",
        "Mixed vegetable and fruit blends",
        "Specialty options: freeze-dried, spray-dried",
      ],
    },
    buyers: {
      heading: "Who Uses Our Instant Food Ingredients",
      items: [
        "Instant noodle and soup manufacturers",
        "Ready meal and meal kit brands",
        "Snack seasoning companies",
        "Retail dry-blend producers",
        "Institutional food service suppliers",
      ],
    },
    whyUs: [
      "24-month shelf life guarantee",
      "Rapid reconstitution in hot and cold water",
      "Consistent flavor delivery across batches",
      "Export-ready documentation",
      "Large volume bulk supply capability",
      "Custom premix development support",
    ],
    colorScheme: {
      primary: "#0c3a5e",
      accent: "#89c2e8",
      accentText: "#0c3a5e",
      sectionBg: "bg-[#89c2e8]/10",
      tagBg: "bg-[#0c3a5e]/10",
      tagText: "text-[#0c3a5e]",
    },
  },
  // =====================================================
// applicationsData.js me "instant-foods": { ... } ke
// closing brace ke BAAD ye paste karo (comma ke saath)
// =====================================================

  "hotel-food-service": {
    slug: "hotel-food-service",
    meta: {
      title: "Bulk Ingredients for Hotels & Food Service | SRI GREEN Industries",
      description:
        "Export-grade fruit and vegetable powders for hotel kitchens, restaurant chains, catering operations, and institutional food service. Consistent quality at volume with simplified procurement.",
      canonical: "https://www.srigreen.com/applications/hotel-food-service",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Hotel & Food Service Ingredients",
      description:
        "Bulk fruit and vegetable powder solutions for hotels, restaurant chains, catering, and institutional food service operations.",
      url: "https://www.srigreen.com/applications/hotel-food-service",
      publisher: { "@type": "Organization", name: "SRI GREEN Industries" },
      about: { "@type": "Thing", name: "Food Service Ingredients" },
    },
    breadcrumb: [
      { name: "Home", item: "https://www.srigreen.com" },
      { name: "Applications", item: "https://www.srigreen.com/applications" },
      { name: "Hotel & Food Service", item: "https://www.srigreen.com/applications/hotel-food-service" },
    ],
    hero: {
      badge: "Hotel & Food Service Solutions",
      heading: "Bulk Ingredient Solutions",
      headingAccent: "for Hotels & Food Service",
      subheading:
        "Consistent quality at volume for hotel kitchens, restaurant chains, catering operations, and institutional food service — with simplified procurement and reliable logistics support.",
      color: {
        bg: "bg-[#f0efe0]",
        badge: "bg-[#2d5a43]/12",
        badgeText: "text-[#14422d]",
        accent: "text-[#2d5a43]",
        body: "text-[#414943]",
      },
    },
    stats: [
      { value: "Bulk", label: "Volume Supply", bg: "bg-[#2d5a43]", text: "text-[#9fcfb2]" },
      { value: "27+", label: "Product SKUs", bg: "bg-[#fec567]", text: "text-[#281900]" },
      { value: "48hr", label: "Sample Dispatch", bg: "bg-[#e9965b]", text: "text-[#311300]" },
      { value: "35+", label: "Export Countries", bg: "bg-[#9fcfb2]", text: "text-[#002112]" },
    ],
    useCases: {
      heading: "Built for Hotel & Food Service Operations",
      subheading:
        "Our bulk ingredient powders support high-volume kitchen operations across the hospitality industry.",
      items: [
        "Hotel kitchen bulk ingredient supply",
        "Restaurant chain seasoning systems",
        "Catering and banquet food production",
        "Institutional food service operations",
        "Airline catering and in-flight meals",
        "Hospital and healthcare food service",
      ],
      note: "Engineered for consistent flavor delivery at scale — every batch performs identically whether you're feeding 50 or 5,000 covers.",
    },
    qualityPoints: {
      heading: "Consistent Quality at Volume",
      items: [
        "FSSC 22000 & HACCP certified production",
        "Batch-to-batch flavor consistency guaranteed",
        "Controlled moisture for extended shelf stability",
        "Food-safe export-compliant packaging",
        "Traceable sourcing from certified farms",
        "Full quality documentation on every order",
      ],
    },
    flexibility: {
      heading: "Simplified Procurement & Logistics",
      subheading:
        "We make bulk ingredient sourcing easy — single supplier, reliable delivery, zero complexity.",
      items: [
        "Single-supplier bulk ingredient sourcing",
        "Custom pack sizes for kitchen operations",
        "Long-term supply contracts available",
        "Flexible delivery schedules",
        "Dedicated account manager",
        "Export logistics and customs support",
      ],
    },
    buyers: {
      heading: "Who We Supply",
      items: [
        "5-star hotel chains and resorts",
        "Restaurant chains and QSR brands",
        "Catering and banquet companies",
        "Institutional food service providers",
        "Airline and railway catering",
        "Hospital and healthcare kitchens",
      ],
    },
    whyUs: [
      "Consistent flavor at every volume",
      "Simplified bulk procurement",
      "Reliable delivery schedules",
      "Export-compliant documentation",
      "Custom pack sizes available",
      "Long-term contract pricing",
    ],
    colorScheme: {
      primary: "#2d5a43",
      accent: "#fec567",
      accentText: "#281900",
      sectionBg: "bg-[#f0efe0]",
      tagBg: "bg-[#2d5a43]/10",
      tagText: "text-[#2d5a43]",
    },
  },
};

export function getApplication(slug) {
  return applicationsData[slug] || null;
}

export function getAllApplicationSlugs() {
  return Object.keys(applicationsData);
}
