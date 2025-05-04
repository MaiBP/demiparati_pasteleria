"use client";

import Image from "next/image";
// IMPORTANTE: si tu imagen está en public/img/cupcakes.png, usa src={"/img/cupcakes.png"}
// o bien impórtala así (asegúrate de que Next la resuelva correctamente):
import cupcakesImg from "@/app/public/img/cupcakes.png";
import llamacactusImg from "@/app/public/img/llama-cactus.png";
import chocotortaImg from "@/app/public/img/chocotorta.png";
import teamocookiesImg from "@/app/public/img/teamocookies.png";

export default function FeaturesSection() {
  return (
    <section className="bg-[#FFF6EA] py-12 px-4 text-center">
      {/* Intro */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Detrás de mi emprendimiento hay mucho más que recetas: hay amor, dedicación y una profunda pasión por crear momentos inolvidables. Hoy, cada producto que realizo es único, pensado para acompañar celebraciones especiales y sorprender a quienes la reciben.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
            <Image
            src={llamacactusImg}
            alt="Cupcakes decorados"
            width={150}
            height={150}
            className="object-contain"
          />
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Diseños personalizados
          </h3>
          <p className="text-gray-600">
            Creaciones únicas y adaptadas a tus ideas.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
               <Image
            src={chocotortaImg}
            alt="Cupcakes decorados"
            width={150}
            height={150}
            className="object-contain"
          />
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Ingredientes de calidad
          </h3>
          <p className="text-gray-600">
            Usamos ingredientes frescos y locales.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
               <Image
            src={teamocookiesImg}
            alt="Cupcakes decorados"
            width={200}
            height={100}
            className="object-contain"
          />
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Hecho con amor
          </h3>
          <p className="text-gray-600">
            Atención dedicada en cada detalle.
          </p>
        </div>
      </div>

      {/* Hecho con amor + cupcake */}
      <div className="bg-[#F4D3A1] rounded-lg max-w-6xl mx-auto p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Imagen a la izquierda */}
       
        {/* Texto a la derecha */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4033] mb-2">
            ¿Estás buscando un producto único para una ocasión especial?
          </h2>
          <p className="text-gray-700">
        Creamos tortas artesanales decoradas para cumpleaños, casamientos, babyshowers, eventos religiosos y más. Estamos en Bella Vista. ¡Contactame por WhatsApp y hacé tu pedido hoy mismo!
          </p>
        </div> 
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={cupcakesImg}
            alt="Cupcakes decorados"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

