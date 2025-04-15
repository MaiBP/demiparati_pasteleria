"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import aboutImage from "@/app/public/img/AboutImg.png";
import cakeIcon from "@/app/public/img/cake.png";

export default function About() {
  return (
    <>
      <section className="relative w-full min-h-screen py-20 px-4 md:px-8 bg-[#FFF6EA]">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src={aboutImage}
            alt="About Us"
            width={600}
            height={500}
            className="object-cover"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src={cakeIcon}
                alt="Cake Icon"
                width={100}
                height={100}
                className="hidden md:block"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Sobre mí
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              tempore rem tempora nobis repellat numquam ipsa. In, ipsam hic esse
              pariatur similique praesentium, quae, ipsa minus accusamus nulla
              repellat atque.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              tempore rem tempora nobis repellat numquam ipsa. In, ipsam hic esse
              pariatur similique praesentium, quae, ipsa minus accusamus nulla
              repellat atque.
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
