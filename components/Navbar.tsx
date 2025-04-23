"use client";

import Logo from "../app/public/img/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-[#FFF6EA] py-3 px-5 flex items-center justify-between relative">

      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="p-2">
          {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      <div className="flex-1 flex justify-center md:justify-start">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="De Mi Para Ti Logo" width={80} height={30} />
        </Link>
      </div>
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 items-center">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors">
                    Inicio
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/sobremi" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors">
                    Sobre mí
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/productos" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors">
                    Productos
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#galeria" legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="navlink text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors">
                    Galería
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* WhatsApp Contact Icon */}
            <NavigationMenuItem>
              <Link href="https://wa.me/549XXXXXXXXXX" legacyBehavior passHref>
                <NavigationMenuLink className="whatsapp-link" aria-label="WhatsApp Contact">
                  <div className="whatsapp-container relative flex items-center justify-center ml-6">
                    <div className="flex items-center justify-center bg-green-500 rounded-full w-10 h-10 text-white">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <span className="whatsapp-label pointer-events-none absolute whitespace-nowrap text-sm text-gray-700 bg-white px-2 py-1 rounded-md shadow-md left-full ml-2 opacity-0 translate-x-2 transition-all duration-300">
                      ¡Quiero mi torta!
                    </span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute z-50 top-full left-0 w-full bg-[#FFF6EA] shadow-md">
          <nav className="p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" legacyBehavior passHref>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <span className="navlink">Inicio</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sobremi" legacyBehavior passHref>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <span className="navlink">Sobre mí</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/productos" legacyBehavior passHref>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <span className="navlink">Productos</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#galeria" legacyBehavior passHref>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <span className="navlink">Galería</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/549XXXXXXXXXX" legacyBehavior passHref>
                  <a
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <span>¡Quiero mi torta!</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <style jsx>{`
        /* Underline hover effect for generic navlinks */
        .navlink {
          position: relative;
          display: inline-block;
        }
        .navlink::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: currentColor;
          transform: translateY(10px);
          opacity: 0;
        }
        .navlink:hover::after {
          animation: writeUnderline 0.5s forwards;
        }
        @keyframes writeUnderline {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          50% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(5px);
            opacity: 1;
          }
        }
        /* WhatsApp-specific hover for its label */
        .whatsapp-container:hover .whatsapp-label {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </header>
  );
}

