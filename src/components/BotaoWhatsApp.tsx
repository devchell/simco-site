"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsappLogo, X } from "@phosphor-icons/react";
import { empresa } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

/** Único botão flutuante do site: escolhe entre falar com vendas ou com o suporte. */
export function BotaoWhatsApp() {
  const [aberto, setAberto] = useState(false);
  const caixaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const fora = (e: PointerEvent) => {
      if (!caixaRef.current?.contains(e.target as Node)) setAberto(false);
    };
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("pointerdown", fora);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("pointerdown", fora);
      document.removeEventListener("keydown", tecla);
    };
  }, [aberto]);

  return (
    <div
      ref={caixaRef}
      className="fixed z-40 flex flex-col items-end gap-3"
      style={{
        right: "max(1rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div
        id="opcoes-whatsapp"
        hidden={!aberto}
        className="w-72 origin-bottom-right rounded-md border border-line bg-surface p-2 shadow-[0_12px_32px_-12px_oklch(0.2_0.05_258/0.35)]"
      >
        <p className="px-3 pb-1 pt-2 rotulo text-muted">Falar pelo WhatsApp</p>
        <a
          href={linkWhatsApp("vendas", "Olá! Quero conhecer o sistema da SIMCO.")}
          className="grid rounded-sm px-3 py-2.5 hover:bg-sunken"
        >
          <span className="font-semibold">Vendas e orçamentos</span>
          <span className="text-sm text-muted">{empresa.whatsappVendas.exibicao}</span>
        </a>
        <a href={linkWhatsApp("suporte", "Olá! Sou cliente e preciso de suporte.")} className="grid rounded-sm px-3 py-2.5 hover:bg-sunken">
          <span className="font-semibold">Suporte técnico</span>
          <span className="text-sm text-muted">{empresa.whatsappSuporte.exibicao}</span>
        </a>
      </div>
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="opcoes-whatsapp"
        aria-label={aberto ? "Fechar opções de WhatsApp" : "Falar pelo WhatsApp"}
        className="grid size-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-[0_8px_24px_-8px_oklch(0.2_0.05_258/0.5)] transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        {aberto ? <X size={24} aria-hidden /> : <WhatsappLogo size={28} weight="fill" aria-hidden />}
      </button>
    </div>
  );
}
