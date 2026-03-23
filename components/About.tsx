"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import aboutBG from "@/public/img/about/about-bg.png";
import ImageSlider from "./ImageSlider";

export default function About() {
  const slides = [
    "/img/about/estefa-1.png",
    "/img/about/estefa-2.jpeg",
    "/img/about/estefa-3.png",
  ];

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden py-20">
      <Image
        src={aboutBG}
        alt="Fondo decorativo"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />

      <motion.div className="relative z-10 mx-4 grid max-w-md grid-cols-1 gap-8 rounded-2xl bg-white/75 p-5 backdrop-blur-md md:mx-auto md:max-w-7xl md:grid-cols-2 md:p-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span
            className="font-medium uppercase text-[#9d174d]"
            variants={item}
          >
            Sobre mi
          </motion.span>

          <motion.h2
            className="mt-2 text-3xl font-bold text-gray-800 md:text-4xl"
            variants={item}
          >
            Hola, soy Estefania
          </motion.h2>

          <motion.p
            className="mt-4 leading-relaxed text-gray-700"
            variants={item}
          >
            Soy el corazón y alma detras de este emprendimiento. Mi amor por la
            repostería comenzó en la cocina de mi hogar, donde descubrí la
            alegría de crear delicias que endulzan la vida de las personas.
          </motion.p>

          <motion.p
            className="mt-4 leading-relaxed text-gray-700"
            variants={item}
          >
            Para mi, cada producto es una obra de arte, hecha con pasión,
            creatividad y un compromiso con la calidad. Me enorgullece ofrecer
            productos que no solo son hermosos, sino también irresistiblemente
            deliciosos.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={item}
        >
          <ImageSlider
            images={slides}
            width={600}
            height={500}
            autoplayInterval={5000}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
