// components/About.tsx
"use client";

import Image from "next/image";
import aboutImg from "@/app/public/img/AboutImg.png";   // tu foto de Estefa
import aboutBG from "@/app/public/img/aboutBG.png";     // tu fondo en PNG

export default function About() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background como Image fill absoluto */}
      <Image
        src={aboutBG}
        alt="Fondo decorativo"
        fill
        className="absolute inset-0 object-cover object-center opacity-30 -z-10"
      />

      {/* Contenido principal */}
      <div className="relative z-10  mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 py-20 px-6 md:px-8 items-center bg-[#F4D3A1]/60">
        {/* === TEXTO === */}
        <div className="space-y-6">
          <span className="text-pink-500 font-medium uppercase">
          Sobre mi 🍰
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          👋🏼 Buenas! Soy Estefania
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Soy el corazón y alma detrás de este emprendimiento. Mi amor por la
            repostería comenzó en la cocina de mi hogar, donde descubrí la
            alegría de crear delicias que endulzan la vida de las personas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Para mí, cada producto es una obra de arte, hecha con pasión,
            creatividad y un compromiso con la calidad. Me enorgullece ofrecer
            productos que no solo son hermosos, sino también irresistiblemente
            deliciosos.
          </p>
        </div>

        {/* === IMAGEN PRINCIPAL === */}
        <div className="relative">
          <Image
            src={aboutImg}
            alt="Sobre mí - Estefania"
            width={600}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

