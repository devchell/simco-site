"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import type { Rejeicao } from "@/content/suporte/rejeicoes";

const tipos: { valor: Rejeicao["tipo"] | "todos"; rotulo: string }[] = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "rejeicao", rotulo: "Rejeição" },
  { valor: "denegacao", rotulo: "Denegação" },
  { valor: "servico", rotulo: "SEFAZ parada" },
  { valor: "sucesso", rotulo: "Autorizada" },
];

const tons: Record<Rejeicao["tipo"], string> = {
  rejeicao: "bg-signal/20 text-signal-ink border-signal/50",
  denegacao: "bg-error-soft text-error border-error/30",
  servico: "bg-sunken text-muted border-line",
  sucesso: "bg-ok-soft text-ok border-ok/30",
};

const rotuloTipo: Record<Rejeicao["tipo"], string> = {
  rejeicao: "Rejeição",
  denegacao: "Denegação",
  servico: "SEFAZ parada",
  sucesso: "Autorizada",
};

const semAcento = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function TabelaRejeicoes({ lista }: { lista: Rejeicao[] }) {
  const [filtro, setFiltro] = useState("");
  const [tipo, setTipo] = useState<(typeof tipos)[number]["valor"]>("todos");
  const busca = semAcento(useDeferredValue(filtro).trim());

  const visiveis = lista.filter((r) => {
    if (tipo !== "todos" && r.tipo !== tipo) return false;
    if (!busca) return true;
    if (/^\d+$/.test(busca)) return String(r.codigo).startsWith(busca);
    return semAcento(`${r.descricao} ${r.significado}`).includes(busca);
  });

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <label htmlFor="filtro-rejeicao" className="sr-only">
            Filtrar por código ou palavra
          </label>
          <MagnifyingGlass size={20} aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id="filtro-rejeicao"
            type="search"
            inputMode="search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Código ou palavra, ex.: 539 ou certificado"
            className="campo pl-11"
          />
        </div>
        <div role="group" aria-label="Tipo de retorno" className="flex flex-wrap gap-1.5">
          {tipos.map((t) => (
            <button
              key={t.valor}
              type="button"
              aria-pressed={tipo === t.valor}
              onClick={() => setTipo(t.valor)}
              className="min-h-10 rounded-sm border border-line bg-surface px-3 text-sm font-medium hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper"
            >
              {t.rotulo}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {visiveis.length} {visiveis.length === 1 ? "código" : "códigos"}
      </p>

      <ul className="mt-3 border-t-2 border-ink">
        {visiveis.map((r) => (
          <li key={r.codigo} id={`c${r.codigo}`} className="scroll-mt-32 border-b border-line target:bg-signal/10">
            <details className="group" open={visiveis.length <= 3}>
              <summary className="grid cursor-pointer list-none grid-cols-[4rem_minmax(0,1fr)_auto] items-start gap-4 py-4 pr-1 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-xl font-medium tabular-nums text-ink">{r.codigo}</span>
                <span className="min-w-0">
                  <span className="block font-medium">{r.descricao}</span>
                  <span className="mt-1 flex flex-wrap gap-1.5">
                    <span className={`rounded-sm border px-1.5 py-0.5 text-xs font-medium ${tons[r.tipo]}`}>{rotuloTipo[r.tipo]}</span>
                    <span className="rounded-sm border border-line px-1.5 py-0.5 font-mono text-xs text-muted">
                      {r.modelos.map((m) => (m === "55" ? "NF-e" : "NFC-e")).join(" · ")}
                    </span>
                  </span>
                </span>
                <span aria-hidden className="mt-1 font-mono text-lg text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="grid gap-4 pb-6 pl-0 sm:pl-[5rem]">
                <p className="max-w-[66ch] text-ink/85">{r.significado}</p>
                <div>
                  <p className="rotulo text-muted">O que fazer</p>
                  <ol className="mt-2 grid max-w-[66ch] list-decimal gap-1.5 pl-5 marker:font-mono marker:text-signal-ink">
                    {r.passos.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
      {!visiveis.length && (
        <p className="py-8 text-ink/75">
          Nenhum código encontrado. Se o código que apareceu na sua tela não está aqui,{" "}
          <Link href="/suporte#chamado" className="link font-medium text-navy">
            abra um chamado
          </Link>{" "}
          com o print da mensagem.
        </p>
      )}
    </div>
  );
}
