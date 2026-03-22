import type { Metadata } from "next";
import About from "@/components/About";
import Opinions from "@/components/Opinions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mi",
  description:
    "Conoce la historia de Estefania y el trabajo detrás de De Mi Para Ti Pasteleria, un emprendimiento de reposteria artesanal en Bella Vista.",
  path: "/sobremi",
  image: "/img/about/estefa-1.png",
  keywords: [
    "sobre la pastelera",
    "reposteria artesanal Bella Vista",
    "pasteleria personalizada",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <h1 className="sr-only">Sobre De Mi Para Ti Pasteleria</h1>
      <About />
      <Opinions />
    </main>
  );
}
