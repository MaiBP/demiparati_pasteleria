import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tortas personalizadas en Bella Vista",
  description:
    "Descubri tortas artesanales y personalizadas para cumpleaños, bodas, quince y eventos especiales en Bella Vista. Diseños a medida y contacto directo por WhatsApp.",
  path: "/",
  image: "/img/hero/portada-1111.png",
  keywords: [
    "tortas personalizadas en Bella Vista",
    "pasteleria artesanal",
    "tortas para eventos",
  ],
});

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: "es-AR",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <HeroSection />
      <IntroSection />
    </main>
  );
}
