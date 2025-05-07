"use client";

import { FaStar } from "react-icons/fa";

export default function Opinions() {
  return (
    <section className="bg-[#F4D3A1] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-5">
          Opiniones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-pink-500" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              &quot;Las tortas son muy ricas! El diseño supero mis expectativas.&quot;
            </p>
            <p className="font-semibold text-gray-800">Laura</p>
          </div>
 
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-pink-500" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
             &quot;Quedamos encantados con los cupcakes, perfectos para nuestro evento especial.&quot;
            </p>
            <p className="font-semibold text-gray-800">Diego</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-pink-500" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              &quot;Excelente atención y pasteles hermosos. ¡Muy recomendada!&quot;
            </p>
            <p className="font-semibold text-gray-800">Julieta</p>
          </div>
        </div>
      </div>
    </section>
  );
}
