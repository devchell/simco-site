"use client";

import { useSyncExternalStore } from "react";
import { statusAtendimento } from "@/lib/atendimento";

function assinar(aviso: () => void) {
  const id = window.setInterval(aviso, 60_000);
  return () => window.clearInterval(id);
}

const lerTexto = () => {
  const s = statusAtendimento();
  return `${s.aberto ? "1" : "0"}${s.texto}`;
};

/** Mostra se o atendimento está aberto agora, no horário de São Paulo. */
export function StatusAtendimento({ escuro = false }: { escuro?: boolean }) {
  const valor = useSyncExternalStore(assinar, lerTexto, () => null);
  if (!valor) {
    return <span className="inline-block h-5" aria-hidden />;
  }
  const aberto = valor[0] === "1";
  const texto = valor.slice(1);
  return (
    <span className={`inline-flex items-center gap-2 text-sm font-medium ${escuro ? "text-on-navy" : "text-ink"}`}>
      <span
        aria-hidden
        className={`size-2.5 rounded-full ${aberto ? "bg-ok" : escuro ? "bg-on-navy-muted" : "bg-muted"}`}
      />
      {texto}
    </span>
  );
}
