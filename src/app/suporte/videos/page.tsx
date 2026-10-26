import type { Metadata } from "next";
import Link from "next/link";
import { videos, temasVideo, type TemaVideo } from "@/content/suporte/videos";
import { VideoLeve } from "@/components/suporte/VideoLeve";
import { linkWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Vídeos e treinamentos",
  description:
    "Tutoriais em vídeo do sistema SIMCO: cadastros, pedidos de venda, emissão, cancelamento e carta de correção de NF-e. Treinamento com analistas.",
};

const temas = Object.keys(temasVideo) as TemaVideo[];

export default function Videos() {
  return (
    <>
      <section className="border-b border-line bg-surface pb-10 pt-10">
        <div className="wrap">
          <nav aria-label="Você está em" className="text-sm text-muted">
            <Link href="/suporte" className="hover:text-ink hover:underline">
              Central de suporte
            </Link>{" "}
            / <span>Vídeos</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-extrabold sm:text-[2.6rem]">Vídeos do sistema</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/75">
            {videos.length} tutoriais curtos, do cadastro de cliente à carta de correção. O vídeo só carrega quando você clica.
          </p>
          <nav aria-label="Temas" className="mt-6 flex flex-wrap gap-2">
            {temas.map((t) => (
              <a
                key={t}
                href={`#tema-${t}`}
                className="inline-flex min-h-10 items-center rounded-sm border border-line bg-paper px-3 text-sm font-medium hover:border-ink"
              >
                {temasVideo[t]} · {videos.filter((v) => v.tema === t).length}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {temas.map((t) => (
        <section key={t} id={`tema-${t}`} aria-labelledby={`titulo-${t}`} className="scroll-mt-28 py-12 md:py-14">
          <div className="wrap">
            <h2 id={`titulo-${t}`} className="border-b-2 border-ink pb-2 text-2xl font-bold">
              {temasVideo[t]}
            </h2>
            <ul className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {videos
                .filter((v) => v.tema === t)
                .map((v) => (
                  <li key={v.id} id={v.id} className="scroll-mt-32">
                    <VideoLeve id={v.id} titulo={v.titulo} />
                    <p className="mt-2.5 font-medium">{v.titulo}</p>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      ))}

      <section aria-labelledby="titulo-treinamento" className="border-t border-line bg-navy-deep py-16 text-on-navy">
        <div className="wrap grid gap-8 md:grid-cols-[minmax(0,1.4fr)_auto] md:items-center">
          <div>
            <h2 id="titulo-treinamento" className="mt-3 text-[1.9rem] font-bold">
              Prefere aprender com alguém do lado?
            </h2>
            <p className="mt-3 max-w-2xl text-on-navy-muted">
              A SIMCO tem um programa de treinamento com os analistas de suporte, montado conforme as características e
              necessidades de cada empresa. Ideal para quem está começando ou recebeu gente nova na equipe.
            </p>
          </div>
          <a
            href={linkWhatsApp("suporte", "Olá! Quero agendar um treinamento do sistema para a minha equipe.")}
            className="btn btn-primario"
          >
            Agendar treinamento
          </a>
        </div>
      </section>
    </>
  );
}
