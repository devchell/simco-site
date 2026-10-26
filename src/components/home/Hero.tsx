"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Pause, Play, ArrowRight } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { segmentos } from "@/content/segmentos";

/* Mesmas três mensagens do banner do site oficial, com imagem, ação e acessibilidade */
const slides = [
  {
    id: "transformacao",
    aba: "Transformação digital",
    titulo: "Transformação digital do seu negócio",
    texto:
      "Controle seu estoque, suas vendas e suas finanças num só sistema, com a nota fiscal emitida de acordo com a legislação.",
    imagem: "/img/hero/gestao.jpg",
    foco: "object-[70%_40%]",
    acao: { href: "/modulos", rotulo: "Conhecer o ERP" },
  },
  {
    id: "automacao",
    aba: "Soluções automatizadas",
    titulo: "Soluções automatizadas para o seu negócio",
    texto:
      "Parceria com os melhores softwares e hardwares do mercado: NFC-e, SAT, TEF, impressoras fiscais e integração com e-commerce.",
    imagem: "/img/hero/automacao.jpg",
    foco: "object-[60%_50%]",
    acao: { href: "/modulos#nfce", rotulo: "Ver automação comercial" },
  },
  {
    id: "competitividade",
    aba: "Competitividade",
    titulo: "Competitividade e lucratividade para o seu negócio",
    texto: "Software de gestão para os segmentos de autopeças, oficinas, comércio e controle de equipamentos.",
    imagem: "/img/hero/oficina.jpg",
    foco: "object-[55%_50%]",
    acao: { href: "/solucoes", rotulo: "Ver soluções por segmento" },
  },
];

const DURACAO = 7000;

export function Hero() {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [sobre, setSobre] = useState(false);
  const reduzir = useReducedMotion();
  const rodando = !pausado && !sobre && !reduzir;

  const avancar = useCallback(() => setAtual((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    if (!rodando) return;
    const id = window.setTimeout(avancar, DURACAO);
    return () => window.clearTimeout(id);
  }, [rodando, atual, avancar]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Destaques da SIMCO"
      className="relative isolate overflow-hidden bg-brand-950 text-white"
      onMouseEnter={() => setSobre(true)}
      onMouseLeave={() => setSobre(false)}
      onFocusCapture={() => setSobre(true)}
      onBlurCapture={() => setSobre(false)}
    >
      {slides.map((s, i) => (
        <Image
          key={s.id}
          src={s.imagem}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`-z-10 object-cover ${s.foco} transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === atual ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
          }`}
        />
      ))}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(6_26_58/0.94)_0%,rgb(6_26_58/0.82)_38%,rgb(6_26_58/0.35)_75%,rgb(6_26_58/0.2)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-950/55 sm:hidden" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-brand-950/90 to-transparent" />

      <div className="wrap flex min-h-[min(82svh,46rem)] flex-col justify-center pb-36 pt-16 sm:pb-40">
        <div className="grid max-w-[44rem]">
          {slides.map((s, i) => {
            const Titulo = i === 0 ? "h1" : "h2";
            const ativo = i === atual;
            return (
              <div
                key={s.id}
                id={`slide-${s.id}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${slides.length}`}
                aria-hidden={!ativo}
                inert={!ativo}
                className={`col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  ativo ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <Titulo className="text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-[3.6rem] xl:text-[4.4rem]">
                  {s.titulo}
                </Titulo>
                <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-white/85 sm:text-xl">{s.texto}</p>
                {s.id === "competitividade" && (
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Segmentos atendidos">
                    {segmentos.map((seg) => (
                      <li key={seg.slug}>
                        <Link
                          href={`/solucoes/${seg.slug}`}
                          className="inline-flex min-h-10 items-center rounded-full border border-white/30 bg-white/10 px-4 text-[0.95rem] font-semibold transition hover:bg-white hover:text-brand-900"
                        >
                          {seg.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contato#orcamento" className="btn btn-primario !min-h-14 !px-7 !text-[1.05rem]">
                    Pedir demonstração gratuita
                  </Link>
                  <Link href={s.acao.href} className="btn btn-claro !min-h-14 !px-7 !text-[1.05rem]">
                    {s.acao.rotulo}
                    <ArrowRight size={18} weight="bold" aria-hidden />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="wrap flex items-end gap-3 pb-7 sm:gap-4">
          <div className="grid flex-1 grid-cols-3 gap-3 sm:gap-6" role="group" aria-label="Escolher destaque">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setAtual(i)}
                aria-controls={`slide-${s.id}`}
                aria-current={i === atual ? "true" : undefined}
                className="group grid min-h-11 content-end gap-2.5 text-left"
              >
                <span className="hidden text-[0.92rem] font-semibold text-white/85 transition-colors group-hover:text-white group-aria-[current=true]:text-white sm:block">
                  {s.aba}
                </span>
                <span className="sr-only sm:hidden">{s.aba}</span>
                <span className="relative block h-[3px] overflow-hidden rounded-full bg-white/25">
                  <span
                    key={i === atual ? `ativo-${atual}-${rodando}` : "inativo"}
                    className={`absolute inset-0 rounded-full bg-sky ${
                      i === atual ? (rodando ? "animate-[progresso_7s_linear_forwards]" : "") : "-translate-x-full"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
          {!reduzir && (
            <button
              type="button"
              onClick={() => setPausado((p) => !p)}
              aria-label={pausado ? "Retomar troca automática" : "Pausar troca automática"}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              {pausado ? <Play size={18} weight="fill" aria-hidden /> : <Pause size={18} weight="fill" aria-hidden />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
