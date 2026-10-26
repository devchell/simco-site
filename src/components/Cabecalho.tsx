"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X, Phone, Lifebuoy } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { empresa, navegacao } from "@/content/site";

export function Cabecalho() {
  const caminho = usePathname();
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);

  // Fecha o painel ao trocar de página (ajuste de estado durante a renderização)
  const [caminhoAnterior, setCaminhoAnterior] = useState(caminho);
  if (caminho !== caminhoAnterior) {
    setCaminhoAnterior(caminho);
    setAberto(false);
  }

  useEffect(() => {
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    painelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const botao = botaoRef.current;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", aoTeclar);
      botao?.focus();
    };
  }, [aberto]);

  const ativo = (href: string) => caminho === href || caminho.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-line" style={{ top: "env(safe-area-inset-top, 0px)" }}>
      <div className="hidden md:block bg-navy-deep text-on-navy-muted text-sm">
        <div className="wrap flex h-9 items-center justify-between gap-6">
          <p>{empresa.horario}</p>
          <div className="flex items-center gap-6">
            <a href={empresa.telefone.href} className="inline-flex items-center gap-1.5 hover:text-on-navy">
              <Phone size={15} aria-hidden /> {empresa.telefone.exibicao}
            </a>
            <Link href="/suporte" className="inline-flex items-center gap-1.5 hover:text-on-navy">
              <Lifebuoy size={15} aria-hidden /> Central de suporte
            </Link>
          </div>
        </div>
      </div>

      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className="relative block px-3 py-2 font-medium text-[0.95rem] text-ink/80 hover:text-ink aria-[current=page]:text-ink after:absolute after:inset-x-3 after:-bottom-[0.95rem] after:h-[3px] after:bg-signal after:scale-x-0 aria-[current=page]:after:scale-x-100 after:transition-transform"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contato#orcamento" className="btn btn-primario hidden sm:inline-flex !min-h-11">
            Pedir demonstração
          </Link>
          <button
            ref={botaoRef}
            type="button"
            className="lg:hidden inline-flex h-11 items-center gap-2 rounded-sm border border-line-strong px-3 font-medium"
            aria-expanded={aberto}
            aria-controls="menu-movel"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <X size={20} aria-hidden /> : <List size={20} aria-hidden />}
            Menu
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        ref={painelRef}
        hidden={!aberto}
        className="lg:hidden fixed inset-x-0 bottom-0 top-[4.5rem] md:top-[6.75rem] overflow-y-auto bg-paper border-t border-line"
      >
        <nav aria-label="Menu" className="wrap py-6">
          <ul className="divide-y divide-line border-y border-line">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className="flex items-center justify-between py-4 font-display text-xl font-semibold [font-stretch:118%] aria-[current=page]:text-navy"
                >
                  {item.rotulo}
                  <span aria-hidden className="text-signal-ink">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/contato#orcamento" className="btn btn-primario w-full">
              Pedir demonstração
            </Link>
            <a href={empresa.telefone.href} className="btn btn-secundario w-full">
              <Phone size={18} aria-hidden /> Ligar {empresa.telefone.exibicao}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">{empresa.horario}</p>
        </nav>
      </div>
    </header>
  );
}
