// app/productos/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import categorias from "@/app/data/categories.json";
import Card from "@/components/Card";

type Categoria = {
  slug: string;
  nombre: string;
  portada: string;
  imagen: string[];
  descripcion: string;
};

export default function CategoriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const cat = (categorias as Categoria[]).find((c) => c.slug === params.slug);
  if (!cat) return notFound();


  return (
    <main className="py-16 px-4 bg-[#FFF6EA] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4 text-[#5C4033]">
        {cat.nombre}
      </h1>
      <p className="max-w-2xl mx-auto text-center text-[#5C4033] mb-12">
        {cat.descripcion}
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
     {(cat.imagen || []).map((src, i) => (
         <Card
           key={i}
          imgSrc={src}
          title={cat.nombre}
       index={i}
    />
 ))}
  </div>
    </main>
  );
}


