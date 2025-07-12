"use client";

import Image from "next/image";
import cookie from "@/public/img/wappcookie.png";

export default function FloatingWhatsApp() {
  // Leemos el número desde la variable de entorno
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  // Construimos la URL de WhatsApp
  const href = number
    ? `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}`
    : "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-10 right-10
        w-14 h-14
        bg-[#25d366]
        rounded-full overflow-hidden
        flex items-center justify-center
        shadow-lg
        z-50
        animate-bounce
      `}
      aria-label="Contactar por WhatsApp"
    >
      {/* Next/Image con contenedor relativo */}
      <div className="relative w-full h-full">
        <Image
          src={cookie}
          alt="WhatsApp"
          fill
          className="object-cover"
        />
      </div>
    </a>
  );
}


