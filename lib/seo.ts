import type { Metadata } from "next";

export const siteConfig = {
  name: "De Mi Para Ti Pastelería",
  legalName: "De Mi Para Ti Pastelería",
  title: "De Mi Para Ti Pastelería | Tortas personalizadas en Bella Vista",
  description:
    "Pastelería artesanal en Bella Vista con tortas personalizadas para cumpleaños, bodas, quince, eventos especiales y mesas dulces.",
  locale: "es_AR",
  region: "AR-B",
  country: "AR",
  instagram: "https://www.instagram.com/demiparatipasteleria",
  defaultOgImage: "/img/hero/portada-1111.png",
  businessType: "Bakery",
  locality: "Bella Vista",
  areaServed: "Bella Vista y alrededores",
  keywords: [
    "pastelería en Bella Vista",
    "tortas personalizadas",
    "tortas para cumpleaños",
    "tortas para bodas",
    "tortas para quince",
    "mesas dulces",
    "mini pastelería",
    "repostería artesanal",
    "De Mi Para Ti Pastelería",
  ],
};

export function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://demiparatipasteleria.com";

  return rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function normalizeImagePath(path: string) {
  if (!path) return siteConfig.defaultOgImage;
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const pageUrl = absoluteUrl(path);
  const ogImage = absoluteUrl(normalizeImagePath(image || siteConfig.defaultOgImage));

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getWhatsappUrl() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return phone ? `https://wa.me/${encodeURIComponent(phone)}` : undefined;
}
