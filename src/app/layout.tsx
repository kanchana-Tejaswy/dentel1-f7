import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { SkipToContent } from "@/components/a11y/SkipToContent";
import { StructuredData } from "@/components/seo/StructuredData";
import { Analytics } from "@/components/analytics/Analytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5E7A6D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Lumina Dental Sanctuary",
    default: "Lumina Dental Sanctuary | Premium Anxiety-Free Dental Care",
  },
  description: "Experience premium, anxiety-free dental care at Lumina Dental Sanctuary. Boutique hospitality meets clinical excellence in cosmetic and restorative dentistry.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luminadental.com",
    siteName: "Lumina Dental Sanctuary",
    title: "Lumina Dental Sanctuary | Premium Dental Care",
    description: "Experience premium, anxiety-free dental care at Lumina Dental Sanctuary. Boutique hospitality meets clinical excellence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <StructuredData />
        <Analytics />
      </head>
      <body className="font-sans bg-secondary text-charcoal antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
