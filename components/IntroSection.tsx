import Image from "next/image";
import Link from "next/link";
import cupcakesImg from "@/public/img/inicio/cupcakes.png";
import llamacactusImg from "@/public/img/inicio/llama-cactus.png";
import chocotortaImg from "@/public/img/inicio/chococake.png";
import teamocookiesImg from "@/public/img/inicio/teamocookies.png";

const categorias = [
  { slug: "infantiles", label: "Infantiles" },
  { slug: "eventos-especiales", label: "Eventos Especiales" },
  { slug: "bodas-quince", label: "Bodas & Quince" },
  { slug: "mini-pasteleria", label: "Mini Pastelería" },
];

const cards = [
  {
    img: llamacactusImg,
    title: "Diseños personalizados",
    text: "Creaciones únicas y adaptadas a tus ideas.",
  },
  {
    img: chocotortaImg,
    title: "Ingredientes de calidad",
    text: "Usamos ingredientes frescos y locales.",
  },
  {
    img: teamocookiesImg,
    title: "Hecho con amor",
    text: "Atención dedicada en cada detalle.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#FFF6EA] px-4 py-12 text-center">
      <div className="mx-auto mb-8 max-w-3xl">
        <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
          Detrás de mi emprendimiento hay mucho más que recetas: hay amor,
          dedicación y una profunda pasión por crear momentos inolvidables. Hoy,
          cada producto que realizo es único, pensado para acompañar
          celebraciones especiales y sorprender a quienes lo reciben.
        </p>
      </div>

      <h2 className="sr-only">Por qué elegir nuestra pastelería artesanal</h2>
      <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center rounded-lg bg-white p-6 shadow"
          >
            <div className="relative mb-4 h-[150px] w-[150px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="150px"
                quality={60}
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-lg bg-[#F4D3A1] p-6 md:flex-row md:p-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-4 text-2xl font-semibold text-[#5C4033] md:text-3xl">
            ¿Buscás un producto único para una ocasión especial?
          </h2>
          <p className="mb-6 text-gray-700">
            Creamos tortas artesanales decoradas para cumpleaños, casamientos,
            baby showers, eventos religiosos y más. Estamos en Bella Vista.
            Contáctame por WhatsApp y hacé tu pedido realidad.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/productos/${cat.slug}`}
                className="inline-block rounded-full bg-[#5C4033] px-2 py-2 text-white transition hover:bg-[#ffb510] hover:text-[#5C4033]"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto flex-shrink-0 md:mx-0">
          <div className="relative h-[150px] w-[300px]">
            <Image
              src={cupcakesImg}
              alt="Cupcakes decorados"
              fill
              sizes="(max-width: 768px) 280px, 300px"
              quality={60}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
