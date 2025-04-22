"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import aboutImage from "@/app/public/img/AboutImg.png";
import cakeIcon from "@/app/public/img/cake.png";
// Asegúrate de que el nombre y la ruta coincidan con tu archivo real:
import aboutBg from "@/app/public/img/AboutBg.png";

export default function About() {
  return (
    <>
      <section className="relative w-full min-h-screen py-20 px-4 md:px-8">
        {/* Fondo en PNG */}
        <Image
          src={aboutBg}
          alt=""               // fondo decorativo
          fill
          className="absolute inset-0 object-cover -z-10"
        />

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen principal */}
          <Image
            src={aboutImage}
            alt="Sobre mí"
            width={600}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />

          {/* Texto */}
          <div className="bg-[#FFF6EA] flex flex-col justify-center text-gray-800">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={cakeIcon}
                alt="Icono de torta"
                width={100}
                height={100}
                className="hidden md:block"
              />
              <h2 className="text-4xl md:text-5xl font-bold">
                Hola, soy Estefa!
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soy el corazón y alma detrás de este emprendimiento. Mi amor por la repostería comenzó en la cocina de mi hogar, donde descubrí la alegría de crear delicias que endulzan la vida de las personas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para mí, cada torta es una obra de arte, hecha con pasión, creatividad y un compromiso inquebrantable con la calidad. Me enorgullece ofrecer productos que no solo son hermosos, sino también irresistiblemente deliciosos.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
