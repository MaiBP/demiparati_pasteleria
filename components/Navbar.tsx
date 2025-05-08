"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import HamburgerToggle from "@/components/HamburguerToggle";
import Logo from "@/public/img/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "w-full py-3 px-5 flex items-center justify-between transition-all duration-300",
        "sticky top-0 z-50",
        isScrolled
          ? "backdrop-blur-md bg-[#FFF6EA]/80 shadow-md"
          : "bg-[#FFF6EA]"
      ].join(" ")}
    >
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
            </ul>
          </nav>
        </div>
      )}

      {/* Estilos específicos */}
      <style jsx>{`
        /* Underline animado para desktop */
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

        /* WhatsApp tooltip */
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



