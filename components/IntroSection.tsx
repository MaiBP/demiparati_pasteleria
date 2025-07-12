// components/FeaturesSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Asegúrate de que estas rutas existan en /public/img/inicio/
import cupcakesImg     from "@/public/img/inicio/cupcakes.png";
import llamacactusImg  from "@/public/img/inicio/llama-cactus.png";
import chocotortaImg   from "@/public/img/inicio/chococake.png";
import teamocookiesImg from "@/public/img/inicio/teamocookies.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FeaturesSection() {
  const categorias = [
    { slug: "infantiles",        label: "Infantiles" },
    { slug: "eventos-especiales", label: "Eventos Especiales" },
    { slug: "bodas-quince",       label: "Bodas & Quince" },
    { slug: "mini-pasteleria",    label: "Mini Pastelería" },
  ];

  // Tus tres tarjetas con su texto original
  const cards = [
    {
      img: llamacactusImg ,
      title: "Diseños personalizados",
      text:  "Creaciones únicas y adaptadas a tus ideas.",
    },
    {
      img: chocotortaImg,
      title: "Ingredientes de calidad",
      text:  "Usamos ingredientes frescos y locales.",
    },
    {
      img: teamocookiesImg,
      title: "Hecho con amor",
      text:  "Atención dedicada en cada detalle.",
    },
  ];

  return (
    <section className="bg-[#FFF6EA] py-12 px-4 text-center">
      {/* Intro */}
      <motion.div
        className="max-w-3xl mx-auto mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          custom={1}
          variants={fadeInUp}
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          Detrás de mi emprendimiento hay mucho más que recetas: hay amor,
          dedicación y una profunda pasión por crear momentos inolvidables. Hoy,
          cada producto que realizo es único, pensado para acompañar
          celebraciones especiales y sorprender a quienes la reciben.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg p-6 shadow flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeInUp}
          >
            {/* Contenedor fijo para imagen */}
            <div className="relative w-[150px] h-[150px] mb-4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        className="bg-[#F4D3A1] rounded-lg max-w-6xl mx-auto p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div custom={5} variants={fadeInUp} className="text-center md:text-left flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4033] mb-4">
            ¿Buscas un producto único para una ocasión especial?
          </h2>
          <p className="text-gray-700 mb-6">
            Creamos tortas artesanales decoradas para cumpleaños, casamientos,
            baby showers, eventos religiosos y más. Estamos en Bella Vista, ¡contactame por WhatsApp y hacé tu pedido realidad!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/productos/${cat.slug}`}
                className="inline-block bg-[#5C4033] hover:bg-[#ffb510] hover:text-[#5C4033] text-white px-2 py-2 rounded-full transition"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div custom={6} variants={fadeInUp} className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative w-[300px] h-[150px]">
            <Image
              src={cupcakesImg }
              alt="Cupcakes decorados"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// // Asegúrate de que estas rutas existan en /public/img
// import cupcakesImg from '@/public/img/inicio/cupcakes.png'
// import llamacactusImg from '@/public/img/inicio/llama-cactus.png';
// import chocotortaImg from '@/public/img/inicio/chocotorta.png';
// import teamocookiesImg from "@/public/img/inicio/teamocookies.png";

// export default function FeaturesSection() {
//   const categorias = [
//     { slug: "infantiles", label: "Infantiles" },
//     { slug: "eventos-especiales", label: "Eventos Especiales" },
//     { slug: "bodas-quince", label: "Bodas & Quince" },
//     { slug: "mini-pasteleria", label: "Mini Pastelería" },
//   ];

//   return (
//     <section className="bg-[#FFF6EA] py-12 px-4 text-center">
//       {/* Intro */}
//       <div className="max-w-3xl mx-auto mb-8">
//         <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//           Detrás de mi emprendimiento hay mucho más que recetas: hay amor,
//           dedicación y una profunda pasión por crear momentos inolvidables. Hoy,
//           cada producto que realizo es único, pensado para acompañar
//           celebraciones especiales y sorprender a quienes la reciben.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
//         <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
//           <Image
//             src={llamacactusImg}
//             alt="Llama Cactus"
//             width={150}
//             height={150}
//             className="object-contain"
//           />
//           <h3 className="font-semibold text-xl text-gray-800 mb-2">
//             Diseños personalizados
//           </h3>
//           <p className="text-gray-600">
//             Creaciones únicas y adaptadas a tus ideas.
//           </p>
//         </div>
//         <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
//           <Image
//             src={chocotortaImg}
//             alt="Chocotorta"
//             width={150}
//             height={150}
//             className="object-contain"
//           />
//           <h3 className="font-semibold text-xl text-gray-800 mb-2">
//             Ingredientes de calidad
//           </h3>
//           <p className="text-gray-600">
//             Usamos ingredientes frescos y locales.
//           </p>
//         </div>
//         <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
//           <Image
//             src={teamocookiesImg}
//             alt="Te amo cookies"
//             width={150}
//             height={150}
//             className="object-contain"
//           />
//           <h3 className="font-semibold text-xl text-gray-800 mb-2">
//             Hecho con amor
//           </h3>
//           <p className="text-gray-600">
//             Atención dedicada en cada detalle.
//           </p>
//         </div>
//       </div>

//       {/* Llamado a la acción con botones de categorías */}
//       <div className="bg-[#F4D3A1] rounded-lg max-w-6xl mx-auto p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Texto */}
//         <div className="text-center md:text-left flex-1">
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4033] mb-4">
//             ¿Buscas un producto único para una ocasión especial?
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Creamos tortas artesanales decoradas para cumpleaños, casamientos,
//             baby showers, eventos religiosos y más. Estamos en Bella Vista, contactame por WhatsApp y hace tu pedido realidad.  
//           </p>
//           {/* Botones de categorías */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-3">
//             {categorias.map((cat) => (
//               <Link
//                 key={cat.slug}
//                 href={`/productos/${cat.slug}`}
//                 className="inline-block bg-[#5C4033] hover:bg-[#ffb510] hover:text-[#5C4033] text-white px-4 py-2 rounded-full transition"
//               >
//                 {cat.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Imagen */}
//         <div className="flex-shrink-0 mx-auto md:mx-0">
//           <Image
//             src={cupcakesImg}
//             alt="Cupcakes decorados"
//             width={300}
//             height={300}
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


