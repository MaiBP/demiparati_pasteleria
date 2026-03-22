import type { Metadata } from "next";
import Products from "@/components/Products";
import categories from "@/app/data/categories.json";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Productos",
  description:
    "Explora las categorias de productos de De Mi Para Ti Pasteleria: infantiles, eventos especiales, bodas y quince, y mini pasteleria.",
  path: "/productos",
  image: "/img/evento.png",
  keywords: [
    "catalogo de tortas",
    "productos de pasteleria",
    "tortas para cumpleaños y eventos",
  ],
});

export default function HomePage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Productos de pasteleria personalizada",
    description:
      "Catalogo de categorias de tortas personalizadas y mini pasteleria.",
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
      <h1 className="sr-only">Productos de pasteleria personalizada</h1>
      <Products />
    </main>
  );
}
