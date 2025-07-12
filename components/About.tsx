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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center py-20">
      <Image
        src={aboutBG}
        alt="Fondo decorativo"
        fill
        className="absolute inset-0 object-cover object-center -z-10"
      />

      <motion.div className="relative z-10 mx-4 md:mx-auto max-w-md md:max-w-7xl bg-white/50 backdrop-blur-md rounded-2xl p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span
            className="text-pink-500 font-medium uppercase"
            variants={item}
          >
            Sobre mí 🎂
          </motion.span>

          <motion.h2
            className="mt-2 text-3xl md:text-4xl font-bold text-gray-800"
            variants={item}
          >
            ¡Hola! Soy Estefania
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-700 leading-relaxed"
            variants={item}
          >
            Soy el corazón y alma detrás de este emprendimiento. Mi amor por la
            repostería comenzó en la cocina de mi hogar, donde descubrí la
            alegría de crear delicias que endulzan la vida de las personas.
          </motion.p>

          <motion.p
            className="mt-4 text-gray-700 leading-relaxed"
            variants={item}
          >
            Para mí, cada producto es una obra de arte, hecha con pasión,
            creatividad y un compromiso con la calidad. Me enorgullece ofrecer
            productos que no solo son hermosos, sino también irresistiblemente
            deliciosos.
          </motion.p>
        </motion.div>

        {/* Slider animado */}
        <motion.div
          className="flex justify-center items-center"
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





// "use client";

// import Image from "next/image";
// import aboutBG from "@/public/img/about/about-bg.png";
// import ImageSlider from "./ImageSlider";

// export default function About() {
//   const slides = [
//     "/img/about/estefa-1.png",
//     "/img/about/estefa-2.jpeg",
//     "/img/about/estefa-3.png",
//   ];

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Background PNG */}
//       <Image
//         src={aboutBG}
//         alt="Fondo decorativo"
//         fill
//         className="absolute inset-0 object-cover object-center -z-10"
//       />

//       {/* Main content */}
//       <div className="relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 py-20 px-6 md:px-8 items-center">
      
//         {/* === TEXT COLUMN with blur backdrop === */}
//         <div className="bg-white/50 backdrop-blur-md p-8 rounded-lg">
//           <span className="text-pink-500 font-medium uppercase">
//             Sobre mi 🎂
//           </span>
//           <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-800">
//             Buenas! Soy Estefania
//           </h2>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Soy el corazón y alma detrás de este emprendimiento. Mi amor por la
//             repostería comenzó en la cocina de mi hogar, donde descubrí la
//             alegría de crear delicias que endulzan la vida de las personas.
//           </p>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Para mí, cada producto es una obra de arte, hecha con pasión,
//             creatividad y un compromiso con la calidad. Me enorgullece ofrecer
//             productos que no solo son hermosos, sino también irresistiblemente
//             deliciosos.
//           </p>
//         </div>
       

//         {/* === SLIDER === */}
//         <div className="flex justify-center">
//           <ImageSlider
//             images={slides}
//             width={600}
//             height={500}
//             autoplayInterval={5000}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


