"use client";

import { trackEvent } from "@/lib/gtag";

export default function ProductButtons({ product }) {
  return (
    <div className="mt-10 flex gap-4 flex-wrap">
      <a
        href={`https://wa.me/917091323777?text=Hi%2C%20I%27m%20interested%20in%20bulk%20supply%20of%20${encodeURIComponent(product.name)}%20from%20SRI%20GREEN%20Industries.`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent(
            "whatsapp_click",
            "conversion",
            `whatsapp_${product.name}`
          )
        }
        className="rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90 flex items-center gap-2"
      >
        💬 WhatsApp Inquiry
      </a>

      <a
        href="/inquiry"
        onClick={() =>
          trackEvent(
            "quote_click",
            "conversion",
            `bulk_quote_${product.name}`
          )
        }
        className="rounded-full bg-[#1b1c13] px-8 py-4 text-sm font-bold text-white transition hover:opacity-90"
      >
        Request Bulk Quote →
      </a>
    </div>
  );
}