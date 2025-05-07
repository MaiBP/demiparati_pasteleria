"use client";

import Image from "next/image";
import aboutImg from "@/app/public/img/aboutImg.png"; // tu imagen de Estefa

export default function About() {
  return (
    <section className="relative w-full bg-[#FFF6EA] overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6 md:px-8 items-center">
        {/* === TEXTO === */}
        <div className="space-y-6">
          <span className="text-pink-500 font-medium uppercase">
            Sobre mi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hola, soy Estefania 🧁
          </h2>
          <p className="text-gray-700 leading-relaxed">
         Soy el corazón y alma detrás de este emprendimiento. Mi amor por la repostería comenzó en la cocina de mi hogar, donde descubrí la alegría de crear delicias que endulzan la vida de las personas.
          </p>
            <p className="text-gray-700 leading-relaxed">
         Para mí, cada producto es una obra de arte, hecha con pasión, creatividad y un compromiso con la calidad. Me enorgullece ofrecer productos que no solo son hermosos, sino también irresistiblemente deliciosos.
          </p>
        </div>

        {/* === IMAGEN + TESTIMONIO === */}
        <div className="relative">
          {/* Imagen principal */}
          <Image
            src={aboutImg}
            alt="Sobre mí - Estefa"
            width={600}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
