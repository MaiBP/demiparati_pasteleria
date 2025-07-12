
"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Footer() {
  const BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <footer className="bg-[#FFF6EA] py-8 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Redes Sociales & Contacto */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8">
          {/* Instagram */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-1">Seguime</p>
            <Link
              href="https://www.instagram.com/demiparatipasteleria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </Link>
          </div>
          {/* WhatsApp */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-1">Contacto</p>
            <Link
              href={`https://wa.me/${BUSINESS_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Navegación & Copyright */}
        <div className="flex flex-col md:flex-row items-center md:justify-end justify-center gap-6">
          {/* Links */}
          <nav className="flex space-x-4">
            <Link
              href="/sobremi"
              className="hover:text-pink-600 transition-colors"
            >
              Sobre mí
            </Link>
            <Link
              href="/productos"
              className="hover:text-pink-600 transition-colors"
            >
              Productos
            </Link>
          </nav>
          {/* Copyright con GitHub */}
          <p className="text-sm text-gray-600 flex items-center gap-1">
            © 2025 —{" "}
            <Link
              href="https://github.com/MaiBP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-gray-800 transition-colors"
            >
              <FaGithub className="mr-1" /> MaiBP
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

