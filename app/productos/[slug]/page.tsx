"use client";

import { notFound } from "next/navigation";
// import Image from "next/image";
import categorias from "@/app/data/categories.json";

type Categoria = {
  slug: string;
  nombre: string;
  imagen: string;
  imagen2: string;
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
    <main className="py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">{cat.nombre}</h1>
      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-8">
        {cat.descripcion}
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-80">
          {/* <Image
            src={cat.imagen}
            alt={cat.nombre}
            fill
            className="object-cover rounded-lg shadow"
          /> */}
        </div>
        <div className="relative w-full h-80">
          {/* <Image
            src={cat.imagen2}
            alt={`${cat.nombre} detalle`}
            fill
            className="object-cover rounded-lg shadow"
          /> */}
        </div>
      </div>
    </main>
  );
}

