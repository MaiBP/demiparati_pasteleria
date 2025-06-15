// app/productos/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
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
    const cat = (categoriasData as Categoria[]).find((c) => c.slug === params.slug);
    if (!cat) return notFound();
  
    return (
      <main className="py-16 px-4 bg-[#FFF6EA] min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#5C4033]">{cat.nombre}</h1>
        <p className="max-w-2xl mx-auto text-center text-[#5C4033] mb-12">
          {cat.descripcion}
        </p>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cat.imagen.map((imgObj, i) => {
            // Si tu JSON estuviese mixto (strings y objetos), harías:
            // const { url, description = "" } = typeof imgObj === "string"
            //   ? { url: imgObj, description: "" }
            //   : imgObj;
  
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