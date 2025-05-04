// components/AnimatedText.tsx
"use client";

export default function AnimatedText() {
  return (
    <div className="container">
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
          <p>pasteleria única</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .box {
          max-width: 800px;
          width: 100%;
          text-align: center;
        }
        .title {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
        }
        .title .block {
          position: absolute;
          top: 0; left: 0;
          width: 0%;
          height: 100%;
          background: #ffb510;
          animation: mainBlock 2s cubic-bezier(.74,.06,.4,.92) forwards;
        }
        .title h1 {
          font-size: 64px;
          color: #000;
          opacity: 0;
          animation: mainFadeIn 2s forwards;
          animation-delay: 1.6s;
          margin: 0;
          position: relative;
          display: inline-flex;
          align-items: baseline;
        }
        .title h1 span {
          position: absolute;
          bottom: 10px; right: -16px;
          width: 0; height: 0;
          border-radius: 50%;
          background: #ffb510;
          animation: popIn 0.8s cubic-bezier(.74,.06,.4,.92) forwards;
          animation-delay: 2s;
        }
        .role {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          margin-top: 20px;
        }
        .role .block {
          position: absolute;
          top: 0; left: 0;
          width: 0;
          height: 100%;
          background: #e91e63;
          animation: secBlock 2s cubic-bezier(.74,.06,.4,.92) forwards;
          animation-delay: 2s;
        }
        .role p {
          font-size: 48px;
          color: #000;
          opacity: 0;
          animation: secFadeIn 2s forwards;
          animation-delay: 3.2s;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 4px;
        }

        /* Keyframes */
        @keyframes mainBlock {
          0%   { width: 0; left: 0; }
          50%  { width: 100%; left: 0; }
          100% { width: 0; left: 100%; }
        }
        @keyframes secBlock {
          0%   { width: 0; left: 0; }
          50%  { width: 100%; left: 0; }
          100% { width: 0; left: 100%; }
        }
        @keyframes mainFadeIn { to { opacity: 1; } }
        @keyframes popIn {
          0%   { width: 0; height: 0; opacity: 0; }
          50%  { width: 10px; height: 10px; opacity: 1; bottom: 45px; }
          100% { width: 7px; height: 7px; bottom: 27px; }
        }
        @keyframes secFadeIn { to { opacity: 1; } }

        /* ===== Responsive para móvil ===== */
        @media (max-width: 768px) {
          .box {
            max-width: 100%;
            padding: 0 0.5rem;
          }
          .title {
            height: 70px;
          }
          .title h1 {
            font-size: 36px;
          }

          .role {
            height: 40px;
            margin-top: 12px;
          }
          .role p {
            font-size: 24px;
            letter-spacing: 2px;
          }
         @keyframes popIn {
          0%   { width: 0; height: 0; opacity: 0; }
          50%  { width: 10px; height: 10px; opacity: 1; bottom: 45px; }
          100% { width: 7px; height: 7px; bottom: 18px; }
        }

        }
                /* ===== Responsive para móvil ===== */
        @media (max-width: 430px) {
          .box {
            max-width: 100%;
            padding: 0 0.5rem;
          }
          .title {
            height: 70px;
          }
          .title h1 {
            font-size: 23px;
          }
          .role {
            height: 40px;
            margin-top: 12px;
          }
          .role p {
            font-size: 18px;
            letter-spacing: 2px;
          }
           @keyframes popIn {
          0%   { width: 0; height: 0; opacity: 0; }
          50%  { width: 10px; height: 10px; opacity: 1; bottom: 45px; }
          100% { width: 7px; height: 7px; bottom: 12px; }
        }
            
        }
      `}</style>
    </div>
  );
}

