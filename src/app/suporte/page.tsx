import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import {
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  Monitor,
  Pulse,
  PlayCircle,
  ArrowRight,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import { BuscaSuporte } from "@/components/suporte/BuscaSuporte";
import { FormChamado } from "@/components/suporte/FormChamado";
import { StatusAtendimento } from "@/components/StatusAtendimento";
import { artigos, categorias, type Categoria } from "@/content/suporte/artigos";
import { rejeicoes } from "@/content/suporte/rejeicoes";
import { videos } from "@/content/suporte/videos";
import { empresa } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Central de suporte",
  description:
    "Respostas para as dúvidas mais comuns do sistema SIMCO, tabela de rejeições da SEFAZ, vídeos, acesso remoto e abertura de chamado pelo WhatsApp.",
};

const maisBuscadas = [539, 204, 302, 281, 778, 704];

export default function Suporte() {
  const ordemCategorias = Object.keys(categorias) as Categoria[];
  const codigos = rejeicoes.filter((r) => maisBuscadas.includes(r.codigo));

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: artigos.map((a) => ({
      "@type": "Question",
      name: a.titulo,
      acceptedAnswer: { "@type": "Answer", text: a.resumo },
    })),
  };

  return (
    <>
      <section className="border-b border-line bg-surface pb-12 pt-12 md:pb-16 md:pt-14">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <h1 className="text-[2.5rem] font-extrabold tracking-[-0.035em] sm:text-[3.4rem]">Como podemos ajudar?</h1>
            <p className="mt-4 max-w-xl text-lg text-ink/75">
              Busque pelo problema, pela mensagem que apareceu na tela ou pelo código da rejeição.
            </p>
            <div className="mt-8 max-w-2xl">
              <Suspense fallback={<div className="h-16 rounded-md border-2 border-ink bg-surface" />}>
                <BuscaSuporte />
              </Suspense>
            </div>
          </div>

          <div aria-label="Canais de atendimento" className="rounded-md border border-line bg-paper p-6">
            <StatusAtendimento />
            <p className="mt-1 text-sm text-muted">{empresa.horario}</p>
            <ul className="mt-5 grid gap-1">
              <li>
                <a
                  href={linkWhatsApp("suporte", "Olá! Sou cliente e preciso de suporte.")}
                  className="flex min-h-12 items-center gap-3 rounded-sm px-2 hover:bg-surface"
                >
                  <WhatsappLogo size={22} aria-hidden className="text-[#1f8f4e]" />
                  <span>
                    <span className="block font-medium">WhatsApp do suporte</span>
                    <span className="block text-sm text-muted">{empresa.whatsappSuporte.exibicao}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={empresa.telefone.href} className="flex min-h-12 items-center gap-3 rounded-sm px-2 hover:bg-surface">
                  <Phone size={22} aria-hidden className="text-navy" />
                  <span>
                    <span className="block font-medium">Telefone</span>
                    <span className="block text-sm text-muted">{empresa.telefone.exibicao}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${empresa.email}`} className="flex min-h-12 items-center gap-3 rounded-sm px-2 hover:bg-surface">
                  <EnvelopeSimple size={22} aria-hidden className="text-navy" />
                  <span>
                    <span className="block font-medium">E-mail</span>
                    <span className="block text-sm text-muted">{empresa.email}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Atalhos" className="border-b border-line">
        <ul className="wrap grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/suporte/acesso-remoto",
              Icone: Monitor,
              titulo: "Acesso remoto",
              texto: "Baixe o TeamViewer e libere seu computador para o analista",
            },
            {
              href: "/suporte/rejeicoes",
              Icone: Pulse,
              titulo: "Rejeições da SEFAZ",
              texto: `${rejeicoes.length} códigos explicados, com o que fazer`,
            },
            {
              href: "https://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx",
              Icone: ArrowSquareOut,
              titulo: "A SEFAZ está no ar?",
              texto: "Painel oficial de disponibilidade da NF-e",
            },
            {
              href: "/suporte/videos",
              Icone: PlayCircle,
              titulo: "Vídeos do sistema",
              texto: `${videos.length} tutoriais de cadastro, vendas e nota fiscal`,
            },
          ].map(({ href, Icone, titulo, texto }, i) => (
            <li
              key={href}
              className={`border-line ${i > 0 ? "border-t sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l" : ""} ${
                i >= 2 ? "sm:border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <Link href={href} className="group flex h-full gap-4 py-6 pr-4 sm:px-5 hover:bg-surface">
                <Icone size={26} aria-hidden className="shrink-0 text-navy" />
                <span>
                  <span className="block font-semibold group-hover:underline">{titulo}</span>
                  <span className="block text-sm text-muted">{texto}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="titulo-respostas" className="py-16 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <h2 id="titulo-respostas" className="text-[1.9rem] font-bold sm:text-[2.2rem]">
              Respostas por assunto
            </h2>
            <div className="mt-8 grid gap-10">
              {ordemCategorias.map((c) => {
                const lista = artigos.filter((a) => a.categoria === c);
                if (!lista.length) return null;
                return (
                  <div key={c}>
                    <h3 className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-2 text-lg font-bold">
                      {categorias[c].nome}
                      <span className="font-sans text-sm font-normal text-muted">{categorias[c].descricao}</span>
                    </h3>
                    <ul className="divide-y divide-line">
                      {lista.map((a) => (
                        <li key={a.slug}>
                          <Link href={`/suporte/${a.slug}`} className="group flex items-start justify-between gap-4 py-4">
                            <span>
                              <span className="block font-medium group-hover:text-navy group-hover:underline">{a.titulo}</span>
                              <span className="mt-0.5 block text-sm text-muted">{a.resumo}</span>
                            </span>
                            <ArrowRight size={18} aria-hidden className="mt-1 shrink-0 text-muted group-hover:text-ink" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div aria-labelledby="titulo-codigos" className="lg:sticky lg:top-36 lg:self-start">
            <div className="rounded-md border border-line bg-surface p-6">
              <h2 id="titulo-codigos" className="text-lg font-bold">
                Rejeições mais procuradas
              </h2>
              <ul className="mt-4 grid gap-1">
                {codigos.map((r) => (
                  <li key={r.codigo}>
                    <Link
                      href={`/suporte/rejeicoes#c${r.codigo}`}
                      className="grid grid-cols-[3.25rem_1fr] items-baseline gap-2 rounded-sm px-2 py-2 hover:bg-paper"
                    >
                      <span className="font-mono font-medium text-signal-ink">{r.codigo}</span>
                      <span className="text-sm">{r.descricao.replace(/^(Rejeição|Uso Denegado): /, "")}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/suporte/rejeicoes" className="link mt-4 inline-block text-sm font-medium text-navy">
                Ver todos os {rejeicoes.length} códigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="chamado" aria-labelledby="titulo-chamado" className="scroll-mt-28 border-t border-line bg-sunken py-16 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)]">
          <div>
            <h2 id="titulo-chamado" className="mt-3 text-[1.9rem] font-bold sm:text-[2.2rem]">
              Abra um chamado
            </h2>
            <p className="mt-4 text-ink/75">
              Preencha o essencial e o chamado chega organizado no WhatsApp do suporte. Assim o analista já começa sabendo onde
              olhar.
            </p>
            <p className="mt-4 text-sm text-muted">
              Fora do horário? Deixe a mensagem: ela é respondida no próximo dia útil a partir das 8h.
            </p>
          </div>
          <div className="rounded-md border border-line bg-surface p-6 sm:p-8">
            <FormChamado />
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq).replace(/</g, "\\u003c") }} />
    </>
  );
}
