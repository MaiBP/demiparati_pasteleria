import type { Metadata } from "next";
import Products from "@/components/Products";
import categories from "@/app/data/categories.json";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Productos",
  description:
    "Explorá las categorías de productos de De Mi Para Ti Pastelería: infantiles, eventos especiales, bodas y quince, y mini pastelería.",
  path: "/productos",
  image: "/img/evento.png",
  keywords: [
    "catálogo de tortas",
    "productos de pastelería",
    "tortas para cumpleaños y eventos",
  ],
});

export default function HomePage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Productos de pastelería personalizada",
    description:
      "Catálogo de categorías de tortas personalizadas y mini pastelería.",
    url: absoluteUrl("/productos"),
    hasPart: categories.map((category) => ({
      "@type": "CollectionPage",
      name: category.nombre,
      url: absoluteUrl(`/productos/${category.slug}`),
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <h1 className="sr-only">Productos de pastelería personalizada</h1>
      <Products />
    </main>
  );
}
