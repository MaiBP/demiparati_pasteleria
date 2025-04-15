/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom Color Palette
      colors: {
        primary: "#F97316",    // For main buttons and highlights
        secondary: "#ea580c",  // A darker shade for hover states or emphasis
        accent: "#5C4033",     // For headings or key text
        background: "#FFF0DC", // General background color
        light: "#FFF6EA",      // Lighter tone for navbars or sections
      },
      // Custom Font Sizes
      fontSize: {
        xs: "0.75rem",   // 12px
        sm: "0.875rem",  // 14px
        base: "1rem",    // 16px
        lg: "1.125rem",  // 18px
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
        "5xl": "3rem",     // 48px
      },
      // Custom Font Families
      fontFamily: {
        sans: ['var(--font-josefin)', 'sans-serif'],
        // Add more if needed
      },
      // Custom Spacing (optional)
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      // Custom Breakpoints, etc. (if required)
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
