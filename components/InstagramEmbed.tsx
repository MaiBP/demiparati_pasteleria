// components/InstagramEmbed.tsx
"use client";

import { useEffect } from "react";

interface InstagramEmbedProps {
  postUrl: string; // URL pública del post de IG
}

export default function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  useEffect(() => {
    // Inserta el script de Instagram cuando el componente se monta
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media mx-auto mb-6"
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
      style={{ maxWidth: "540px", width: "100%" }}
    ></blockquote>
  );
}
