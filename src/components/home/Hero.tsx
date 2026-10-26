"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TelaAutopecas, TelaCilindros, TelaComercio, TelaOficina, TelaRestaurante } from "./TelasDoSistema";
import { empresa } from "@/content/site";

const abas = [
  { id: "autopecas", rotulo: "Autopeças", href: "/solucoes/autopecas", legenda: "Busca por modelo e motor", Tela: TelaAutopecas },
  { id: "oficina", rotulo: "Oficina", href: "/solucoes/oficinas", legenda: "OS com histórico pela placa", Tela: TelaOficina },
  { id: "comercio", rotulo: "Comércio", href: "/solucoes/comercio", legenda: "Pedido com NFC-e autorizada", Tela: TelaComercio },
  { id: "cilindros", rotulo: "Cilindros", href: "/solucoes/controle-de-equipamentos", legenda: "Rastreio por número de série", Tela: TelaCilindros },
  { id: "restaurante", rotulo: "Restaurante", href: "/menu-simco", legenda: "Cardápio com pedido no WhatsApp", Tela: TelaRestaurante },
] as const;

export function Hero() {
  const [indice, setIndice] = useState(0);
  const botoes = useRef<(HTMLButtonElement | null)[]>([]);
  const reduzir = useReducedMotion();
  const atual = abas[indice];

  function aoTeclar(e: React.KeyboardEvent, i: number) {
    let proximo = i;
    if (e.key === "ArrowRight") proximo = (i + 1) % abas.length;
    else if (e.key === "ArrowLeft") proximo = (i - 1 + abas.length) % abas.length;
    else if (e.key === "Home") proximo = 0;
    else if (e.key === "End") proximo = abas.length - 1;
    else return;
    e.preventDefault();
    setIndice(proximo);
    botoes.current[proximo]?.focus();
  }

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="wrap grid gap-12 pb-16 pt-12 md:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pb-24">
        <div className="flex flex-col justify-center">
          <p className="rotulo text-signal-ink">Sistema de gestão · desde {empresa.fundacao}</p>
          <h1 className="mt-5 text-[2.35rem] font-extrabold leading-[1.04] sm:text-[3rem] xl:text-[3.35rem]">
            O ERP de quem vende peça, conserta carro e emite nota todo dia.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-ink/75">
            Estoque, vendas, ordem de serviço, financeiro e NF-e num sistema só, feito para pequenas empresas e com suporte de
            gente que atende pelo nome.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contato#orcamento" className="btn btn-primario">
              Pedir demonstração
            </Link>
            <Link href={atual.href} className="btn btn-secundario">
              Ver o sistema para {atual.rotulo.toLowerCase()}
            </Link>
          </div>
        </div>

        <div className="min-w-0">
          <div
            role="tablist"
            aria-label="Escolha o tipo de negócio"
            className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-3 [scrollbar-width:none]"
          >
            {abas.map((aba, i) => (
              <button
                key={aba.id}
                ref={(el) => {
                  botoes.current[i] = el;
                }}
                role="tab"
                id={`aba-${aba.id}`}
                aria-selected={i === indice}
                aria-controls="tela-segmento"
                tabIndex={i === indice ? 0 : -1}
                onClick={() => setIndice(i)}
                onKeyDown={(e) => aoTeclar(e, i)}
                className="min-h-11 shrink-0 rounded-sm border border-line bg-surface px-3.5 text-[0.95rem] font-medium text-ink/75 transition-colors hover:border-line-strong hover:text-ink aria-selected:border-ink aria-selected:bg-ink aria-selected:text-paper"
              >
                {aba.rotulo}
              </button>
            ))}
          </div>

          <div
            id="tela-segmento"
            role="tabpanel"
            aria-labelledby={`aba-${atual.id}`}
            className="relative min-h-[23rem]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={atual.id}
                initial={reduzir ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduzir ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <atual.Tela />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted">
            <span>{atual.legenda}</span>
            <span>Tela ilustrativa com dados de exemplo</span>
          </p>
        </div>
      </div>
    </section>
  );
}
