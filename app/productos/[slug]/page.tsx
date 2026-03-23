import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import categoriasData from "@/app/data/categories.json";
import Card from "@/components/Card";
import { absoluteUrl, buildMetadata, normalizeImagePath } from "@/lib/seo";

export interface CategoryImage {
  url: string;
  description?: string;
}

export type Categoria = {
  slug: string;
  nombre: string;
  portada: string;
  imagen: CategoryImage[];
  descripcion: string;
};

export async function generateStaticParams() {
  return (categoriasData as Categoria[]).map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = categoriasData as Categoria[];
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return buildMetadata({
      title: "Categoría no encontrada",
      description: "La categoría solicitada no está disponible.",
      path: `/productos/${slug}`,
    });
  }

  return buildMetadata({
    title: category.nombre,
    description: `${category.descripcion} Descubrí trabajos reales, diseños personalizados y opciones para pedir tu torta en Bella Vista.`,
    path: `/productos/${category.slug}`,
    image: normalizeImagePath(category.portada),
    keywords: [
      category.nombre,
      `tortas ${category.nombre.toLowerCase()}`,
      "pastelería Bella Vista",
    ],
  });
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allCats = categoriasData as Categoria[];
  const cat = allCats.find((category) => category.slug === slug);

  if (!cat) {
    return notFound();
  }

  const otherCats = allCats.filter((category) => category.slug !== cat.slug);
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.nombre,
    description: cat.descripcion,
    url: absoluteUrl(`/productos/${cat.slug}`),
    image: absoluteUrl(normalizeImagePath(cat.portada)),
    hasPart: cat.imagen.slice(0, 12).map((image, index) => ({
      "@type": "ImageObject",
      name: `${cat.nombre} ${index + 1}`,
      description: image.description || `${cat.nombre} personalizada`,
      contentUrl: absoluteUrl(image.url),
    })),
  };

  return (
    <main className="bg-[#FFF6EA] px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <h2 className="sr-only">Otras categorías disponibles</h2>
      <div className="mx-auto mb-5 flex max-w-6xl flex-wrap justify-center gap-3">
        {otherCats.map((category) => (
          <Link
            key={category.slug}
            href={`/productos/${category.slug}`}
            className="rounded-full border border-[#5C4033] bg-white px-4 py-1 text-sm font-medium text-[#5C4033] transition hover:bg-[#ffb510] hover:text-[#5C4033]"
          >
            {category.nombre}
          </Link>
        ))}
      </div>

      <h1 className="mb-4 text-center text-4xl font-bold text-[#5C4033]">
        {cat.nombre}
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[#5C4033]">
        {cat.descripcion}
      </p>

      <h2 className="sr-only">Galería de trabajos en {cat.nombre}</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cat.imagen.map((image, index) => {
          const { description = "", url } = image;

          return (
            <Card
              key={index}
              slug={cat.slug}
              imgSrc={url}
              title={cat.nombre}
              index={index}
              description={description}
            />
          );
        })}
      </div>
    </main>
  );
}
