"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDeferredValue, useId, useMemo, useState } from "react";
import { MagnifyingGlass, FileText, Warning, PlayCircle, ArrowRight } from "@phosphor-icons/react";
import { buscar, type Resultado } from "@/lib/busca";

const icones: Record<Resultado["tipo"], typeof FileText> = {
  artigo: FileText,
  rejeicao: Warning,
  video: PlayCircle,
};

const sugestoes = ["nota denegada", "539", "acesso remoto", "certificado vencido", "devolução"];

export function BuscaSuporte() {
  const parametros = useSearchParams();
  const [consulta, setConsulta] = useState(parametros.get("q") ?? "");
  const adiada = useDeferredValue(consulta);
  const resultados = useMemo(() => buscar(adiada), [adiada]);
  const idLista = useId();
  const pesquisou = adiada.trim().length >= 2;

  function atualizar(valor: string) {
    setConsulta(valor);
    const url = valor.trim() ? `/suporte?q=${encodeURIComponent(valor)}` : "/suporte";
    window.history.replaceState(null, "", url);
  }

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
        <label htmlFor="busca-suporte" className="sr-only">
          Descreva o problema ou digite o código da rejeição
        </label>
        <MagnifyingGlass
          size={24}
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          id="busca-suporte"
          type="search"
          value={consulta}
          onChange={(e) => atualizar(e.target.value)}
          placeholder="Descreva o problema ou digite o código da rejeição"
          autoComplete="off"
          aria-controls={idLista}
          className="h-16 w-full rounded-md border-2 border-line-strong bg-surface pl-14 pr-4 text-lg shadow-[var(--shadow-cartao)] placeholder:text-muted focus-visible:outline-none focus-visible:border-action focus-visible:shadow-[0_0_0_4px_rgb(11_103_201/0.2)]"
        />
      </form>

      {!pesquisou && (
        <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-ink/70">
          Exemplos:
          {sugestoes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => atualizar(s)}
              className="min-h-9 rounded-sm border border-line bg-surface px-2.5 font-mono text-xs hover:border-ink"
            >
              {s}
            </button>
          ))}
        </p>
      )}

      <div id={idLista} aria-live="polite">
        {pesquisou && (
          <div className="mt-4 overflow-hidden rounded-md border border-line bg-surface">
            {resultados.length ? (
              <ul className="divide-y divide-line">
                {resultados.map((r) => {
                  const Icone = icones[r.tipo];
                  return (
                    <li key={r.id}>
                      <Link href={r.href} className="group flex items-center gap-4 px-5 py-4 hover:bg-paper">
                        <Icone size={22} aria-hidden className={r.tipo === "rejeicao" ? "text-signal-ink" : "text-navy"} />
                        <span className="min-w-0 flex-1">
                          <span className="block font-medium">{r.titulo}</span>
                          <span className="block text-sm text-muted">{r.detalhe}</span>
                        </span>
                        <ArrowRight size={18} aria-hidden className="shrink-0 text-muted group-hover:text-ink" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="px-5 py-6">
                <p className="font-medium">Nenhuma resposta pronta para &ldquo;{adiada}&rdquo;.</p>
                <p className="mt-1 text-ink/75">
                  Tente outras palavras ou{" "}
                  <a href="#chamado" className="link font-medium text-navy">
                    abra um chamado
                  </a>{" "}
                  que o suporte responde pelo WhatsApp.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
