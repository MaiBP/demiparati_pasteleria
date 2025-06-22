// components/Opinions.tsx
"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const OPINIONS = [
  {
    img: "/img/opinions/comment1.png",
    postUrl: "https://www.instagram.com/p/DI6VkvZOYG_/",
  },
  {
    img: "/img/opinions/comment2.png",
    postUrl: "https://www.instagram.com/p/C66tAxIOx1G/",
  },
  {
    img: "/img/opinions/comment3.png",
    postUrl: "https://www.instagram.com/p/C0FoK0YxnCF/?img_index=1",
  },
];

export default function Opinions() {
  return (
    <section className="bg-[#F4D3A1] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          🍪 Mis clientes 🧁
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {OPINIONS.map(({ img, postUrl }, idx) => (
            <a
              key={idx}
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full max-w-3xl       /* deja que sea bien ancho en contenedor */
                bg-white rounded-lg shadow-md 
                overflow-hidden hover:shadow-lg transition-shadow
                duration-200
              "
            >
              {/* estrellas */}
              <div className="flex justify-center py-3 bg-white">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-pink-500" />
                ))}
              </div>

              {/* imagen responsive con height automático */}
              <div className="w-full">
                <Image
                  src={img}
                  alt={`Captura de comentario ${idx + 1}`}
                  width={1200}              /* ancho base de la imagen */
                  height={120}              /* alto base según su proporción */
                  className="w-full h-auto object-contain"
                  priority={idx === 0}      /* opcional, preload la primera */
                />
              </div>

              {/* llamado a la acción */}
              <p className="text-center text-sm text-gray-600 py-3">
                Ver comentario en Instagram
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



