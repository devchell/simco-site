import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MagnifyingGlass, Monitor, Pulse, ChatCircleText, PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { TituloSecao } from "@/components/TituloSecao";
import { StatusAtendimento } from "@/components/StatusAtendimento";
import { empresa, anosDeMercado } from "@/content/site";
import { segmentos } from "@/content/segmentos";
import { modulos } from "@/content/modulos";
import { parceiros } from "@/content/parceiros";

export function FaixaFatos() {
  const fatos = [
    { valor: String(empresa.fundacao), rotulo: `No mercado há ${anosDeMercado} anos` },
    { valor: `+${empresa.sistemasVendidos}`, rotulo: "Sistemas vendidos no Brasil" },
    { valor: "4", rotulo: "Documentos fiscais: NF-e, NFC-e, SAT e MDF-e" },
    { valor: "4 canais", rotulo: "Suporte por WhatsApp, telefone, chat e acesso remoto" },
  ];
  return (
    <section aria-label="A SIMCO em números" className="border-b border-line bg-surface">
      <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
        {fatos.map((f, i) => (
          <div
            key={f.rotulo}
            className={`flex flex-col gap-1 py-7 pr-4 ${i % 2 === 1 ? "pl-5 border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === 2 ? "lg:pl-5 lg:border-l" : ""}`}
          >
            <dt className="order-2 text-sm text-muted">{f.rotulo}</dt>
            <dd className="order-1 font-display text-3xl font-bold tabular-nums [font-stretch:118%]">{f.valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ListaSegmentos() {
  return (
    <section aria-labelledby="titulo-segmentos" className="py-20 md:py-28">
      <div className="wrap">
        <TituloSecao
          id="titulo-segmentos"
          rotulo="Para quem é"
          titulo="Um sistema que já chega sabendo como o seu negócio funciona"
          texto="Cada segmento tem telas, buscas e relatórios próprios. Você não precisa adaptar a sua rotina ao sistema."
        />
        <ul className="mt-12 border-t-2 border-ink">
          {segmentos.map((s) => (
            <li key={s.slug} className="border-b border-line">
              <Link
                href={`/solucoes/${s.slug}`}
                className="group grid gap-x-10 gap-y-3 py-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)_auto] md:items-start"
              >
                <h3 className="text-2xl font-bold group-hover:text-navy">{s.nome}</h3>
                <div>
                  <p className="text-ink/75">{s.resumo}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Termos do dia a dia">
                    {s.termos.map((t) => (
                      <li key={t} className="rounded-sm border border-line bg-surface px-2 py-1 font-mono text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-navy md:pt-1">
                  {s.chamada}
                  <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FichaModulos() {
  const destaque = modulos.filter((m) => ["nfe", "nfce", "sat", "mdfe", "sped", "gnre", "cobranca-bancaria", "tef"].includes(m.id));
  return (
    <section aria-labelledby="titulo-modulos" className="border-y border-line bg-sunken py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <TituloSecao
            id="titulo-modulos"
            rotulo="Ficha técnica fiscal"
            titulo="A nota sai certa e o Fisco fica em dia"
            texto="Os módulos fiscais acompanham as regras da SEFAZ e são atualizados pela SIMCO. Você vende; o sistema cuida do formato."
          />
          <Link href="/modulos" className="btn btn-secundario mt-8">
            Ver todos os módulos
          </Link>
        </div>
        <dl className="grid overflow-hidden rounded-md border border-line-strong bg-surface sm:grid-cols-2">
          {destaque.map((m) => (
            <div key={m.id} className="border-b border-line p-5 sm:[&:nth-child(odd)]:border-r">
              <dt className="flex items-baseline justify-between gap-3">
                <span className="font-display text-xl font-bold [font-stretch:118%]">{m.sigla}</span>
                {m.modelo && <span className="font-mono text-xs text-muted">modelo {m.modelo}</span>}
              </dt>
              <dd className="mt-2 text-[0.95rem] text-ink/75">{m.resumo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FaixaMenuSimco() {
  const vantagens = [
    "Cardápio por link ou QR Code, sem o cliente baixar aplicativo",
    "Pedido chega pronto no WhatsApp da casa",
    "Mensalidade fixa, sem comissão por venda",
    "Os dados dos clientes ficam com você, para campanhas e fidelização",
  ];
  return (
    <section aria-labelledby="titulo-menu" className="bg-navy-deep py-20 text-on-navy md:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <div>
          <TituloSecao
            escuro
            id="titulo-menu"
            rotulo="Menu Simco · bares, restaurantes e lojas"
            titulo="Delivery sem pagar comissão para aplicativo"
            texto="Cardápio digital com gestor de pedidos, para delivery e atendimento na mesa."
          />
          <ul className="mt-8 grid gap-3">
            {vantagens.map((v) => (
              <li key={v} className="flex gap-3 border-t border-white/10 pt-3">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-signal" />
                {v}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/menu-simco" className="btn btn-primario">
              Conhecer o Menu Simco
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/img/menu-simco/1.png"
            alt="Cardápio digital do Menu Simco aberto no celular"
            width={959}
            height={1118}
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

export function Implantacao() {
  const passos = [
    { titulo: "Conversa", texto: "Entendemos a rotina da sua empresa: o que vende, como fatura e o que hoje dá trabalho." },
    { titulo: "Instalação", texto: "Instalamos o sistema no seu computador ou na nuvem e deixamos a parte fiscal configurada." },
    {
      titulo: "Treinamento",
      texto: "Os analistas de suporte treinam a sua equipe considerando as características do seu negócio.",
    },
    { titulo: "Suporte", texto: "Depois de começar, você fala com a mesma equipe por WhatsApp, telefone, chat ou acesso remoto." },
  ];
  return (
    <section aria-labelledby="titulo-implantacao" className="py-20 md:py-28">
      <div className="wrap">
        <TituloSecao
          id="titulo-implantacao"
          rotulo="Como começa"
          titulo="Do primeiro contato ao sistema rodando"
          texto="Trocar de sistema assusta. Por isso a implantação é acompanhada de perto, em quatro etapas."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <li key={p.titulo} className="flex flex-col gap-3 bg-surface p-6">
              <span className="font-mono text-sm text-signal-ink">Etapa {i + 1}</span>
              <h3 className="text-xl font-bold">{p.titulo}</h3>
              <p className="text-[0.95rem] text-ink/75">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function DestaqueSuporte() {
  const atalhos = [
    { href: "/suporte/rejeicoes", rotulo: "Rejeições da SEFAZ", texto: "O que cada código significa", Icone: Pulse },
    { href: "/suporte/acesso-remoto", rotulo: "Acesso remoto", texto: "Libere o computador para o analista", Icone: Monitor },
    { href: "/suporte/videos", rotulo: "Vídeos", texto: "Passo a passo do sistema", Icone: PlayCircle },
    { href: "/suporte#chamado", rotulo: "Abrir chamado", texto: "Direto no WhatsApp do suporte", Icone: ChatCircleText },
  ];
  return (
    <section aria-labelledby="titulo-suporte" className="border-t border-line bg-surface py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
        <div>
          <TituloSecao
            id="titulo-suporte"
            rotulo="Já é cliente?"
            titulo="Resolva a maior parte das dúvidas sem esperar ninguém"
            texto="A central de suporte tem respostas para as dúvidas mais comuns, a tabela de rejeições da SEFAZ e vídeos do sistema."
          />
          <div className="mt-6">
            <StatusAtendimento />
          </div>
          <form action="/suporte" className="mt-8 flex max-w-lg gap-2" role="search">
            <label htmlFor="busca-home" className="sr-only">
              Buscar na central de suporte
            </label>
            <input id="busca-home" name="q" placeholder="Ex.: nota denegada, 539, acesso remoto" className="campo" />
            <button type="submit" className="btn btn-secundario shrink-0 !px-4" aria-label="Buscar">
              <MagnifyingGlass size={20} aria-hidden />
            </button>
          </form>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {atalhos.map(({ href, rotulo, texto, Icone }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full gap-4 rounded-md border border-line p-5 transition-colors hover:border-ink"
              >
                <Icone size={26} aria-hidden className="shrink-0 text-navy" />
                <span>
                  <span className="block font-semibold">{rotulo}</span>
                  <span className="block text-sm text-muted">{texto}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Parceiros() {
  return (
    <section aria-labelledby="titulo-parceiros" className="border-t border-line py-16">
      <div className="wrap grid gap-8 md:grid-cols-[minmax(0,16rem)_1fr] md:items-center">
        <div>
          <p className="rotulo text-signal-ink">Parceiros</p>
          <h2 id="titulo-parceiros" className="mt-2 text-xl font-bold">
            Equipamentos e serviços compatíveis
          </h2>
        </div>
        <ul className="grid grid-cols-3 items-center gap-6 sm:gap-10">
          {parceiros.map((p) => (
            <li key={p.nome} className="flex justify-center">
              <a href={p.site} className="opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
                <Image src={p.logo} alt={p.nome} width={p.largura} height={p.altura} className="h-10 w-auto sm:h-12" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
