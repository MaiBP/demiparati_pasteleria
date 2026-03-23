"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import imgTall from "@/public/img/hero/portada-1111.png";
import imgTopRight1 from "@/public/img/hero/portada-1.png";
import imgBottomRight from "@/public/img/hero/portada-3.png";
import imgBottomLeft from "@/public/img/hero/hero2.png";

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.8 * i, duration: 0.8, ease: "easeOut" },
  }),
};

const images = [
  {
    src: imgTall,
    alt: "Torta decorada principal",
    cols: "col-span-1 row-span-1",
    sizes: "(max-width: 768px) 33vw, 17vw",
  },
  {
    src: imgTopRight1,
    alt: "Torta personalizada con decoracion artesanal",
    cols: "col-start-2 col-span-3 row-start-1",
    sizes: "(max-width: 768px) 67vw, 34vw",
  },
  {
    src: imgBottomRight,
    alt: "Pasteleria creativa para eventos especiales",
    cols: "col-span-2 row-start-2",
    sizes: "(max-width: 768px) 67vw, 34vw",
  },
  {
    src: imgBottomLeft,
    alt: "Torta de celebracion personalizada",
    cols: "col-span-2 row-start-2",
    sizes: "(max-width: 768px) 67vw, 34vw",
  },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FFF6EA] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-lg">
            <AnimatedText />
          </div>
        </div>

        <div className="px-6">
          <div className="grid h-[70vh] grid-cols-3 grid-rows-2 gap-4">
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`relative overflow-hidden rounded-lg shadow-lg ${image.cols}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading={idx < 2 ? "eager" : "lazy"}
                  fetchPriority={idx < 2 ? "high" : undefined}
                  sizes={image.sizes}
                  quality={70}
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
