"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import categorias from "@/app/data/categories.json";
import { normalizeImagePath } from "@/lib/seo";

type Categoria = {
  slug: string;
  nombre: string;
  portada: string;
  imagen: string[];
  descripcion: string;
};

export default function ProductsFullscreen() {
    const [active, setActive] = useState<Record<string, boolean>>({});

  return (
    <section className="w-screen h-screen grid grid-cols-2 grid-rows-2">
      {(categorias as unknown as Categoria[]).map((cat) => {
        const isActive = !!active[cat.slug];

        return (
          <Link
            key={cat.slug}
            href={`/productos/${cat.slug}`}
            // primer click activa el blur, segundo deja pasar
            onClick={(e) => {
              if (!isActive) {
                e.preventDefault();
                setActive((prev) => ({ ...prev, [cat.slug]: true }));
              }
            }}
            className="relative overflow-hidden"
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <Image
                src={normalizeImagePath(cat.portada)}
                alt={cat.nombre}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={cat.slug === "infantiles" || cat.slug === "eventos-especiales"}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Overlay: blur + texto */}
            <div
              className={`
                absolute inset-0 
                flex items-center justify-center
                transition-all duration-300
                ${
                  isActive
                    ? "bg-black/40 backdrop-blur-md"
                    : "bg-black/0 backdrop-blur-0"
                }
              `}
            >
              <h3
                className={`
                  text-white text-3xl md:text-5xl font-extrabold
                  transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
              >
                {cat.nombre}
              </h3>
            </div>
          </Link>
        );
      })}
    </section>
  );
}











