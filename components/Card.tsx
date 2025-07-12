"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

export type CardProps = {
  slug: string;
  imgSrc: string;
  title: string;
  index: number;
  description?: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
  },
};

export default function Card({
  slug,
  imgSrc,
  title,
  index,
  description = "",
}: CardProps) {
  const BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleShare = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      const fullUrl = window.location.origin + imgSrc;
      if (navigator.share) {
        navigator.share({ title, text: description || title, url: fullUrl });
      } else {
        navigator.clipboard.writeText(fullUrl);
        alert("Enlace copiado al portapapeles");
      }
    },
    [imgSrc, title, description]
  );

  const handleWhatsapp = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (!BUSINESS_NUMBER) return;
      const fullUrl = window.location.origin + imgSrc;
      const text = `¡Mira este diseño de ${title} #${index + 1}!`;
      window.open(
        `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(
          text + " " + fullUrl
        )}`,
        "_blank"
      );
    },
    [imgSrc, title, index, BUSINESS_NUMBER]
  );

  return (
    <motion.div
      className="w-full sm:w-74 mx-auto"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover="hover"
    >
      <Link
        href={`/productos/${slug}`}
        className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-lg"
      >
        <div className="relative w-full aspect-square">
          <Image
            src={imgSrc}
            alt={`${title} imagen ${index + 1}`}
            fill
            className="object-cover object-center"
          />

          {/* Compartir */}
          <button
            onClick={handleShare}
            className="
              absolute bottom-2 left-2
              bg-white/50 backdrop-blur-sm
              p-2 rounded-full
              hover:bg-white/60 transition
            "
            aria-label="Compartir"
          >
            <FiShare2 className="text-gray-800 text-base" />
          </button>

          {/* Quiero */}
          <button
            onClick={handleWhatsapp}
            className="
              absolute bottom-2 right-2
              flex items-center gap-1
              bg-white/50 backdrop-blur-sm
              px-2 py-1 rounded-full text-sm
              hover:bg-white/60 transition
            "
            aria-label="Quiero"
          >
            <FaWhatsapp className="text-green-600 text-base" />
            <span className="font-medium text-pink-600">Quiero</span>
          </button>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-[#5C4033]">
            {title} #{index + 1}
          </h3>
          {description && (
            <p className="mt-2 text-sm italic text-[#5C4033]">
              {description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}


