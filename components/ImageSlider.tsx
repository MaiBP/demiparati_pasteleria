// components/ImageSlider.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageSliderProps {
  images: string[];
  width: number;
  height: number;
  /** autoplay interval in ms (default 3000ms) */
  autoplayInterval?: number;
}

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

  // maintain aspect ratio
  const paddingTop = (height / width) * 100 + "%";

  // autoplay effect
  useEffect(() => {
    // clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) =>
        i < images.length - 1 ? i + 1 : 0
      );
    }, autoplayInterval);

    // cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images, autoplayInterval]);

  return (
    <div
      className="
        relative mx-auto 
        w-full md:w-[600px] 
        overflow-hidden rounded-md bg-gray-100 
        p-2 sm:p-4
      "
      onMouseEnter={() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }}
      onMouseLeave={() => {
        // restart autoplay when mouse leaves
        intervalRef.current = setInterval(() => {
          setCurrentIndex((i) =>
            i < images.length - 1 ? i + 1 : 0
          );
        }, autoplayInterval);
      }}
    >
      {/* counter */}
      <div className="absolute right-4 top-4 z-10 rounded-full bg-gray-600 px-3 py-1 text-sm font-medium text-white">
        {currentIndex + 1}/{images.length}
      </div>

      {/* prev */}
      <button
        onClick={previous}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
      >
        <FaChevronLeft className="text-2xl text-gray-500" />
      </button>

      {/* next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
      >
        <FaChevronRight className="text-2xl text-gray-500" />
      </button>

      {/* slides */}
      <div className="relative w-full" style={{ paddingTop }}>
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}