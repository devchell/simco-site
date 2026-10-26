import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MagnifyingGlass,
  Monitor,
  Pulse,
  ChatCircleText,
  PlayCircle,
  CheckCircle,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { TituloSecao } from "@/components/TituloSecao";
import { StatusAtendimento } from "@/components/StatusAtendimento";
import { empresa } from "@/content/site";
import { segmentos } from "@/content/segmentos";
import { parceiros } from "@/content/parceiros";

const moeda = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function FaixaConfianca() {
  const fatos = [
    { valor: String(empresa.fundacao), rotulo: "ano de fundação da SIMCO" },
    { valor: `+${empresa.sistemasVendidos}`, rotulo: "sistemas vendidos no Brasil" },
    { valor: "4 canais", rotulo: "de suporte: WhatsApp, telefone, chat e acesso remoto" },
  ];
  return (
    <section aria-label="Números e parceiros" className="border-b border-line bg-white">
      <div className="wrap grid gap-8 py-9 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <dl className="grid gap-6 sm:grid-cols-3">
          {fatos.map((f) => (
            <div key={f.rotulo} className="flex flex-col">
              <dt className="order-2 text-[0.95rem] text-muted">{f.rotulo}</dt>
              <dd className="tabular order-1 text-[2rem] font-extrabold tracking-[-0.03em] text-brand-900">{f.valor}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 lg:justify-end">
          <p className="w-full text-sm font-semibold text-muted lg:w-auto">Parceiros</p>
          {parceiros.map((p) => (
            <a key={p.nome} href={p.site} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image src={p.logo} alt={p.nome} width={p.largura} height={p.altura} className="h-9 w-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListaChecada({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-7 grid gap-3">
      {itens.map((i) => (
        <li key={i} className="flex gap-3 text-[1.02rem] text-ink/85">
          <CheckCircle size={22} weight="fill" aria-hidden className="mt-0.5 shrink-0 text-action" />
          {i}
        </li>
      ))}
    </ul>
  );
}

function Moldura({ children }: { children: React.ReactNode }) {
  return (
    <figure className="rounded-[18px] bg-mist p-4 sm:p-7">
      <div className="overflow-hidden rounded-[12px] border border-line bg-white shadow-[var(--shadow-cartao)]">{children}</div>
      <figcaption className="mt-3 text-right text-[0.8rem] font-medium text-muted">Tela ilustrativa com dados de exemplo</figcaption>
    </figure>
  );
}

function FragmentoFiscal() {
  const docs = [
    { mod: "55", nome: "NF-e", detalhe: "Nota de venda para empresas", s: "Autorizada" },
    { mod: "65", nome: "NFC-e", detalhe: "Venda no balcão ao consumidor", s: "Autorizada" },
    { mod: "65", nome: "NFC-e offline", detalhe: "Internet caiu, a venda continua", s: "Contingência" },
    { mod: "58", nome: "MDF-e", detalhe: "Manifesto da carga transportada", s: "Autorizada" },
    { mod: "", nome: "SPED Fiscal", detalhe: "Arquivo do mês para o contador", s: "Gerado" },
  ];
  return (
    <Moldura>
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <p className="font-bold">Documentos fiscais</p>
        <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-ok">
          <span className="size-2 rounded-full bg-ok" aria-hidden /> SEFAZ em operação
        </span>
      </div>
      <ul className="divide-y divide-line">
        {docs.map((d) => (
          <li key={d.nome} className="grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 px-5 py-3.5">
            <span className="grid h-9 place-items-center rounded-[8px] bg-sunken text-[0.8rem] font-bold text-brand-800">
              {d.mod || "TXT"}
            </span>
            <span>
              <span className="block font-semibold">{d.nome}</span>
              <span className="block text-[0.85rem] text-muted">{d.detalhe}</span>
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-[0.75rem] font-semibold ${
                d.s === "Contingência" ? "bg-warn-soft text-warn" : "bg-ok-soft text-ok"
              }`}
            >
              {d.s}
            </span>
          </li>
        ))}
      </ul>
    </Moldura>
  );
}

function FragmentoCompras() {
  const itens = [
    { desc: "Filtro de óleo", est: 8, min: 20, media: 31, sugerido: 40 },
    { desc: "Pastilha de freio dianteira", est: 3, min: 6, media: 12, sugerido: 15 },
    { desc: "Lâmpada H4 12V", est: 22, min: 10, media: 9, sugerido: 0 },
  ];
  return (
    <Moldura>
      <div className="border-b border-line px-5 py-3.5">
        <p className="font-bold">Sugestão de compra</p>
        <p className="text-[0.85rem] text-muted">Baseada no estoque mínimo e nas vendas dos últimos 12 meses</p>
      </div>
      <table className="w-full text-left text-[0.9rem]">
        <thead className="text-[0.75rem] text-muted">
          <tr>
            <th className="px-5 py-2.5 font-semibold">Produto</th>
            <th className="px-2 py-2.5 text-right font-semibold">Estoque</th>
            <th className="hidden px-2 py-2.5 text-right font-semibold sm:table-cell">Venda/mês</th>
            <th className="px-5 py-2.5 text-right font-semibold">Comprar</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {itens.map((i) => (
            <tr key={i.desc}>
              <td className="px-5 py-3 font-medium">{i.desc}</td>
              <td className={`px-2 py-3 text-right font-semibold ${i.est < i.min ? "text-warn" : ""}`}>{i.est}</td>
              <td className="hidden px-2 py-3 text-right text-muted sm:table-cell">{i.media}</td>
              <td className="px-5 py-3 text-right font-bold">{i.sugerido || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-line bg-sunken px-5 py-3 text-[0.9rem]">
        <span className="text-muted">2 itens abaixo do mínimo</span>
        <span className="font-bold text-action">Gerar pedido ao fornecedor</span>
      </div>
    </Moldura>
  );
}

function FragmentoFinanceiro() {
  const boletos = [
    { cliente: "Auto Center Bela Vista", venc: "28/10", valor: 1840.5, s: "Lembrete enviado" },
    { cliente: "Oficina Irmãos Prado", venc: "30/10", valor: 4210.75, s: "Registrado no banco" },
    { cliente: "Comercial Nova Era", venc: "21/10", valor: 960, s: "Pago e conciliado" },
  ];
  return (
    <Moldura>
      <div className="grid grid-cols-2 divide-x divide-line border-b border-line">
        <div className="px-5 py-4">
          <p className="text-[0.8rem] font-semibold text-muted">A receber em outubro</p>
          <p className="tabular text-2xl font-extrabold">{moeda(48230.4)}</p>
        </div>
        <div className="px-5 py-4">
          <p className="text-[0.8rem] font-semibold text-muted">A pagar em outubro</p>
          <p className="tabular text-2xl font-extrabold">{moeda(29115)}</p>
        </div>
      </div>
      <ul className="divide-y divide-line text-[0.9rem]">
        {boletos.map((b) => (
          <li key={b.cliente} className="grid grid-cols-[1fr_auto] gap-x-4 px-5 py-3">
            <span className="font-medium">{b.cliente}</span>
            <span className="tabular text-right font-semibold">{moeda(b.valor)}</span>
            <span className="text-[0.82rem] text-muted">Boleto · vence {b.venc}</span>
            <span className={`text-right text-[0.82rem] font-semibold ${b.s.startsWith("Pago") ? "text-ok" : "text-action"}`}>
              {b.s}
            </span>
          </li>
        ))}
      </ul>
    </Moldura>
  );
}

export function Recursos() {
  const linhas = [
    {
      id: "fiscal",
      titulo: "Nota fiscal certa, sem retrabalho",
      texto:
        "A nota sai direto do pedido de venda, com os dados que já estão no sistema. As regras acompanham a legislação, e a SIMCO atualiza por você.",
      itens: [
        "NF-e, NFC-e, cupom SAT e MDF-e emitidos pelo ERP",
        "NFC-e com contingência offline: a venda não para se a internet cair",
        "XML e DANFE enviados por e-mail ao cliente e ao contador",
        "SPED Fiscal e GNRE gerados com o que já foi lançado",
      ],
      link: { href: "/modulos", rotulo: "Conhecer os módulos fiscais" },
      Fragmento: FragmentoFiscal,
    },
    {
      id: "estoque",
      titulo: "Estoque que avisa a hora de comprar",
      texto:
        "Entradas, saídas e inventário controlados, com sugestão de compra calculada pelo histórico de vendas. Você investe no que gira.",
      itens: [
        "Recebimento de mercadoria e controle de entradas e saídas",
        "Estoque mínimo e sugestão de compra pelas vendas dos últimos 12 meses",
        "Busca de peças por aplicação, modelo e motor nas autopeças",
      ],
      link: { href: "/solucoes/autopecas", rotulo: "Ver o sistema para autopeças" },
      Fragmento: FragmentoCompras,
    },
    {
      id: "financeiro",
      titulo: "Financeiro que cobra sozinho",
      texto:
        "Contas a pagar e a receber, fluxo de caixa e boletos integrados ao banco. O sistema lembra o cliente do vencimento com o boleto anexado.",
      itens: [
        "Boleto gerado na empresa e arquivo enviado direto ao banco",
        "Aviso automático ao cliente com vencimento, valor e boleto",
        "Extrato e fluxo de caixa sintético e detalhado, prontos para o contador",
      ],
      link: { href: "/modulos#cobranca-bancaria", rotulo: "Ver cobrança bancária" },
      Fragmento: FragmentoFinanceiro,
    },
  ];
  return (
    <section aria-labelledby="titulo-recursos" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <TituloSecao
          id="titulo-recursos"
          titulo="Tudo o que a sua empresa precisa, num sistema só"
          texto="Vendas, estoque, financeiro e emissão fiscal conversam entre si. Você lança uma vez e a informação aparece onde precisa."
        />
        <div className="mt-16 grid gap-20 md:gap-28">
          {linhas.map((l, i) => (
            <article
              key={l.id}
              aria-labelledby={`recurso-${l.id}`}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 id={`recurso-${l.id}`} className="text-[1.75rem] font-extrabold tracking-[-0.025em] sm:text-[2.15rem]">
                  {l.titulo}
                </h3>
                <p className="mt-4 max-w-xl text-lg text-muted">{l.texto}</p>
                <ListaChecada itens={l.itens} />
                <Link href={l.link.href} className="group mt-8 inline-flex items-center gap-2 font-bold text-action">
                  {l.link.rotulo}
                  <ArrowRight size={18} weight="bold" aria-hidden className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <l.Fragmento />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Segmentos() {
  return (
    <section aria-labelledby="titulo-segmentos" className="border-y border-line bg-sunken py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <TituloSecao
            id="titulo-segmentos"
            titulo="Pronto para o seu tipo de negócio"
            texto="Cada segmento tem telas, buscas e relatórios próprios. Você não adapta a rotina ao sistema."
          />
          <Link href="/solucoes" className="btn btn-secundario shrink-0">
            Ver todas as soluções
          </Link>
        </div>
        <ul className="mt-14 grid overflow-hidden rounded-[18px] border border-line bg-white md:grid-cols-2 xl:grid-cols-4">
          {segmentos.map((s, i) => (
            <li
              key={s.slug}
              className={`border-line ${i > 0 ? "border-t md:border-t-0" : ""} ${i % 2 === 1 ? "md:border-l" : ""} ${
                i >= 2 ? "md:border-t xl:border-t-0" : ""
              } ${i === 2 ? "xl:border-l" : ""}`}
            >
              <Link href={`/solucoes/${s.slug}`} className="group flex h-full flex-col p-7 transition-colors hover:bg-sky-soft/50 sm:p-8">
                <h3 className="text-[1.45rem] font-extrabold tracking-[-0.02em] group-hover:text-action">{s.nome}</h3>
                <p className="mt-3 text-muted">{s.resumo}</p>
                <ul className="mt-6 grid gap-2.5">
                  {s.blocos[0].itens.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.95rem]">
                      <Check size={18} weight="bold" aria-hidden className="mt-0.5 shrink-0 text-action" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-8 font-bold text-action">
                  {s.chamada.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="whitespace-nowrap">
                    {s.chamada.split(" ").at(-1)}{" "}
                    <ArrowRight
                      size={18}
                      weight="bold"
                      aria-hidden
                      className="inline align-[-3px] transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ParaOContador() {
  const itens = [
    { titulo: "XML e DANFE no e-mail", texto: "Cada nota emitida chega ao contador sem ninguém precisar exportar." },
    { titulo: "SPED Fiscal do sistema", texto: "Blocos 0, C, D, E, G, H, K, 1 e 9 gerados com o que foi lançado." },
    { titulo: "Atualização da legislação", texto: "Tabelas e regras fiscais acompanham as mudanças, sem custo de desenvolvimento." },
  ];
  return (
    <section aria-labelledby="titulo-contador" className="bg-white py-20 md:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
        <div>
          <TituloSecao
            id="titulo-contador"
            titulo="Seu contador recebe tudo em ordem"
            texto="Menos risco fiscal para a empresa e menos retrabalho no escritório de contabilidade."
          />
          <Link href="/contato#orcamento" className="btn btn-secundario mt-8">
            Sou contador e quero conhecer
          </Link>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-3">
          {itens.map((i) => (
            <div key={i.titulo} className="bg-white p-7">
              <dt className="text-lg font-bold">{i.titulo}</dt>
              <dd className="mt-2 text-muted">{i.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Implantacao() {
  const passos = [
    { titulo: "Conversa", texto: "Entendemos a rotina da empresa: o que vende, como fatura e o que hoje dá trabalho." },
    { titulo: "Instalação", texto: "Sistema instalado no seu computador ou na nuvem, com a parte fiscal configurada." },
    { titulo: "Treinamento", texto: "Os analistas de suporte treinam a sua equipe considerando o seu negócio." },
    { titulo: "Suporte", texto: "Depois de começar, você fala com a mesma equipe por WhatsApp, telefone, chat ou acesso remoto." },
  ];
  return (
    <section aria-labelledby="titulo-implantacao" className="border-t border-line bg-sunken py-20 md:py-24">
      <div className="wrap">
        <TituloSecao
          id="titulo-implantacao"
          titulo="Do primeiro contato ao sistema rodando"
          texto="A implantação é acompanhada de perto, em quatro etapas."
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {passos.map((p, i) => (
            <li key={p.titulo} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-900 text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                {i < passos.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-line-strong xl:block" />}
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.titulo}</h3>
              <p className="mt-2 max-w-sm text-muted">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function DestaqueSuporte() {
  const atalhos = [
    { href: "/suporte/rejeicoes", rotulo: "Rejeições da SEFAZ", texto: "O que cada código significa e o que fazer", Icone: Pulse },
    { href: "/suporte/acesso-remoto", rotulo: "Acesso remoto", texto: "Libere seu computador para o analista", Icone: Monitor },
    { href: "/suporte/videos", rotulo: "Vídeos do sistema", texto: "25 tutoriais de cadastro, vendas e NF-e", Icone: PlayCircle },
    { href: "/suporte#chamado", rotulo: "Abrir chamado", texto: "Direto no WhatsApp do suporte", Icone: ChatCircleText },
  ];
  return (
    <section aria-labelledby="titulo-suporte" className="bg-white py-20 md:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center">
        <div>
          <TituloSecao
            id="titulo-suporte"
            titulo="Já é cliente? O suporte está a um clique"
            texto="Respostas para as dúvidas mais comuns, a tabela de rejeições da SEFAZ e os vídeos do sistema, além do atendimento humano."
          />
          <div className="mt-6">
            <StatusAtendimento />
          </div>
          <form action="/suporte" className="mt-7 flex max-w-xl gap-2" role="search">
            <label htmlFor="busca-home" className="sr-only">
              Buscar na central de suporte
            </label>
            <input id="busca-home" name="q" placeholder="Ex.: nota denegada, 539, acesso remoto" className="campo" />
            <button type="submit" className="btn btn-primario shrink-0 !px-4" aria-label="Buscar">
              <MagnifyingGlass size={20} weight="bold" aria-hidden />
            </button>
          </form>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {atalhos.map(({ href, rotulo, texto, Icone }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full items-start gap-4 rounded-[14px] border border-line p-6 transition hover:border-action hover:shadow-[var(--shadow-cartao)]"
              >
                <Icone size={28} aria-hidden className="shrink-0 text-action" />
                <span>
                  <span className="block text-lg font-bold">{rotulo}</span>
                  <span className="mt-1 block text-[0.95rem] text-muted">{texto}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
