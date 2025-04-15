"use client";

// import Button from "./Button";
import Image from "next/image";
// import Link from "next/link";
import heroImage from "@/app/public/img/heroimage.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#FFF6EA]">
  <Image
    src={heroImage}
    alt="Imagen de pastelería"
   fill
    className="object-cover object-center"
  />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Momentos únicos
              <span></span>
            </h1>
          </div>
          <div className="role">
            <div className="block"></div>
            <p>tortas únicas</p>
          </div>
          {/* <Link href="https://wa.me/549XXXXXXXXXX" target="_blank">
            <Button />
          </Link> */}
        </div>
      </div>

      <style jsx>{`
        /* Container for the animated text content */
        .box {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Title animation styles */
        .title {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
        }
        .title .block {
          width: 0%;
          height: 100%;
          background: #ffb510;
          position: absolute;
          animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        }
        .title h1 {
          color: #020202;
          font-size: 60px;
          animation: mainFadeIn 2s forwards;
          animation-delay: 1.6s;
          opacity: 0;
          position: relative;
          display: flex;
          align-items: baseline;
          margin: 0;
        }
        .title h1 span {
          width: 0px;
          height: 0px;
          border-radius: 50%;
          background: #ffb510;
          animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 10px;
          right: -12px;
        }

        /* Role animation styles */
        .role {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 20px;
          margin-top: -10px;
        }
        .role .block {
          width: 0%;
          height: 100%;
          background: #e91e63;
          position: absolute;
          animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
        }
        .role p {
          animation: secFadeIn 2s forwards;
          animation-delay: 3.2s;
          opacity: 0;
          font-weight: 700;
          color: #020202;
          font-size: 40px;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0;
        }

        /* Keyframes for the title block reveal */
        @keyframes mainBlock {
          0% {
            width: 0%;
            left: 0;
          }
          50% {
            width: 100%;
            left: 0;
          }
          100% {
            width: 0;
            left: 100%;
          }
        }
        /* Keyframes for the role block reveal */
        @keyframes secBlock {
          0% {
            width: 0%;
            left: 0;
          }
          50% {
            width: 100%;
            left: 0;
          }
          100% {
            width: 0;
            left: 100%;
          }
        }
        /* Keyframes for fading in the title */
        @keyframes mainFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        /* Keyframes for the pop-in effect on the title's span */
        @keyframes popIn {
          0% {
            width: 0px;
            height: 0px;
            background: #e9d856;
            border: 0px solid #ddd;
            opacity: 0;
          }
          50% {
            width: 10px;
            height: 10px;
            background: #e9d856;
            opacity: 1;
            bottom: 40px;
          }
          65% {
            width: 15px;
            height: 15px;
            bottom: 0px;
          }
          80% {
            width: 10px;
            height: 10px;
            bottom: 20px;
          }
          100% {
            width: 7px;
            height: 7px;
            background: #e9d856;
            border: 0px solid #222;
            bottom: 30px;
          }
        }
        /* Keyframes for fading in the role */
        @keyframes secFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
