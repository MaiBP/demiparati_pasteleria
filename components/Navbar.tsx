"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerToggle from "@/components/HamburguerToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "@/public/img/logo.png";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/sobremi", label: "Sobre mi" },
  { href: "/productos", label: "Productos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        "sticky top-0 z-50 flex w-full items-center justify-between px-5 py-3 transition-all duration-300",
        isScrolled
          ? "bg-[#FFF6EA]/80 shadow-md backdrop-blur-md"
          : "bg-[#FFF6EA]",
      ].join(" ")}
    >
      <div className="md:hidden">
        <HamburgerToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      <div className="flex flex-1 justify-center md:justify-start">
        <Link href="/" aria-label="Ir al inicio de De Mi Para Ti Pasteleria">
          <Image
            src={Logo}
            alt="De Mi Para Ti Logo"
            width={Logo.width}
            height={Logo.height}
            loading="eager"
            fetchPriority="high"
            sizes="80px"
            className="h-auto w-[80px]"
          />
        </Link>
      </div>

      <div className="absolute left-1/2 hidden -translate-x-1/2 transform md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link href={href}>
                    <span className="navlink">{label}</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full z-50 w-full bg-[#FFF6EA] shadow-md md:hidden"
        >
          <nav className="p-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 transition-colors hover:text-pink-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <style jsx>{`
        .navlink {
          position: relative;
          display: inline-block;
          padding: 0.25rem 0;
          font-size: 1rem;
          font-weight: 500;
          color: #4a4a4a;
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

        .whatsapp-container:hover .whatsapp-label {
          transform: translateX(0);
          opacity: 1;
        }

        .whatsapp-label {
          transform: translateX(4px);
        }
      `}</style>
    </header>
  );
}
