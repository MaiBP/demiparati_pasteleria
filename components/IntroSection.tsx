"use client";

// import Image from "next/image";
// If you have a cupcakes image in public/img/cupcakes.png
// import cupcakesImg from "@/app/public/img/cupcakes.png";

export default function FeaturesSection() {
  return (
    <section className="bg-[#FFF6EA] py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Breve introducción sobre mí y la pasión que llevo detrás del emprendimiento.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Diseños personalizados
          </h3>
          <p className="text-gray-600">
            Creaciones únicas y adaptadas a tus ideas.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Ingredientes de calidad
          </h3>
          <p className="text-gray-600">
            Usamos ingredientes frescos y locales.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
          <h3 className="font-semibold text-xl text-gray-800 mb-2">
            Hecho con amor
          </h3>
          <p className="text-gray-600">
            Atención dedicada en cada detalle.
          </p>
        </div>
      </div>
      <div className="bg-[#F4D3A1] py-8 px-4 md:px-8 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4033] mb-2">
          Hecho con amor
        </h2>
        <p className="text-gray-700 mb-4">
          Atención dedicada en cada detalle.
        </p>
        <div className="flex justify-center">
          {/* <Image
            src={cupcakesImg}
            alt="Cupcakes"
            width={150}
            height={100}
            className="object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
}
