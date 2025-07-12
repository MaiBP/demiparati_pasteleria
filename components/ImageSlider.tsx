// components/ImageSlider.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

interface ImageSliderProps {
  images: string[];
  width: number;
  height: number;
  autoplayInterval?: number;
}

const slideVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function ImageSlider({
  images,
  width,
  height,
  autoplayInterval = 3000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const previous = () =>
    setCurrentIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const next = () =>
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  const paddingTop = (height / width) * 100 + "%";

  // Autoplay
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    }, autoplayInterval);
    return () => clearInterval(intervalRef.current);
  }, [images, autoplayInterval]);

  return (
    <div
      className="
        relative mx-auto 
        w-full md:w-[600px] 
        overflow-hidden rounded-md 
        p-2 sm:p-4
      "
      onMouseEnter={() => clearInterval(intervalRef.current!)}
      onMouseLeave={() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : 0));
        }, autoplayInterval);
      }}
    >
      {/* Counter */}
      {/* <div className="absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-sm font-medium text-white">
        {currentIndex + 1}/{images.length}
      </div> */}

      {/* Prev */}
      <motion.button
        onClick={previous}
        whileTap={{ scale: 0.8 }}
        className="absolute left-4 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
      >
        <FaChevronLeft className="text-lg text-gray-500" />
      </motion.button>

      {/* Next */}
      <motion.button
        onClick={next}
        whileTap={{ scale: 0.8 }}
        className="absolute right-4 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
      >
        <FaChevronRight className="text-lg text-gray-500" />
      </motion.button>

      {/* Slides */}
      <div className="relative w-full" style={{ paddingTop }}>
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            variants={slideVariants}
            initial="hidden"
            animate={idx === currentIndex ? "visible" : "hidden"}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
