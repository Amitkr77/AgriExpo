import { FRUIT_POWDERS } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductButtons from "@/components/ProductButton";

// ======================================================
// GENERATE STATIC PARAMS
// ======================================================
export async function generateStaticParams() {
  return FRUIT_POWDERS.map((product) => ({
    slug: product.slug,
  }));
}

// ======================================================
// SEO METADATA
// ======================================================

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = FRUIT_POWDERS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | SRI GREEN Agro`,

    description: product.desc,

    keywords: [
      product.name,
      `${product.name} supplier`,
      `${product.name} exporter`,
      `${product.name} manufacturer`,
      "fruit powder exporter",
      "spray dried fruit powders",
      "bulk powder supplier",
    ],

    openGraph: {
      title: `${product.name} | SRI GREEN Agro`,
      description: product.desc,

      images: [
        {
          url: product.image?.src || product.image,
          alt: product.name,
        },
      ],

      type: "website",
    },
    alternates: {
      canonical: `https://www.srigreen.com/products/fruit-powders/${product.slug}`,
    },
  };
}

// ======================================================
// PAGE
// ======================================================

export default async function FruitProductPage({ params }) {
  const { slug } = await params;

  const product = FRUIT_POWDERS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fbfaeb] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* BREADCRUMB */}
        <nav className="text-xs text-[#414943] mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-[#14422d]">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-[#14422d]">Products</a>
          <span>/</span>
          <a href="/products/fruit-powders" className="hover:text-[#14422d]">Fruit Powders</a>
          <span>/</span>
          <span className="text-[#14422d] font-bold">{product.name}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f3f2e7] p-4">
            <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
              <img
                src={product.image?.src || product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2d5a43] px-4 py-2 text-white text-xs font-bold uppercase tracking-[0.08em]">
              {product.badge}
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-[#1b1c13]">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg leading-relaxed text-[#414943]">
              {product.desc}
            </p>

            {/* INFO GRID */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] bg-[#f3f2e7] p-5">
                <p className="text-xs uppercase font-bold text-[#6b726d]">
                  Mesh Size
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#1b1c13]">
                  {product.meshSize}
                </h3>
              </div>

              <div className="rounded-[2rem] bg-[#f3f2e7] p-5">
                <p className="text-xs uppercase font-bold text-[#6b726d]">
                  Shelf Life
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#1b1c13]">
                  {product.shelfLife}
                </h3>
              </div>

              <div className="rounded-[2rem] bg-[#f3f2e7] p-5">
                <p className="text-xs uppercase font-bold text-[#6b726d]">
                  Origin
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#1b1c13]">
                  {product.origin}
                </h3>
              </div>

              <div className="rounded-[2rem] bg-[#f3f2e7] p-5">
                <p className="text-xs uppercase font-bold text-[#6b726d]">
                  Moisture
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#1b1c13]">
                  {product.moistureContent}
                </h3>
              </div>
            </div>

            {/* CTA */}
            <ProductButtons product={product} />
          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-[#1b1c13]">
            Applications
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.use?.map((item, index) => (
              <div
                key={index}
                className="rounded-full bg-[#e4e3d4] px-5 py-3 text-sm font-bold text-[#1b1c13]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* PACKAGING */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-[#1b1c13]">
            Packaging Options
          </h2>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.packaging?.map((pack, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-[#f3f2e7] p-5 text-center"
              >
                <p className="font-bold text-[#1b1c13]">
                  {pack}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-[#1b1c13]">
            Certifications
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.cert?.map((cert, index) => (
              <div
                key={index}
                className="rounded-full bg-[#2d5a43] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}