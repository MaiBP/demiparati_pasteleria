"use client";

import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";

// tus 7 imágenes
import img1 from "@/public/img/hero/hero1.png";
import img2 from "@/public/img/hero/hero2.png";
import img3 from "@/public/img/hero/hero3.png";
import img4 from "@/public/img/hero/hero4.png";
import img5 from "@/public/img/hero/hero5.png";
import img6 from "@/public/img/hero/hero6.png";
// import img7 from "@/app/public/img/hero/hero7.png";

export default function HeroSection() {
  return (
    <section className="bg-[#FFF6EA] w-full flex items-center justify-center">
      <div className="grid grid-cols-6 grid-rows-3 gap-3 w-full max-w-7xl h-[80vh] px-4">
        
        {/* 1: grande tall arriba-izq (col 1-2 / row 1-2) */}
        <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img3} alt="" fill className="object-cover" />
        </div>

        {/* 2: pequeña top centro-izq (col 3 / row 1) */}
        {/* <div className="col-start-3 row-start-1 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img7} alt="" fill className="object-cover" />
        </div> */}
        
        {/* 3: pequeña top centro (col 4 / row 1) */}
        <div className="col-start-3 row-start-1 col-span-2 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img2} alt="" fill className="object-cover" />
        </div>
        
        {/* 4: grande tall arriba-der (col 5-6 / row 1-2) */}
        <div className="col-start-5 col-span-2 row-span-1 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img4} alt="" fill className="object-cover" />
        </div>

        {/* 5: TEXTO animado (col 3-5 / row 2) */}
        <div className="col-start-3 col-span-4 row-start-2 flex items-center justify-center">
          <AnimatedText />
        </div>

        {/* 6: pequeña bottom-izq (col 1-2 / row 3) */}
        <div className="col-span-2 row-start-3 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img1} alt="" fill className="object-cover" />
        </div>

        {/* 7: mediana bottom-centro (col 3-4 / row 3) */}
        <div className="col-start-3 col-span-2 row-start-3 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img6} alt="" fill className="object-cover" />
        </div>

        {/* 8: pequeña bottom-der (col 5-6 / row 3) */}
        <div className="col-start-5 col-span-2 row-start-3 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={img5} alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}


