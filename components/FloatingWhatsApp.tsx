"use client";

// import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import cookie from "@/public/img/wappcookie.png"
export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=549XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-10 right-10
        w-14 h-14
        bg-[#25d366] text-white
        rounded-full
        flex items-center justify-center
        text-2xl
        shadow-lg
        z-50
        animate-bounce
      `}
      aria-label="Contactar por WhatsApp"
    >
       <Image src={cookie} alt="" fill className="object-cover" />
      {/* <FaWhatsapp /> */}
    </a>
  );
}

