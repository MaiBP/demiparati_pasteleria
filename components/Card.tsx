// components/Card.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { FiShare2 } from "react-icons/fi";

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
  const handleShare = useCallback(
    (e: React.MouseEvent) => {
      // Evita que el click en el botón dispare la navegación del Link
      e.stopPropagation();
      e.preventDefault();

      const shareData = {
        title: `${title} ${index + 1}`,
        text: description || title,
        url: window.location.origin + imgSrc,
      };

      if (navigator.share) {
        navigator
          .share(shareData)
          .catch((err) => console.error("Error compartiendo:", err));
      } else if (navigator.clipboard) {
        navigator.clipboard
          .writeText(shareData.url)
          .then(() => alert("Enlace copiado al portapapeles"))
          .catch((err) =>
            console.error("Error copiando al portapapeles:", err)
          );
      } else {
        alert(
          "Tu navegador no soporta la API de compartir. Copia manualmente este enlace:\n" +
            shareData.url
        );
      }
    },
    [imgSrc, title, index, description]
  );

  return (
    <Link
      href={`/productos/${slug}`}
      className="
        group block max-w-sm mx-auto
        bg-white ring-2 ring-white rounded-xl
        overflow-hidden shadow-lg transition
        duration-200 hover:shadow-2xl hover:scale-[1.03]
      "
    >
      {/* Contenedor cuadrado 1:1 */}
      <div className="relative w-full pt-[100%] overflow-hidden">
        <Image
          src={imgSrc}
          alt={`${title} imagen ${index + 1}`}
          fill
          className="absolute inset-0 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* Botón de compartir */}
        <button
          onClick={handleShare}
          className="
            absolute top-2 right-2
            bg-white/75 p-1 rounded-full
            hover:bg-white transition
          "
          aria-label="Compartir imagen"
        >
          <FiShare2 className="text-gray-800" size={20} />
        </button>
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

