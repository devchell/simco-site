import type { Metadata } from "next";
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { TituloSecao } from "@/components/TituloSecao";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { linkWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Menu Simco: cardápio digital e gestor de pedidos",
  description:
    "Cardápio digital sem aplicativo e sem comissão por venda, com pedidos pelo WhatsApp e gestor de pedidos para bares, restaurantes e lojas. Mensalidade fixa.",
};

const motivos = [
  {
    titulo: "Sem aplicativo",
    texto: "O cliente abre o cardápio por um link ou por um QR Code. Não precisa baixar nada.",
  },
  {
    titulo: "Sem comissão",
    texto: "Você paga uma mensalidade fixa. Não há cobrança de comissão sobre cada venda.",
  },
  {
    titulo: "Pedido no WhatsApp",
    texto: "O sistema é integrado ao WhatsApp, e o pedido chega com todas as informações.",
  },
  {
    titulo: "A sua marca em primeiro plano",
    texto: "O cardápio mostra só o seu negócio, sem concorrentes disputando a atenção do cliente.",
  },
  {
    titulo: "Cadastro de clientes",
    texto: "Você acessa os cadastros e pode criar campanhas para fidelizar o seu público.",
  },
];

const passos = [
  {
    titulo: "Monte o cardápio",
    itens: ["Cadastre produtos sem limite, com fotos e descrições.", "Organize por categorias.", "Crie promoções."],
  },
  {
    titulo: "Personalize",
    itens: [
      "Aplique as cores e o logotipo da sua empresa.",
      "Escolha as formas de pagamento.",
      "Defina as taxas e as regiões de entrega.",
    ],
  },
  {
    titulo: "Compartilhe",
    itens: [
      "Envie o link por mensagem, redes sociais ou pelo seu site.",
      "Coloque QR Codes nas mesas, nas embalagens e em materiais promocionais.",
    ],
  },
];

const recursosGestor = [
  "Acompanhamento dos pedidos em tempo real",
  "Organização das entregas",
  "Impressão de comandas",
  "API para integração com outros sistemas",
];

export default function PaginaMenuSimco() {
  const whats = linkWhatsApp("vendas", "Olá! Quero conhecer o Menu Simco.");
  return (
    <>
      <section className="border-b border-line pt-14 pb-12">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="rotulo text-signal-ink">Menu Simco</p>
            <h1 className="mt-3 text-[2.4rem] font-extrabold sm:text-[3rem]">
              Cardápio digital com gestor de pedidos, sem app e sem comissão
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink/75">
              O Menu Simco atende delivery e atendimento no local em bares, restaurantes e lojas. O cliente faz o
              pedido pelo link ou QR Code, e você controla vendas e clientes por conta própria.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whats} target="_blank" rel="noopener noreferrer" className="btn btn-primario">
                <WhatsappLogo size={20} weight="fill" aria-hidden />
                Falar com vendas no WhatsApp
              </a>
              <a href="#como-funciona" className="btn btn-secundario">
                Ver como funciona
              </a>
            </div>
          </div>
          <Image
            src="/img/menu-simco/1.png"
            alt="Celular inclinado mostrando a tela de acompanhamento de um pedido, com as etapas Enviado ao restaurante, Pedido em preparo, Saiu para entrega e Concluído, e a lista de itens com valores"
            width={959}
            height={1118}
            sizes="(min-width: 1024px) 416px, 70vw"
            priority
            className="mx-auto h-auto w-full max-w-[26rem]"
          />
        </div>
      </section>

      <section aria-labelledby="titulo-motivos" className="py-16 md:py-24">
        <div className="wrap">
          <TituloSecao id="titulo-motivos" rotulo="Por que usar" titulo="Venda direto ao cliente, sem intermediário" />
          <ul className="mt-12 border-t-2 border-ink">
            {motivos.map((m) => (
              <li
                key={m.titulo}
                className="grid gap-x-10 gap-y-1 border-b border-line py-6 md:grid-cols-[18rem_minmax(0,1fr)]"
              >
                <h3 className="text-xl font-bold">{m.titulo}</h3>
                <p className="text-ink/75">{m.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="como-funciona"
        aria-labelledby="titulo-como"
        className="scroll-mt-28 border-y border-line bg-surface py-16 md:py-24"
      >
        <div className="wrap">
          <TituloSecao id="titulo-como" rotulo="Como funciona" titulo="Três passos até o primeiro pedido" />
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {passos.map((p, i) => (
              <li key={p.titulo} className="border-t-2 border-ink pt-5">
                <p className="font-mono text-sm text-signal-ink">Passo {i + 1}</p>
                <h3 className="mt-1 text-2xl font-bold">{p.titulo}</h3>
                <ul className="mt-4 grid gap-2 text-ink/75">
                  {p.itens.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="mt-14 grid items-end gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Image
              src="/img/menu-simco/2.png"
              alt="Notebook exibindo o cardápio digital de uma pizzaria de teste, com logotipo, busca de produtos, categorias como Pizzas e Bebidas, itens em destaque com preços e botão Continuar"
              width={1377}
              height={911}
              sizes="(min-width: 1152px) 640px, (min-width: 768px) 55vw, 100vw"
              className="h-auto w-full"
            />
            <Image
              src="/img/menu-simco/3.png"
              alt="Mão segurando um celular com o cardápio digital aberto na categoria Bebidas, com cervejas, suco natural, água mineral e drinks"
              width={1134}
              height={1134}
              sizes="(min-width: 768px) 30vw, 100vw"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-pedidos" className="py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div>
            <TituloSecao id="titulo-pedidos" rotulo="Receba os pedidos" titulo="Duas formas de receber" />
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="border-t-2 border-ink pt-5">
                <h3 className="text-2xl font-bold">Pelo WhatsApp</h3>
                <p className="mt-3 text-ink/75">
                  O cliente faz o pedido no cardápio digital e você recebe todas as informações automaticamente no
                  WhatsApp do seu negócio.
                </p>
              </div>
              <div className="border-t-2 border-ink pt-5">
                <h3 className="text-2xl font-bold">Pelo gestor de pedidos</h3>
                <p className="mt-3 text-ink/75">Controle todo o fluxo de vendas em um só lugar:</p>
                <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-ink/75 marker:text-signal-ink">
                  {recursosGestor.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 max-w-2xl text-ink/75">
              Implantação rápida, mensalidade fixa e sem cardápio impresso: você reduz custos e fica com os dados dos
              seus clientes.
            </p>
          </div>
          <Image
            src="/img/menu-simco/4.png"
            alt="Celular mostrando a tela de finalização do pedido, com opções de entrar por Facebook, Google, LinkedIn, X, Apple ID ou e-mail e caixas para aceitar os termos de uso"
            width={879}
            height={1632}
            sizes="(min-width: 1024px) 256px, 60vw"
            className="mx-auto h-auto w-full max-w-[16rem]"
          />
        </div>
      </section>

      <ChamadaOrcamento titulo="Leve o Menu Simco para o seu restaurante" negocio="Restaurante ou lanchonete (Menu Simco)" />
    </>
  );
}
