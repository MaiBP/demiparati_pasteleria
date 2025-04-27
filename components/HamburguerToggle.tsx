// components/HamburgerToggle.tsx
"use client";

import { Dispatch, SetStateAction } from "react";

export default function HamburgerToggle({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <input
        type="checkbox"
        id="hamburger-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
        className="hamburger__input"
      />
      <div className="hamburger__wrap">
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            viewBox="0 0 820 864"
            xmlns="http://www.w3.org/2000/svg"
            className={`hamburger__svg svg-${i + 1}`}
          >
            <g>
              <g>
                <path
                  className="hamburger__path"
                  d="M341.8,326.1h213c89.9-9.3,148.7-84.1,140-152c-7.6-58.9-67.1-121.3-133-109c-65.2,12.2-103.6,91.5-87,133
                    c15.6,39.1,72.5,25.7,104,73c34.8,52.2,4.4,126.9,1,135c-38.6,91.3-166.6,159.9-283,120c-83.1-28.5-148.1-108-153-203
                    c-5.2-102,61.1-181.2,130-217c105.2-54.7,222.8-11.2,288,42c134.2,109.5,141.4,337.4,56,424c-58.7,59.5-164.8,55.8-217,147
                    c-6.4,11.2-13.2,25.9-9,41c12.1,43.6,109.8,70.9,180,42c82.7-34.1,134.7-149.4,97-207c-35.2-53.7-145.1-52.1-210-14
                    c-39,22.9-40.8,46.7-85,69c-55.6,28.1-132.6,30.5-146,7c-14.9-26.2,38-103.1,320-320"
                />
              </g>
            </g>
          </svg>
        ))}
      </div>

      <style jsx>{`
        .hamburger__input {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 50px;
          height: 50px;
          opacity: 0;
          z-index: 50;
          cursor: pointer;
        }
        .hamburger__wrap {
          position: absolute;
          top: 1.5rem;
          left: 1rem;
          width: 50px;
          height: 50px;
          pointer-events: none;
        }
        .hamburger__svg {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: transform 0.4s ease, opacity 0.2s ease;
        }
        /* Espaciado uniforme */
        .svg-1 {
          transform: translateY(-7px);
        }
        .svg-2 {
          transform: translateY(0);
        }
        .svg-3 {
          transform: translateY(7px);
        }
        .hamburger__path {
          fill: none;
          stroke: #222;
          stroke-width: 50;
          stroke-linecap: round;
          stroke-dasharray: 4400;
          stroke-dashoffset: 4200;
          transition: stroke-dashoffset 1s ease, stroke 0.5s ease;
        }

        /* Al hacer click: forma de X */
        .hamburger__input:checked + .hamburger__wrap .svg-1 {
          transform: translateY(0) rotate(45deg);
        }
        .hamburger__input:checked + .hamburger__wrap .svg-2 {
          opacity: 0;
        }
        .hamburger__input:checked + .hamburger__wrap .svg-3 {
          transform: translateY(0) rotate(-45deg);
        }
        .hamburger__input:checked + .hamburger__wrap .hamburger__path {
          stroke: #ffb510;
          stroke-dashoffset: -4150;
        }
      `}</style>
    </>
  );
}

