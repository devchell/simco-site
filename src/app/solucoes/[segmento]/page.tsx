import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { buscarSegmento, segmentos } from "@/content/segmentos";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { TelaAutopecas, TelaCilindros, TelaComercio, TelaOficina } from "@/components/home/TelasDoSistema";
import { linkWhatsApp } from "@/lib/whatsapp";

const telas: Record<string, () => React.ReactElement> = {
  autopecas: TelaAutopecas,
  oficinas: TelaOficina,
  comercio: TelaComercio,
  "controle-de-equipamentos": TelaCilindros,
};

const opcaoFormulario: Record<string, string> = {
  autopecas: "Autopeças",
  oficinas: "Oficina mecânica",
  comercio: "Comércio",
  "controle-de-equipamentos": "Controle de cilindros ou equipamentos",
};

type Props = { params: Promise<{ segmento: string }> };

export function generateStaticParams() {
  return segmentos.map((s) => ({ segmento: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = buscarSegmento((await params).segmento);
  if (!s) return {};
  return { title: `ERP para ${s.nome.toLowerCase()}`, description: s.resumo };
}

export default async function PaginaSegmento({ params }: Props) {
  const s = buscarSegmento((await params).segmento);
  if (!s) notFound();
  const Tela = telas[s.slug];
  const outros = segmentos.filter((o) => o.slug !== s.slug);

  return (
    <>
      <section className="border-b border-line">
        <div className="wrap grid gap-12 pb-14 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:pb-20 lg:pt-16">
          <div>
            <nav aria-label="Você está em" className="text-sm text-muted">
              <Link href="/solucoes" className="hover:text-ink hover:underline">
                Soluções
              </Link>{" "}
              / <span className="text-ink">{s.nome}</span>
            </nav>
            <h1 className="mt-5 text-[2.3rem] font-extrabold sm:text-[2.9rem]">{s.titulo}</h1>
            <p className="mt-5 max-w-xl text-lg text-ink/75">{s.resumo}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#orcamento" className="btn btn-primario">
                Pedir demonstração
              </Link>
              <a
                href={linkWhatsApp("vendas", `Olá! Tenho uma empresa de ${s.nome.toLowerCase()} e quero conhecer o sistema.`)}
                className="btn btn-secundario"
              >
                Falar com vendas
              </a>
            </div>
          </div>
          <div className="min-w-0">
            <Tela />
            <p className="mt-3 text-right text-xs text-muted">Tela ilustrativa com dados de exemplo</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-recursos" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="titulo-recursos" className="text-[2rem] font-bold sm:text-[2.4rem]">
            O que o sistema faz no dia a dia
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-3">
            {s.blocos.map((b) => (
              <div key={b.titulo} className="border-t-2 border-ink pt-5">
                <h3 className="text-xl font-bold">{b.titulo}</h3>
                <ul className="mt-5 grid gap-3">
                  {b.itens.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.98rem] text-ink/85">
                      <Check size={18} weight="bold" aria-hidden className="mt-1 shrink-0 text-ok" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {s.observacao && (
            <p className="mt-14 max-w-3xl border-l-4 border-signal bg-surface px-5 py-4 text-ink/85">{s.observacao}</p>
          )}
        </div>
      </section>

      <section aria-labelledby="titulo-fiscal" className="border-y border-line bg-sunken py-14">
        <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 id="titulo-fiscal" className="text-2xl font-bold">
              Emissão fiscal incluída
            </h2>
            <p className="mt-3 text-ink/75">
              NF-e, NFC-e com contingência offline, cupom SAT, SPED, GNRE e boleto bancário funcionam junto com o sistema, sem
              programa à parte.
            </p>
          </div>
          <Link href="/modulos" className="btn btn-secundario shrink-0">
            Ver módulos fiscais
          </Link>
        </div>
      </section>

      <section aria-labelledby="titulo-outros" className="py-14">
        <div className="wrap">
          <h2 id="titulo-outros" className="rotulo text-muted">
            Outros segmentos
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {outros.map((o) => (
              <li key={o.slug}>
                <Link href={`/solucoes/${o.slug}`} className="btn btn-secundario !min-h-11 !text-[0.95rem]">
                  {o.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaOrcamento titulo={`Veja o sistema para ${s.nome.toLowerCase()} funcionando`} negocio={opcaoFormulario[s.slug]} />
    </>
  );
}
