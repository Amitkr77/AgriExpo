"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917091323777?text=Hi%2C%20I%27m%20interested%20in%20bulk%20powder%20inquiry%20from%20SRI%20GREEN%20Industries."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex items-center gap-2 px-4 py-4">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline text-sm font-bold pr-1 transition-all">WhatsApp</span>
      </span>
    </a>
  );
}
