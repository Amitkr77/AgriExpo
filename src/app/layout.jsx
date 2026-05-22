import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/scrolltotop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SRI GREEN Industries | Fruit & Vegetable Powder Exporters",
    template: "%s | SRI GREEN Industries",
  },

  description:
    "SRI GREEN exports ISO 22000-certified dehydrated fruit and vegetable powders globally.",

  metadataBase: new URL("https://agri-expo.vercel.app/"),

  openGraph: {
    siteName: "SRI GREEN Industries",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Header />

        <main>{children}</main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}