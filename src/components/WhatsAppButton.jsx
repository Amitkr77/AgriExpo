"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isFooterEnd, setIsFooterEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Jab footer ka bottom screen ke andar aa jaye
      if (footerRect.bottom <= windowHeight + 80) {
        setIsFooterEnd(true);
      } else {
        setIsFooterEnd(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/917091323777?text=Hi%2C%20I%27m%20interested%20in%20bulk%20powder%20inquiry%20from%20SRI%20GREEN%20Agro."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group ${
        isFooterEnd ? "bottom-20" : "bottom-6"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <span className="flex items-center gap-2 px-4 py-4">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline text-sm font-bold pr-1 transition-all">
          WhatsApp
        </span>
      </span>
    </a>
  );
}