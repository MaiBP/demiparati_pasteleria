// app/productos/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import categoriasData from "@/app/data/categories.json";
import Card from "@/components/Card";

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

export default function CategoriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const allCats = categoriasData as Categoria[];
  const cat = allCats.find((c) => c.slug === params.slug);
  if (!cat) return notFound();

  const otherCats = allCats.filter((c) => c.slug !== cat.slug);

  return (
    <main className="py-16 px-4 bg-[#FFF6EA] min-h-screen">
      {/* === CHIPS PARA OTRAS CATEGORÍAS === */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 mb-8">
        {otherCats.map((c) => (
          <Link
            key={c.slug}
            href={`/productos/${c.slug}`}
            className="px-4 py-1 bg-white border border-[#5C4033] text-[#5C4033] rounded-full text-sm font-medium hover:bg-[#ffb510] hover:text-[#5C4033] transition"
          >
            {c.nombre}
          </Link>
        ))}
      </div>

      {/* === TÍTULO Y DESCRIPCIÓN === */}
      <h1 className="text-4xl font-bold text-center mb-4 text-[#5C4033]">
        {cat.nombre}
      </h1>
      <p className="max-w-2xl mx-auto text-center text-[#5C4033] mb-12">
        {cat.descripcion}
      </p>

      {/* === GALERÍA DE IMÁGENES === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cat.imagen.map((imgObj, i) => {
          const { url, description = "" } = imgObj as CategoryImage;
          return (
            <Card
              key={i}
              slug={cat.slug}
              imgSrc={url}
              title={cat.nombre}
              index={i}
              description={description}
            />
          );
        })}
      </div>
    </main>
  );
}
