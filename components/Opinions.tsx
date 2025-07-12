// components/Opinions.tsx
"use client";

import { motion, Variants } from "framer-motion";
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

// Contenedor con stagger entre hijos
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
// Cada tarjeta: fade in + slide up
const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Opinions() {
  return (
    <motion.section
      className="bg-[#F4D3A1] py-8 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          variants={card}
        >
          🍪 Mis clientes 🧁
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {OPINIONS.map(({ img, postUrl }, idx) => (
            <motion.a
              key={idx}
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={card}
              className="
                w-full max-w-3xl
                bg-white rounded-lg shadow-md
                overflow-hidden hover:shadow-lg transition-shadow duration-200
              "
            >
              <div className="flex justify-center py-3 bg-white">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-pink-500" />
                ))}
              </div>

              <div className="w-full">
                <Image
                  src={img}
                  alt={`Captura de comentario ${idx + 1}`}
                  width={1200}
                  height={120}
                  className="w-full h-auto object-contain"
                  priority={idx === 0}
                />
              </div>

              <p className="text-center text-sm text-gray-600 py-3">
                Ver comentario en Instagram
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}




