"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
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
    <header className="sticky z-50 border-b border-line bg-white" style={{ top: "env(safe-area-inset-top, 0px)" }}>
      <div className="wrap flex h-[4.75rem] items-center gap-8">
        <Logo />

        <nav aria-label="Principal" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-1">
            {navegacao.map((item) => (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className="relative flex h-full items-center px-3.5 text-[0.95rem] font-semibold text-ink/70 transition-colors hover:text-ink aria-[current=page]:text-ink after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:rounded-t-full after:bg-action after:opacity-0 aria-[current=page]:after:opacity-100"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={empresa.telefone.href}
            className="hidden items-center gap-2 text-[0.95rem] font-semibold text-ink/80 hover:text-ink xl:inline-flex"
          >
            <Phone size={18} weight="bold" aria-hidden /> {empresa.telefone.exibicao}
          </a>
          <Link href="/suporte" className="btn btn-secundario hidden !min-h-11 md:inline-flex">
            Sou cliente
          </Link>
          <Link href="/contato#orcamento" className="btn btn-primario hidden !min-h-11 sm:inline-flex">
            Pedir demonstração
          </Link>
          <button
            ref={botaoRef}
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-sm border border-line-strong px-3.5 font-semibold lg:hidden"
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
        className="fixed inset-x-0 bottom-0 top-[4.75rem] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Menu" className="wrap py-6">
          <ul className="divide-y divide-line">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={ativo(item.href) ? "page" : undefined}
                  className="flex items-center justify-between py-4 text-xl font-bold aria-[current=page]:text-action"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/contato#orcamento" className="btn btn-primario w-full">
              Pedir demonstração
            </Link>
            <Link href="/suporte" className="btn btn-secundario w-full">
              Sou cliente: suporte
            </Link>
            <a href={empresa.telefone.href} className="btn btn-secundario w-full">
              <Phone size={18} aria-hidden /> {empresa.telefone.exibicao}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">{empresa.horario}</p>
        </nav>
      </div>
    </header>
  );
}
