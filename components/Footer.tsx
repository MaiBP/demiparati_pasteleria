"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF6EA] py-8 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-1">Seguime</p>
            <Link
              href="https://instagram.com/tu_cuenta"
              target="_blank"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-1">Contacto</p>
            <Link
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-end justify-center gap-6">
          <nav className="flex space-x-4">
            {/* <Link
              href="#contacto"
              className="hover:text-pink-600 transition-colors"
            >
              Contacto
            </Link> */}
            <Link
              href="#galeria"
              className="hover:text-pink-600 transition-colors"
            >
              Galería
            </Link>
            <Link
              href="#productos"
              className="hover:text-pink-600 transition-colors"
            >
              Productos
            </Link>
          </nav>
          <p className="text-sm text-gray-600">© 2025-Maibp</p>
        </div>
      </div>
    </footer>
  );
}
