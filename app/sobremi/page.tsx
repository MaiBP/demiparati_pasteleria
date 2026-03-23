import type { Metadata } from "next";
import About from "@/components/About";
import Opinions from "@/components/Opinions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí",
  description:
    "Conocé la historia de Estefanía y el trabajo detrás de De Mi Para Ti Pastelería, un emprendimiento de repostería artesanal en Bella Vista.",
  path: "/sobremi",
  image: "/img/about/estefa-1.png",
  keywords: [
    "sobre la pastelera",
    "repostería artesanal Bella Vista",
    "pastelería personalizada",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <h1 className="sr-only">Sobre De Mi Para Ti Pastelería</h1>
      <About />
      <Opinions />
    </main>
  );
}
