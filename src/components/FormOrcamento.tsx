"use client";

import { useState } from "react";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { linkWhatsApp, montarMensagem } from "@/lib/whatsapp";

const tiposNegocio = [
  "Autopeças",
  "Oficina mecânica",
  "Comércio",
  "Controle de cilindros ou equipamentos",
  "Outro",
];

const portes = ["Só eu", "2 a 5 pessoas", "6 a 15 pessoas", "Mais de 15 pessoas"];

type Erros = Partial<Record<"nome" | "negocio", string>>;

/** Pedido de demonstração: monta a mensagem e abre o WhatsApp de vendas. */
export function FormOrcamento({ escuro = false, negocio = "" }: { escuro?: boolean; negocio?: string }) {
  const [erros, setErros] = useState<Erros>({});

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const valor = (k: string) => String(dados.get(k) ?? "").trim();
    const novos: Erros = {};
    if (!valor("nome")) novos.nome = "Informe seu nome para sabermos com quem falar.";
    if (!valor("negocio")) novos.negocio = "Escolha o tipo de negócio para prepararmos a demonstração certa.";
    setErros(novos);
    if (Object.keys(novos).length) {
      document.getElementById(novos.nome ? "orc-nome" : "orc-negocio")?.focus();
      return;
    }
    const mensagem = montarMensagem("Olá! Quero uma demonstração do sistema da SIMCO.", {
      Nome: valor("nome"),
      Empresa: valor("empresa"),
      Negócio: valor("negocio"),
      Equipe: valor("porte"),
      Cidade: valor("cidade"),
      "O que preciso resolver": valor("mensagem"),
    });
    window.open(linkWhatsApp("vendas", mensagem), "_blank", "noopener");
  }

  const rotulo = `mb-1.5 block text-sm font-medium ${escuro ? "text-on-navy" : ""}`;
  const erroCls = `mt-1.5 text-sm ${escuro ? "text-[oklch(0.82_0.1_28)]" : "text-error"}`;

  return (
    <form onSubmit={enviar} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="orc-nome" className={rotulo}>
          Seu nome
        </label>
        <input
          id="orc-nome"
          name="nome"
          autoComplete="name"
          className="campo"
          aria-invalid={!!erros.nome}
          aria-describedby={erros.nome ? "orc-nome-erro" : undefined}
        />
        {erros.nome && (
          <p id="orc-nome-erro" className={erroCls}>
            {erros.nome}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="orc-empresa" className={rotulo}>
          Empresa <span className="font-normal opacity-70">(opcional)</span>
        </label>
        <input id="orc-empresa" name="empresa" autoComplete="organization" className="campo" />
      </div>
      <div>
        <label htmlFor="orc-negocio" className={rotulo}>
          Tipo de negócio
        </label>
        <select
          id="orc-negocio"
          name="negocio"
          defaultValue={tiposNegocio.includes(negocio) ? negocio : ""}
          className="campo"
          aria-invalid={!!erros.negocio}
          aria-describedby={erros.negocio ? "orc-negocio-erro" : undefined}
        >
          <option value="" disabled>
            Escolha uma opção
          </option>
          {tiposNegocio.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {erros.negocio && (
          <p id="orc-negocio-erro" className={erroCls}>
            {erros.negocio}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="orc-porte" className={rotulo}>
          Quantas pessoas usariam o sistema <span className="font-normal opacity-70">(opcional)</span>
        </label>
        <select id="orc-porte" name="porte" defaultValue="" className="campo">
          <option value="">Prefiro não dizer</option>
          {portes.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="orc-cidade" className={rotulo}>
          Cidade <span className="font-normal opacity-70">(opcional)</span>
        </label>
        <input id="orc-cidade" name="cidade" autoComplete="address-level2" className="campo" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="orc-mensagem" className={rotulo}>
          O que você precisa resolver <span className="font-normal opacity-70">(opcional)</span>
        </label>
        <textarea id="orc-mensagem" name="mensagem" rows={3} className="campo resize-y" />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-sm ${escuro ? "text-on-navy-muted" : "text-muted"}`}>
          Abrimos o WhatsApp de vendas com a mensagem pronta. Nada é gravado neste site.{" "}
          <Link href="/privacidade" className="link">
            Privacidade
          </Link>
        </p>
        <button type="submit" className="btn btn-primario shrink-0">
          <WhatsappLogo size={20} weight="bold" aria-hidden /> Pedir demonstração
        </button>
      </div>
    </form>
  );
}
