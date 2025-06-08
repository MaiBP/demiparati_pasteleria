/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import categorias from "@/app/data/categories.json";

type Categoria = {
  slug: string;
  nombre: string;
  portada: string;
  imagen: string[];
  descripcion: string;
};

export default function ProductsFullscreen() {
  return (
    <section className="w-screen h-screen grid grid-cols-2 grid-rows-2">
      {(categorias as Categoria[]).map((cat) => (
        <Link
          key={cat.slug}
          href={`/productos/${cat.slug}`}
          className="group relative overflow-hidden"
        >
          {/* 1) Imagen de fondo: llena todo el área */}
          <div className="absolute inset-0">
            <img
              src={cat.portada}
              alt={cat.nombre}
              className="w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* 2) Overlay que aparece al hover: aplica blur y oscurece ligeramente */}
          <div className="absolute inset-0 bg-black/0 backdrop-blur-[0px] transition-all duration-300 group-hover:bg-black/40 group-hover:backdrop-blur-md flex items-center justify-center">
            <h3 className="opacity-0 group-hover:opacity-100 text-white text-3xl md:text-5xl font-extrabold transition-opacity duration-300">
              {cat.nombre}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
}











