"use client";

import { useState } from "react";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import { linkWhatsApp, montarMensagem } from "@/lib/whatsapp";

const areas = [
  "Emissão de NF-e ou NFC-e",
  "Certificado digital",
  "Cadastros",
  "Vendas e pedidos",
  "Estoque",
  "Financeiro e boletos",
  "Instalação ou acesso remoto",
  "Outro assunto",
];

const urgencias = [
  { valor: "Parado: não consigo vender ou emitir nota", rotulo: "Estou parado", detalhe: "Não consigo vender ou emitir nota" },
  { valor: "Atrapalha, mas consigo trabalhar", rotulo: "Atrapalha", detalhe: "Consigo trabalhar, com dificuldade" },
  { valor: "Dúvida", rotulo: "É uma dúvida", detalhe: "Quero aprender a fazer algo" },
];

type Erros = Partial<Record<"nome" | "area" | "descricao", string>>;

/** Abre o WhatsApp do suporte com o chamado já organizado. */
export function FormChamado() {
  const [erros, setErros] = useState<Erros>({});

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const valor = (k: string) => String(dados.get(k) ?? "").trim();
    const novos: Erros = {};
    if (!valor("nome")) novos.nome = "Informe seu nome.";
    if (!valor("area")) novos.area = "Escolha a área do problema.";
    if (valor("descricao").length < 10) novos.descricao = "Conte em uma ou duas frases o que está acontecendo.";
    setErros(novos);
    const primeiro = (["nome", "area", "descricao"] as const).find((k) => novos[k]);
    if (primeiro) {
      document.getElementById(`chamado-${primeiro}`)?.focus();
      return;
    }
    const mensagem = montarMensagem("Olá! Preciso de suporte.", {
      Nome: valor("nome"),
      "Empresa ou CNPJ": valor("empresa"),
      Área: valor("area"),
      Urgência: valor("urgencia"),
      "Código de erro": valor("codigo"),
      "O que acontece": valor("descricao"),
    });
    window.open(linkWhatsApp("suporte", mensagem), "_blank", "noopener");
  }

  const erro = (k: keyof Erros) =>
    erros[k] ? (
      <p id={`chamado-${k}-erro`} className="mt-1.5 text-sm text-error">
        {erros[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={enviar} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="chamado-nome" className="mb-1.5 block text-sm font-medium">
          Seu nome
        </label>
        <input
          id="chamado-nome"
          name="nome"
          autoComplete="name"
          className="campo"
          aria-invalid={!!erros.nome}
          aria-describedby={erros.nome ? "chamado-nome-erro" : undefined}
        />
        {erro("nome")}
      </div>
      <div>
        <label htmlFor="chamado-empresa" className="mb-1.5 block text-sm font-medium">
          Empresa ou CNPJ <span className="font-normal text-muted">(ajuda a achar seu cadastro)</span>
        </label>
        <input id="chamado-empresa" name="empresa" autoComplete="organization" className="campo" />
      </div>
      <div>
        <label htmlFor="chamado-area" className="mb-1.5 block text-sm font-medium">
          Área do problema
        </label>
        <select
          id="chamado-area"
          name="area"
          defaultValue=""
          className="campo"
          aria-invalid={!!erros.area}
          aria-describedby={erros.area ? "chamado-area-erro" : undefined}
        >
          <option value="" disabled>
            Escolha uma opção
          </option>
          {areas.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
        {erro("area")}
      </div>
      <div>
        <label htmlFor="chamado-codigo" className="mb-1.5 block text-sm font-medium">
          Código de erro <span className="font-normal text-muted">(se aparecer)</span>
        </label>
        <input id="chamado-codigo" name="codigo" inputMode="numeric" placeholder="Ex.: 539" className="campo font-mono" />
      </div>
      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-sm font-medium">Quanto isso está atrapalhando?</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {urgencias.map((u, i) => (
            <label
              key={u.valor}
              className="flex cursor-pointer gap-3 rounded-sm border-[1.5px] border-line-strong bg-surface p-3 has-[:checked]:border-navy has-[:checked]:bg-navy/5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-navy"
            >
              <input type="radio" name="urgencia" value={u.valor} defaultChecked={i === 1} className="mt-1 accent-[var(--color-navy)]" />
              <span>
                <span className="block font-medium">{u.rotulo}</span>
                <span className="block text-sm text-muted">{u.detalhe}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <label htmlFor="chamado-descricao" className="mb-1.5 block text-sm font-medium">
          O que está acontecendo?
        </label>
        <textarea
          id="chamado-descricao"
          name="descricao"
          rows={4}
          placeholder="Ex.: ao transmitir a NFC-e aparece a mensagem de rejeição e o cupom não imprime."
          className="campo resize-y"
          aria-invalid={!!erros.descricao}
          aria-describedby={erros.descricao ? "chamado-descricao-erro" : undefined}
        />
        {erro("descricao")}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          O chamado abre no WhatsApp do suporte com tudo preenchido. Anexe um print da tela por lá, se puder.{" "}
          <Link href="/privacidade" className="link">
            Privacidade
          </Link>
        </p>
        <button type="submit" className="btn btn-primario shrink-0">
          <WhatsappLogo size={20} weight="bold" aria-hidden /> Enviar para o suporte
        </button>
      </div>
    </form>
  );
}
