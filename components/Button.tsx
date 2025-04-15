"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function SpecialButton() {
  const buttonText = "Quiero mi torta!";
  return (
    <button className="group cursor-pointer border-0 bg-green-500  hover:bg-green-600 text-white w-[100px] h-[100px] rounded-full overflow-hidden relative grid place-content-center transition-all duration-300 font-semibold">
      {/* Animated text rotated in a circle */}
      <p className="absolute inset-0 animate-text-rotation">
        {Array.from(buttonText).map((char, i) => (
          <span
            key={i}
            // Set a CSS variable for each letter's index
            style={{ "--index": i } as React.CSSProperties}
            className="absolute inset-[7px]"
          >
            {char}
          </span>
        ))}
      </p>

      {/* Circle container with WhatsApp icon animations */}
      <div className="relative w-[40px] h-[40px] overflow-hidden bg-white text-green-500 rounded-full flex items-center justify-center">
        {/* First WhatsApp icon */}
        <FaWhatsapp size={30} className="text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%]" />
        {/* Second WhatsApp icon (initially off-screen, moves in on hover) */}
        <FaWhatsapp size={30} className="absolute text-xl transition-transform duration-300 ease-in-out delay-100 translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>

      <style jsx>{`
        /* Define the animation for the text rotation */
        @keyframes text-rotation {
          to {
            transform: rotate(360deg);
          }
        }
        /* Apply the animation to the text container */
        .animate-text-rotation {
          animation: text-rotation 8s linear infinite;
        }
        /* Each letter rotates according to its custom CSS variable --index */
        .animate-text-rotation span {
          transform: rotate(calc(20deg * var(--index)));
        }
      `}</style>
    </button>
  );
}
