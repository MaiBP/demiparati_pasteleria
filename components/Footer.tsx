"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const businessNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <footer className="bg-[#FFF6EA] px-6 py-8 text-gray-800">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-start">
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-1 font-semibold">Seguime</p>
            <Link
              href="https://www.instagram.com/demiparatipasteleria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram de De Mi Para Ti Pastelería"
              className="text-gray-700 transition-colors hover:text-pink-700"
            >
              <FaInstagram className="text-2xl" />
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="mb-1 font-semibold">Contacto</p>
            <Link
              href={`https://wa.me/${businessNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp de De Mi Para Ti Pastelería"
              className="text-gray-700 transition-colors hover:text-green-700"
            >
              <FaWhatsapp className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-end">
          <nav className="flex space-x-4">
            <Link href="/sobremi" className="transition-colors hover:text-pink-700">
              Sobre mí
            </Link>
            <Link href="/productos" className="transition-colors hover:text-pink-700">
              Productos
            </Link>
          </nav>

          <p className="flex items-center gap-1 text-sm text-gray-700">
            © 2025 -
            <Link
              href="https://github.com/MaiBP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de GitHub de MaiBP"
              className="inline-flex items-center transition-colors hover:text-gray-900"
            >
              <FaGithub className="mr-1" /> MaiBP
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
