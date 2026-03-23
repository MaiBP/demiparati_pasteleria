 "use client";

export default function AnimatedText() {
  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <span className="block" aria-hidden="true"></span>
          <h1>
            Momentos únicos
            <span aria-hidden="true"></span>
          </h1>
        </div>
        <div className="role">
          <div className="block" aria-hidden="true"></div>
          <p>pastelería única</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        .box {
          max-width: 800px;
          width: 100%;
          text-align: center;
        }

        .title {
          position: relative;
          display: flex;
          height: 100px;
          align-items: center;
          justify-content: center;
        }

        .title .block {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: #ffb510;
          animation: mainBlock 1.2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        }

        .title h1 {
          position: relative;
          margin: 0;
          display: inline-flex;
          align-items: baseline;
          color: #000;
          font-size: 50px;
          opacity: 0;
          animation: mainFadeIn 1s forwards;
          animation-delay: 0.82s;
        }

        .title h1 span {
          position: absolute;
          right: -16px;
          bottom: 10px;
          height: 0;
          width: 0;
          border-radius: 50%;
          background: #ffb510;
          animation: popIn 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 1.28s;
        }

        .role {
          position: relative;
          display: flex;
          height: 60px;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        .role .block {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: #e91e63;
          animation: secBlock 1.2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 1.45s;
        }

        .role p {
          margin: 0;
          color: #000;
          font-size: 35px;
          letter-spacing: 4px;
          opacity: 0;
          animation: secFadeIn 1s forwards;
          animation-delay: 2s;
          text-transform: uppercase;
        }

        @keyframes mainBlock {
          0% {
            left: 0;
            width: 0;
          }
          50% {
            left: 0;
            width: 100%;
          }
          100% {
            left: 100%;
            width: 0;
          }
        }

        @keyframes secBlock {
          0% {
            left: 0;
            width: 0;
          }
          50% {
            left: 0;
            width: 100%;
          }
          100% {
            left: 100%;
            width: 0;
          }
        }

        @keyframes mainFadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes secFadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes popIn {
          0% {
            width: 0;
            height: 0;
            opacity: 0;
          }
          50% {
            width: 10px;
            height: 10px;
            opacity: 1;
            bottom: 45px;
          }
          100% {
            width: 7px;
            height: 7px;
            bottom: 27px;
            opacity: 1;
          }
        }

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

          .title h1 span {
            bottom: 18px;
          }

          .role {
            height: 40px;
            margin-top: 12px;
          }

          .role p {
            font-size: 24px;
            letter-spacing: 2px;
          }
        }

        @media (max-width: 430px) {
          .title h1 {
            font-size: 23px;
          }

          .title h1 span {
            bottom: 12px;
          }

          .role p {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
