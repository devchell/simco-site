"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "@phosphor-icons/react";

/** Mostra só a capa do vídeo; o player do YouTube carrega quando a pessoa clica. */
export function VideoLeve({ id, titulo }: { id: string; titulo: string }) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={titulo}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-sm border border-line bg-ink"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTocando(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-sm border border-line bg-ink"
      aria-label={`Assistir: ${titulo}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
        className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-14 place-items-center rounded-full bg-signal text-ink transition-transform group-hover:scale-105">
          <Play size={24} weight="fill" aria-hidden />
        </span>
      </span>
    </button>
  );
}
