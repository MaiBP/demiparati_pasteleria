// components/Card.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
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
  const BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleGenericShare = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const fullUrl = window.location.origin + imgSrc;
      const shareData = {
        title: `${title} #${index + 1}`,
        text: description || title,
        url: fullUrl,
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch {}
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullUrl);
        alert("Enlace copiado al portapapeles");
      } else {
        alert(`Copia este enlace:\n${fullUrl}`);
      }
    },
    [imgSrc, title, index, description]
  );

  const handleWhatsapp = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (!BUSINESS_NUMBER) return;
      const fullUrl = window.location.origin + imgSrc;
      const text = `¡Mira este diseño de ${title} #${index + 1}!`;
      const waLink = `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(
        text + " " + fullUrl
      )}`;
      window.open(waLink, "_blank");
    },
    [imgSrc, title, index, BUSINESS_NUMBER]
  );

  return (
    <Link
      href={`/productos/${slug}`}
      className="
        group block max-w-sm mx-auto
        bg-white rounded-xl overflow-hidden shadow-lg
        hover:shadow-2xl transition-shadow duration-200
      "
    >
      <div className="relative w-full pt-[100%] overflow-hidden">
        <Image
          src={imgSrc}
          alt={`${title} imagen ${index + 1}`}
          fill
          className="absolute inset-0 object-cover object-center"
        />

        {/* Compartir: abajo izquierda */}
        <button
          onClick={handleGenericShare}
          className="
            absolute bottom-3 left-3
            bg-white/50 backdrop-blur-sm
            p-2 rounded-full
            hover:bg-white/60 transition
          "
          aria-label="Compartir"
        >
          <FiShare2 className="text-gray-800 text-base" />
        </button>

        {/* Quiero: abajo derecha, más pequeño */}
        <button
          onClick={handleWhatsapp}
          className="
            absolute bottom-3 right-3
            flex items-center gap-1
            bg-white/50 backdrop-blur-sm
            px-2 py-1 rounded-full text-sm
            hover:bg-white/60 transition
          "
          aria-label="Quiero"
        >
          <FaWhatsapp className="text-green-600 text-base" />
          <span className="font-medium text-pink-600">
            ¡Quiero!
          </span>
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {title} #{index + 1}
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






