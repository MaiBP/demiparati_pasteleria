// components/Card.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export type CardProps = {
    slug: string;
    imgSrc: string;
    title: string;
    index: number;
    description?: string;
  };

  export default function Card({
    slug,
    imgSrc,
    title,
    index,
    description = "",
  }: CardProps) {
    return (
      <Link
        href={`/productos/${slug}`}
        className="
         group block max-w-sm mx-auto 
        bg-white ring-2 ring-white rounded-xl 
        overflow-hidden shadow-lg transition 
        hover:shadow-2xl hover:scale-[1.03]
      "
      >
        {/* Imagen */}
        <div className="relative w-full pt-[100%] overflow-hidden">
          <Image
            src={imgSrc}
            alt={`${title} imagen ${index + 1}`}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
  
        {/* Título + descripción */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {title} {index + 1}
          </h3>
          {description && (
            <p className="mt-2 text-sm text-gray-600 italic">
              {description}
            </p>
          )}
        </div>
      </Link>
    );
  }
