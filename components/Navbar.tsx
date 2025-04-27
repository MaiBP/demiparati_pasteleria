// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import HamburgerToggle from "@/components/HamburguerToggle";
import Logo from "../app/public/img/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF6EA] py-3 px-5 relative flex items-center justify-between">
      {/* Móvil: Hamburger */}
      <div className="md:hidden">
        <HamburgerToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Logo */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Link href="/">
          <Image src={Logo} alt="De Mi Para Ti Logo" width={80} height={30} />
        </Link>
      </div>

      {/* Escritorio: Menú centrado */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 items-center">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink">Inicio</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/sobremi" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink">Sobre mí</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/productos" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink">Productos</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#galeria" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink">Galería</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* WhatsApp */}
            <NavigationMenuItem>
              <Link href="https://wa.me/549XXXXXXXXXX" legacyBehavior passHref>
                <NavigationMenuLink>
                  <div className="whatsapp-container relative flex items-center ml-4">
                    <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <span className="whatsapp-label absolute left-full ml-2 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-md text-sm text-gray-700 opacity-0 transition-all duration-300">
                      ¡Quiero mi torta!
                    </span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Móvil: Menú desplegable */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FFF6EA] shadow-md z-50">
          <nav className="p-4">
            <ul className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Inicio" },
                { href: "/sobremi", label: "Sobre mí" },
                { href: "/productos", label: "Productos" },
                { href: "#galeria", label: "Galería" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} legacyBehavior passHref>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors"
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}

              <li>
                <Link href="https://wa.me/549XXXXXXXXXX" legacyBehavior passHref>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    ¡Quiero mi torta!
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Estilos específicos */}
      <style jsx>{`
        /* Underline animado para los links */
        .navlink {
          position: relative;
          display: inline-block;
          font-size: 1rem;
          font-weight: 500;
          color: #4a4a4a;
          padding: 0.25rem 0;
        }
        .navlink::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px;
          background: #ffb510;
          transform: translateY(8px);
          opacity: 0;
        }
        .navlink:hover::after {
          animation: writeUnderline 0.3s forwards;
        }
        @keyframes writeUnderline {
          0% {
            transform: translateY(8px);
            opacity: 0;
          }
          50% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(4px);
            opacity: 1;
          }
        }

        /* Etiqueta WhatsApp */
        .whatsapp-container:hover .whatsapp-label {
          opacity: 1;
          transform: translateX(0);
        }
        .whatsapp-label {
          transform: translateX(4px);
        }
      `}</style>
    </header>
  );
}


