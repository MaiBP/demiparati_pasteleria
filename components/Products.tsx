"use client";

import Link from "next/link";
// import Image from "next/image";
import categorias from "@/app/data/categories.json"; // importa el JSON

type Categoria = {
  slug: string;
  nombre: string;
  imagen: string;
  imagen2: string;
  descripcion: string;
};

export default function Products() {
  return (
    <section id="productos" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Nuestras Categorías
        </h2>
        <p className="mt-2 text-gray-600">
          Elige una categoría para ver todos nuestros diseños.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {(categorias as Categoria[]).map((cat) => (
          <Link
            key={cat.slug}
            href={`/productos/${cat.slug}`}
            className="group block bg-[#FFF6EA] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full"
          >
            <div className="relative w-full h-80 md:h-96">
              {/* <Image
                src={cat.imagen}
                alt={cat.nombre}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              /> */}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                {cat.nombre}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

