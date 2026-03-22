import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  absoluteUrl,
  buildMetadata,
  getSiteUrl,
  getWhatsappUrl,
  siteConfig,
} from "@/lib/seo";

const josefinSans = localFont({
  src: [
    {
      path: "./fonts/josefin-sans/josefin-sans-latin-400-normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/josefin-sans/josefin-sans-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/josefin-sans/josefin-sans-latin-700-normal.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-josefin", // optional CSS variable
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "food",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: buildMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
  }).openGraph,
  twitter: buildMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
  }).twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": siteConfig.businessType,
    name: siteConfig.name,
    description: siteConfig.description,
    image: absoluteUrl(siteConfig.defaultOgImage),
    url: absoluteUrl("/"),
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed: siteConfig.areaServed,
    sameAs: [siteConfig.instagram],
    contactPoint: getWhatsappUrl()
      ? [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: getWhatsappUrl(),
            areaServed: siteConfig.areaServed,
            availableLanguage: ["es"],
          },
        ]
      : undefined,
  };

  return (
    <html lang="es-AR" className={josefinSans.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Navbar />
        <FloatingWhatsApp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
