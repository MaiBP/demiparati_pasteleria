import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const josefinSans = localFont({
  src: [
    {
      path: "./fonts/josefin-sans/josefin-sans-latin-400-normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/josefin-sans/josefin-sans-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/josefin-sans/josefin-sans-latin-700-normal.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-josefin", // optional CSS variable
  display: "swap",
});


export const metadata: Metadata = {
  title: "De Mi Para Ti",
  description: "Pasteleria personalizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body>
           <Navbar />
           <FloatingWhatsApp />
        {children}
          <Footer/>
      </body>
    </html>
  );
}
