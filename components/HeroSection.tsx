// components/HeroSection.tsx
"use client";

import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";

import imgTall from "@/public/img/hero/portada-1111.png";       // Grande izquierda
import imgTopRight1 from "@/public/img/hero/portada-1.png"; // Pequeña arriba-derecha
import imgBottomRight from "@/public/img/hero/portada-3.png"; // Mediana abajo-derecha
import imgBottomLeft from "@/public/img/hero/hero2.png"; // Mediana abajo-derecha

export default function HeroSection() {
  return (
    <section className="bg-[#FFF6EA] py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* ===== Texto Animado ===== */}
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-lg">
            <AnimatedText />
          </div>
        </div>

        {/* ===== Mosaic 2×2 con 3 imágenes ===== */}
        <div className="px-6">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[70vh]">
            {/* Grande (col-span-1, row-span-2) */}
            <div className="relative row-span-1 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imgTall}
                alt="Imagen principal"
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Pequeña arriba-derecha (col 2, row 1) */}
            <div className="relative col-start-2 col-span-3 row-start-1 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imgTopRight1}
                alt="Detalle arriba derecha"
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Mediana abajo (col-span-2, row 2) */}
            <div className="relative col-span-2 row-start-2 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imgBottomRight}
                alt="Detalle abajo derecha"
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative col-span-2 row-start-2 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imgBottomLeft}
                alt="Detalle abajo derecha"
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}








// "use client";

// import Image from "next/image";
// import AnimatedText from "@/components/AnimatedText";

// // tus 7 imágenes
// import img1 from "@/public/img/hero/hero1.png";
// import img2 from "@/public/img/hero/hero2.png";
// import img3 from "@/public/img/hero/hero3.png";
// import img4 from "@/public/img/hero/hero4.png";
// import img5 from "@/public/img/hero/hero5.png";
// import img6 from "@/public/img/hero/hero6.png";
// // import img7 from "@/app/public/img/hero/hero7.png";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#FFF6EA] w-full flex items-center justify-center">
//       <div className="grid grid-cols-6 grid-rows-3 gap-3 w-full max-w-7xl h-[80vh] px-4">
        
//         {/* 1: grande tall arriba-izq (col 1-2 / row 1-2) */}
//         <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img3} alt="" fill className="object-cover" />
//         </div>

//         {/* 2: pequeña top centro-izq (col 3 / row 1) */}
//         {/* <div className="col-start-3 row-start-1 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img7} alt="" fill className="object-cover" />
//         </div> */}
        
//         {/* 3: pequeña top centro (col 4 / row 1) */}
//         <div className="col-start-3 row-start-1 col-span-2 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img2} alt="" fill className="object-cover" />
//         </div>
        
//         {/* 4: grande tall arriba-der (col 5-6 / row 1-2) */}
//         <div className="col-start-5 col-span-2 row-span-1 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img4} alt="" fill className="object-cover" />
//         </div>

//         {/* 5: TEXTO animado (col 3-5 / row 2) */}
//         <div className="col-start-3 col-span-4 row-start-2 flex items-center justify-center">
//           <AnimatedText />
//         </div>

//         {/* 6: pequeña bottom-izq (col 1-2 / row 3) */}
//         <div className="col-span-2 row-start-3 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img1} alt="" fill className="object-cover" />
//         </div>

//         {/* 7: mediana bottom-centro (col 3-4 / row 3) */}
//         <div className="col-start-3 col-span-2 row-start-3 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img6} alt="" fill className="object-cover" />
//         </div>

//         {/* 8: pequeña bottom-der (col 5-6 / row 3) */}
//         <div className="col-start-5 col-span-2 row-start-3 relative rounded-lg overflow-hidden shadow-lg">
//           <Image src={img5} alt="" fill className="object-cover" />
//         </div>
//       </div>
//     </section>
//   );
// }