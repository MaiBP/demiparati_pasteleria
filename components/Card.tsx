// components/Card.tsx
"use client";

import Image from "next/image";

export type CardProps = {
  imgSrc: string;
  title: string;
  index: number;
};

export default function Card({ imgSrc, title, index }: CardProps) {
  return (
   <>
      <div className="relative w-full h-64">
        <Image
          src={imgSrc}
          alt={`${title} imagen ${index + 1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      </>
  );
}
